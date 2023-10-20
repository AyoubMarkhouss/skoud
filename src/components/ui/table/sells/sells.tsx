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
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tablesells = {
    name: string,
    tareekh: string,
    raqam: string,
    sanf: string,
    nawaa: string,
    rasmah: string,
    lawn: string,
    toul: number,
    aard: number,
    adad: number,
    metrmorabaa: number,
    metrprice: number,
  
  
}

export const columns: ColumnDef<Tablesells>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const Tablesells = row.original;

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
                navigator.clipboard.writeText(Tablesells.raqam)
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
    accessorKey: "metrprice",
    header: "ثمن المتر",
  },
  {
    accessorKey: "metrmorabaa",
    header: "المتر المربع",
  },
  {
    accessorKey: "adad",
    header: "العدد",
  },
  {
    accessorKey: "aard",
    header: "العرض",
  },
  {
    accessorKey: "toul",
    header: "الطول",
  },
  {
    accessorKey: "lawn",
    header: "اللون",
  },
  {
    accessorKey: "rasmah",
    header: "الرسمة",
  },
  {
    accessorKey: "nawaa",
    header: "النوع",
  },
  {
    accessorKey: "sanf",
    header: "الصنف",
  },
  {
    accessorKey: "raqam",
    header:"رقم التسليم" ,
  },
  {
    accessorKey: "tareekh",
    header: "تاريخ التسليم",
  },
  {
    accessorKey: "name",
    header: "اسم المورد",
  }
];