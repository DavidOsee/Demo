import { Button } from "@material-tailwind/react"
import UpdateProfileModal from "../../components/profile/UpdateProfileModal";
import { useState } from "react";

const Profile = () => {
    //
    const [open, setOpen] = useState(false)

    const handleOpenOnClick = () => {
        setOpen(!open)
    }

    return (       
        <>
            <div className="w-full h-screen bg-gradient-to-r from-gray-50 via-blue-50 to-white-50 px-10 pt-10">
                <div className="relative mt-16 mb-32 max-w-md mx-auto mt-24">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://randomuser.me/api/portraits/women/49.jpg" className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-12 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Carole Steward</h1>
                            <p className="text-gray-800 text-sm text-center">Floater</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                It is such a pleasure to have you !
                            </p>
                            <div className="flex w-max gap-1 mt-4 py-8">
                                <Button variant="filled" onClick={handleOpenOnClick}>Update account</Button>
                                <Button variant="gradient" color="red" onClick={()=> alert("You are just about to delete your account. Please confirm.")}>Delete account</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateProfileModal handleOpen={handleOpenOnClick} open={open} />
        </>
    );
}

export default Profile;
