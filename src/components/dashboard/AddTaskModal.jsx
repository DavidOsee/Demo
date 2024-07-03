import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea
} from "@material-tailwind/react"
import PropTypes from 'prop-types'
 
const AddTaskModal = ({handleOpen, open})=> {
  
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>New Task</DialogHeader>
        <DialogBody>
          <div className="pt-2 pb-6 w-full">
                <Input variant="static" label="Title" placeholder="Apple Airpods" />    
          </div>
          <div className="w-full">
              <Textarea label="Content" required />
          </div>
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


// ESLINT 
AddTaskModal.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open : PropTypes.bool.isRequired,
}

export default  AddTaskModal