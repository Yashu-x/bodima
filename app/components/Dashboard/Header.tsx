import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import DotsLoader from "../layout/DotsLoader";

function Header() {
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-600 text-white px-6 py-4 flex items-center justify-between">
      {status === "loading" ? (
        <DotsLoader />
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarImage src={session?.user.image || ""} alt="Profile" />
              <AvatarFallback className="text-black">
                {session?.user.name}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xl font-semibold">{session?.user.name}</div>
              <div className="text-m text-gray-300">{session?.user.email}</div>
            </div>
          </div>
          <Button
            variant="secondary"
            className="text-sm"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </>
      )}
    </div>
  );
}

export default Header;
