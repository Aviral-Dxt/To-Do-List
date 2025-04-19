import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'


const Todo = () => {

    const [todolist, setTodolist] = useState([]);


    const inputref = useRef()

    const getInput = () => {
        const inputext = inputref.current.value.trim();

        if (inputext === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputext,
            isComplete: false
        }

        setTodolist((prev) => [...prev, newTodo]);
        inputref.current.value = "";
    }

    const deleteTodo = (id) => {

        setTodolist((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }


    const toggle = (id) => {

        setTodolist((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }

                return todo;
            })
        })
    }


    //  useEffect(()=>{
    //      console.log(todolist);
         
    //  },[todolist])
    


    return (
        <div className='bg-white place-self-center p-7 w-[90%] max-w-md flex flex-col min-h-[550px] rounded-xl'>

            {/* ........Title....... */}

            <div className='flex items-center mt-7 gap-2'>
                <img className='w-10' src={todo_icon} alt="todo-logo" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* ........input-box....... */}

            <div className='flex items-center my-7 bg-gray-300 rounded-full'>
                <input ref={inputref} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={getInput} className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg cursor-pointer font-medium'>Add +</button>
            </div>


            {/* ........toDo-list....... */}

            <div>

                {todolist.map((item, index) => {
                    return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                })}

            </div>



        </div>
    )
}

export default Todo
