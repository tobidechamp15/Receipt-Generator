import React, { useState } from 'react';
import Description from './Product';
import Receipt from './Receipt';
import TotalAmount from './TotalAmount';
import Navbar from './Navbar';

function Home() {
  const [descriptionValues, setDescriptionValues] = useState([]);
  const [Products, setProducts] = useState([]); // Define the Products state

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

  // Function to handle form submission for each Description component.
  const submitHandler = (values, index) => {
    const updatedDescriptionValues = [...descriptionValues];
    updatedDescriptionValues[index] = values;
    setDescriptionValues(updatedDescriptionValues);
  };
  const submitAllForms = () => {
    // Loop through each Description component and call its submitHandler function
    Products.forEach((_, index) => {
      submitHandler(descriptionValues[index], index);
    });
  };
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const handleFormChange = (event, setFormFunction) => {
    setFormFunction(event.target.value);
  };
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="flex justify-center items-center h-fit flex-col mt-[61px]">
        <div className="flex flex-col gap-2 p-[5%] w-full  h-fit md:w-3/4 lg:w-1/3 bg-gray-300 md:rounded-3xl">
          {/* ... (Company and Customer input fields) */}
          <div className="flex flex-col bg--200 rounded-md w-full gap-3   ">
            <p className="text-xl ps-6 font-bold">Customers name</p>
            <input
              type="text"
              value={customerName}
              placeholder="Enter customer's name"
              onChange={(e) => handleFormChange(e, setCustomerName)}
              className="  rounded=md outline-none bg-gray-200 form-control"
            />
          </div>
          <div className="flex flex-col bg--200 rounded-md w-full  gap-3 ">
            <p className="ps-6 font-bold text-xl">Address</p>

            <input
              type="text"
              value={address}
              onChange={(e) => handleFormChange(e, setAddress)}
              placeholder="Enter customer address"
              className="  rounded=md outline-none bg-gray-200 text-lg placeholder:text-black form-control"
            />
          </div>
          {Products.map((description, index) => (
            <div key={index} className="flex gap-2 flex-col">
              {React.cloneElement(description, {
                onFormSubmit: (values) => submitHandler(values, index), // Pass index to track which Description is being submitted
                onDelete: () => removeDescription(index),
              })}
              {/* <button onClick={onFormSubmit}>Submit</button>/ */}
            </div>
          ))}

          <div className="flex justify-between px-4 items-center ">
            <button
              onClick={addItem}
              className="btn btn-primary w-fit flex self-center"
            >
              Add Item
            </button>
            <TotalAmount descriptionValues={descriptionValues} />
          </div>
          <button onClick={submitAllForms} className="btn btn-success">
            Save Receipt
          </button>
        </div>
        <Receipt
          className="mt-4 w-full"
          descriptionValues={descriptionValues}
          customerName={customerName}
          address={address}
        />
      </div>
    </section>
  );
}

export default Home;
