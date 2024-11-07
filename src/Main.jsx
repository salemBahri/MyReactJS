import FirstComponent from "./FirstComponent";
import Notification from "./Notification";
import Button from "./Button";

const Main=(e)=>{

    const handle=()=>{
        console.log("clicked");
        
    }

    return(
        <main className="main">
            <Button title="show" onClick={handle}/>
            <Notification text="Hi I am new notification"/>
            <h1>Main Component</h1>
            <FirstComponent />
        </main>
    )
}
export default Main;