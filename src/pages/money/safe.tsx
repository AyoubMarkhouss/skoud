import PayMethbtns from "@/components/PayMethbtns";
import React from "react";
import { type Safe, safeColumns } from "@/components/ui/table/money/safe/safe";
import { DataTable } from "@/components/ui/table/money/safe/safe-table";

const safe = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-5">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            الخزينة             </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على الخزينة هنا
            </p>
          </div>
          <PayMethbtns />
        </div>
        <div className="flex justify-center">
          <table className="mt-20 table-auto">
            <tbody>
              <tr>
                <td className="border px-20">1557</td>
                <td className="border bg-pink-500/25 pl-14 pr-5 text-end">
                  شيكات
                </td>
              </tr>
              <tr>
                <td className="border px-20">62789</td>
                <td className="border bg-pink-500/25 pl-14 pr-5 text-end">
                  كمبالات
                </td>
              </tr>
              <tr>
                <td className="border px-20">1469</td>
                <td className="border bg-pink-500/25 pl-14 pr-5 text-end">
                  نقد
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={safeColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default safe;

const data: Safe[] = [
  {
    id: "728ed52f",
    clientName: "string",
    paymentDate: "string",
    paymentCode: "string",
    price: "string",
    paymentMethod: "string",
    name: "string",
    bankName: "string",
    checkCode: "string",
    city: "string",
    payCheckDate: "string",
  },
];
