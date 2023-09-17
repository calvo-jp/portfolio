export function parseEnum<T extends string>(
  enumArray: T[],
  subject: unknown,
  strict?: boolean,
) {
  if (typeof subject === 'string') {
    return enumArray.find((enumValue) => {
      if (strict) {
        return enumValue === subject;
      } else {
        return enumValue.toLowerCase() === subject.toLowerCase();
      }
    });
  }
}
