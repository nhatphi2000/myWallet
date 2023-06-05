import React from "react";
import "./Wallet.css";

export default function Wallet() {
  return (
    <>
      <div>
        <div
          class="container2"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "100px",
          }}
        >
          <h1>TPCOIN WALLET</h1>
          <h4>Your Wallet Address:</h4>
          <h5 class="break-word">test</h5>
          <h3>Your Balance:</h3>
          <h3>300</h3>
          <h2>SendCoin</h2>
          <h5>Receiver address</h5>
          <form
            class="form-inline"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div class="form-group mx-sm-3 mb-2" style={{ width: "200px" }}>
              <label for="address" class="sr-only">
                Receiver address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="address"
                style={{ width: "200px" }}
              ></input>
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="amount" class="sr-only">
                Amount
              </label>
              <input
                type="text"
                class="form-control"
                id="amount"
                placeholder="amount"
              ></input>
            </div>
            <button type="submit" class="btn btn-primary mb-2">
              Send
            </button>
          </form>
          <h3>Mine Block</h3>
          <button type="button" class="btn btn-primary" style={{width:"200px"}}>Mine</button>
          <h5>Transaction pool</h5>
          

        </div>
      </div>
    </>
  );
}
