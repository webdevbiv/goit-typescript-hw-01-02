//NOTE -  This file is the entry point for the application.
import './style.css';
import { basic1 } from './basic/1.ts';
import { basic2 } from './basic/2.ts';
import { basic3 } from './basic/3.ts';
import { basic4 } from './basic/4.ts';
import { basic5 } from './basic/5.ts';
import { basic6 } from './basic/6.ts';
import { basic7 } from './basic/7.ts';
import { generics1 } from './generics/1.ts';
import { generics2 } from './generics/2.ts';
import { generics3 } from './generics/3.ts';
import { generics4 } from './generics/4.ts';
import { generics5 } from './generics/5.ts';
import { generics6 } from './generics/6.ts';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function runApp() {
  const fetchData = generics1();

  const { age, username, toggle, empty } = basic1();
  const { person } = basic2();
  const { unionType, literalType } = basic3();
  basic4();
  basic5();
  const { mango, poly } = basic6();
  const { page1, page2 } = basic7();

  document.body.innerHTML += `
    <h2>basic/1.ts</h2>
    <pre><code>
<span class="keyword">const</span> age: <span class="keyword">number</span> = <span class="number">${age}</span>;
<span class="keyword">const</span> username: <span class="keyword">string</span> = <span class="string">'${username}'</span>;
<span class="keyword">const</span> toggle: <span class="keyword">boolean</span> = ${toggle};
<span class="keyword">const</span> empty: <span class="null">null</span> = ${empty};
<span class="keyword">const</span> callback = (a: <span class="keyword">number</span>): <span class="keyword">number</span> => {
  <span class="keyword">return</span> 100 + a;
};
    </code></pre>

    <h2>basic/2.ts</h2>
    <pre><code>
<span class="keyword">let</span> person: [<span class="keyword">string</span>, <span class="keyword">number</span>] = [<span class="string">'${
    person[0]
  }'</span>, <span class="number">${person[1]}</span>];
    </code></pre>

    <h2>basic/3.ts</h2>
    <pre><code>
<span class="keyword">const</span> unionType: <span class="keyword">string</span> | <span class="keyword">number</span> = <span class="string">"${unionType}"</span>;
<span class="keyword">const</span> literalType: <span class="string">"enable"</span> | <span class="string">"disable"</span> = <span class="string">"${literalType}"</span>;
    </code></pre>

    <h2>basic/4.ts</h2>
    <pre><code>
<span class="keyword">function</span> showMessage(message: <span class="keyword">string</span>): <span class="keyword">void</span> {
  <span class="keyword">console</span>.log(message);
}

<span class="keyword">function</span> calc(num1: <span class="keyword">number</span>, num2: <span class="keyword">number</span>): <span class="keyword">number</span> {
  <span class="keyword">return</span> num1 + num2;
}

<span class="keyword">function</span> customError(): <span class="keyword">never</span> {
  <span class="keyword">throw</span> <span class="keyword">new</span> Error(<span class="string">'Error'</span>);
}
    </code></pre>

    <h2>basic/5.ts</h2>
    <pre><code>
<span class="keyword">enum</span> DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

<span class="keyword">const</span> isWeekend = (day: <span class="keyword">DayOfWeek</span>): <span class="keyword">boolean</span> => {
  <span class="keyword">return</span> day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
    </code></pre>

    <h2>basic/6.ts</h2>
    <pre><code>
<span class="keyword">interface</span> User {
  name: <span class="keyword">string</span>;
  age: <span class="keyword">number</span>;
  email: <span class="keyword">string</span>;
  address?: {
    city: <span class="keyword">string</span>;
    country: <span class="keyword">string</span>;
  };
}

<span class="keyword">const</span> mango = { name: <span class="string">'${
    mango.name
  }'</span>, age: <span class="number">${
    mango.age
  }</span>, email: <span class="string">'${
    mango.email
  }'</span>, address: { city: <span class="string">'${
    mango.address?.city
  }'</span>, country: <span class="string">'${
    mango.address?.country
  }'</span> }};
<span class="keyword">const</span> poly = { name: <span class="string">'${
    poly.name
  }'</span>, age: <span class="number">${
    poly.age
  }</span>, email: <span class="string">'${poly.email}'</span> };
    </code></pre>

    <h2>basic/7.ts</h2>
    <pre><code>
<span class="keyword">type</span> PageStatus = {
  title: <span class="keyword">string</span>;
  likes: <span class="keyword">number</span>;
  accounts: <span class="keyword">string</span>[];
  status: <span class="string">"open"</span> | <span class="string">"close"</span>;
  details?: {
    createAt: <span class="keyword">Date</span>;
    updateAt: <span class="keyword">Date</span>;
  };
}

<span class="keyword">const</span> page1 = {
  title: <span class="string">'${page1.title}'</span>,
  likes: <span class="number">${page1.likes}</span>,
  accounts: [${page1.accounts
    .map(a => `<span class="string">'${a}'</span>`)
    .join(', ')}],
  status: <span class="string">'${page1.status}'</span>,
  details: {
    createAt: <span class="string">'${page1.details?.createAt.toISOString()}'</span>,
    updateAt: <span class="string">'${page1.details?.updateAt.toISOString()}'</span>,
  },
};

<span class="keyword">const</span> page2 = {
  title: <span class="string">'${page2.title}'</span>,
  likes: <span class="number">${page2.likes}</span>,
  accounts: [${page2.accounts
    .map(a => `<span class="string">'${a}'</span>`)
    .join(', ')}],
  status: <span class="string">'${page2.status}'</span>,
};
    </code></pre>
  `;

  // NOTE - This is where the try/catch block starts
  try {
    // SECTION generics/1.ts
    const todo = await fetchData<Todo>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    document.body.innerHTML += `
  <h2>generics/1.ts</h2>
  <pre><code>
<span class="keyword">interface</span> Todo {
  userId: <span class="keyword">number</span>;
  id: <span class="keyword">number</span>;
  title: <span class="keyword">string</span>;
  completed: <span class="keyword">boolean</span>;
}

<span class="keyword">function</span> fetchData&lt;T&gt;(url: <span class="keyword">string</span>): <span class="keyword">Promise</span>&lt;T&gt; {
  <span class="keyword">const</span> response = await axios.get&lt;T&gt;(url);
  <span class="keyword">return</span> response.data;
}

<span class="comment">// Example usage:</span>
<span class="keyword">const</span> todo = await fetchData&lt;Todo&gt;('https://jsonplaceholder.typicode.com/todos/1');
  </code></pre>

  <h3>✔️ Resolved Todo:</h3>
  <pre><code>
{
  "userId": ${todo.userId},
  "id": ${todo.id},
  "title": "${todo.title}",
  "completed": ${todo.completed}
}
  </code></pre>
`;

    // SECTION generics/2.ts
    const compare = generics2();
    const top = { name: 'Teddy', color: 'Blue' };
    const bottom = { position: 3, weight: 5 };
    const result = compare(top, bottom);

    document.body.innerHTML += `
  <h2>generics/2.ts</h2>
  <pre><code>
<span class="keyword">type</span> AllType = {
  name: <span class="keyword">string</span>;
  position: <span class="keyword">number</span>;
  color: <span class="keyword">string</span>;
  weight: <span class="keyword">number</span>;
};

<span class="keyword">function</span> compare&lt;T <span class="keyword">extends</span> Pick&lt;AllType, 'name' | 'color'&gt;, U <span class="keyword">extends</span> Pick&lt;AllType, 'position' | 'weight'&gt;&gt;(
  top: T, bottom: U
): AllType {
  <span class="keyword">return</span> {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight
  };
}

<span class="comment">// Example usage:</span>
<span class="keyword">const</span> top = { name: 'Teddy', color: 'Blue' };
<span class="keyword">const</span> bottom = { position: 3, weight: 5 };
<span class="keyword">const</span> result = compare(top, bottom);
  </code></pre>

  <h3>✔️ Merged Result:</h3>
  <pre><code>
{
  "name": "${result.name}",
  "color": "${result.color}",
  "position": ${result.position},
  "weight": ${result.weight}
}
  </code></pre>
`;

    // SECTION generics/3.ts
    const merge = generics3();
    const a = { name: 'Rocket', fuel: 'Hydrazine' };
    const b = { speed: 24000, launched: true };
    const merged = merge(a, b);

    document.body.innerHTML += `
  <h2>generics/4.ts</h2>
  <pre><code>
<span class="keyword">function</span> merge&lt;T <span class="keyword">extends</span> object, U <span class="keyword">extends</span> object&gt;(objA: T, objB: U): T &amp; U {
  <span class="keyword">return</span> Object.assign({}, objA, objB);
}

<span class="comment">// Example usage:</span>
<span class="keyword">const</span> a = { name: <span class="string">'${a.name}'</span>, fuel: <span class="string">'${a.fuel}'</span> };
<span class="keyword">const</span> b = { speed: <span class="number">${b.speed}</span>, launched: <span class="boolean">${b.launched}</span> };
<span class="keyword">const</span> merged = merge(a, b);
  </code></pre>

  <h3>✔️ Merged Result:</h3>
  <pre><code>
{
  "name": "${merged.name}",
  "fuel": "${merged.fuel}",
  "speed": ${merged.speed},
  "launched": ${merged.launched}
}
  </code></pre>
`;

    // SECTION generics/4.ts
    const updatedUser = generics4();

    document.body.innerHTML += `
  <h2>generics/4.ts</h2>
  <pre><code>
<span class="keyword">type</span> User = {
  name: <span class="keyword">string</span>;
  surname: <span class="keyword">string</span>;
  email: <span class="keyword">string</span>;
  password: <span class="keyword">string</span>;
};

<span class="keyword">function</span> createOrUpdateUser(initialValues: <span class="keyword">Partial</span>&lt;User&gt;) {
  console.log(<span class="string">'Updating with:'</span>, initialValues);
  <span class="keyword">return</span> initialValues;
}

<span class="comment">// Example usage:</span>
<span class="keyword">const</span> result = createOrUpdateUser({
  email: <span class="string">'user@mail.com'</span>,
  password: <span class="string">'password123'</span>,
});
  </code></pre>

  <h3>✔️ Result:</h3>
  <pre><code>
{
  "email": "${updatedUser.email}",
  "password": "${updatedUser.password}"
}
  </code></pre>
`;

    //SECTION -  generics/5.ts
    const { UserRole, RoleDescription } = generics5();

    document.body.innerHTML += `
  <h2>generics/5.ts</h2>
  <pre><code>
<span class="keyword">enum</span> UserRole {
  admin = <span class="string">'admin'</span>,
  editor = <span class="string">'editor'</span>,
  guest = <span class="string">'guest'</span>
}

<span class="keyword">const</span> RoleDescription: Record&lt;UserRole, string&gt; = {
  [UserRole.admin]: <span class="string">'Admin User'</span>,
  [UserRole.editor]: <span class="string">'Editor User'</span>,
  [UserRole.guest]: <span class="string">'Guest User'</span>,
};
  </code></pre>

  <h3>✔️ Role Descriptions:</h3>
  <pre><code>
{
  "${UserRole.admin}": "${RoleDescription[UserRole.admin]}",
  "${UserRole.editor}": "${RoleDescription[UserRole.editor]}",
  "${UserRole.guest}": "${RoleDescription[UserRole.guest]}"
}
  </code></pre>
`;

    // SECTION generics/6.ts
    const formParams = generics6();

    document.body.innerHTML += `
  <h2>generics/6.ts</h2>
  <pre><code>
<span class="keyword">type</span> Errors = {
  email?: <span class="keyword">string</span>[];
  firstName?: <span class="keyword">string</span>[];
  lastName?: <span class="keyword">string</span>[];
  phone?: <span class="keyword">string</span>[];
};

<span class="keyword">type</span> Form = {
  email: <span class="keyword">string</span> | <span class="null">null</span>;
  firstName: <span class="keyword">string</span> | <span class="null">null</span>;
  lastName: <span class="keyword">string</span> | <span class="null">null</span>;
  phone: <span class="keyword">string</span> | <span class="null">null</span>;
  errors: Errors;
};

<span class="comment">// 'errors' is removed using Omit</span>
<span class="keyword">type</span> Params = Omit&lt;Form, <span class="string">'errors'</span>&gt;;

<span class="keyword">const</span> formParams: Params = {
  email: <span class="string">'${formParams.email}'</span>,
  firstName: <span class="string">'${formParams.firstName}'</span>,
  lastName: <span class="string">'${formParams.lastName}'</span>,
  phone: <span class="string">'${formParams.phone}'</span>
};
  </code></pre>

  <h3>✔️ Returned Params object:</h3>
  <pre><code>
{
  "email": "${formParams.email}",
  "firstName": "${formParams.firstName}",
  "lastName": "${formParams.lastName}",
  "phone": "${formParams.phone}"
}
  </code></pre>
`;
  } catch (error) {
    document.body.innerHTML += `
      <h2>generics/1.ts</h2>
      <p style="color:red;">❌ Error loading todo: ${error}</p>
    `;
  }
}

runApp().catch(error => {
  document.body.innerHTML += `<p style="color:red;">❌ Unexpected error: ${error}</p>`;
});
