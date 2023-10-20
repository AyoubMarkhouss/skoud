import { type Tableclients, columns } from "@/components/ui/table/clients/clients";
import { DataTable } from "@/components/ui/table/clients/clients-table";
import React from "react";

const clients = () => {
  return (
    <div>
      <div className="flex flex-col items-end pr-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          وضعية الزبائن
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

export default clients;

const data: Tableclients[] = [
  {
    name: "hamid",
    tarikhtaslim: "25/4/2012",
    raqamtaslim: "1245",
    mablagh: 2500,
    raqamdafaa: 132,
    tarikhdafaa: "12/12/2023",
    dafaa: 2600,
    lbaqi: 100,
  },{
    name: "said",
    tarikhtaslim: "25/4/2012",
    raqamtaslim: "95",
    mablagh: 5000,
    raqamdafaa: 192,
    tarikhdafaa: "11/12/2023",
    dafaa: 6000,
    lbaqi: 1000,
  },{
    name: "hamid",
    tarikhtaslim: "25/4/2012",
    raqamtaslim: "1245",
    mablagh: 2500,
    raqamdafaa: 132,
    tarikhdafaa: "12/12/2023",
    dafaa: 2600,
    lbaqi: 100,
  },{
    name: "said",
    tarikhtaslim: "25/4/2012",
    raqamtaslim: "95",
    mablagh: 5000,
    raqamdafaa: 192,
    tarikhdafaa: "11/12/2023",
    dafaa: 6000,
    lbaqi: 1000,
  },
];
