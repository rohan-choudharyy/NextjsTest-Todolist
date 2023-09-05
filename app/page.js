"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc}]);
    settitle("");
    setdesc("");
    console.log(maintask);
  }

  const deletehandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let rendertask = <h2>No Task Available</h2>

if(maintask.length>0){
  rendertask = maintask.map((t,i) => {
    return ( 
      <li key={i} className='flex items-center justify-between mb-8'>
     <div className='flex items-center mb-5 justify-between w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deletehandler(i)
    }}
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    );
  });
}
  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>ToDoism</h1>
    <form onSubmit={submitHandler}>
      <input
      type='text'
      className='text-2xl border-zinc-800 px-4 py-2 border-2 m-5'
      placeholder='Enter Task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input
      type='text'
      className='text-2xl border-zinc-800 px-4 py-2 border-2 m-5'
      placeholder='Enter Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-3 text-2xl
      font-bold rounded m-5'
      >Add Task</button>
    </form>

  <div className='p-8 bg-slate-200'>
     <ul>
      {rendertask}
     </ul>
     </div>
    </>
  );
};

export default page;