export function basic1() {
  const age: number = 50;
  const username: string = 'Max';
  const toggle: boolean = true;
  const empty: null = null;
  const callback = (a: number): number => {
    return 100 + a;
  };

  return {
    age,
    username,
    toggle,
    empty,
    callback,
  };
}
