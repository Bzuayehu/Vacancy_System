import { useParams } from "react-router-dom";
import { useEffect,  } from "react";

const Job = () =>{

    const {id} = useParams()
    // const [Job, setJob] = useState()

    useEffect(()=>{
        console.log("useEffect")
        // const url = "http://localhost"
    },[])

    return(
        <>
       <div className="h-[100%] mt-28 ml-24"> {id}</div> 
        </>
    )
}
export default Job