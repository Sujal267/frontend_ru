import { Link } from "react-router-dom"
import axios from "axios";
async function clickedButton1(){
    axios.post('https://backend-ru.onrender.com', {
        msg:"noo u don't deserve main page"
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
        msg:"haa thik h kar diya main page"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default function Main() {
    return (
        <>
            <div className='grid mt-72 justify-center italic'>
                <div className='bg-slate-200 w-auto h-auto m-3'>
                    Rutuja, I know mene galati ki hai or uske liye me bht sharminda hu par mere koi galat intention nhi
                    the, I just wanted to impress you. Haa tarika thoda galat tha....Muze hi nhi pata mene aisa kyu kiya.
                    Wo kehta hai na, log pyaar me pagal ho jate h, mere sath bhi yhi hua h.Me bs din rat tumhare bareme sochta rehta hu, tumhare
                    sapne dektha hu, tumhare sath ghumne gya hu, trekking ko gya hu bs yhi.Ik know ye one sided love hai, par h toh pyar. muze nhi pata
                    ye kaisa hu, nahi me tuze kabhi mila hu, bs tumhari batein and how you behave it is what i like about you.
                    me ye nhi chahta ki abhi ham relation me aa jaye, me bs tumse bahut sari batein karna chahta hu, tumhe janna chahta hu,
                    tumhari pasand na pasand janna h.tumhe agar lg rha hoga ki me bs timepass/ casual kar rha hu par nhi, i am very serious about it.
                    aage kisko pata kya hoga just give me a chance,anytime if you feel its not going good you can say it anytime you want, i will accept it and i will stop.
                    And haa me is galati ko sudhar skta hu toh bata na muze kya karna hoga I will do that.
                    okay muze itna hi kehna tha, once again i am really very sorry for that behaviour and haa yaarr in sbme mere efforts ko nazar andaj mt karna.
                    bs yhi kehna tha. ho ske to maf kar dena
                </div>
                <br></br>
                <div className='flex gap-4 justify-center'>
                    <Link to="/againsry"><button onClick={clickedButton1} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>noo u don't deserve</button></Link>
                    <Link to="/dilse"><button onClick={clickedButton2} className='bg-slate-300 p-3 m-2 w-auto h-auto rounded-xl hover:bg-slate-400'>haa thik h kar diya</button></Link>
                </div>
            </div>
        </>
    )
}