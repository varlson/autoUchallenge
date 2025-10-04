import Link from "next/link";
import { NavigationMenuLink } from "./navigationMenuItems";

export default function ListItem({
  title,
  children,
  href,
  isMobile = false,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  isMobile?: boolean;
}) {
  return (
    <li {...props}>
      {isMobile ? (
        <div className="">
          <Link
            className="hover:bg-secondary hover:text-white  transition-all duration-150 "
            href={href}
          >
            <div className=" hover:text-primary text-sm leading-none font-medium">
              {title}
            </div>
            <p className=" hover:text-primary line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </div>
      ) : (
        <NavigationMenuLink asChild>
          <Link
            className="hover:bg-secondary hover:text-white transition-all duration-150 "
            href={href}
          >
            <div className="text- text-sm leading-none font-medium">
              {title}
            </div>
            <p className="text- line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      )}
    </li>
  );
}
