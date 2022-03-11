function TitleBgBlack(props) {
    const {span, title} = props;
    return (
        <>
            <div className="titulo-bg">
                <div className="titulo container">
                    <p className="font-h3 cor-1">{span}</p>
                    <h1 className="font-h1 cor-0 container">{title}<span className="cor-p1">.</span></h1>
                </div>
            </div>
        </>
    )
}

export default TitleBgBlack;