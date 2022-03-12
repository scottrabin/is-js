import { array } from "./builtins";

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

export function nonNil<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}
