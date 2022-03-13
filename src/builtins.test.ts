import { validateCases } from "./__test__/__utils__/validateCases";
import * as is from "./builtins";

describe("builtins", () => {
	describe("object", () => {
		validateCases(is.object, [
			"OBJECT_LITERAL_EMPTY",
			"OBJECT_LITERAL_NONEMPTY",
			"OBJECT_VIA_NEW",
			"OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_PROPERTIES",
			"OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE",
			"OBJECT_VIA_FUNCTION_CONSTRUCTOR_WITH_AUGMENT",

			"STRING_VIA_CONSTRUCTOR",
			"NUMBER_VIA_CONSTRUCTOR",
			"BOOLEAN_TRUE_VIA_CONSTRUCTOR",
			"BOOLEAN_FALSE_VIA_CONSTRUCTOR",
			"REGEX",
			"REGEX_VIA_CONSTRUCTOR",
			"DATE",
			"DATE_INVALID",

			"FUNCTION_LITERAL",
			"FUNCTION_VIA_CONSTRUCTOR",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROPERTY_SET",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_ONLY",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_METHOD",

			"ARRAY_LITERAL_EMPTY",
			"ARRAY_LITERAL_NONEMPTY",
			"ARRAY_NEW_EMPTY",
			"ARRAY_NEW_NONEMPTY",

			"ERROR",
			"ERROR_SUBCLASS",

			"PROMISE",
			"PROMISE_DUCKTYPE",
		]);
	});

	describe("array", () => {
		validateCases(is.array, [
			"ARRAY_LITERAL_EMPTY",
			"ARRAY_LITERAL_NONEMPTY",
			"ARRAY_NEW_EMPTY",
			"ARRAY_NEW_NONEMPTY",
		]);
		// TODO test against Array.isArray not being present
	});

	describe("date", () => {
		validateCases(is.date, ["DATE", "DATE_INVALID"]);
	});

	describe("func", () => {
		validateCases(is.func, [
			"FUNCTION_LITERAL",
			"FUNCTION_VIA_CONSTRUCTOR",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_METHOD",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROPERTY_SET",
			"FUNCTION_CLASS_CONSTRUCTOR_WITH_PROTOTYPE_ONLY",
		]);
	});

	describe("error", () => {
		validateCases(is.error, ["ERROR", "ERROR_SUBCLASS"]);
	});

	describe("regex", () => {
		validateCases(is.regex, ["REGEX", "REGEX_VIA_CONSTRUCTOR"]);
	});

	describe("promise", () => {
		validateCases(is.promise, ["PROMISE"]);
	});

	describe("promiseLike", () => {
		validateCases(is.promiseLike, ["PROMISE", "PROMISE_DUCKTYPE"]);
	});
});
