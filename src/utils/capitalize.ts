export function capitalize(subject: string) {
  return subject
    .trim()
    .toLowerCase()
    .split(/\s/)
    .map((word) => {
      return word.length === 1
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(' ');
}
