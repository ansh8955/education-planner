import { useState } from 'react'
import './Coursecard.css'

const  Coursecard = ({name,hour,key})=>{

    const [updateHours,setHourvalues] = useState(hour);

return(

<>


<div>

<p className='subject'>Subject:{name}</p>
<p className='hour'>Hour:{updateHours}</p>

<div>

    <button className="plus" onClick={()=>{setHourvalues(updateHours+1)}}>+</button>
    <button className="minus" onClick={()=>{setHourvalues(updateHours-1)}}>-</button>
</div>
</div>

</>
)



} 

export default Coursecard;

