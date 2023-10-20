import Returnsbtns from "@/components/Returnsbtns";
import { type TableReturnsClients, columns } from "@/components/ui/table/returns/clients/clients";
import { DataTable } from "@/components/ui/table/returns/clients/clients-table";

import React from "react";

const TableReturnsClients = () => {
  return (
    <div>
     <div className="flex justify-between flex-row-reverse items-center px-11"> <div className="flex flex-col items-end py-5 ">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المشتريات
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المنتوجات الخاصة بك هنا
        </p>
      </div>
      <Returnsbtns />
     </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableReturnsClients;

const data: TableReturnsClients[] = [
  {
    name: "said",
    tarikhirjaa: "21/12/2020",
    raqamirjaa: "123",
    sinf: "sinf",
    nawaa: "nawaa",
    rasma: "rasma",
    lawn: "black",
    tol: 12,
    aard: 32,
    aadad: 3,
    metrmoraba: 56,
    tamanmetr: 65
  },
  {
    name: "hamid",
    tarikhirjaa: "21/12/2020",
    raqamirjaa: "123",
    sinf: "sinf",
    nawaa: "nawaa",
    rasma: "rasma",
    lawn: "black",
    tol: 12,
    aard: 32,
    aadad: 3,
    metrmoraba: 56,
    tamanmetr: 65
  },

];
