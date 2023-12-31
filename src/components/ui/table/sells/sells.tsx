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
export type Sells = {
  id: string;
  clientName: string;
  deliveryDate: string;
  deliveryCode: string;
  category: string;
  type: string;
  sign: string;
  color: string;
  length: number;
  width: number;
  quantity: number;
  squareMeter: number;
  pricePerMeter: number;
  total: number;
};

export const sellsColumns: ColumnDef<Sells>[] = [
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
              onClick={() => navigator.clipboard.writeText(payment.clientName)}
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
    accessorKey: "clientName",
    header: "المجموع",
  },
  {
    accessorKey: "pricePerMeter",
    header: "ثمن المتر",
  },
  {
    accessorKey: "squareMeter",
    header: "المتر المربع",
  },
  {
    accessorKey: "quantity",
    header: "العدد",
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
    accessorKey: "color",
    header: "اللون",
  },
  {
    accessorKey: "sign",
    header: "الرسمة",
  },
  {
    accessorKey: "type",
    header: "النوع",
  },
  {
    accessorKey: "category",
    header: "الصنف",
  },
  {
    accessorKey: "clientName",
    header: "رقم التسليم",
  },
  {
    accessorKey: "clientName",
    header: "تاريخ التسليم",
  },
  {
    accessorKey: "clientName",
    header: "اسم الزبون",
  },
];
