// various types to test
;(function(root, factory) {
	if (typeof exports === 'object') {
		// Node.js
		module.exports = factory();
	} else {
		root.TEST_OBJECTS = factory();
	}
}(this, function() {
	var TEST_OBJECTS = {
		// Strings
		STRING_EMPTY    : "",
		STRING_NONEMPTY : "a string",
		STRING_VIA_CONSTRUCTOR : new String('constructed'),

		// Numeric strings
		STRING_NEGATIVE_INTEGER : "-10",
		STRING_POSITIVE_INTEGER : "5",
		STRING_OCTAL_LITERAL    : "040",
		STRING_HEX_LITERAL      : "0xFF",
		STRING_POSITIVE_FLOAT   : "4.5385",
		STRING_NEGATIVE_FLOAT   : "-5.592",
		STRING_EXPONENTIAL      : "123e4",
		STRING_NEGATIVE_EXPONENTIAL : "-83e-6",

		// Seminumeric strings (edge cases)
		STRING_BEGIN_NUMBER   : "10abcdef",
		STRING_END_NUMBER     : "abcdef10",
		STRING_WRAP_NUMBER    : "10abcd10",
		STRING_WRAPPED_NUMBER : "abc10def",

		// Numbers
		NUMBER_ZERO     : 0,
		NUMBER_POSITIVE : 1000,
		NUMBER_NEGATIVE : -1000,
		NUMBER_FLOAT_POSITIVE : 1.5,
		NUMBER_FLOAT_NEGATIVE : -3.6,
		NUMBER_EXPONENTIAL_POSITIVE : 1.2e3,
		NUMBER_EXPONENTIAL_NEGATIVE : -3.2e-5,
		NUMBER_OCTAL_POSITIVE : 070,
		NUMBER_OCTAL_NEGATIVE : -010,
		NUMBER_HEX_POSITIVE   : 0xAB,
		NUMBER_HEX_NEGATIVE   : -0xCC,
		NUMBER_INFINITY : Infinity,
		NUMBER_NEGATIVE_INFINITY : -Infinity,
		NUMBER_VIA_CONSTRUCTOR : new Number(5),

		BOOLEAN_TRUE  : true,
		BOOLEAN_FALSE : false,
		BOOLEAN_VIA_CONSTRUCTOR : new Boolean(true),

		NULL : null,

		UNDEFINED : undefined,

		REGEX : /regex/,
		DATE  : new Date(),

		FUNCTION : function(){},
		FUNCTION_CONSTRUCTOR : function(){},
		FUNCTION_VIA_CONSTRUCTOR : new Function('return true'),
		FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY : function(p) { this.prop = p; },
		FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY : function(){},

		ARRAY_LITERAL_EMPTY    : [],
		ARRAY_LITERAL_NONEMPTY : [1, 2, 3],
		ARRAY_NEW_EMPTY        : new Array(),
		ARRAY_NEW_NONEMPTY     : new Array(3),

		OBJECT_LITERAL_EMPTY    : {},
		OBJECT_LITERAL_NONEMPTY : {a: 1, b: 2},
	};
	TEST_OBJECTS.FUNCTION_CONSTRUCTOR.prototype.aMethod = function(){};
	TEST_OBJECTS.FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY.prototype.aMethod = function(){};
	TEST_OBJECTS.FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY.prototype.aProp = 'protoPropValue';

	TEST_OBJECTS.OBJECT_USER_DEFINED_WITH_PROPERTIES = new TEST_OBJECTS.FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY('propertyValue');
	TEST_OBJECTS.OBJECT_USER_DEFINED_EMPTY = new TEST_OBJECTS.FUNCTION();
	TEST_OBJECTS.OBJECT_USER_DEFINED_PROTOTYPE_ONLY  = new TEST_OBJECTS.FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY();
	TEST_OBJECTS.OBJECT_USER_DEFINED = new TEST_OBJECTS.FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY();
	TEST_OBJECTS.OBJECT_USER_DEFINED.aProperty = 'propValue';

	// the following objects only matter in the context of a browser
	if (typeof document !== 'undefined') {
		TEST_OBJECTS.ELEMENT_DOCUMENT = document;
		TEST_OBJECTS.ELEMENT_DETACHED_DIV = document.createElement('div');
	}

	return TEST_OBJECTS;
}));
