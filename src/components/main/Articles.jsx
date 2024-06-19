const Articles = () => {
  return (
    <div className="Articles">
      <div className="articles">
        <div className="start">
          <h1>Articles & resources</h1>
          <div className="btn">
            <button>Get a free quote</button>
            <button>Browse articles</button>
          </div>
        </div>
        <div className="box">
          <div className="boxs">
            <div className="imegs">
              <img src="./src/assets/images/pelesos.png" alt="" />
            </div>
            <div className="word">
              <h3>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h3>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="kub">
                <p>Jan 28, 2022</p>
                <div className="kubs"></div>
              </div>
            </div>
          </div>
          <div className="boxs">
            <div className="imegs">
              <img src="./src/assets/images/tozaluvchi.png" alt="" />
            </div>
            <div className="word">
              <h3>
                How to properly disinfect your phone and other electronics
              </h3>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="kub">
                <p>Feb 1, 2022</p>
                <div className="kubs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
