"use client";

import axios from "axios";

import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const {id}= params;
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"+id
    );
    setusers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <>{JSON.stringify(users)} </>;
};

export default page;

// page .js contwnt-----
 // const page = () => {
//   const [users, setusers] = useState([]);
//   const getUsers = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setusers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <>
//       <button
//         onClick={getUsers}
//         className="bg-green-600 text-white text-2xl rounded px-4 py-3 m-5"
//       >
//         Get Data
//       </button>
//       <div className="p-8 bg-slate-100 mt-5  ">
//         <ul>
//           {users.map((e) => {
//             return (
//               <li>
//                 {e.username}---<a href={`/${e.id}`}>Explore</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };