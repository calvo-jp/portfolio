export function isMobile(agent: unknown) {
  const matchers = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return (
    typeof agent === 'string' && matchers.some((matcher) => matcher.test(agent))
  );
}
