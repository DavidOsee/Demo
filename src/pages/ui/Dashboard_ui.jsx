
import Tasks from "../../components/dashboard/Tasks"
import CompletedTasks from "../../components/dashboard/CompletedTasks"

const DashboardUI = () => {
    
    return (
        <section className="py-8">
            <div className="max-w-screen-xl mx-auto px-2 text-gray-600 md:px-6">
                <div className='relative max-w-xl mx-auto sm:text-center pb-10'>
                    <h3 className='text-gray-800 text-2xl font-semibold sm:text-3xl'>
                        Welcome back dear <u>David Osee</u>
                    </h3>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-2 gap-0">
                        <div >
                            <Tasks />
                        </div>
                        <div>
                            <CompletedTasks />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardUI