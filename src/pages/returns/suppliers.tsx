import { type TableReturnsSuppliers, columns } from "@/components/ui/table/returns/suppliers/suppliers";
import { DataTable } from "@/components/ui/table/returns/suppliers/suppliers-table";
import React from "react";
import Returnsbtns from "@/components/Returnsbtns";

const TableReturnsSuppliers = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row-reverse items-center justify-between px-11 py-5">
          <div className="flex flex-col items-end">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              رجوعات الموردين
            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة رجوعات الموردين هنا
            </p>
          </div>
          <Returnsbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default TableReturnsSuppliers;

const data: TableReturnsSuppliers[] = [
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
];
