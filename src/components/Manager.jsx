// import { useRef, useState, useEffect } from "react";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { v4 as uuidv4 } from "uuid";

// const Manager = () => {
//   const ref = useRef();
//   const passwordRef = useRef();
//   const [form, setform] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setpasswordArray] = useState([]);

//   useEffect(() => {
//     let passwords = localStorage.getItem("passwords");
//     if (passwords) {
//       setpasswordArray(JSON.parse(passwords));
//     }
//   }, []);

//   const copyText = (text) => {
//     toast("Copied to clipboard!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//     navigator.clipboard.writeText(text);
//   };

//   const showPassword = () => {
//     passwordRef.current.type = "text";
//     if (ref.current.src.includes("icons/hide.png")) {
//       ref.current.src = "icons/show.png";
//       passwordRef.current.type = "password";
//     } else {
//       ref.current.src = "icons/hide.png";
//       passwordRef.current.type = "text";
//     }
//   };

//   const savePassword = () => {
//     if (
//       form.site.length > 3 &&
//       form.username.length > 3 &&
//       form.password.length > 3
//     ) {
//       setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
//       localStorage.setItem(
//         "passwords",
//         JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
//       );
//       console.log([...passwordArray, form]);
//       setform({ site: "", username: "", password: "" });
//       toast("Password Saved!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//     else {
//       toast("Error: Password not saved!")
//     }
//   };

//   const editPassword = (id) => {
//     console.log("Editing password with id ", id);
//     setform(passwordArray.filter((i) => i.id === id)[0]);
//     setpasswordArray(passwordArray.filter((item) => item.id !== id));
//   };
//   const deletePassword = (id) => {
//     let c = confirm("Do you really want to delete this password?");
//     if (c) {
//       console.log("Deleting password with id ", id);
//       setpasswordArray(passwordArray.filter((item) => item.id !== id));
//       localStorage.setItem(
//         "passwords",
//         JSON.stringify(passwordArray.filter((item) => item.id !== id))
//       );
//       toast("Password Deleted!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   };

//   const handleChange = (e) => {
//     setform({ ...form, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition="Bounce"
//       />
//       {/* Same as */}
//       <ToastContainer />
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//       </div>
//       <div className="p-3 md:mycontainer min-h-[87vh] overflow-auto">
//         <h1 className="text-4xl font-bold text-center">
//           <span className="text-green-500">&lt;</span>
//           Pass
//           <span className="text-green-500">OP/ &gt;</span>
//         </h1>
//         <p className="text-green-900 text-lg text-center">
//           Your own password manager
//         </p>

