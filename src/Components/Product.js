import React, { useState, useEffect } from 'react';

const Description = ({ onFormSubmit, onDelete }) => {
  const [enteredProducts, setEnteredProducts] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');

  // Retrieve values from localStorage on component mount
  // useEffect(() => {
  //   const storedProducts = localStorage.getItem('enteredProducts');
  //   const storedAmount = localStorage.getItem('enteredAmount');
  //   const storedQuantity = localStorage.getItem('enteredQuantity');

  //   if (storedProducts) {
  //     setEnteredProducts(storedProducts);
  //   }
  //   if (storedAmount) {
  //     setEnteredAmount(storedAmount);
  //   }
  //   if (storedQuantity) {
  //     setEnteredQuantity(storedQuantity);
  //   }
  // }, []);

  const descriptionInputHandler = (e) => {
    const value = e.target.value;
    setEnteredProducts(value);
    // localStorage.setItem('enteredProducts', value); // Store in localStorage
  };

  const amountChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredAmount(value);
    // localStorage.setItem('enteredAmount', value); // Store in localStorage
  };

  const quantityChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredQuantity(value);
    // localStorage.setItem('enteredQuantity', value); // Store in localStorage
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onFormSubmit({ enteredProducts, enteredAmount, enteredQuantity });
  };

  return (
    <form
      className="flex flex-col mt-3 md:flex-row gap-3"
      onKeyUp={submitHandler}
    >
      <div className="flex flex-col gap-2 md:w-3/4">
        <textarea
          type="text"
          placeholder="Item Name"
          className="form-control "
          value={enteredProducts}
          onChange={descriptionInputHandler}
        />
      </div>
      <section className="flex w-100 gap-2">
        <div className="flex flex-col w-3/4 gap-2">
          <input
            type="text"
            placeholder="Enter Price"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0"
            className="form-control"
          />
        </div>
        <div className="flex  gap-2">
          <input
            type="number"
            placeholder="Quantity"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
            step="1"
            min="0"
            className="form-control"
          />
          {/* <button
            type="submit"
            className="btn btn-secondary text-black hover:text-white"
          >
            Submit
          </button> */}
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-danger text-red-500 font-semibold"
          >
            Delete
          </button>
        </div>
      </section>
    </form>
  );
};

export default Description;
