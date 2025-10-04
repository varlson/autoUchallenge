"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import Image from "next/image";

type AvatarProps = {
  setIsAuth: () => void;
};
function Avatar({ setIsAuth }: AvatarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border-2 cursor-pointer border-secondary flex items-center  justify-center rounded-full h-12 w-12">
          <Image
            className="min-h-7 w-7 cursor-pointer object-cover"
            height={200}
            width={200}
            alt="logo"
            src={"/Profile.png"}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary text-white">
        <DropdownMenuLabel className="cursor-pointer hover:bg-secondary rounded hover:text-primary">
          Minha contaa
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer hover:bg-secondary rounded hover:text-primary">
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setIsAuth();
          }}
          className="cursor-pointer hover:bg-secondary rounded hover:text-primary"
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Avatar;
