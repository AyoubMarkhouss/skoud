import React from "react";

const expenses = () => {
  return (
    <div>
      <div className="flex flex-col items-end px-10 pt-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          المصاريف
        </h3>
        <p className="leading-7 text-muted-foreground">
          يمكنك العثور على قائمة المصاريف هنا
        </p>
      </div>
      <div className="mt-20 flex justify-center">
        <table className="table-auto">
          <thead>
            <tr className="border-b">
              <th className="border-l border-r border-t">تاريخ</th>
              <th className="w-40 border-r border-t text-center">المبلغ</th>
              <th className="w-40 border-r border-t text-end">النوع</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="w-40 border-l border-r text-center">20/11/2023</td>
              <td className="w-40 border-r text-center">5</td>
              <td className="w-40 border-r text-end">كراء المخازن</td>
            </tr>
            <tr className="border-b">
              <td className="w-40 border-l border-r text-center">20/11/2023</td>
              <td className="w-40 border-r text-center">15</td>
              <td className="w-40 border-r text-end">محروقات</td>
            </tr>
            <tr>
              <td className="w-40 border-b border-l border-r text-center">
                20/11/2023
              </td>
              <td className="w-40 border-r text-center">15</td>
              <td className="w-40 border-b border-r text-end">
                الماء و الكهرباء
              </td>
            </tr>
            <tr>
              <td className="border-r"></td>
              <td className="w-40 border-b border-r border-t text-center">
                35
              </td>
              <td className="text-end"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default expenses;
