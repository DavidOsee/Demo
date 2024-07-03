import React from 'react';
import AddTaskModal from './AddTaskModal';
import Task from './Task'
import { Button } from '@material-tailwind/react'

const Tasks = () => {

    //Modal 
    const [open, setOpen] = React.useState(false);
 
    const handleOpenOnClick = ()=>{
        setOpen(!open)
    }

    return (
        <>
           <div
                className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-3 py-8 w-full max-w-md rounded-lg font-[sans-serif] mx-auto mt-4 ">
                <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4">
                    <h3 className="text-xl font-bold flex-1 text-gray-800">My Tasks - <Button size='md' onClick={handleOpenOnClick}>Add new</Button></h3>
                    <p className="text-sm text-blue-500 font-semibold cursor-pointer">Total - 5 / 200</p>
                </div>
                <div className='h-[35rem] overflow-auto'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                     
                </div>
                <AddTaskModal  handleOpen={handleOpenOnClick} open={open} />
            </div> 
        </>
    );
}

export default Tasks;
