function TitleBgWhite(props) {
    const {span, title} = props;
    return (
        <>
            <div className="titulo container">
                <p className="font-2-l-b cor-5">{span}</p>
                <h2 className="container font-1-xxl">{title}<span className="cor-p1">.</span></h2>
            </div>
        </>
    )
}

export default TitleBgWhite;