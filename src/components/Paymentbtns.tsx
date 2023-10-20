"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Paymentbtns = () => {
  const router = usePathname();
  return (
    <div className="flex justify-end gap-2 pr-[2rem]">
      <Link href={"/payment/clients"}>
        <Button
          variant={router === `/payment/clients` ? "secondary" : "outline"}
        >
          رجوعات الزبائن
        </Button>
      </Link>
      <Link href={"/payment/suppliers"}>
        <Button
          variant={router !== `/payment/clients` ? "secondary" : "outline"}
        >
          رجوعات الموردين
        </Button>
      </Link>
    </div>
  );
};

export default Paymentbtns;
