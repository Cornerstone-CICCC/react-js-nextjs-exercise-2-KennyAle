import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex justify-around p-2 font-bold text-lg underline">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Header;
