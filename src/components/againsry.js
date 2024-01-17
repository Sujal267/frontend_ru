import { Link } from "react-router-dom"
import axios from "axios"

async function clickedButton1(){
    axios.post('https://backend-ru.onrender.com', {
        msg:"noo u don't deserve again sorry page"
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
        msg:"haa thik h kar diya again sorry page"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default function Ok() {
    return (
        <>
            <div className='grid mt-72 justify-center italic'>
                <div className='bg-slate-200 w-auto h-auto m-3'>
                I am truly sorry yaarr for any hurt or inconvenience I may have caused you. It was never 
                my intention to upset you, and I feel regretful for the impact of my actions.
                pls maf kar de na yaarr
                </div>
                <br></br>
                <div className='flex gap-4 justify-center'>
                    <Link to="/ok"><button onClick={clickedButton1} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>noo u don't deserve</button></Link>
                    <Link to="/thanks"><button onClick={clickedButton2} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>haa thik h kar diya</button></Link>
                </div>
            </div>
        </>
    )
}