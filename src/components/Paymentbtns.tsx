"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Paymentbtns = () => {
  const router = usePathname();
  return (
    <div className="flex gap-2 pt-3 justify-between  ">
      <Link href={"/payment/clients"}>
        <Button
          variant={router === `/payment/clients` ? "secondary" : "outline"}
        >
        أداءات الزبائن       
          </Button>
      </Link>
      <Link href={"/payment/suppliers"}>
        <Button
          variant={router !== `/payment/clients` ? "secondary" : "outline"}
        >
           أداءات الموردين        
      </Button>
      </Link>
    </div>
  );
};

export default Paymentbtns;
