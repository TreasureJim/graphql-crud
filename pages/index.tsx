import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

import logo from "../public/dev-logo.svg";
import modelLeft from "../public/images/model-left.jpg";
import modelRight from "../public/images/model-right.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Layout />
      <div className="absolute z-10 w-full pt-2">
        <div className="m-auto w-20">
          <Image src={logo} layout="responsive" alt="logo" />
        </div>
      </div>

      <div>
        <div className="flex flex-row">
          <div className="w-2/4">
            <Image src={modelLeft} alt="model left" layout="responsive" />
          </div>
          <div className="w-2/4">
            <Image src={modelRight} alt="model right" layout="responsive" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
