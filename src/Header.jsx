export default function Header(props){
    const {title,text}=props;
    return(
        <header className="header">
            <h1 className="header-heading">{title}</h1>
            <p className="header-text">{text}</p>
        </header>

    )
}
