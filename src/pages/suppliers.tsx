import { type Tablesuppliers, columns } from "@/components/ui/table/suppliers/suppliers";
import { DataTable } from "@/components/ui/table/suppliers/suppliers-table";
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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default suppliers;

const data: Tablesuppliers[] = [
  {
    name: "samir",
    tarikhtaslim: "21/12/2023",
    raqamtaslim: "56",
    mablagh: 2300,
    raqamdafaa: 65,
    tarikhdafaa: "12/12/2020",
    dafaa: 2500,
    lbaqi: 300,

  },
  {
    name: "said",
    tarikhtaslim: "21/12/2023",
    raqamtaslim: "56",
    mablagh: 500,
    raqamdafaa: 65,
    tarikhdafaa: "12/12/2020",
    dafaa: 25500,
    lbaqi: 3200,

  },{
    name: "farid",
    tarikhtaslim: "21/12/2023",
    raqamtaslim: "45",
    mablagh: 200,
    raqamdafaa: 5,
    tarikhdafaa: "12/12/2020",
    dafaa: 200,
    lbaqi: 30,

  },
];
