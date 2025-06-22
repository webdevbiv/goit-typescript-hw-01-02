export function basic3() {
  const unionType: string | number = 'Hello';
  const literalType: 'enable' | 'disable' = 'enable';

  return {
    unionType,
    literalType,
  };
}
