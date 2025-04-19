import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
const Todo = () => {
  return (
    <div className='bg-white place-self-center p-7 w-[90%] max-w-md flex flex-col min-h-[550px] rounded-xl'>
     
  {/* ........Title....... */}
   
   <div className='flex items-center mt-7 gap-2'>
     <img  className='w-10' src={todo_icon} alt="todo-logo" />
     <h1 className='text-3xl font-semibold'>To-Do List</h1>
  </div>

   {/* ........input-box....... */}

    <div className='flex items-center my-7 bg-gray-300 rounded-full'>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text"  placeholder='Add your task'/>
        <button className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg cursor-pointer font-medium'>Add +</button>
    </div>

   
    {/* ........toDo-list....... */}

    <div>
        <TodoItems text="learn coding"/>
       
    </div>



    </div>
  )
}

export default Todo
