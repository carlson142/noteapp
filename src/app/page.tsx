import { redirect } from "next/navigation";
import { auth } from "./auth";
import { signOut } from "next-auth/react";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      Home page
      {/* TODO: FIX ME!!! зробити окремим компонентом, бо б'є помилку */}
      <button>Sign Out</button>
    </div>
  );
}
