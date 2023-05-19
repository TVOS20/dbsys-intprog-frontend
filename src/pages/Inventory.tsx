import React from "react";

const Inventory = () => {


  return (
    <>
      <div className="bg-green-200 w-full h-14 p-8 items-center flex">
        <h1 className="text-grey font-bold text-2xl">
          INVENTORY
        </h1>
      </div>
      <div className="container mx-auto mt-6">
        <div className=" text-right mb-6">
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Inventory's Table</h1>
        </div>
        <table
          cellPadding={20}
          className="text-center h-auto w-full border border-black"
        >
          <thead className="border border-black">
            <tr>
              <th>Product Code</th>
              <th>Quantity In Stock</th>
              <th>Office Code</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
    
};

export default Inventory;
