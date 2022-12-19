import React from "react";
import "./App.css";
import TemporaryName from "./components/TemporaryName";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrimba from "./components/Scrimba";

function App() {
  return (
    <div>
      <TemporaryName />
      <Header />
      <MainContent />
      <Footer />
      <Navbar />
      <Scrimba />
    </div>
  );
}

export default App;
