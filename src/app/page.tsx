import { redirect } from "next/navigation";
import { auth } from "./auth";
import { signOut } from "next-auth/react";
import { LogOutButton } from "@/appComponents/LogOutButton/LogOutButton";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="flex justify-between">
        <div>Logo</div>
        <LogOutButton />
      </nav>
      Home page
    </div>
  );
}
