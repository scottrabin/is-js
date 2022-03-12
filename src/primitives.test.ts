import * as is from "./primitives";
import { ALL_CASES, CaseIdentifier } from "./__test__/__fixtures__";
import { validateCases } from "./__test__/__utils__/validateCases";

describe("primitives", () => {
	describe("string", () => {
		validateCases(is.string, [
			"STRING_EMPTY",
			"STRING_NONEMPTY",
			"STRING_VIA_CONSTRUCTOR",
			"STRING_NEGATIVE_INTEGER",
			"STRING_POSITIVE_INTEGER",
			"STRING_OCTAL_LITERAL",
			"STRING_HEX_LITERAL",
			"STRING_POSITIVE_FLOAT",
			"STRING_NEGATIVE_FLOAT",
			"STRING_EXPONENTIAL",
			"STRING_NEGATIVE_EXPONENTIAL",
			"STRING_BEGIN_NUMBER",
			"STRING_END_NUMBER",
			"STRING_WRAP_NUMBER",
			"STRING_WRAPPED_NUMBER",
		]);
	});

	describe("number", () => {
		validateCases(is.number, [
			"NUMBER_ZERO",
			"NUMBER_POSITIVE",
			"NUMBER_NEGATIVE",
			"NUMBER_FLOAT_POSITIVE",
			"NUMBER_FLOAT_NEGATIVE",
			"NUMBER_EXPONENTIAL_POSITIVE",
			"NUMBER_EXPONENTIAL_NEGATIVE",
			"NUMBER_OCTAL_POSITIVE",
			"NUMBER_OCTAL_NEGATIVE",
			"NUMBER_HEX_POSITIVE",
			"NUMBER_HEX_NEGATIVE",
			"NUMBER_INFINITY",
			"NUMBER_NEGATIVE_INFINITY",
			"NUMBER_VIA_CONSTRUCTOR",
		]);
	});

	describe("bool", () => {
		validateCases(is.bool, [
			"BOOLEAN_TRUE",
			"BOOLEAN_FALSE",
			"BOOLEAN_TRUE_VIA_CONSTRUCTOR",
			"BOOLEAN_FALSE_VIA_CONSTRUCTOR",
		]);
	});

	describe("undef", () => {
		validateCases(is.undef, ["UNDEFINED"]);
	});

	describe("nil", () => {
		validateCases(is.nil, ["NULL"]);
	});

	describe("symbol", () => {
		validateCases(is.symbol, [
			"SYMBOL_EMPTY_STRING",
			"SYMBOL_NO_PARAMETER",
			"SYMBOL_STATIC",
			"SYMBOL_WITH_STRING",
		]);
	});

	describe("bigint", () => {
		validateCases(is.bigint, ["BIGINT_LITERAL"]);
	});
});
