import Paymentbtns from "@/components/Paymentbtns";
import {
  type PaymSuppli,
  paymSuppliColumns,
} from "@/components/ui/table/payement/suppliers/paymSuppli";
import { DataTable } from "@/components/ui/table/payement/suppliers/paymSuppli-table";
import React from "react";

const suppliers = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-5">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            أداءات الموردين            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة أداءات الموردين هنا
            </p>
          </div>
          <Paymentbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={paymSuppliColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default suppliers;

const data: PaymSuppli[] = [
  {
    id: "728ed52f",
    paymentCode: "5353",
    paymentDate: "5353",
    paymentMethod: "5353",
    supplierName: "ayman",
  },
];
