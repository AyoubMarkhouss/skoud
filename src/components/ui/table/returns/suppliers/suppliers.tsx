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
import { Button } from "../../../button";
// import { string } from "zod";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TableReturnsSuppliers = {
  name: string,
  tarikhirjaa: string,
  raqamirjaa: string,
  sinf: string,
  nawaa: string,
  rasma: string,
  lawn: string,
  tol: number,
  aard: number,
  aadad: number,
  metrmoraba: number,
  tamanmetr: number
  
  
}

export const columns: ColumnDef<TableReturnsSuppliers>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const TableReturnsSuppliers = row.original;

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
                navigator.clipboard.writeText(TableReturnsSuppliers.raqamirjaa)
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
    accessorKey: "tamanmetr",
    header: "ثمن المتر",
  },{
    accessorKey: "metrmoraba",
    header: "المتر المربع",
  },{
    accessorKey: "aadad",
    header: "العدد",
  },{
    accessorKey: "aard",
    header: "العرض",
  },
  {
    accessorKey: "tol",
    header: "الطول ",
  },
  {
    accessorKey: "lawn",
    header: "اللون",
  },
  {
    accessorKey: "rasma",
    header: "الرسمة",
  },
  {
    accessorKey: "nawaa",
    header: "النوع",
  },
  {
    accessorKey: "sinf",
    header: "الصنف",
  },
  {
    accessorKey: "raqamirjaa",
    header:"رقم الارجاع" ,
  },
  {
    accessorKey: "tarikhirjaa",
    header: "تاريخ الارجاع",
  },
  {
    accessorKey: "name",
    header: "اسم المورد",
  },
  


  
];
