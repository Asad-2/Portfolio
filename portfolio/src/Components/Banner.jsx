import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/Person.jpeg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Asad Parvez</h6>
            <h3>Java Developer</h3>
            <p>
            Hello! I'm Asad, a skilled Java developer passionate about crafting efficient, 
            scalable applications. With 1 year of experience, I specialize in Java SE, 
            Java EE, Spring Framework, and Hibernate, aiming to create high-performance 
            solutions.


            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;