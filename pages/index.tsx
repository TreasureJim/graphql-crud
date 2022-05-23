import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <div className="flex justify-end items-center h-20 fixed w-full top-0 mx-auto text-right bg-black text-white">
          <span className="">Start your own shop</span>
          <button className="m-5 mr-0 border-2 border-white py-2 px-12 rounded-sm">
            Register
          </button>
          <button className="m-5 border-2 bg-white text-black py-2 px-12 border-white rounded-sm">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Home;
