import { Link } from "react-router-dom";


function ResourceMenu(props) {
    return (
        <>
        <div className="card Menu p-1 border">
            
            <div className="card-body">
                <div className="badge mb-3 "  style={{ padding: '15px', backgroundColor:  props.backgroundColor}}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
            
            
        </div>

        </>
    )
}

export default ResourceMenu;