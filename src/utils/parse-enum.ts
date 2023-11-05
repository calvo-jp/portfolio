export function parseEnum<T extends string>(enumValues: T[], value: unknown) {
	return typeof value === 'string'
		? enumValues.find((enumValue) => enumValue.toLowerCase() === value.toLowerCase())
		: undefined;
}
