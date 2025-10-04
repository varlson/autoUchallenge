"use client";
import Container from "@/components/layout/container";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import UseAnimations from "react-useanimations";

export default function NotFound() {
  return (
    <div className=" h-[calc(100vh-72px)] bg-gradient-to-b pt-10 from-off-white-100 to-primary-200">
      <Container className=" flex-col items-center h-full justify-center">
        <div className="flex flex-col items-center">
          <UseAnimations
            strokeColor="#552583"
            size={100}
            animation={alertTriangle}
          />
          <div className="flex gap-x-1 mb-2">
            <Text
              color={"secondary"}
              weight={"extrabold"}
              size={"displayLarge"}
            >
              Oops!
            </Text>
            <Text color={"primary"} weight={"extrabold"} size={"displayLarge"}>
              404
            </Text>
          </div>
        </div>
        <Text size={"titleMedium"}>Esta página ainda está em contrstrução</Text>
        <Text>
          <Link
            className="underline decoration-2 decoration-secondary"
            href="/"
          >
            Volta para início
          </Link>
        </Text>
      </Container>
    </div>
  );
}
