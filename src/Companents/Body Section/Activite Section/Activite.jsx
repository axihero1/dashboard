import React from "react";
import "./activite.css";
import "./activiti.scss"
// Imported Icons
import { BsArrowRightShort } from "react-icons/bs";

// Imported Image
import user from "../../../Assets/user2.jpeg";
import user1 from "../../../Assets/users.webp";
import user2 from "../../../Assets/user3.jpeg";
import user3 from "../../../Assets/users.webp";
import user4 from "../../../Assets/user5.jpeg";

function Activite() {
  return (
    <div className="activiteySection">
      <div className="heading flex">
        <h1>Resent Activitey</h1>
        <button className="btn flex">
          See all
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Costumer Img" />
          <div className="costumerDatails">
            <span className="name">Ola Martha</span>
            <small>Orderd new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Costumer Img" />
          <div className="costumerDatails">
            <span className="name">Ola Martha</span>
            <small>Orderd new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Costumer Img" />
          <div className="costumerDatails">
            <span className="name">Ola Martha</span>
            <small>Orderd new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Costumer Img" />
          <div className="costumerDatails">
            <span className="name">Ola Martha</span>
            <small>Orderd new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Costumer Img" />
          <div className="costumerDatails">
            <span className="name">Ola Martha</span>
            <small>Orderd new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        
      </div>
    </div>
  );
}

export default Activite;
