function CardMenu2 (props) {
    return (
        <>
        <div className="card brandMenu p-1">
            <div className="card-body">
                <div className="badge mb-3" style={{ padding: '15px', backgroundColor: '#CD519D' }}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>

        </>
    )
}

export default CardMenu2;