import React from "react";
import "./listing.scss";
import "./listing.css";
// Imported Icons----------->
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
// Imported Image----------->
import vase from "../../../Assets/vase.png";
import vase1 from "../../../Assets/vase1.png";
import vase2 from "../../../Assets/vase2.png";
import vase3 from "../../../Assets/vase3.png";
import user from "../../../Assets/users.webp";
import user1 from "../../../Assets/admin,photo.png";
import user2 from "../../../Assets/user2.jpeg";
import user3 from "../../../Assets//user3.jpeg";



function Listing() {
  return (
    <div className="listiningSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={vase} alt="Img Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={vase1} alt="Img Name" />
          <h3>Send flowers</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={vase2} alt="Img Name" />
          <h3>Bouquet Rose</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={vase3} alt="Img Name" />
          <h3>Lovving Rose</h3>
        </div>
      </div>

      <div className="sellers flex">

        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="User Imag" />
              <img src={user1} alt="User Imag" />
              <img src={user2} alt="User Imag" />
              <img src={user3} alt="User Imag" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant Sold <br />
                <small>
                  21 Sellers <span className="date">7 days</span>
                </small>
              </span>

            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Imag" />
              <img src={user} alt="User Imag" />
              <img src={user2} alt="User Imag" />
              <img src={user3} alt="User Imag" />
            </div>
            <div className="cardText">
              <span>
                28.556 Plant Sold <br />
                <small>
                  26 Sellers <span className="date">31 days</span>
                </small>
              </span>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Listing;
