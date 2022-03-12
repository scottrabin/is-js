/**
 * Test if the given value is a string.
 *
 * @param value Value in question
 * @returns boolean
 */
export function string(value: unknown): value is string {
	return typeof value === "string" || value instanceof String;
}

export function number(value: unknown): value is number {
	return typeof value === "number" || value instanceof Number;
}

export function bool(value: unknown): value is boolean {
	return value === true || value === false || value instanceof Boolean;
}

export function bigint(value: unknown): boolean {
	// TODO: support for environments without BigInt
	return typeof value === "bigint";
}

export function undef(value: unknown): value is undefined {
	return value === undefined;
}

export function symbol(value: unknown): value is Symbol {
	// TODO
	return typeof value === "symbol";
}

export function nil(value: unknown): value is null {
	return value === null;
}
