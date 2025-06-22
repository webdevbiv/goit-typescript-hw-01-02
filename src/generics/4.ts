export function generics4() {
  type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };

  function createOrUpdateUser(initialValues: Partial<User>) {
    console.log('Updating with:', initialValues);
    return initialValues;
  }

  const result = createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
  });

  return result;
}
