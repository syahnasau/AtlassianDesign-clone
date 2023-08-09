function Header() {
  return (
    <>
      <section className="SecHeader container mt-4 p-4">
        <div className="p-0" style={{ backgroundColor: "", width: "100%" }}>
          <div className="row " style={{ display: "flex" }}>
            <div className="col-lg-6 col-sm-12 m-auto">
              <h1 className="h1-header pb-3">Design, develop, deliver</h1>
              <p className="">
                Use Atlassian's end-to-end design languange to create simple,
                intuitive and beutiful experiences.
              </p>

              <a href="" className="">
                <button
                  className="btn btn-primary my-4 text-center mx-auto"
                  style={{ fontWeight: 500, fontSize: 14 }}
                >
                  Get started
                </button>
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src="https://atlassian.design/static/43b3a69216eac32c2ba8799f74e5e128/homepage@2x.png"
                alt=""
                className="m-auto w-100"
              />
            </div>
          </div>
        </div>
        <FutureDesign />
      </section>
    </>
  );
}

function FutureDesign() {
  return (
    <section className="mt-5 SecFuture">
      {/* <div className="object-fit-none">
              <video src="https://atlassian.design/static/0c19db27d1d90cd0b293d1494f64e6a8/ads-vision-video.mp4" autoPlay muted loop className="object-fit-none"></video>
          </div> */}
      {/* <div className="video-overlay">
          <YouTube 
            videoId="6BCuE7Hrq7o"
            opts={{
              playerVars: {
                autoplay: 1,
                loop: 1,
                mute: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                playlist: '6BCuE7Hrq7o', // Looping the video
              },
            }}
            className="position-absolute top-0 start-0 w-100 h-100"
          />
        </div> */}

        <div className="card position-relative">
          <div className="videoOverplay z-0 position-absolute" style={{ height: 60, width: "100%" }}>
            <video
              src="https://atlassian.design/static/0c19db27d1d90cd0b293d1494f64e6a8/ads-vision-video.mp4"
              autoPlay
              muted
              loop
              style={{ height: 50, width: "100%" }}
              className="object-fit-cover rounded-4 p-3"
            ></video>
          </div>
          <div className="backgroundVideo position-absolute z-1 rounded-2" style={{ height: 60, width: "100%" }}></div>
          <div className="row g-0 p-2 position-absolute z-2" style={{ height: 50, width: "100%" }}>
            <div className="col-1 d-flex align-items-center">
              <span className="badge mx-auto" style={{ backgroundColor: "#6E5DC6", fontSize: 11 }}>
                New
              </span>
            </div>
            <div className="col-9 d-flex align-items-center p-2 txt-Future">
              See the future of Atlassian Design System.
            </div>
            <div className="col d-flex align-items-center justify-content-end pe-4">
              <a href="" className="">
                <button className="btnVideo  p-1 px-2">Watch the video</button>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Header;
