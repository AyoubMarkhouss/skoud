import {
  type returnClients,
  returnClientsColumns,
} from "@/components/ui/table/returns/clients/returnClients";
import { DataTable } from "@/components/ui/table/returns/clients/returnClients-table";
import React from "react";
import Returnsbtns from "@/components/Returnsbtns";

const clients = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-5 ">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              رجوعات الزبائن
            </h3>
            <p className="leading-7 text-muted-foreground">
              يمكنك العثور على قائمة رجوعات الزبائن هنا
            </p>
          </div>
          <Returnsbtns />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={returnClientsColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default clients;

const data: returnClients[] = [
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
    pricePerMeter: 37,
    returnCode: "17364 172",
    returnDate: "17364 172",
    total: 34,
  },
];
