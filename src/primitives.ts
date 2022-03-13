// User-defined type guards for Javascript primitives

/**
 * Determines if the argument is a string.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a string
 */
export function string(value: unknown): value is string {
	return typeof value === "string" || value instanceof String;
}

/**
 * Determines if the argument is a number
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a number
 */
export function number(value: unknown): value is number {
	return typeof value === "number" || value instanceof Number;
}

/**
 * Determines if the argument is a boolean
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a boolean
 */
export function bool(value: unknown): value is boolean {
	return value === true || value === false || value instanceof Boolean;
}

/**
 * Determines if the argument is a BigInt
 *
 * @remarks
 * This method does not support polyfilled BigInt implementations; please defer
 * to the library in use to determine the type of an unknown argument.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a native BigInt
 */
export function bigint(value: unknown): boolean {
	return typeof value === "bigint";
}

/**
 * Determines if the argument is undefined
 *
 * @param value - Value in question
 * @returns `true` if the given argument is `undefined`
 */
export function undef(value: unknown): value is undefined {
	return value === undefined;
}

/**
 * Determines if the argument is a symbol
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a symbol
 */
export function symbol(value: unknown): value is Symbol {
	// TODO
	return typeof value === "symbol";
}

/**
 * Determines if the argument is null
 *
 * @param value - Value in question
 * @returns `true` if the given argument is null
 */
export function nil(value: unknown): value is null {
	return value === null;
}
