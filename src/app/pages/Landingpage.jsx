"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Section from "../components/highlightss";
import Step from "../components/Step";
import CommunitySection from "../components/Comunity";
import Learn from "../components/learn";
import Frequently from "../components/Frequently";
import Footer from "../components/Footer";

export default function Landingpage() {
  const [activePage, setActivePage] = useState("home"); // default home

  return (
    <div className="bg-white">
      {/* Pass setActivePage to Navbar so it can switch */}
      <Navbar setActivePage={setActivePage} />

      {/* Conditionally render based on activePage */}
      {activePage === "home" && (
        <>
          <div className="bg-[#FAFAFA]">
            <Hero />
          </div>
          <Courses />
          <div className="bg-[#FAFAFA]">
            <Section />
            <Step />
          </div>
          <CommunitySection />
          <Learn />
          <Frequently />
        </>
      )}

      {activePage === "courses" && <Courses />}
      {activePage === "learn" && <Learn />}
      {activePage === "footer" && <Footer />}

      <Footer />
    </div>
  );
}
