type Mods = Record<string, boolean | string>;

export function classNames(
  baseClassName: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    baseClassName,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
