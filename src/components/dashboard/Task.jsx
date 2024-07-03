import React from "react";
import { MdOutlineDelete } from "react-icons/md"
import {
    Card,
    CardBody,
    Typography
  } from "@material-tailwind/react";
  import DeleteTaskModal from "./DeleteTaskModal";
import ViewTaskModal from "./ViewTaskModal"

function TaskCard() {

    //Modal - Task View
    const [openTask, setOpenTask] = React.useState(false);
 
    const handleOpenTask = ()=>{
        setOpenTask(!openTask)
    }

    //Modal 
    const [open, setOpen] = React.useState(false);
 
    const handleOpenOnClick = ()=>{
        setOpen(!open)
    }

    return (
      <Card className="w-full">
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="cursor-pointer  font-bold" onClick={handleOpenTask}>
              Apple AirPods
            </Typography>
            <div className="flex">
                <Typography color="blue-gray" className="font-medium mr-4">
                20/12/2024 
                </Typography>
                <div className="cursor-pointer" onClick={handleOpenOnClick}>
                    <MdOutlineDelete size={23} color="#8B0000"  />
                </div>
            </div>
          </div>
          <p className="cursor-pointer mt-4 truncate font-normal opacity-75" onClick={handleOpenTask}>
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging  available wireless charging
          </p>
        </CardBody>
        <DeleteTaskModal handleOpen={handleOpenOnClick} open={open} />
        <ViewTaskModal handleOpen={handleOpenTask} open={openTask} />
      </Card>
    );
  }


  const Task = () => {

    return (
        <div className="rounded-lg w-full my-4 mb-2 ">
            <TaskCard />
        </div>
        
    );
}


export default Task;
