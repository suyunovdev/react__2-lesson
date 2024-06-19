const Header = () => {
  return (
    <div className="header">
      <div className="head">
        <div className="logo">
          <img src="./src/assets/images/logo.svg" alt="" />
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Articles</a>
          <a href="#">Contact</a>
        </div>
        <div className="search">
          <a href="#">Cart (0)</a>
          <button>Get a free quote</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
