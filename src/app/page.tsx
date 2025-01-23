import { redirect } from "next/navigation";
import { auth } from "./auth";
import { LogOutButton } from "@/appComponents/LogOutButton/LogOutButton";
import { Logo } from "@/appComponents/Logo/Logo";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-primaryPeach">
      <nav className="flex items-center self-center justify-between w-4/5 p-4 mt-2 bg-white rounded-xl">
        <Logo />
        <span>Hello, {session.user?.name}!</span>
        <LogOutButton />
      </nav>
      Home page
    </div>
  );
}
