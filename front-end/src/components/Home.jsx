import Search from "./Search";
import Jobs from "./Jobs";
import Value from "./Value";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import { Outlet } from "react-router";
import { NavBar2 } from "./NavBar2";
const appp = document.querySelector(".new");

const Home = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
      appp.classList.add("block");
    } else {
      appp.classList.remove("block");
    }
  });
  return (
    <>
    <NavBar/>
      <Search />
      <Jobs />
      <Value />
      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
