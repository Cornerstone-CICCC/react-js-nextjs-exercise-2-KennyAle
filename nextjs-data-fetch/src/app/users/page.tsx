import Link from "next/link";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
}

const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    next: {
      revalidate: 120,
    },
  });
  const data = await res.json();
  return data.users;
};

const page = async () => {
  const users: User[] = await fetchUsers();
  return (
    <main className="w-full min-h-screen">
      <h1 className="text-xl font-bold text-center mb-3">Users page</h1>
      <ul className="w-full flex flex-col items-center justify-center gap-2 font-semibold">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default page;
