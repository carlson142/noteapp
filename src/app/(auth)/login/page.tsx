import { FaFeatherPointed } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="bg-primaryPeach h-screen w-screen flex flex-col justify-center items-center">
      <div className="h-3/4 w-96 bg-white rounded-lg p-5 flex flex-col justify-center items-center">
        <div className="flex items-center text-2xl">
          <FaFeatherPointed className="text-primaryDarkViolet" />
          <span className="ml-1 font-macondo">Notes</span>
        </div>

        <h1 className="font-bold text-2xl">Welcome to Notes</h1>

        <h3 className="text-gray-400">Please log in to continue</h3>

        <span className="text-gray-400">Or log in with:</span>

        {/* NOTE Button group */}
        <div className="flex w-full justify-evenly">
          {/* GitHub */}
          <Button
            variant="default"
            className="flex items-center justify-center"
          >
            <FaGithub />
            GitHub
          </Button>

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
