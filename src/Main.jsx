import {useState} from "react";
import FirstComponent from "./FirstComponent";
import Notification from "./Notification";
import Button from "./Button";

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
            
            <h1>Main Component</h1>
            <FirstComponent />
        </main>
    )
}
export default Main;

