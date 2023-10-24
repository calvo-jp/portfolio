export function capitalize(subject: string, delimiter = ' ') {
  subject = subject.trim();

  if (subject.length <= 1) return subject.toUpperCase();

  return subject
    .split(delimiter)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(delimiter);
}
