import {useState} from "react";
import { BrowserRouter,Route,Switch,Routes } from "react-router-dom";
import Notification from "./Notification";
import Button from "./Button";
import Posts from "./Posts";
import Home from "./Home";

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
            
            <switch>
                <Routes>
                <Route path="/" Component={Home} />
                <Route path="/blog" Component={Posts} />
                </Routes>
            </switch>
            

        </main>
    )
}
export default Main;

