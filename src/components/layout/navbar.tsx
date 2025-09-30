import Image from "next/image";
import React from "react";
import Container from "./container";
import NavigationMenu from "../navigation/navigationMenu";
import Logo from "../ui/logo";

function Navbar() {
  return (
    <Container>
      <div className="flex  flex-1 items-center">
        <div className=" flex justify-start">
          {/* <Image height={200} width={200} alt="logo" src={"/logo.png"} /> */}
          <Logo />
        </div>
        <div className="flex-1 flex justify-center gap-x-4 ">
          <NavigationMenu />
        </div>
        <div className="border-2 border-secondary flex items-center  justify-center rounded-full h-14 w-14">
          <Image
            className="min-h-8 w-8 object-cover"
            height={200}
            width={200}
            alt="logo"
            src={"/Profile.png"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
