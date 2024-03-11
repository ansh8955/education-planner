import Coursecard  from "./Coursecard";
import {useState} from 'react';
import './Courseplanner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoursePlanner =()=>{

    function alert(message){

        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

const [courseData,setCourseData] = useState([]);


const clickHandler = ()=>{

   

const courseName = document.getElementById('coursename').value;
const courseHour = document.getElementById('coursehour').value;

if(courseName =='' || courseHour==''){
    alert("Fill the entries");
}

else{
    {
        toast.success('Subject added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
                    });
    }

const newData ={

    name:courseName,
    hour:  parseInt(courseHour)
}

const Data = [...courseData,newData];

setCourseData(Data);


}
}

return(


    <>

<div className="maindiv">

<h1>Geekster Education Planner</h1>


<div className="input">

<input type="text" id="coursename" placeholder="Subject"></input>
<input type="number" id="coursehour" placeholder="Hours"></input>
<button onClick={clickHandler} className="addbtn">Add</button>

</div>

{courseData.map((elem, index) => (
    <Coursecard name={elem.name} hour={elem.hour} key={index} />
))}


</div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
)

}

export default CoursePlanner;