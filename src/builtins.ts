/**
 * Type determination for built-in non-primitive data types
 */

const toString = Object.prototype.toString;

export function object(value: unknown): value is Object {
	return value === Object(value);
}

export const array =
	Array.isArray ??
	((value: unknown): value is Array<unknown> =>
		toString.call(value) === "[object Array]");

export function date(value: unknown): value is Date {
	return value ? (value as any).constructor === Date : false;
}

export function func(value: unknown): value is Function {
	return typeof value === "function";
}

export function error(value: unknown): value is Error {
	return value instanceof Error;
}

export function regex(value: unknown): value is RegExp {
	return value ? (value as any).constructor === RegExp : false;
}

export function promise(value: unknown): value is Promise<unknown> {
	return value ? (value as any).constructor === Promise : false;
}

interface PromiseLike {
	then: (...args: Array<any>) => any;
}

export function promiseLike(value: unknown): value is PromiseLike {
	return value ? func((value as { then: any }).then) : false;
}
