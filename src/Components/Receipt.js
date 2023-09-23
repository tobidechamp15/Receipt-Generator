import React, { useRef, useState } from 'react';

const Receipt = ({
  descriptionValues,
  customerName,
  address,
  paymentMethod,
}) => {
  const divStyle = {
    fontFamily: 'Arial, san-serif',
    fontSize: '11px',
    fontWeight: 600,
  };
  let totalAmount = 0;

  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  };
  const handleReload = () => {
    window.location.reload()
  }

  //useState function to
  return (
    <div className="flex flex-col-reverse items-center gap-3">
      <div
        className="bg-white flex flex-col md:w-2/3 p-4 rounded-md mt-4 w-full receipt"
        style={divStyle}
        ref={printRef}
      >
        {/* <h1 className=" text-center text-xl">Receipt</h1> */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl">{customerName}'s Sales Receipt</span>
          <span className="text-base">{address}</span>
        </div>
        <div className="flex justify-between items-center my-2 text-base">
          <strong>Payment Method:</strong>
          <p className="text-base">{paymentMethod}</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm w-[60%]">Items</p>
          <div className="d-flex  flex  gap- w-full justify-around">
            <p className="text-sm">Qty</p>
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
                  <p className=" text-left flex flex-wrap  w-[80%] ">
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
        </div>
      </div>
        <div className="flex gap-10 w-2/3 items-center justify-between flex-row-reverse py-5 pb-0 xs:w-full px-2">
          <button
            onClick={handlePrint}
            className="btn btn-outline-secondary text-lg w-auto"
          >
            Print
          </button>
          <button
            onClick={handleReload}
            className="btn btn-outline-warning w-auto "
          >
            Back
          </button>
        </div>

    </div>
  );
};

export default Receipt;
