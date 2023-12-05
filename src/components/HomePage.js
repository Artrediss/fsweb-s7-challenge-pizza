import React from "react";
import { Link} from 'react-router-dom';
import Img from "../Assets/adv-aseets/adv-form-banner.png"

export default function HomePage() {
  return (
    <div className="maindivcenter">
      <h1>Teknolojik Yemekler</h1>
      <div className="containerAlign">
        <div>KOD ACIKTIRIR </div>
        <div>PIZZA, DOYURUR</div>
        </div>

      <Link to="/order" className="button-homepage">
      ACIKTIM
      </Link>     

       <div>
        <img className="homePageHalfPizza" src={Img} />
      </div>
    </div>
  );
}
