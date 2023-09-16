import CourseSelect from '@/app/components/courseselect/courseselect'

export default function Courses() {
    return(

        <div className="text-black ">
            <div className="justify-center flex py-9 text-4xl font-bold py-8">
                <h1>What course would you like to study?</h1>
            </div>


            <div className="justify-center flex">
                <CourseSelect/>
            </div>



        </div>
    )
}