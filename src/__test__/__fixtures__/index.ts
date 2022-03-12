import { BUILTINS } from "./builtin";
import { PRIMITIVES } from "./primitives";

export const ALL_CASES = {
	...PRIMITIVES,
	...BUILTINS,
};

export type CaseIdentifier = keyof typeof ALL_CASES;
