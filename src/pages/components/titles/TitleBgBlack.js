function TitleBgBlack(props) {
    const {span, title} = props;
    return (
        <>
            <div className="titulo-bg">
                <div className="titulo container">
                    <p className="font-2-l-b cor-5">{span}</p>
                    <h1 className="font-1-xxl cor-0 container">{title}<span className="cor-p1">.</span></h1>
                </div>
            </div>
        </>
    )
}

export default TitleBgBlack;