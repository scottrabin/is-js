export class MyError extends Error {}

export const BUILTINS = {
	REGEX: /regex/,
	REGEX_VIA_CONSTRUCTOR: new RegExp("dynamic string"),

	DATE: new Date(),
	DATE_INVALID: new Date("not a real date"),

	FUNCTION_LITERAL: function () {},
	FUNCTION_VIA_CONSTRUCTOR: new Function("return true"),
	FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_METHOD: (() => {
		const fn = function () {};
		fn.prototype.aMethod = function () {};

		return fn;
	})(),
	FUNCTION_CLASS_CONSTRUCTOR_WITH_PROPERTY_SET: function (this: any, p: any) {
		this.prop = p;
	},
	FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_ONLY: (() => {
		const fn = function () {};
		fn.prototype.aMethod = function () {};
		fn.prototype.aProperty = "prototype property value";

		return fn;
	})(),

	ERROR: new Error(""),
	ERROR_SUBCLASS: new MyError(),

	ARRAY_LITERAL_EMPTY: [],
	ARRAY_LITERAL_NONEMPTY: [1, 2, 3],
	ARRAY_NEW_EMPTY: new Array(),
	ARRAY_NEW_NONEMPTY: new Array(3),

	OBJECT_LITERAL_EMPTY: {},
	OBJECT_LITERAL_NONEMPTY: { a: 1, b: 2 },

	OBJECT_VIA_NEW: (() => {
		const constructor = function () {};
		return new (constructor as any)();
	})(),
	OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_PROPERTIES: (() => {
		const constructor = function (this: any, p: any) {
			this.property = p;
		};
		return new (constructor as any)("propertyValue");
	})(),
	OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE: (() => {
		const constructor = function () {};
		constructor.prototype.aMethod = function () {};
		constructor.prototype.aProperty = "property";
		return new (constructor as any)();
	})(),
	OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_AUGMENT: (() => {
		const constructor = function () {};
		constructor.prototype.aMethod = function () {};
		constructor.prototype.aProperty = "property";

		const obj = new (constructor as any)();
		obj.userProperty = 1;

		return obj;
	})(),

	PROMISE: new Promise(() => {}),
	PROMISE_DUCKTYPE: {
		then: function () {},
	},
};
