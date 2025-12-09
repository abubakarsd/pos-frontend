// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { IoMdClose } from "react-icons/io";
// import { useMutation } from "@tanstack/react-query";
// import { addTable, addCategory, addDish } from "../../https";
// import { enqueueSnackbar } from "notistack";

// const Modal = ({ modalType, handleClose }) => {
//   const [formData, setFormData] = useState({
//     table: { tableNo: "", seats: "" },
//     category: { name: "", image: null },
//     dishes: {
//       name: "",
//       price: "",
//       category: "",
//       image: null,
//       description: "",
//     },
//   });

//   const handleInputChange = (e, type) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [type]: { ...prev[type], [name]: files ? files[0] : value },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = formData[modalType];

//     // Create FormData for file uploads
//     const formDataToSend = new FormData();

//     switch (modalType) {
//       case "table":
//         tableMutation.mutate(data);
//         break;
//       case "category":
//         formDataToSend.append("name", data.name);
//         formDataToSend.append("image", data.image);
//         categoryMutation.mutate(formDataToSend);
//         break;
//       case "dishes":
//         formDataToSend.append("name", data.name);
//         formDataToSend.append("price", data.price);
//         formDataToSend.append("category", data.category);
//         formDataToSend.append("image", data.image);
//         formDataToSend.append("description", data.description);
//         dishesMutation.mutate(formDataToSend);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleMutationSuccess = (res) => {
//     const { data } = res;
//     handleClose();
//     enqueueSnackbar(data.message, { variant: "success" });
//   };

//   const handleMutationError = (error) => {
//     const { data } = error.response;
//     enqueueSnackbar(data.message, { variant: "error" });
//     console.error(error);
//   };

//   const tableMutation = useMutation({
//     mutationFn: (reqData) => addTable(reqData),
//     onSuccess: handleMutationSuccess,
//     onError: handleMutationError,
//   });

//   const categoryMutation = useMutation({
//     mutationFn: (reqData) => addCategory(reqData),
//     onSuccess: handleMutationSuccess,
//     onError: handleMutationError,
//   });

//   const dishesMutation = useMutation({
//     mutationFn: (reqData) => addDish(reqData),
//     onSuccess: handleMutationSuccess,
//     onError: handleMutationError,
//   });

//   const renderFormFields = () => {
//     switch (modalType) {
//       case "table":
//         return (
//           <>
//             <div>
//               <label className="block text-[#ababab] mb-2 text-sm font-medium">
//                 Table Number
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="number"
//                   name="tableNo"
//                   value={formData.table.tableNo}
//                   onChange={(e) => handleInputChange(e, "table")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Number of Seats
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="number"
//                   name="seats"
//                   value={formData.table.seats}
//                   onChange={(e) => handleInputChange(e, "table")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
//             >
//               Add Table
//             </button>
//           </>
//         );

