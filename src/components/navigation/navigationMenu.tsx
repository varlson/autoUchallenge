"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  //   NavigationMenuViewport,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigation/navigationMenuItems";
import Link from "next/link";

import { menus } from "./data";
import ListItem from "./listItem";

function NavigationContent() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex ">
        {menus.map((menu, index) =>
          typeof menu.subContent != "string" ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className=" text-xl transition-all duration-600 hover:bg-secondary text-primary hover:text-primary">
                {menu.menuLabel}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-none  left-10">
                <ul className="grid w-[400px] gap-2  md:grid-cols-2 lg:w-[500px]">
                  {menu.subContent.map((submenu, index) => (
                    <ListItem
                      key={index}
                      title={submenu.title}
                      href={submenu.link}
                    >
                      {submenu.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()}  text-xl transition-all duration-600 hover:bg-secondary text-primary hover:text-primary`}
              >
                <Link href={menu.subContent}>{menu.menuLabel}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationContent;
