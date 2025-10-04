"use client";
import React, { useState } from "react";
import Container from "./container";
import NavigationMenu from "../navigation/navigationMenu";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import Avatar from "../ui/avatar";
import NavigationMenuMobile from "../navigation/navigationMenuMobile";

function Navbar() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const logOutHandle = () => {
    setIsAuth(false);
  };
  return (
    <Container>
      <div className="w-full flex flex-col">
        <div className="flex-wrap flex  flex-1 items-center justify-between ">
          <div className=" flex justify-start">
            <Logo />
          </div>
          <div className="flex-1 hidden lg:flex justify-center gap-x-4 ">
            <NavigationMenu />
          </div>

          {isAuth ? (
            <Avatar setIsAuth={logOutHandle} />
          ) : (
            <Button
              onClick={() => {
                setIsAuth(true);
              }}
              className="text-primary cursor-pointer"
              size={"lg"}
              variant={"secondary"}
            >
              Entar
            </Button>
          )}
        </div>
        <div className="lg:hidden ">
          <NavigationMenuMobile />
          <p></p>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
