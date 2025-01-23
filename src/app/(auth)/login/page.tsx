import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn, auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { Logo } from "@/appComponents/Logo/Logo";

async function LoginPage() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="bg-primaryPeach h-screen w-screen flex flex-col justify-center items-center">
      <div className="h-3/4 w-96 bg-white rounded-lg p-5 flex flex-col justify-center items-center">
        <Logo />

        <h1 className="font-bold text-2xl">Welcome to Notes</h1>

        <h3 className="text-gray-400">Please log in to continue</h3>

        {/* NOTE CREDENTIALS */}

        <form></form>

        <span className="text-gray-400">Or log in with:</span>

        {/* NOTE Button group */}
        <div className="flex w-full justify-evenly">
          {/* GitHub */}

          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button
              variant="default"
              className="flex items-center justify-center"
            >
              <FaGithub />
              GitHub
            </Button>
          </form>

          {/* Google */}
          <Button
            variant="default"
            className="flex items-center justify-center"
          >
            <FcGoogle />
            Google
          </Button>
        </div>

        <div className="mt-4">
          No account yet?{" "}
          <Link href={"/register"} className="text-pirmaryPurple font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
