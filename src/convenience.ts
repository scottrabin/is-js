import { array } from "./builtins";

/**
 * Determines if the specified collection is empty.
 *
 * If `collection` is an array, `is.empty` returns `true` and narrows the type
 * to a zero-length tuple, which prevents indexed access.
 *
 * If `collection` is an object, `is.empty` returns `true` if the object has no
 * properties or symbols of its own. This can be useful when working with
 * objects having an index signature `{ [key: string]: T }`, as the type guard
 * narrows the type to prevent any indexing.
 *
 * @example
 * ```
 * function safelyHandleArray(arr: Array<any>) {
 *     if (is.empty(arr)) {
 *         // the following line yields this TS error:
 *         // "Tuple type '[]' of length '0' has no element at index '0'. ts(2493)"
 *         arr[0];
 *     }
 * }
 * ```
 *
 * @param value Collection in question
 * @returns `true` if the given collection has no indexable elements
 */
export function empty(value: Array<any>): value is [];
export function empty(value: {
	[index: string | number | symbol]: any;
}): value is {};
export function empty(value: unknown): boolean {
	return array(value)
		? value.length === 0
		: Object.getOwnPropertyNames(value).length === 0 &&
				Object.getOwnPropertySymbols(value).length === 0;
}

/**
 * Determines if the argument is neither `null` nor `undefined`, intended for
 * inference positions where guaranteeing a value exists simplifies resulting
 * code.
 *
 * @example
 * ```
 * function lookup<T>(dict: Record<string, T>, keys: Array<string>): Array<T> {
 *     return keys.map((key) => dict[key]).filter(is.nonNil);
 * }
 * ```
 *
 * @param value value in question
 * @returns `true` if the given value is neither `null` nor `undefined`
 */
export function nonNil<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}
