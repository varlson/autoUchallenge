import React from "react";
import { Text } from "./text";

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <Text weight={"bold"} size={"displayMedium"}>
          Foco
        </Text>
        <Text color={"secondary"} weight={"bold"} size={"displayMedium"}>
          Mail
        </Text>
      </div>
      <Text className="tracking-[3px]" size={"bodyMedium"}>
        FOCO NO QUE IMPORTA
      </Text>
    </div>
  );
}

export default Logo;
