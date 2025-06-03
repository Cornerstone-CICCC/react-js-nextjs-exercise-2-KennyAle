import { User } from "@/app/users/page";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data: User = await res.json();
  return (
    <section className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Id: {data.id}</h2>
        <h2 className="text-xl font-bold">Firstname: {data.firstName}</h2>
        <h2 className="text-xl font-bold">Lastname: {data.lastName}</h2>
        <div className="flex justify-between">
          <a
            href="/users"
            className="border-1 px-2 mt-1 inline-block rounded-md shadow-md"
          >
            Close
          </a>
          <a
            href={`/users/${data.id}`}
            className="border-1 px-2 mt-1 inline-block rounded-md shadow-md"
          >
            View Full User Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
