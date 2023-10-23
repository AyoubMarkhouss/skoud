import PayMethbtns from "@/components/PayMethbtns";
import React from "react";
import { type Bank, bankColumns } from "@/components/ui/table/money/bank/bank";
import { DataTable } from "@/components/ui/table/money/bank/bank-table";

const bank = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row-reverse items-center justify-between px-10 pt-5">
          <div className="flex flex-col items-end">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              رجوعات الزبائن
            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة رجوعات الزبائن هنا
            </p>
          </div>
          <PayMethbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={bankColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default bank;

const data: Bank[] = [
  {
    id: "728ed52f",
    bankName: "ayman",
    checkCode: "ayman",
    city: "ayman",
    clientName: "ayman",
    name: "ayman",
    payCheckDate: "ayman",
    paymentCode: "ayman",
    paymentDate: "ayman",
    paymentMethod: "ayman",
    price: "ayman",
  },
];
