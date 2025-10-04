import React from "react";
import { Text } from "./text";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center">
      <div className="flex">
        <Text weight={"bold"} size={"displayMedium"}>
          Foco
        </Text>
        <Text color={"secondary"} weight={"bold"} size={"displayMedium"}>
          Mail
        </Text>
      </div>
      <Text
        className="tracking-[1px] md:tracking-[2px] lg:tracking-[3px]"
        size={"bodyMedium"}
      >
        FOCO NO QUE IMPORTA
      </Text>
    </Link>
  );
}

export default Logo;
