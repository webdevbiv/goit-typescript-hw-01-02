export function basic7() {
  type PageStatus = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
      createAt: Date;
      updateAt: Date;
    };
  };

  const page1: PageStatus = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    },
  };

  const page2: PageStatus = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  };

  return { page1, page2 };
}
