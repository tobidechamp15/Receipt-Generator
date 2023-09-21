import React from 'react';

const Receipt = ({ descriptionValues, customerName, address }) => {
  const divStyle = {
    fontFamily: 'Consolas',
    fontSize: '12px',
    fontWeight: 600,
  };
  let totalAmount = 0;

  return (
    <div
      className="bg-white flex flex-col md:w-2/3 p-4 rounded-md mt-4 w-full "
      style={divStyle}
    >
      <h1 className="text-base ">Receipt</h1>
      <div className="flex ">
        <span className="">{customerName}</span>
        <span>{address}</span>
      </div>
      <div className="flex justify-between ">
        <p className="text-base">Items</p>
        <p className="text-base">Qty</p>
        <p className="text-base">Unit Price</p>
        <p className="text-base">Total</p>
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
              className="flex  bg-transparent gap-2 text-center w-full justify-between items-center"
            >
              <p className=" text-center flex flex-wrap">
                {values.enteredProducts}
              </p>
              <p>{values.enteredQuantity}</p>
              <p>{values.enteredAmount}</p>
              <p className=" text-center">
                {isNaN(totalAmount)
                  ? '0.00'
                  : ` #${totalAmountForProduct.toFixed(2)}`}
              </p>
            </li>
          );
        })}
      </ul>
      {/* Display the total amount */}
      <div className="flex justify-end">
        <span className="mt-4 text-center">
          <span>Total Amount:</span>
          <span>
            {isNaN(totalAmount) ? '0.00' : `#${totalAmount.toFixed(2)}`}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Receipt;