//         <div className="text-black flex flex-col p-4 gap-8 items-center">
//           <input
//             value={form.site}
//             onChange={handleChange}
//             placeholder="Enter website URL"
//             className="rounded-full border border-green-500 w-full p-4 py-1"
//             type="text"
//             name="site"
//             id="site"
//           />
//           <div className="flex flex-col md:flex-row w-full gap-8 justify-between">
//             <input
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Enter Username"
//               className="rounded-full border border-green-500 w-full p-4 py-1"
//               type="text"
//               name="username"
//               id="username"
//             />
//             <div className="relative">
//               <input
//                 ref={passwordRef}
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//                 className="rounded-full border border-green-500 w-full p-4 py-1"
//                 type="password"
//                 name="password"
//                 id="password"
//               />
//               <span
//                 className="absolute right-[1px] top-[1px] cursor-pointer"
//                 onClick={showPassword}
//               >
//                 <img
//                   ref={ref}
//                   className="p-1"
//                   src="icons/show.png"
//                   alt="show"
//                 />
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={savePassword}
//             className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
//           >
//             <lord-icon
//               src="https://cdn.lordicon.com/jgnvfzqg.json"
//               trigger="hover"
//             ></lord-icon>
//             Save
//           </button>
//         </div>
//         <div className="passwords">
//           <h2 className="font-bold text-2xl py-4">Your passwords</h2>
//           {passwordArray.length === 0 && <div>No passwords to show</div>}
//           {passwordArray.length !== 0 && (
//             <table className="table-auto w-full rounded-md overflow-hidden mb-10">
//               <thead className="bg-green-800 text-white">
//                 <tr>
//                   <th className="py-2">Site</th>
//                   <th className="py-2">Username</th>
//                   <th className="py-2">Password</th>
//                   <th className="py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-green-100">
//                 {passwordArray.map((item, index) => {
//                   return (
//                     <tr key={index}>
//                       <td className="py-2 border border-white text-center">
//                         <div className="flex items-center justify-center">
//                           <a href={item.site} target="_blank">
//                             {item.site}
//                           </a>
//                           <div
//                             className="lordiconcopy size-7 cursor-pointer"
//                             onClick={() => {
//                               copyText(item.site);
//                             }}
//                           >
//                             <lord-icon
//                               style={{
//                                 width: "25px",
//                                 height: "25px",
//                                 paddingTop: "3px",
//                                 paddingLeft: "3px",
//                               }}
//                               src="https://cdn.lordicon.com/iykgtsbt.json"
//                               trigger="hover"
//                             ></lord-icon>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2 border border-white text-center">
//                         <div className="flex items-center justify-center">
//                           <span>{item.username}</span>
//                           <div
//                             className="lordiconcopy size-7 cursor-pointer"
//                             onClick={() => {
//                               copyText(item.username);
//                             }}
//                           >
//                             <lord-icon
//                               style={{
//                                 width: "25px",
//                                 height: "25px",
//                                 paddingTop: "3px",
//                                 paddingLeft: "3px",
//                               }}
//                               src="https://cdn.lordicon.com/iykgtsbt.json"
//                               trigger="hover"
//                             ></lord-icon>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2 border border-white text-center">
//                         <div className="flex items-center justify-center">
//                           <span>{item.password}</span>
//                           <div
//                             className="lordiconcopy size-7 cursor-pointer"
//                             onClick={() => {
//                               copyText(item.password);
//                             }}
//                           >
//                             <lord-icon
//                               style={{
//                                 width: "25px",
//                                 height: "25px",
//                                 paddingTop: "3px",
//                                 paddingLeft: "3px",
//                               }}
//                               src="https://cdn.lordicon.com/iykgtsbt.json"
//                               trigger="hover"
//                             ></lord-icon>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2 border border-white text-center">
//                         <span
//                           className="cursor-pointer mx-1"
//                           onClick={() => {
//                             editPassword(item.id);
//                           }}
//                         >
//                           <lord-icon
//                             style={{
//                               width: "25px",
//                               height: "25px",
//                               paddingTop: "3px",
//                               paddingLeft: "3px",
//                             }}
//                             src="https://cdn.lordicon.com/gwlusjdu.json"
//                             trigger="hover"
//                           ></lord-icon>
//                         </span>
//                         <span
//                           className="cursor-pointer mx-1"
//                           onClick={() => {
//                             deletePassword(item.id);
//                           }}
//                         >
//                           <lord-icon
//                             style={{
//                               width: "25px",
//                               height: "25px",
//                               paddingTop: "3px",
//                               paddingLeft: "3px",
//                             }}
//                             src="https://cdn.lordicon.com/skkahier.json"
//                             trigger="hover"
//                           ></lord-icon>
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;


import { useState, useEffect } from "react";
// import React from "react";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const newPassword = {
        ...form,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      };
      const updatedPasswordArray = [...passwordArray, newPassword];
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
      setForm({ site: "", username: "", password: "" });
    } else {
      console.log("Error: Password not saved!");
    }
  };

  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    setForm(passwordToEdit);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const deletePassword = (id) => {
    let confirmDelete = confirm("Do you really want to delete this password?");
    if (confirmDelete) {
      const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="p-3 md:mycontainer min-h-[87vh] overflow-auto">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/ &gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>

        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full gap-8 justify-between">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
              />
              <span
                className="absolute right-[1px] top-[1px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img
                  className="p-1"
                  src={showPassword ? "icons/hide.png" : "icons/show.png"}
                  alt="show"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
