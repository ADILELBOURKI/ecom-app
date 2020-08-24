import React from "react";
import "./homepage.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="menu-wrapper">
        {/*START of menu-wrapper */}
        {/* START of item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        {/*END of item */}
        {/* START of item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        {/*END of item */}
        {/* START of item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        {/*END of item */}
        {/* START of item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        {/*END of item */}
        {/* START of item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        {/*END of item */}
      </div>
    </div>
  );
};

export default HomePage;
