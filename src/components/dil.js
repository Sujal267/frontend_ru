import { Link } from "react-router-dom"
import axios from "axios"

async function clickedButton1(){
    axios.post('https://backend-ru.onrender.com', {
        msg:"nhi dil se nhi ho skta dil se page"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

async function clickedButton2(){
    axios.post('https://backend-ru.onrender.com', {
        msg:"haa dil se kar diya dil se page"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


export default function Dil() {
    return (
        <>
            <div className='grid mt-72 justify-center italic'>
                <div className='bg-slate-200 w-auto h-auto m-3'>
                    Pakka na dil se maf kar diya na
                </div>
                <br></br>
                <div className='flex gap-4 justify-center'>
                    <Link to="/againsry"><button onClick={clickedButton1} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>nhi dil se nhi ho skta</button></Link>
                    <Link to="/thanks"><button onClick={clickedButton2} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>haa dil se kar diya</button></Link>
                </div>
            </div>
        </>
    )
}