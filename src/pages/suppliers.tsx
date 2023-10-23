import {
  type suppliersStu,
  suppliersStuColumns,
} from "@/components/ui/table/situation/suppliers/suppliersSetu";
import { DataTable } from "@/components/ui/table/purchases/purchases-table";
import React from "react";

const suppliers = () => {
  return (
    <div>
      <div className="flex flex-col items-end pr-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          وضعية الموردين
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المنتوجات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={suppliersStuColumns} data={data} />
      </div>
    </div>
  );
};

export default suppliers;

const data: suppliersStu[] = [
  {
    id: "728ed52f",
    deliveryCode: "26363 GF",
    deliveryDate: "DHD JDJS",
    payDate: "JDJDJ",
    payment: 0,
    price: "PRICE",
    priceCode: "PRICE CODE",
    rest: 5,
    supplierName: "name",
  },
];
