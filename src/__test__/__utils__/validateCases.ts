import { ALL_CASES, CaseIdentifier } from "../__fixtures__";

export function validateCases<F extends (...args: Array<any>) => any>(
	func: F,
	positiveCases: Array<CaseIdentifier>
) {
	test.each(positiveCases)(`is.${func.name}(%s)`, (caseId) => {
		expect(func(ALL_CASES[caseId as CaseIdentifier])).toBe(true);
	});

	test.each(
		Object.keys(ALL_CASES).filter(
			(caseId) => !positiveCases.includes(caseId as CaseIdentifier)
		)
	)(`is.${func.name}(%s)`, (caseId) => {
		expect(func(ALL_CASES[caseId as CaseIdentifier])).toBe(false);
	});
}
