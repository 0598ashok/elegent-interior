import React from "react";
import './Home.css'

const Preloader = () => {
  return (
    <section class="wrapper">
        <div class="loader">
            <div class="loading one"></div>
            <div class="loading two"></div>
            <div class="loading three"></div>
            <div class="loading four"></div>
        </div>
    </section>
  );
};

export default Preloader;
