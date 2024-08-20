import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import RowList from "../components/Main/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
