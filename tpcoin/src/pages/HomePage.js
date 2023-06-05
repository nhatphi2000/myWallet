import React from "react";
import logo from "../img/bg-home-spaceman-and-dog.313ea5b0.svg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div class="container">
        <div class="TextAndButton" style={{ width: "530px",padding:"10px",marginTop:"40px"}}>
          <p className="h1" style={{ color: "white" }}>
            {" "}
            Ethereum's Original Wallet
          </p>
          <p style={{ color: "white" }}>
            MEW (MyEtherWallet) is a free, client-side interface helping you
            interact with the Ethereum blockchain. Our easy-to-use, open-source
            platform allows you to generate wallets, interact with smart
            contracts, and so much more.
          </p>
          <div
            class="allButton"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "43px",
              marginTop: "40px",
            }}
          >
            <button
              type="button"
              style={{
                height: "80px",
                backgroundColor: "#05c0a5",
                borderColor: "#05c0a5",
              }}
              class="btn btn-primary"
            >
              Create a new Wallet
            </button>
            <button
              type="button"
              style={{
                height: "80px",
                backgroundColor: "#184f90",
                borderColor: "#05c0a5",
                color: "#05c0a5"
              }}
              class="btn btn-primary"
            >
              Access to Wallet
            </button>
          </div>
        </div>
        <img
          src={logo}
          alt="Spaceman and his dog"
          style={{ height: "500px" }}
        ></img>
        <div></div>
      </div>
    </>
  );
}
