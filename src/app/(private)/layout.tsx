import { LayoutProps } from "@/lib/types";

const PrivateLayout = async ({ children }: LayoutProps) => {
  //   const session = await auth.api.getSession({
  //     headers: await headers(),
  //   });

  //   if (!session) {
  //     return redirect("/logIn");
  //   }

  return <main>{children}</main>;
};

export default PrivateLayout;
