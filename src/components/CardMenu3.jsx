import { Link } from "react-router-dom";

function CardMenu3(props) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <img src={props.cardImg} alt="" width={150} />
            </div>
            <div className="col m-auto me-1">
              <h5 className="card-title">
              <span className={`badge text-bg-${props.badgeColor} me-1`}>{props.badgeText}</span>{props.cardTitle}
              </h5>
              <p className="card-text">{props.cardText}</p>
              <Link to={props.to} className="">
                {props.linkText}
                <i className={`ps-1 bi bi-${props.linkIcon}`}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardMenu3;