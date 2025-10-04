"use client";
import React from "react";
import menu2 from "react-useanimations/lib/menu2";
import UseAnimations from "react-useanimations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { menus } from "./data";
import ListItem from "./listItem";

function NavigationMenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <UseAnimations
            strokeColor="#552583"
            speed={2}
            animation={menu2}
            size={56}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w- bg-gradient-to-b  from-off-white-50 to-primary-100"
        align="start"
      >
        <DropdownMenuGroup>
          {menus.map((menu, menuIndex) =>
            typeof menu.subContent == "string" ? (
              <DropdownMenuItem key={menuIndex}>
                {menu.menuLabel}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={menu.menuLabel}>
                <DropdownMenuSubTrigger>
                  {menu.menuLabel}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className=" bg-gradient-to-b from-primary-100 to-primary-200 w-[240px] border-none ">
                    {menu.subContent.map((subMenu, subMenuIndex) => (
                      <ListItem
                        className="transition-all mb-1 duration-600 hover:bg-secondary  "
                        key={subMenuIndex}
                        title={subMenu.title}
                        href={subMenu.link}
                        isMobile
                      >
                        {subMenu.description}
                      </ListItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationMenuMobile;
