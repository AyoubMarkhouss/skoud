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
import { Button } from "../../button";
// import { string } from "zod";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tableclients = {
  name: string,
  tarikhtaslim: string,
  raqamtaslim: string,
  mablagh: number,
  raqamdafaa: number,
  tarikhdafaa: string,
  dafaa: number,
  lbaqi: number,
  
  
}

export const columns: ColumnDef<Tableclients>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const Tableclients = row.original;

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
                navigator.clipboard.writeText(Tableclients.raqamtaslim)
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
    accessorKey: "lbaqi",
    header: "الباقي",
  },
  {
    accessorKey: "dafaa",
    header: "الدفع",
  },
  {
    accessorKey: "tarikhdafaa",
    header: " تاريخ الدفع",
  },
  {
    accessorKey: "raqamdafaa",
    header: "رقم الدفع",
  },
  {
    accessorKey: "mablagh",
    header: "المبلغ",
  },
  {
    accessorKey: "raqamtaslim",
    header:"رقم التسليم" ,
  },
  {
    accessorKey: "tarikhtaslim",
    header: "تاريخ التسليم",
  },
  {
    accessorKey: "name",
    header: "اسم الزبون",
  },
  


  
];
