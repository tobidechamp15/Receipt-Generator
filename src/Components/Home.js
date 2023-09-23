import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Description from './Product';
import Receipt from './Receipt';
import TotalAmount from './TotalAmount';
import Navbar from './Navbar';

function Home() {
  const [descriptionValues, setDescriptionValues] = useState([]);
  const [Products, setProducts] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const addItem = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      <Description onFormSubmit={submitHandler} onDelete={removeDescription} />,
    ]);

    setDescriptionValues((prevDescriptionValues) => [
      ...prevDescriptionValues,
      {},
    ]);
  };
  const removeDescription = (index) => {
    const updatedProducts = [...Products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);

    const updatedDescriptionValues = [...descriptionValues];
    updatedDescriptionValues.splice(index, 1);
    setDescriptionValues(updatedDescriptionValues);
  };
  const submitHandler = (values, index) => {
    const updatedDescriptionValues = [...descriptionValues];
    updatedDescriptionValues[index] = values;
    setDescriptionValues(updatedDescriptionValues);
  };
  // const submitAllForms = () => {
  //   Products.forEach((_, index) => {
  //     submitHandler(descriptionValues[index], index);
  //   });
  // };
  const isSaveButtonDisabled = !customerName || !address || !Products; // Disable if customerName or address is empty
  const handleFormChange = (event, setFormFunction) => {
    setFormFunction(event.target.value);
  };
  const [showInvoice, setShowInvoice] = useState(false);


  useEffect(() => {
    const storedCustomerName = localStorage.getItem('customerName');
    const storedAddress = localStorage.getItem('address');

    if (storedCustomerName) {
      setCustomerName(storedCustomerName);
    }

    if (storedAddress) {
      setAddress(storedAddress);
    }
  }, []);

  // Update localStorage whenever customerName or address changes
  useEffect(() => {
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('address', address);
  }, [customerName, address]);
  return (
    <>
      {showInvoice ? (
        <Receipt
          className="mt-4 w-full d-none"
          descriptionValues={descriptionValues}
          customerName={customerName}
          address={address}
        />
      ) : (
        <section className="w-full h-full">
          <Navbar />
          <div className="flex justify-center items-center h-fit flex-col mt-[61px]">
            <div className="flex flex-col gap-2 p-[5%] w-full  h-full xs:pt-[30%] sm:mt-[10%] md:w-2/4 lg:w-1/3 bg-slate-100 border border-black md:rounded-3xl">
              {/* ... (Company and Customer input fields) */}
              <div className="flex flex-col bg--200 rounded-md w-full gap-2">
                <p className="text-base  font-">Customers name</p>
                <input
                  type="text"
                  value={customerName}
                  placeholder="Enter customer's name"
                  onChange={(e) => handleFormChange(e, setCustomerName)}
                  className="rounded=md outline-none bg-gray-200 form-control fs-6 placeholder:text-gray-400 border-slate-300 placeholder:text-[12px] py-1 px-2"
                />
              </div>
              <div className="flex flex-col bg--200 rounded-md w-full  gap-2">
                <p className="text-base ">Address</p>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleFormChange(e, setAddress)}
                  placeholder="Enter customer address"
                  className="rounded=md outline-none fs-6 bg-gray-200 text-lg placeholder:text-gray-400 border-slate-300 form-control placeholder:text-[12px] py-1 px-2"
                />
              </div>
              {Products.map((description, index) => (
                <div key={index} className="flex gap-2 flex-col">
                  {React.cloneElement(description, {
                    onFormSubmit: (values) => submitHandler(values, index),
                    onDelete: () => removeDescription(index),
                  })}
                </div>
              ))}

              <div className="flex justify-between items-center px-4">
                <button
                  onClick={addItem}
                  className="btn btn-primary  flex self-center w-auto "
                >
                  Add Item
                </button>
                <TotalAmount descriptionValues={descriptionValues} />
              </div>
              {isSaveButtonDisabled ? (
                <button
                  // onClick={ }
                  className={`btn btn-success text-white ${
                    isSaveButtonDisabled ? 'disabled' : ''
                  }`}
                  disabled={isSaveButtonDisabled}
                >
                  Save Receipt
                </button>
              ) : (
                <button
                  onClick={() => setShowInvoice(true)}
                  className={`btn btn-success w-full ${
                    isSaveButtonDisabled ? 'disabled ' : ''
                  }`}
                  disabled={isSaveButtonDisabled}
                >
                  Save Receipt
                </button>
              )}
            </div>
            <Receipt
              className="mt-4 w-full d-none"
              descriptionValues={descriptionValues}
              customerName={customerName}
              address={address}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
