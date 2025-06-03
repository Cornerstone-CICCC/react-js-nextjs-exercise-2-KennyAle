import { User } from "../page";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data: User = await res.json();
  return (
    <main className="w-full min-h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-xl font-bold">
        {data.firstName} {data.lastName}
      </h1>
      <h2 className="text-lg font-semibold">Age: {data.age}</h2>
      <h2 className="text-lg font-semibold">Gender: {data.gender}</h2>
      <h2 className="text-md font-semibold">{data.email}</h2>
    </main>
  );
};

export default page;
