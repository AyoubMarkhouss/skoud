// import { type Payment, columns } from "@/components/ui/table/purchases";
// import { DataTable } from "@/components/ui/table/purchases-table";
import React from "react";
const stores = () => {
  return (
    <div>
      <div className="flex flex-col items-end pr-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المخازن
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على الإحصائيات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
  );
};

export default stores;

// const data: Payment[] = [
//   {
//     id: "728ed52f",
//     SupplierName: "ayoub",
//     category: "marwan",
//     type: "turkish",
//     sign: "hi",
//     color: "red",
//     length: 0,
//     width: 20,
//     quantity: 30,
//     squareMeter: 10,
//     deliveryDate: "12/05/2023",
//     deliveryNumber: "17364 172",
//   },
//   {
//     id: "728ed52f",
//     SupplierName: "salma",
//     category: "karim",
//     type: "turkish",
//     sign: "hi",
//     color: "red",
//     length: 0,
//     width: 20,
//     quantity: 30,
//     squareMeter: 10,
//     deliveryDate: "12/05/2023",
//     deliveryNumber: "17364 172",
//   },
//   {
//     id: "728ed52f",
//     SupplierName: "houssin",
//     category: "ayman",
//     type: "turkish",
//     sign: "hi",
//     color: "red",
//     length: 0,
//     width: 20,
//     quantity: 30,
//     squareMeter: 10,
//     deliveryDate: "12/05/2023",
//     deliveryNumber: "17364 172",
//   },
//   {
//     id: "728ed52f",
//     SupplierName: "marwa",
//     category: "iman",
//     type: "turkish",
//     sign: "hi",
//     color: "red",
//     length: 0,
//     width: 20,
//     quantity: 30,
//     squareMeter: 10,
//     deliveryDate: "12/05/2023",
//     deliveryNumber: "17364 172",
//   },
//   {
//     id: "728ed52f",
//     SupplierName: "ayman",
//     category: "hamza",
//     type: "turkish",
//     sign: "hi",
//     color: "red",
//     length: 0,
//     width: 20,
//     quantity: 30,
//     squareMeter: 10,
//     deliveryDate: "12/05/2023",
//     deliveryNumber: "17364 172",
//   },
// ];
