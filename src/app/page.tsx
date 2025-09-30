"use client";
import Container from "@/components/layout/container";
import FileUoload from "@/components/ui/fileUoload";
import Spinner from "@/components/ui/spiner";
import { Text } from "@/components/ui/text";
import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-off-white-50 to-primary-100 min-h-screen">
      <Container className="justify-center">
        <>
          <FileUoload />
        </>
      </Container>
    </div>
  );
}
