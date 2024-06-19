const About = () => {
  return (
    <div className="about">
      <div className="us">
        <div className="about-start">
          <h2>About Us</h2>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="about2">
          <div className="box">
            <img src="./src/assets/images/icon1.png" alt="" />
            <h5>1. Schedule online</h5>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className="box">
            <img src="./src/assets/images/icon2.png" alt="" />
            <h5>2. Pay online easily</h5>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className="box">
            <img src="./src/assets/images/icon3.png" alt="" />
            <h5>3. Get your house cleaned</h5>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className="about-end">
          <button>Get a free quote</button>
          <button>Explore services</button>
        </div>
      </div>
    </div>
  );
};

export default About;
