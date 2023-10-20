"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Returnsbtns = () => {
  const router = usePathname();
  return (
    <div className="flex justify-end gap-2 pr-[2rem]">
      <Link href={"/returns/clients"}>
        <Button
          variant={router === `/returns/clients` ? "secondary" : "outline"}
        >
          رجوعات الزبائن
        </Button>
      </Link>
      <Link href={"/returns/suppliers"}>
        <Button
          variant={router !== `/returns/clients` ? "secondary" : "outline"}
        >
          رجوعات الموردين
        </Button>
      </Link>
    </div>
  );
};

export default Returnsbtns;
