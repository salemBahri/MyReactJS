const Notification=(props)=>{
    const{text}=props
    return(
        <div className="notification">
            <p className="notification-text">{text}</p>
        </div>
    )
}

//default values if empty
Notification.defaultProps={
    text:"Hi i am default notification"
}

export default Notification;