import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center bg-sky-500 text-white">
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
      <Link href="/about">
        <Button>About</Button>
      </Link>
      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
      <Link href="/auth/register">
        <Button>Rgister</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
