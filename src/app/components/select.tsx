"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
export default function Select() {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
          width: "40vw",
          border: "dotted 2px darkgreen",
          margin: "100px 50px 100px 25px",
          backgroundColor: "black",
          borderRadius: "10px",
          paddingBottom: "350px",
        }}
      >
        {" "}
        <div>
          <p
            style={{
              color: "white",
              marginLeft: "300px",
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Upload file
          </p>
          <p
            style={{
              color: "#989898",
              marginLeft: "230px",
              marginTop: "20px",
            }}
          >
            Drag and Drop here or Click to upload files
          </p>
        </div>
        <div
          style={{
            height: "150px",
            width: "600px",
            backgroundColor: "transparent",
            marginTop: "150px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "310px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              backgroundColor: hover ? "#0d0d0d" : "transparent",
              borderRadius: "10px",
              transition: "background-color 0.3s ease",
              border: "dotted 2px darkgreen",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "310px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              backgroundColor: "#171717",
              borderRadius: "10px",
              transform: hover ? "translate(30px, -30px)" : "translate(0, 0)",
              boxShadow: hover
                ? "0px 15px 40px rgba(0,0,0,0.6)"
                : "0px 5px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              zIndex: 2,
            }}
          >
            <Upload />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "35vh",
          width: "60vw",
          margin: "250px 50px 100px 40px",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <p style={{ fontSize: "45px", fontWeight: "bold", color: "#36a968" }}>
          Secure File Transfer: Safe. Simple. Seamless.
          <br />
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
            Upload. Protect. & Share without any fear of data loss and security.
          </span>
        </p>
      </div>
    </div>
  );
}
