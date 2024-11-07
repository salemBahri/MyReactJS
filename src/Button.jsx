const Button=(props)=>{
    const{title,onClick}=props
    
    
    return(
        <button className="button" onClick={onClick} >{title}</button>

    )
}
export default Button;




























//code 1 and 2 are similar
    /**code 1>:
     * const Button=(props)=>{
        
        return(
            <button className="button" onClick={props.onClick}>{props.title }</button>

        )
    }
    export default Button;
    */
    /**code 2>:
     * 
     * const Button=(props)=>{
        const {title,onClick}=props
        
        return(
            <button className="button" onClick={onClick}>{title}</button>

        )
    }
    export default Button;
    */



