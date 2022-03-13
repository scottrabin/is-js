// User defined type guards for native Javascript objects

const toString = Object.prototype.toString;

/**
 * Determines if the argument is an object.
 *
 * @remarks
 * Nearly everything in Javascript is an object; this method discerns between
 * native primitives (e.g. `true`, `3`, `some text`) and their object-wrapped
 * variants (Boolean, Number, String)
 *
 * @param value - Value in question
 * @returns `true` if the given argument is an object
 */
export function object(value: unknown): value is Object {
	return value === Object(value);
}

/**
 * Determines if the argument is an array.
 *
 * @remarks
 * Defaults to the native `Array.isArray` method, if present.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is an array
 */
export const array =
	Array.isArray ??
	((value: unknown): value is Array<unknown> =>
		toString.call(value) === "[object Array]");

/**
 * Determines if the argument is a date.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a date
 */
export function date(value: unknown): value is Date {
	return value ? (value as any).constructor === Date : false;
}

/**
 * Determines if the argument is a function.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a function
 */
export function func(value: unknown): value is Function {
	return typeof value === "function";
}

/**
 * Determines if the argument is an error.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is an error
 */
export function error(value: unknown): value is Error {
	return value instanceof Error;
}

/**
 * Determines if the argument is a regular expression.
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a regular expression
 */
export function regex(value: unknown): value is RegExp {
	return value ? (value as any).constructor === RegExp : false;
}

/**
 * Determines if the argument is a native promise.
 *
 * @remarks
 * Some libraries and frameworks still include their own polyfilled Promises,
 * in which case this method is unreliable. If you are using such a library,
 * please defer to the provided Promise implementation or use {@link promiseLike}
 *
 * @param value - Value in question
 * @returns `true` if the given argument is a string
 */
export function promise(value: unknown): value is Promise<unknown> {
	return value ? (value as any).constructor === Promise : false;
}

/**
 * Determines if the argument conforms to the minimal interface of a Promise;
 * that is, it has a method named `then`.
 *
 * @param value - Value in question
 * @returns `true` if the given argument conforms to the Promise interface
 */
export function promiseLike(
	value: unknown
): value is { then: (...args: Array<any>) => any } {
	return value ? func((value as { then: any }).then) : false;
}
