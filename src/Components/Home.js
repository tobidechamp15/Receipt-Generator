import React, { useState } from 'react';
import Description from './Product';
import Receipt from './Receipt';
import TotalAmount from './TotalAmount';

function Home() {
  const [descriptionValues, setDescriptionValues] = useState([]);
  const [Products, setProducts] = useState([]); // Define the Products state

  // Function to add a Description component and its values to the list.
  // const addItem = () => {
  //   setProducts([
  //     //Form for each item holding(Description, Amount, Quantity)
  //     ...Products,
  //     //
  //     <Description onFormSubmit={submitHandler} onDelete={removeDescription} />,
  //   ]);
  //   setDescriptionValues([...descriptionValues, {}]); // Add an empty object for each Description component
  // };
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

  // console.log(descriptionValues);
  // Function to remove a Description component and its values from the list.

  //array.splice(startIndex, deleteCount, item1, item2, ...)
  //   startIndex: The index at which the modification should start. This parameter is required.
  // deleteCount: The number of elements to remove starting from the startIndex. If set to 0, no elements are removed. This parameter is optional.
  // item1, item2, ...: Elements to add to the array starting at the startIndex. These elements are optional.

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
  // const submitAllForms = () => {
  //   descriptionValues.forEach((values, index) => {
  //     submitHandler(values, index);
  //   });
  // };
  return (
    <div className="flex justify-center items-center h-fit flex-col w-full">
      <div className="flex flex-col gap-2 p-[5%] w-full  h-fit md:w-3/4 bg-gray-300 md:rounded-3xl">
        {/* ... (Company and Customer input fields) */}
        <div className="flex flex-col bg--200 rounded-md w-full gap-10  p-3 ">
          <p className="text-3xl">Your Company name</p>
          <input
            type="text"
            placeholder="Enter company name"
            className=" p-3 rounded=md outline-none bg-gray-200 form-control"
          />
        </div>
        <div className="flex flex-col bg--200 rounded-md w-full  gap-10 p-3 ">
          <p>The Customer's name</p>

          <input
            type="text"
            placeholder="Enter customer name"
            className=" p-3 rounded=md outline-none bg-gray-200 text-lg placeholder:text-black form-control"
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
      <Receipt className="mt-4 w-full" descriptionValues={descriptionValues} />
    </div>
  );
}

export default Home;
{
  /* <a href=""></a> */
}
// import React, { useState } from 'react';
// import Description from './Product';
// import Receipt from './Receipt';

// function Home() {
//   const [descriptionValues, setDescriptionValues] = useState([]);
//   const [Products, setProducts] = useState([]);

//   // Function to add a Description component and its values to the list.
//   const addItem = () => {
//     setProducts([
//       ...Products,
//       <Description onFormSubmit={submitHandler} onDelete={removeDescription} />,
//     ]);
//     setDescriptionValues([...descriptionValues, {}]);
//   };

//   // Function to remove a Description component and its values from the list.
//   const removeDescription = (index) => {
//     const updatedProducts = [...Products];
//     updatedProducts.splice(index, 1);
//     setProducts(updatedProducts);

//     const updatedDescriptionValues = [...descriptionValues];
//     updatedDescriptionValues.splice(index, 1);
//     setDescriptionValues(updatedDescriptionValues);
//   };

//   // Function to handle form submission for each Description component.
//   const submitHandler = (values, index) => {
//     const updatedDescriptionValues = [...descriptionValues];
//     updatedDescriptionValues[index] = values;
//     setDescriptionValues(updatedDescriptionValues);
//   };

//   // Function to submit all forms

//   return (
//     <div className="flex justify-center items-center h-fit flex-col w-full">
//       {/* ... Rest of the component code ... */}
// <div className="flex flex-col gap-2 p-[5%] w-full  h-fit md:w-3/4 bg-gray-300 md:rounded-3xl">
//          ... (Company and Customer input fields)
//          <div className="flex flex-col bg--200 rounded-md w-full gap-10  p-3 ">
//            <p>Your Company name</p>
//            <input
//              type="text"
//              placeholder="Enter company name"
//              className=" p-3 rounded=md outline-none bg-gray-200 text-lg placeholder:text-black"
//            />
//          </div>
//          <div className="flex flex-col bg--200 rounded-md w-full  gap-10 p-3 ">
//            <p>The Customer's name</p>
//            <input
//              type="text"
//              placeholder="Enter customer name"
//              className=" p-3 rounded=md outline-none bg-gray-200 text-lg placeholder:text-black"
//            />
//          </div>
//          {Products.map((description, index) => (
//            <div key={index} className="flex gap-2 flex-col">
//              {React.cloneElement(description, {
//                onFormSubmit: (values) => submitHandler(values, index),  Pass index to track which Description is being submitted
//                onDelete: () => removeDescription(index),
//              })}
//              {/* <button onClick={onFormSubmit}>Submit</button>/ */}
//            </div>
//          ))}
//       {/* Button to submit all forms */}
//       <div className="flex justify-between px-4">
//         <button
//           onClick={addItem}
//           className="btn btn-primary w-fit flex self-center"
//         >
//           Add Item
//         </button>
//         <button onClick={submitAllForms} className="btn btn-success">
//           Submit All Forms
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
