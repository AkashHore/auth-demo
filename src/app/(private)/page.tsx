import Header from "@/components/Layout/Header";
import LogOutButton from "@/components/LogOutButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth-Demo",
  description: "Auth Demonstration Project",
};

const page = () => {
  return (
    <>
      <Header />

      <main className="grid h-dvh place-items-center">
        <section className="space-y-4 text-center">
          <h1 className="text-5xl font-semibold">Welcome User</h1>

          <LogOutButton />
        </section>
      </main>
    </>
  );
};

export default page;
