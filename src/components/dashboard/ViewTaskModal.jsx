import React from "react"
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
   
  const ViewTaskModal = ({handleOpen, open})=> {
    
    const [title, setTitle] = React.useState('Apple Airpods')
    const [content, setContent] = React.useState('lorem ipsum Input variant static label Title value Apple Airpods')

    return (
      <>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="py-4">
            <div className="pt-6 w-full">
                <Input variant="static" label="Title" value={title} onChange={e => setTitle(e.target.value)} />    
            </div>
          </DialogHeader>
          <DialogBody>
            <div className="w-full">
                <Textarea variant="outlined" required label="Content" value={content} onChange={e => setContent(e.target.value)} />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="amber"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Mark as Completed</span>
            </Button>

            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Edit</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }

  // ESLINT 
ViewTaskModal.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open : PropTypes.bool.isRequired,
}
  
  export default  ViewTaskModal