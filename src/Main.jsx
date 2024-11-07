import {useState} from "react";
import FirstComponent from "./FirstComponent";
import Notification from "./Notification";
import Button from "./Button";
import Posts from "./Posts";

const Main=(e)=>{
    const handle=()=>{
        console.log("clicked");
        isShown(!shown)
         
    }
    const [shown,isShown]=useState(false);
    const title=shown ? "Hide" : "Show"
    return(
        <main className="main">
            <Button title={title} onClick={handle}/>
            {
                shown
                &&
                <Notification text="Hi I am new notification"/>
            }
            
            <Posts/>

        </main>
    )
}
export default Main;

