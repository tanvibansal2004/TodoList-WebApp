"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }
  
  let renderTask = <h2>No Task Available</h2>
  
  if(mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='w-2/3'>
            <h4 className='text-2xl font-semibold'>{t.title}</h4>
            <h5 className='text-xl font-medium'>{t.desc}</h5>
          </div>
          <button
          onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-white text-blue-950 text-xl font-semibold rounded px-4 py-2'>
            Delete Task
          </button>
        </li>
      )
    })
  }
  return (
    <>
    <h1 className='bg-blue-950 text-white p-5 text-3xl font-bold'>Tanvi's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input 
        type='text' 
        className='text-2xl border-blue-900 border-4 rounded m-8 px-4 py-1'
        placeholder='Enter Task Title Here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input 
        type='text' 
        className='text-2xl border-blue-900 border-4 rounded m-8 px-4 py-1'
        placeholder='Enter Description Here'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />
        <button className='bg-blue-950 text-white text-2xl font-semibold m-5 px-4 py-2 rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-blue-300 text-white text-xl font-semibold'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page