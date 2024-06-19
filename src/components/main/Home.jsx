const Home = () => {
  return (
    <div className="home">
      <div className="homes">
        <div className="word">
          <h2>Quality cleaning for your home</h2>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="btn">
            <button>Get a free quote</button>
            <div className="btn-call">
              <div className="call-btn">
                <button>
                  <img src="./src/assets/images/phone.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="imags">
          <img src="./src/assets/images/photo1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
