import LoginForm from "@/components/Forms/LoginForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - AuthDemo",
  description: "Login Page of AuthDemo",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader className="">
          <CardTitle className="text-center text-2xl">LogIn</CardTitle>
        </CardHeader>

        <LoginForm />
      </Card>
    </section>
  );
};

export default page;
