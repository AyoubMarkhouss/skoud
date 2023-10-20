import { type Tablepurchases, columns } from "@/components/ui/table/purchases/purchases";
import { DataTable } from "@/components/ui/table/purchases/purchases-table";
import React from "react";

const purchases = () => {
  return (
    <div>
      <div className="flex flex-col items-end pr-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المشتريات
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

export default purchases;

const data: Tablepurchases[] = [
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
  },
  {
    name: "imad",
    tareekh: "20/12/2023",
    raqam: "68",
    sanf: "zarbi",
    nawaa: "harir",
    rasmah: "mora",
    lawn: "white",
    toul: 115,
    aard: 156,
    adad: 44,
    metrmorabaa: 78,
    metrprice: 1330
  },

];
