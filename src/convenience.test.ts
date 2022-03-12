import * as is from "./convenience";
import { ALL_CASES, CaseIdentifier } from "./__test__/__fixtures__";

describe("convenience methods", () => {
	describe("empty", () => {
		test.each([
			[[], true],
			[[1, 2, 3], false],
			[new Array(), true],
			[new Array(3), false],
			[{}, true],
			[{ yes: true }, false],
			[{ [Symbol("")]: "" }, false],
			[{ ...{ internalObject: "spread" } }, false],
		])("is.empty(%p)", (value, expected) => {
			expect(is.empty(value)).toBe(expected);
		});
	});

	describe("nonNil", () => {
		test.each(
			Object.keys(ALL_CASES).filter(
				(caseName) => caseName !== "NULL" && caseName !== "UNDEFINED"
			)
		)("is.nonNil(%s)", (caseName) => {
			expect(is.nonNil(ALL_CASES[caseName as CaseIdentifier])).toBe(true);
		});

		test.each(["NULL", "UNDEFINED"])("is.nonNil(%s)", (caseName) => {
			expect(is.nonNil(ALL_CASES[caseName as CaseIdentifier])).toBe(false);
		});
	});
});
