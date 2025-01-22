"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const LogOutButton = () => {
  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <Button variant="default" onClick={handleLogOut}>
      LogOut
    </Button>
  );
};
