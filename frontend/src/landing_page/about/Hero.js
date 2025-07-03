import React from "react";

function Hero() {
  return (
    <div className="container" style={{ marginTop: "10rem", color: "#424242" }}>
      <div className="row" style={{ marginBottom: "6.5rem" }}>
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.<br></br>
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-center fw-medium text-muted" style={{marginTop: "6.5rem",marginBottom: "6.5rem", fontSize: "17px", lineHeight: "1.6"}}>
        <div className="">
          <p>
            We kick-started operations on the 15th of August, 2010 <br></br>
            with the goal of breaking all barriers that traders and <br></br>
            investors face in India in terms of cost, support, and <br></br>
            technology. We named the company Zerodha, a <br></br> combination of
            Zero and "Rodha", the Sanskrit word for <br></br>
            barrier.<br></br>
            <br></br> Today, our disruptive pricing models and in-house
            <br></br>
            technology have made us the biggest stock broker in <br></br> India.
            <br></br>
            <br></br> Over 1.6+ crore clients place billions of orders every
            year <br></br> through our powerful ecosystem of investment
            <br></br> platforms, contributing over 15% of all Indian retail
            <br></br> trading volumes.
          </p>
        </div>
        <div style={{width: "4rem"}}></div>
        <div className="">
          <p>
            In addition, we run a number of popular open online <br></br> educational and
            community initiatives to empower retail <br></br> traders and investors. <br></br><br></br>
            Rainmatter, our fintech fund and incubator, has invested <br></br> in several
            fintech startups with the goal of growing the <br></br> Indian capital
            markets. <br></br><br></br> And yet, we are always up to something new every day.<br></br> Catch
            up on the latest updates on our blog or see what<br></br> the media is saying
            about us or learn more about our<br></br> business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
