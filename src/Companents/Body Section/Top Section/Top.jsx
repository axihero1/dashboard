import React from "react";
import "./top.css";
import "./top.scss";

// Imported Icons
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotifications } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

// Imported Imgs
// import adminPhoto from "../../../Assets/admin,photo.png";
// import videoRain from "../../../Assets/210329_06B_Bali_1080p_013_preview.mp4";
// import firetree from "../../../Assets/rasm.png";

function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Pranti.</h1>
          <p>Hello Axihero, Welcome back</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotifications className="icon" />
          <div className="adminImg">
            {/* <img src={adminPhoto} alt="Admin Img" /> */}
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell estrordinary products</h1>
          <p>
            The world`s fast growing industry today are natural made products!
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="vidioDiv">
            {/* <video src={videoRain} autoPlay loop muted></video> */}
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>

                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              {/* <img src={firetree} alt="Img Name" /> */}
            </div>
            <div className="sideBarCar">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having to trouble in Planati, place contanct us from for more
                  questions
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Top;
