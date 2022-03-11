function TitleBgWhite(props) {
    const {span, title} = props;
    return (
        <>
            <div className="titulo container">
                <p className="font-h3 cor-1">{span}</p>
                <h2 className="container font-h1">{title}<span className="cor-p1">.</span></h2>
            </div>
        </>
    )
}

export default TitleBgWhite;