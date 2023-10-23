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
export type Store = {
  id: string;
  SupplierName: string;
  category: string;
  type: string;
  sign: string;
  color: string;
  length: number;
  width: number;
  quantity: number;
  squareMeter: number;
};

export const storeColumns: ColumnDef<Store>[] = [
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
                navigator.clipboard.writeText(payment.SupplierName)
              }
            >
              Copy supplier name
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
    accessorKey: "type",
    header: "النوع",
  },
  {
    accessorKey: "sign",
    header: "الرسمة",
  },
  {
    accessorKey: "color",
    header: "اللون",
  },
  {
    accessorKey: "squareMeter",
    header: () => <div className="text-center">المتر المربع</div>,
    cell: ({ row }) => {
      const square = parseFloat(row.getValue("squareMeter"));
      const formatted = new Intl.NumberFormat("en-US").format(square) + " m²";

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "width",
    header: "العرض",
  },
  {
    accessorKey: "length",
    header: "الطول",
  },
  {
    accessorKey: "quantity",
    header: "العدد",
  },
  {
    accessorKey: "category",
    header: "الصنف",
  },
  {
    accessorKey: "SupplierName",
    header: "اسم المورد",
  },
];
