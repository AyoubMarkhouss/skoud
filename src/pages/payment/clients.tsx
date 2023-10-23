import Paymentbtns from "@/components/Paymentbtns";
import {
  type PayClients,
  columns,
} from "@/components/ui/table/payement/clients/payClients";
import { DataTable } from "@/components/ui/table/purchases/purchases-table";
import React from "react";

const clients = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-5 ">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            أداءات الزبائن            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة أداءات الزبائن هنا
            </p>
          </div>
          <Paymentbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default clients;

const data: PayClients[] = [
  {
    id: "728ed52f",
    bankName: "cih",
    city: "casa",
    clientName: "ayman",
    codeNumber: "code number",
    consumeDate: "now",
    name: "ayman elgad",
    paymentCode: "pay code",
    paymentDate: "pay date",
    paymentMethod: "pay meth",
    price: "pri",
  },
];
