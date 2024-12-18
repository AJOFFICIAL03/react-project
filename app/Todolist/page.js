"use client";
import React, { useState } from "react";

const Todolist = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setMaintask(copyTask);
  };

  let renderTask = <h2>No task Avilable</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-7">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            on
            onClick={() => {
              deleteHandler(i);
            }}
            className=" font-bold px-4 py-2 rounded m-5 text-white bg-red-500 "
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <>
        <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
          Ajay's Todo List
        </h1>

        <form onSubmit={sumbitHandler}>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Add Title here"
            className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
          ></input>

          <input
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            placeholder="Add Description here"
            className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2  "
          ></input>

          <button className="text-2xl font-bold px-4 py-3 rounded m-5 text-white bg-black">
            Add
          </button>
        </form>
        <hr />
        <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </>
    </>
  );
};

export default Todolist;
