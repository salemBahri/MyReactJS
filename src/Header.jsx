import { Link } from "react-router-dom";
const Header=(props)=>{
    const {title,text}=props;
    return(
        <header className="header">
            <h1 className="header-heading">{title}</h1>
            <p className="header-text">{text}</p>
            <nav className="header-nav">
                <li className="header-nav-item">
                    <Link to="/" style={{color:"#fff",textDecoration:"none"}}>Home</Link>
                </li>
                <li className="header-nav-item">
                <Link to="/blog" style={{color:"#fff",textDecoration:"none"}}>Blog</Link>
                </li>
            </nav>
        </header>

    )

}
//default value
Header.defaultProps={
    title:"Learn React",
    text:"I am very excited to learn react js"}
export default Header;
