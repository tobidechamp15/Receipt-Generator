import React from 'react';

const Receipt = ({ descriptionValues, customerName, address }) => {
  const divStyle = {
    fontFamily: 'Courier',
    fontSize: '15px',
  };
  let totalAmount = 0;
  return (
    <div
      className="bg-white flex flex-col md:w-2/3 p-4 rounded-md mt-4 w-full "
      style={divStyle}
    >
      <h1 className="text-xl m-2">Receipt</h1>
      <div className="">
        <span className="">{customerName}</span>
        <span>{address}</span>
      </div>
      <div className="flex justify-between px-3 ps-0">
        <p className="text-xl">Items</p>
        <p className="text-xl">Amount</p>
        <p className="text-xl">Qty</p>
      </div>
      <ul className=" m-0 p-1  h-fit border-black flex flex-col w-full ">
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
                {isNaN(totalAmount)?'0.00':` #{totalAmountForProduct.toFixed(2)}`}
              </p>
            </li>
          );
        })}
      </ul>
      {/* Display the total amount */}
      <div className="flex justify-end">
        <span className="mt-4 text-center">
          <strong className="flex gap-7 items-center justify-center">
            <span>Total Amount:</span>
            <span>
              {isNaN(totalAmount) ? '0.00' : `#${totalAmount.toFixed(2)}`}
            </span>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Receipt;
