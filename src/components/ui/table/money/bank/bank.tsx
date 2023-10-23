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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Bank = {
  id: string;
  clientName: string;
  paymentDate: string;
  paymentCode: string;
  price: string;
  paymentMethod: string;
  name: string;
  bankName: string;
  checkCode: string;
  city: string;
  payCheckDate: string;
};

export const bankColumns: ColumnDef<Bank>[] = [
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
    accessorKey: "payCheckDate",
    header: "تاريخ الدفع",
  },
  {
    accessorKey: "city",
    header: "المدينة",
  },
  {
    accessorKey: "checkCode",
    header: "رقمه",
  },
  {
    accessorKey: "bankName",
    header: "اسم البنك",
  },
  {
    accessorKey: "name",
    header: "اسم",
  },
  {
    accessorKey: "paymentMethod",
    header: "طريقة الدفع",
  },
  {
    accessorKey: "price",
    header: "المبلغ",
  },
  {
    accessorKey: "paymentDate",
    header: "رقم الأداء",
  },
  {
    accessorKey: "paymentDate",
    header: "تاريخ الأداء",
  },
  {
    accessorKey: "clientName",
    header: "اسم الزبون",
  },
];
