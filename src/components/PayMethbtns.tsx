"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PayMethbtns = () => {
  const router = usePathname();
  return (
    <div className="flex gap-2 pt-3 justify-between  ">
      <Link href={"/money/safe"}>
        <Button variant={router === `/money/safe` ? "secondary" : "outline"}>
        الخزينة       
         </Button>
      </Link>
      <Link href={"/money/bank"}>
        <Button variant={router !== `/money/safe` ? "secondary" : "outline"}>
        الأبناك       
         </Button>
      </Link>
    </div>
  );
};

export default PayMethbtns;
