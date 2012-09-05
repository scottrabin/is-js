// Maps the is[function] to a list of object names that should return true,
// or a function that determines the correct output
//
// NOTE: is.inside is NOT tested by this map, since the syntax is different
//       and it does not conform to the standard test object protocol
;(function(root, factory) {
	if (typeof exports === 'object') {
		// Node.js
		module.exports = factory();
	} else {
		root.TEST_MAP = factory();
	}
}(this, function() {
	return {
		'string' : {
			name   : 'string',
			pass   : function(name, val) {
				return /^string/i.test(name);
			},
		},
		'number' : {
			name   : 'number',
			pass   : function(name, val) {
				return /^number/i.test(name);
			},
		},
		'bool'   : {
			name   : 'boolean',
			pass   : function(name, val) {
				return /^boolean/i.test(name);
			},
		},
		'fn'     : {
			name   : 'function',
			pass   : [
				'FUNCTION',
				'FUNCTION_CONSTRUCTOR',
				'FUNCTION_VIA_CONSTRUCTOR',
				'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY',
				'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY'
			]
		},
		'array'  : {
			name   : 'array',
			pass   : function(name, val) {
				return /^array/i.test(name);
			}
		},
		'object' : {
			name   : 'object',
			pass   : [
				'STRING_VIA_CONSTRUCTOR',
				'NUMBER_VIA_CONSTRUCTOR',
				'BOOLEAN_VIA_CONSTRUCTOR',
				'REGEX',
				'DATE',

				'FUNCTION',
				'FUNCTION_CONSTRUCTOR',
				'FUNCTION_VIA_CONSTRUCTOR',
				'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY',
				'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY',

				'ARRAY_LITERAL_EMPTY',
				'ARRAY_LITERAL_NONEMPTY',
				'ARRAY_NEW_EMPTY',
				'ARRAY_NEW_NONEMPTY',

				'OBJECT_USER_DEFINED_WITH_PROPERTIES',
				'OBJECT_USER_DEFINED_EMPTY',
				'OBJECT_USER_DEFINED_PROTOTYPE_ONLY',
				'OBJECT_LITERAL_EMPTY',
				'OBJECT_LITERAL_NONEMPTY',
				'OBJECT_USER_DEFINED',

				'ELEMENT_DOCUMENT',
				'ELEMENT_BODY',
				'ELEMENT_DETACHED_DIV',
				'ELEMENT_DIV'
			]
		},
		'regex'  : {
			name   : 'regexp',
			pass   : [
				'REGEX'
			]
		},
		'element': {
			name   : 'element',
			pass   : [
				'ELEMENT_BODY',
				'ELEMENT_DETACHED_DIV',
				'ELEMENT_DIV'
			]
		},
		'numeric': {
			name   : 'numeric',
			pass   : [
				'STRING_NEGATIVE_INTEGER',
				'STRING_POSITIVE_INTEGER',
				'STRING_OCTAL_LITERAL',
				'STRING_HEX_LITERAL',
				'STRING_POSITIVE_FLOAT',
				'STRING_NEGATIVE_FLOAT',
				'STRING_EXPONENTIAL',
				'STRING_NEGATIVE_EXPONENTIAL',
				'NUMBER_ZERO',
				'NUMBER_POSITIVE',
				'NUMBER_NEGATIVE',
				'NUMBER_FLOAT_POSITIVE',
				'NUMBER_FLOAT_NEGATIVE',
				'NUMBER_EXPONENTIAL_POSITIVE',
				'NUMBER_EXPONENTIAL_NEGATIVE',
				'NUMBER_OCTAL_POSITIVE',
				'NUMBER_OCTAL_NEGATIVE',
				'NUMBER_HEX_POSITIVE',
				'NUMBER_HEX_NEGATIVE',
				'NUMBER_VIA_CONSTRUCTOR'
			]
		},
		'regex'  : {
			name   : 'regexp',
			pass   : [
				'REGEX'
			]
		},
		'hash'   : {
			name   : 'hash',
			pass   : [
				'OBJECT_LITERAL_EMPTY',
				'OBJECT_LITERAL_NONEMPTY'
			]
		},
		// is.inside does not conform to the map definition and is therefore omitted
		'set'    : {
			name   : 'set',
			pass   : function(name, val) {
				return (name !== 'NULL' && name !== 'UNDEFINED');
			}
		},
		'empty'  : {
			name   : 'empty',
			pass   : [
				'STRING_EMPTY',
				'NUMBER_ZERO',
				'BOOLEAN_FALSE',
				'NULL',
				'UNDEFINED',
				'REGEX',
				'FUNCTION', // has no properties, therefore is empty
				'FUNCTION_CONSTRUCTOR', // also has no properties, therefore is empty
				'FUNCTION_VIA_CONSTRUCTOR', // no properties, therefore empty
				'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY', // see above
				'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY', // see above
				'OBJECT_USER_DEFINED_EMPTY', // no properties defined on object = empty
				'OBJECT_USER_DEFINED_PROTOTYPE_ONLY', // prototype properties are not on the object
				'ARRAY_LITERAL_EMPTY',
				'ARRAY_NEW_EMPTY',
				'OBJECT_LITERAL_EMPTY'
			]
		}
	};
}));
