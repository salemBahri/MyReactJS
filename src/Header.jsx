const Header=(props)=>{
    const {title,text}=props;
    return(
        <header className="header">
            <h1 className="header-heading">{title}</h1>
            <p className="header-text">{text}</p>
        </header>

    )

}
//default value
Header.defaultProps={
    title:"Learn React",
    text:"I am very excited to learn react js"}
export default Header;
