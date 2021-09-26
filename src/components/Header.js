import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web plastic surgery in colombia</h1>
        <Typed
          className="typed-text"
          strings={[
            "Liposuccion",
            "Mamoplastia de Aumento",
            "Abdominoplastia",
            "Resultado Natural",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contactanos{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
