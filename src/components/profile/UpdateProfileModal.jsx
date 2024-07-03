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
   
  const UpdateProfileModal = ({handleOpen, open})=> {
    
    return (
      <>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Profile details</DialogHeader>
          <DialogBody>
            <div className="pt-2 pb-6 w-full">
                  <Input variant="static" label="Firstname" placeholder="Apple Airpods" />    
            </div>
            <div className="pt-2 pb-6 w-full">
                  <Input variant="static" label="Lastname" placeholder="Apple Airpods" />    
            </div>
            <div className="pt-2 pb-6 w-full">
                  <Input variant="static" type="email" label="Email" placeholder="Apple Airpods" />    
            </div>
            <div className="pt-2 pb-6 w-full">
                  <Input variant="static" label="Password" placeholder="Apple Airpods" />    
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
              <span>Update</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
  
  
  // ESLINT 
  UpdateProfileModal.propTypes = {
    handleOpen: PropTypes.func.isRequired,
    open : PropTypes.bool.isRequired,
  }
  
  export default  UpdateProfileModal