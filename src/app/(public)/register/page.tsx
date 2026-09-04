import RegisterForm from "@/components/Forms/RegisterForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import Link from "next/link";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader className="">
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-center gap-2">
          <span> Already have an account ?</span>
          <Link
            className="text-blue-500"
            href={"/logIn"}>
            LogIn
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
