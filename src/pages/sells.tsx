import { type Sells, sellsColumns } from "@/components/ui/table/sells/sells";
import { DataTable } from "@/components/ui/table/sells/sells-table";

import React from "react";

const sells = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-end text-center p-4 md:pr-10 md:pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المبيعات
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المنتوجات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={sellsColumns} data={data} />
      </div>
    </div>
  );
};

export default sells;

const data: Sells[] = [
  {
    id: "728ed52f",
    clientName: "ayoub",
    category: "marwan",
    type: "turkish",
    sign: "hi",
    color: "red",
    length: 0,
    width: 20,
    quantity: 30,
    squareMeter: 10,
    deliveryCode: "",
    deliveryDate: "",
    pricePerMeter: 0,
    total: 0,
  },
];
