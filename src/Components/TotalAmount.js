import React from 'react';

const TotalAmount = ({ descriptionValues }) => {
  // Add curly braces for the component function
  console.log(descriptionValues);
  let totalAmount = 0;

  return (
    // Add a return statement to return JSX
    <div className="flex self-center my-4">
      {descriptionValues.map((values, index) => {
        // Calculate the amount for each product
        const totalAmountForProduct =
          parseFloat(values.enteredAmount) * parseInt(values.enteredQuantity);
        totalAmount += totalAmountForProduct;
      })}
      <div className="">
        {/* Display the total amount */}
        <span className="mt-4 text-center">
          <strong className="flex gap-3 items-center justify-center">
            <span>Total :</span>
            <span >#{totalAmount.toFixed(2)} </span>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default TotalAmount;
