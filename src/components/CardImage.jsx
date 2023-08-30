function CardImage(props) {
    return ( 
        
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card imgMenu p-1 border my-3">
                    <div className="card-body">
                        <div className="p-1 "  style={{ }}>
                            <div className="pb-1">
                                <img src={props.image} className="img-fluid" style={{height: "auto", width: '100%'}} alt="" />
                            </div>
                            <div className="py-2">
                                <h5 className="card-title py-0"  >{props.cardTitle}</h5>
                                <p className="card-text">{props.cardText}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        
     );
}

export default CardImage;