"use client";

import { type ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import More from "@/components/icons/More";
import { Button } from "@/components/ui/button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type suppliersStu = {
  id: string;
  supplierName: string;
  deliveryDate: string;
  deliveryCode: string;
  price: string;
  priceCode: string;
  payDate: string;
  payment: number;
  rest: number;
};

export const suppliersStuColumns: ColumnDef<suppliersStu>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <More className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(payment.supplierName)
              }
            >
              Copy delivery number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "rest",
    header: "الباقي",
  },
  {
    accessorKey: "payment",
    header: "الدفع",
  },
  {
    accessorKey: "payDate",
    header: "تاريخ الدفع",
  },
  {
    accessorKey: "priceCode",
    header: "رقم الدفع",
  },
  {
    accessorKey: "price",
    header: "المبلغ",
  },
  {
    accessorKey: "deliveryCode",
    header: "رقم التسليم",
  },
  {
    accessorKey: "deliveryDate",
    header: "تاريخ التسليم",
  },
  {
    accessorKey: "supplierName",
    header: "اسم المورد",
  },
];
