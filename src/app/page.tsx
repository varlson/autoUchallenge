"use client";
import SendModeSelector from "@/components/features/sendModeSelector";
import Container from "@/components/layout/container";

export default function Home() {
  return (
    <div className="pt-10  min-h-[calc(100vh-72px)]">
      <Container className="justify-center">
        <>
          <SendModeSelector />
        </>
      </Container>
    </div>
  );
}
