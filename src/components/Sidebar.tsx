import React from "react";
import { Button } from "./ui/button";
import { LinksData } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const router = usePathname();

  return (
    <div className="right-0 z-50 hidden min-h-screen w-[20rem] bg-[#161042] text-white xl:flex">
      <div className="fixed flex w-[20rem] flex-col items-center">
        <h1 className="pt-7 text-4xl">SKOUD</h1>
        <div className="mt-7 flex w-full flex-col gap-5 px-10">
          {LinksData.map((link) => {
            return (
              <Link href={link.path} key={link.path}>
                <Button
                  className="w-full"
                  variant={
                    router.split("/")[1] === link.path.split("/")[1]
                      ? "secondary"
                      : "outline"
                  }
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
