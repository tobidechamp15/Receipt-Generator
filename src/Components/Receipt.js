import React from 'react';


const Receipt = ({ descriptionValues }) => {
  let totalAmount = 0;
  return (
    <div className="bg-white flex flex-col md:w-2/3 p-4 rounded-md mt-4 w-full">
      <h1 className="text-3xl m-2">Receipt</h1>
      <div className="flex justify-between px-3">
        <p className="text-xl">Description</p>
        <p className="text-xl">Amount</p>
      </div>
      <ul className="border-2 m-0 p-1  h-fit border-black flex flex-col w-full ">
        {descriptionValues.map((values, index) => {
          // Calculate the amount for each product
          const totalAmountForProduct =
            parseFloat(values.enteredAmount) * parseInt(values.enteredQuantity);
          totalAmount += totalAmountForProduct;

          return (
            <li
              key={index}
              className="flex px-6 bg-transparent gap-2 text-center w-full justify-between items-center"
            >
              <p className=" text-center">{values.enteredProducts}</p>
              <p className=" text-center">
                #{totalAmountForProduct.toFixed(2)}
              </p>
            </li>
          );
        })}
      </ul>
      {/* <TotalAmount /> */}
      <div className="flex justify-end">
        {/* Display the total amount */}
        <span className="mt-4 text-center">
          <strong className="flex gap-7 items-center justify-center">
            <span>Total Amount:</span>
            <span>#{totalAmount.toFixed(2)} </span>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Receipt;
