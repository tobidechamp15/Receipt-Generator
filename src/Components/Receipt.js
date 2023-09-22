import React, { useEffect, useState } from 'react';

const Receipt = ({ descriptionValues, customerName, address }) => {
  const divStyle = {
    fontFamily: 'Arial, san-serif',
    fontSize: '11px',
    fontWeight: 600,
  };
  let totalAmount = 0;

  const handlePrint = () => {
    window.print();
  };
  //useState function to
  
  return (
    <div
      className="bg-white flex flex-col md:w-2/3 p-4 rounded-md mt-4 w-full receipt"
      style={divStyle}
    >
      {/* <h1 className=" text-center text-xl">Receipt</h1> */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl">{customerName}'s Sales Receipt</span>
        <span className="text-base">{address}</span>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-sm w-[60%]">Items</p>
        <div className="d-flex  flex  gap- w-full justify-around">
          <p className="text-smh v  v v bbb nn">Qty</p>
          <p className="text-sm">Unit Price</p>
          <p className="text-sm">Total</p>
        </div>
      </div>
      <ul className=" m-0 p-1  h-fit border-black flex flex-col w-full ">
        {descriptionValues &&
          descriptionValues.map((values, index) => {
            // Calculate the amount for each product

            const totalAmountForProduct =
              parseFloat(values.enteredAmount) *
              parseInt(values.enteredQuantity);
            totalAmount += totalAmountForProduct;

            return (
              <li
                key={index}
                className="flex w-100  bg-transparent gap-2 text-center w-full justify-between items-center"
              >
                <p className=" text-center w-[80%] ">
                  {values.enteredProducts}
                </p>
                <div className="flex justify-between w-full">
                  <p>{values.enteredQuantity}</p>
                  <p>{values.enteredAmount}</p>
                  <p className=" text-center ">
                    {isNaN(totalAmountForProduct)
                      ? '0.00'
                      : ` #${totalAmountForProduct.toFixed(2)}`}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
      {/* Display the total amount */}
      <div className="flex justify-end">
        <span className="mt-4 text-center">
          <span>Total Amount:</span>
          <span className="text-xl ms-2">
            {isNaN(totalAmount) ? '0.00' : `#${totalAmount.toFixed(2)}`}
          </span>
        </span>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default Receipt;
