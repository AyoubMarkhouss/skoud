"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PayMethbtns = () => {
  const router = usePathname();
  return (
    <div className="flex justify-end gap-2 pr-[2rem]">
      <Link href={"/money/safe"}>
        <Button variant={router === `/money/safe` ? "secondary" : "outline"}>
          رجوعات الزبائن
        </Button>
      </Link>
      <Link href={"/money/bank"}>
        <Button variant={router !== `/money/safe` ? "secondary" : "outline"}>
          رجوعات الموردين
        </Button>
      </Link>
    </div>
  );
};

export default PayMethbtns;
