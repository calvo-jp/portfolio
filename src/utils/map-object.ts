interface Dict {
	[key: string]: unknown;
}

export function mapObject<T extends Dict, R>(
	object: T,
	iteratee: <K extends keyof T>(value: T[K], key: K) => R,
) {
	const array: R[] = [];

	for (const key in object) {
		array.push(iteratee(object[key], key));
	}

	return array;
}
