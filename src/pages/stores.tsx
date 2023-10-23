import { DataTable } from "@/components/ui/table/purchases/purchases-table";
import { storeColumns, type Store } from "@/components/ui/table/stores/stores";
import React from "react";
const stores = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-end text-center p-4 md:pr-10 md:pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المخازن
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على الإحصائيات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={storeColumns} data={data} />
      </div>
    </div>
  );
};

export default stores;

const data: Store[] = [
  {
    id: "728ed52f",
    SupplierName: "ayoub",
    category: "marwan",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
  },
  {
    id: "728ed52f",
    SupplierName: "salma",
    category: "karim",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
  },
  {
    id: "728ed52f",
    SupplierName: "houssin",
    category: "ayman",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
  },
  {
    id: "728ed52f",
    SupplierName: "marwa",
    category: "iman",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
  },
  {
    id: "728ed52f",
    SupplierName: "ayman",
    category: "hamza",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
  },
];
