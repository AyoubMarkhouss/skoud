import React from "react";
import { Button } from "./ui/button";
import { LinksData } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Burger from "./icons/Burger";
const Topbar = () => {
  return (
    <div className="fixed top-0 z-30 flex w-full items-center justify-between border-b bg-white px-5 py-3">
      <Button variant="outline">اللغة</Button>
      <SheetCom />
    </div>
  );
};

export default Topbar;

const SheetCom = () => {
  const router = usePathname();
  return (
    <div className="z-40 flex xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Burger className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>SKOUD</SheetTitle>
          </SheetHeader>
          <div className="flex min-h-screen text-black">
            <div className="flex w-full flex-col items-center">
              <div className="mt-7 flex w-full flex-col gap-5">
                {LinksData.map((link) => {
                  return (
                    <SheetClose key={link.path} asChild>
                      <Link href={link.path}>
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
                    </SheetClose>
                  );
                })}
              </div>
              <div></div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
