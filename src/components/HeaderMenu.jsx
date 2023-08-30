function HeaderMenu(props) {
    return ( 
        <section className="SecHeader container-fluid p-4 bg-light ">
          <div className="p-3 my-4" style={{ backgroundColor: "", width: "100%" }}>
            <div className="row " style={{ display: "flex" }}>
              <div className="col-lg-7 col-sm-12 m-auto">
                <h1 className="h1-header pb-3" >{props.TitleHeader}</h1>
                <p className="">
                    {props.SubHeader}
                </p>
                
              </div>
              <div className="col-lg-5 d-ld-none">
                <img
                  src={props.imgHeader}
                  alt=""
                  className="m-auto w-100" 
                />
              </div>
            </div>
          </div>
        </section>
     );
}

export default HeaderMenu;