import React, { useState } from "react";
import "./PageMain.css";
import SensorMaster from "../../pages/SensorMaster/SensorMaster";
import PageHeader from "../Header/PageHeader";
import Footer from "../Footer/Footer";

const Main = () => {
  const [pageName, setPageName] = useState("");
  setPageName("Sensor Master");

  return (
    <>
      <div className="container-fluid">
        <div className="container main_container">
          <PageHeader heading={pageName}/>
          <SensorMaster />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
