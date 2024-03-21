"use client";
import React, { useState, useEffect } from "react";
import Discussion from "./component/Discussion";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Stories from "./component/Stories";
import "./globals.css";

const LandingPage = () => {
  const [activeComponent, setActiveComponent] = useState("discussion");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveComponent("discussion");
  }, [isMobile]);

  return (
    <>
      {isMobile ? <Sidebar /> : <></>}

      <Navbar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      <div>
        {isMobile ? (
          // On mobile, display only the active component
          <div className="pt-10">
            {activeComponent === "discussion" && <Discussion />}
            {activeComponent === "stories" && <Stories />}
          </div>
        ) : (
          // On desktop, display both components side by side
          <div className="flex flex-row justify-between ">
            <Sidebar />
            <Discussion />
            <Stories />
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
