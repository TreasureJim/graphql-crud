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
          <button className="ml-5 border-2 border-white py-4 px-12">
            Register
          </button>
          <button className="border-2 bg-white text-black py-4 px-12">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Home;
