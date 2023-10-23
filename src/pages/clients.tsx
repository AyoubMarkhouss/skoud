import {
  type ClientsStu,
  clientsStuColumns,
} from "@/components/ui/table/situation/clients/clientSetu";
import { DataTable } from "@/components/ui/table/situation/clients/clientSetu-table";
import React from "react";

const clients = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-end text-center p-4 md:pr-10 md:pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          وضعية الزبائن
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المنتوجات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={clientsStuColumns} data={data} />
      </div>
    </div>
  );
};

export default clients;

const data: ClientsStu[] = [
  {
    id: "728ed52f",
    clientName: "name",
    deliveryCode: "name",
    deliveryDate: "name",
    payDate: "name",
    payment: 0,
    price: "name",
    priceCode: "name",
    rest: 0,
  },
];
