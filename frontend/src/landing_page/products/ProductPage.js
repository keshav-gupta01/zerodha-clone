import React from "react";
import Hero from "./Hero";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSec
        imgURL="images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSec>
      <RightSec
        imgURL="images/products-console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      ></RightSec>
      <LeftSec
        imgURL="images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSec>
      <RightSec
        imgURL="images/kiteconnect.png"
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      ></RightSec>
      <LeftSec
        imgURL="images/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSec>
      <Universe></Universe>
    </>
  );
}

export default ProductPage;
