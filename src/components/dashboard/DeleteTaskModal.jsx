import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
const DeleteTaskModal = ({handleOpen, open})=> {
  
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Delete Task</DialogHeader>
        <DialogBody>
          Kindly confirm and proceed
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default  DeleteTaskModal