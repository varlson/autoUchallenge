"use client";
import React, { useEffect, useState } from "react";
import { Text } from "../ui/text";
import { ClassificationResponse } from "@/types/type";

type TypingTextProps = ClassificationResponse & {
  speed?: number;
};

export default function OutputOutput({
  customResponse,
  classification,
  speed = 50,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Limpa o texto imediatamente

    let index = 0;

    const interval = setInterval(() => {
      if (index < customResponse.length) {
        setDisplayedText(customResponse.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [customResponse, speed]);

  return (
    <div>
      <Text
        color={"offWhite"}
        className={` ${
          classification.toLowerCase() == "produtivo" ? "bg-success" : "bg-info"
        }  text-center py-3`}
        size={"displaySmall"}
      >
        {classification}
      </Text>
      <Text size={"bodyLarge"} className=" whitespace py-8 px-4">
        {displayedText}
      </Text>
    </div>
  );
}
