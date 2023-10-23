import {
  type ReturnSuppli,
  returnSuppliColumns,
} from "@/components/ui/table/returns/suppliers/returnSuppli";
import { DataTable } from "@/components/ui/table/purchases/purchases-table";
import React from "react";
import Returnsbtns from "@/components/Returnsbtns";

const suppliers = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-5 ">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              رجوعات الموردين
            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة رجوعات الموردين هنا
            </p>
          </div>
          <Returnsbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={returnSuppliColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default suppliers;

const data: ReturnSuppli[] = [
  {
    id: "728ed52f",
    supplierName: "ayman elgad",
    category: "cate",
    color: "marwan",
    length: 45,
    sign: "hi",
    pricePerMeter: 34,
    quantity: 0,
    width: 20,
    returnCode: "30",
    squareMeter: 10,
    returnDate: "12/05/2023",
    total: 45,
    type: "j",
  },
];
