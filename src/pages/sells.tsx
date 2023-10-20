import { type Tablesells, columns } from "@/components/ui/table/sells/sells";
import { DataTable } from "@/components/ui/table/sells/sells-table";
import React from "react";

const sells = () => {
  return (
    <div>
      <div className="flex flex-col items-end pr-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المبيعات
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المنتوجات الخاصة بك هنا
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default sells;

const data: Tablesells[] = [
  {
    name: "ayoub",
    tareekh: "20/12/2023",
    raqam: "69",
    sanf: "zarbi",
    nawaa: "harir",
    rasmah: "mora",
    lawn: "string",
    toul: 15,
    aard: 16,
    adad: 4,
    metrmorabaa: 9,
    metrprice: 130
  },
  {
    name: "aymen",
    tareekh: "5/12/2023",
    raqam: "19",
    sanf: "zarbi",
    nawaa: "harir",
    rasmah: "mora",
    lawn: "red",
    toul: 15,
    aard: 16,
    adad: 4,
    metrmorabaa: 9,
    metrprice: 130
  }
];
