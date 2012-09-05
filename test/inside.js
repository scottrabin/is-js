// Independent tests for is.inside specifically
;(function(root, factory) {
	if (typeof exports === 'object') {
		// Node.js
		module.exports = factory(require('../is.js'), require('./objects'));
	} else {
		root.is_inside = factory(root.is, root.TEST_OBJECTS);
	}
}(this, function(is, TEST_OBJECTS) {

	return {
		"Elements of an array are in the array" : {
			actual   : is.inside(TEST_OBJECTS.ARRAY_LITERAL_NONEMPTY, 1),
			expected : true
		},
		"Elements not in an array are not in the array" : {
			actual   : is.inside(TEST_OBJECTS.ARRAY_LITERAL_NONEMPTY, 0),
			expected : false
		},
		"The value of object properties are in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_USER_DEFINED, 'propValue'),
			expected : true
		},
		"Object property names are not in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_USER_DEFINED, 'aProperty'),
			expected : false,
		},
		"Object prototype properties are not in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_USER_DEFINED, 'aMethod'),
			expected : false
		},
		"Object prototype property values are not in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_USER_DEFINED, 'protoPropValue'),
			expected : false
		},
		"Object literal property values are in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_LITERAL_NONEMPTY, 1),
			expected : true,
		},
		"Object literal property names are not in the object" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_LITERAL_NONEMPTY, 'a'),
			expected : false
		},
		"Undefined properties are not in an object literal" : {
			actual   : is.inside(TEST_OBJECTS.OBJECT_LITERAL_NONEMPTY, 'not_in'),
			expected : false
		},
		"Invalid container objects (non-array/non-object) do not contain properties" : {
			actual   : is.inside(null, 'not_in'),
			expected : false
		}
	};
}));
