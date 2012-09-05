var is     = require('../is.js'),
	vows   = require('vows'),
	assert = require('assert'),

	suite  = {},

	// load the test objects and map
	test_objects = require('./objects'),
	test_map     = require('./map'),
	test_inside  = require('./inside');

// turn the test_map into a valid vows batch
for(var func in test_map) {
	suite[func] = {};
	for (var testItem in test_objects) {
		(function(fn, item) {
			var should_pass = (typeof test_map[fn].pass === 'function' ?
							   test_map[fn].pass(item, test_objects[item]) :
							   test_map[fn].pass.indexOf(item) > -1
							  );

			suite[fn][item + ' ' + (should_pass ? 'is' : 'is not') + ' a(n) ' + test_map[fn].name] = function() {
				assert.equal( is[fn](test_objects[item]), should_pass );
			};
		})(func, testItem);
	}
}

suite.inside = {};
for(var testName in test_inside) {
	(function(name) {
		suite.inside[name] = function() {
			assert.equal(test_inside[name].actual, test_inside[name].expected);
		};
	})(testName);
}

vows.describe('is').addBatch(suite).export(module);