//       case "category":
//         return (
//           <>
//             <div>
//               <label className="block text-[#ababab] mb-2 text-sm font-medium">
//                 Category Name
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.category.name}
//                   onChange={(e) => handleInputChange(e, "category")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Image
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={(e) => handleInputChange(e, "category")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
//             >
//               Add Category
//             </button>
//           </>
//         );

//       case "dishes":
//         return (
//           <>
//             <div>
//               <label className="block text-[#ababab] mb-2 text-sm font-medium">
//                 Dish Name
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.dishes.name}
//                   onChange={(e) => handleInputChange(e, "dishes")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Price
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.dishes.price}
//                   onChange={(e) => handleInputChange(e, "dishes")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Category
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.dishes.category}
//                   onChange={(e) => handleInputChange(e, "dishes")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Image
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={(e) => handleInputChange(e, "dishes")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//                 Description
//               </label>
//               <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//                 <textarea
//                   name="description"
//                   value={formData.dishes.description}
//                   onChange={(e) => handleInputChange(e, "dishes")}
//                   className="bg-transparent flex-1 text-white focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
//             >
//               Add Dish
//             </button>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   const getTitle = () => {
//     switch (modalType) {
//       case "table":
//         return "Add Table";
//       case "category":
//         return "Add Category";
//       case "dishes":
//         return "Add Dish";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
//       >
//         <div className="flex justify-between item-center mb-4">
//           <h2 className="text-[#f5f5f5] text-xl font-semibold">{getTitle()}</h2>
//           <button onClick={handleClose} className="text-[#f5f5f5] hover:text-red-500">
//             <IoMdClose size={24} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-10">
//           {renderFormFields()}
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Modal;
// This is the updated Modal page
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable, addCategory, addDish } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ modalType, handleClose }) => {
  const [formData, setFormData] = useState({
    table: { tableNo: "", seats: "" },
    category: { name: "", image: null },
    dishes: {
      name: "",
      price: "",
      category: "",
      image: null,
      description: "",
    },
  });

  const handleInputChange = (e, type) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: files ? files[0] : value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData[modalType];

    // Create FormData for file uploads
    const formDataToSend = new FormData();

    switch (modalType) {
      case "table":
        tableMutation.mutate(data);
        break;
      case "category":
        formDataToSend.append("name", data.name);
        formDataToSend.append("image", data.image);
        categoryMutation.mutate(formDataToSend);
        break;
      case "dishes":
        formDataToSend.append("name", data.name);
        formDataToSend.append("price", data.price);
        formDataToSend.append("category", data.category);
        formDataToSend.append("image", data.image);
        formDataToSend.append("description", data.description);
        dishesMutation.mutate(formDataToSend);
        break;
      default:
        break;
    }
  };

  const handleMutationSuccess = (res) => {
    const { data } = res;
    handleClose();
    enqueueSnackbar(data.message, { variant: "success" });
  };

  const handleMutationError = (error) => {
    const { data } = error.response;
    enqueueSnackbar(data.message, { variant: "error" });
    console.error(error);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: handleMutationSuccess,
    onError: handleMutationError,
  });

  const categoryMutation = useMutation({
    mutationFn: (reqData) => addCategory(reqData),
    onSuccess: handleMutationSuccess,
    onError: handleMutationError,
  });

  const dishesMutation = useMutation({
    mutationFn: (reqData) => addDish(reqData),
    onSuccess: handleMutationSuccess,
    onError: handleMutationError,
  });

  const renderFormFields = () => {
    switch (modalType) {
      case "table":
        return (
          <>
            <div>
              <label className="block text-[#ababab] mb-2 text-sm font-medium">
                Table Number
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="number"
                  name="tableNo"
                  value={formData.table.tableNo}
                  onChange={(e) => handleInputChange(e, "table")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Number of Seats
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="number"
                  name="seats"
                  value={formData.table.seats}
                  onChange={(e) => handleInputChange(e, "table")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
            >
              Add Table
            </button>
          </>
        );

      case "category":
        return (
          <>
            <div>
              <label className="block text-[#ababab] mb-2 text-sm font-medium">
                Category Name
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="text"
                  name="name"
                  value={formData.category.name}
                  onChange={(e) => handleInputChange(e, "category")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Image
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleInputChange(e, "category")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
            >
              Add Category
            </button>
          </>
        );

      case "dishes":
        return (
          <>
            <div>
              <label className="block text-[#ababab] mb-2 text-sm font-medium">
                Dish Name
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="text"
                  name="name"
                  value={formData.dishes.name}
                  onChange={(e) => handleInputChange(e, "dishes")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Price
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="number"
                  name="price"
                  value={formData.dishes.price}
                  onChange={(e) => handleInputChange(e, "dishes")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Category
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="text"
                  name="category"
                  value={formData.dishes.category}
                  onChange={(e) => handleInputChange(e, "dishes")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Image
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleInputChange(e, "dishes")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                Description
              </label>
              <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                <textarea
                  name="description"
                  value={formData.dishes.description}
                  onChange={(e) => handleInputChange(e, "dishes")}
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg mt-10 mb-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
            >
              Add Dish
            </button>
          </>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (modalType) {
      case "table":
        return "Add Table";
      case "category":
        return "Add Category";
      case "dishes":
        return "Add Dish";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        <div className="flex justify-between item-center mb-4">
          <h2 className="text-[#f5f5f5] text-xl font-semibold">{getTitle()}</h2>
          <button onClick={handleClose} className="text-[#f5f5f5] hover:text-red-500">
            <IoMdClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-10">
          {renderFormFields()}
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;