import React from 'react';

const TotalAmount = ({ descriptionValues }) => {
  // Add curly braces for the component function

  let totalAmount = 0;

  descriptionValues.map((values, index) => {
    // Calculate the amount for each product
    const totalAmountForProduct =
      parseFloat(values.enteredAmount) * parseInt(values.enteredQuantity);
    totalAmount += totalAmountForProduct;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN', // Change this to your desired currency code
    minimumFractionDigits: 2,
  });
  return (
    // Add a return statement to return JSX
    <div className="flex self-center my-4">
      <div className="">
        {/* Display the total amount */}
        <span className="mt-4 text-center">
          <strong className="flex gap-3 items-center justify-center">
            <span>Total :</span>
            {/* <span>#{totalAmount.toFixed(2)} </span> */}
            <span>
              {isNaN(totalAmount)
                ? '0.00'
                : ` #${totalAmount.toFixed(2)}`}
            </span>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default TotalAmount;
