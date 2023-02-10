import Head from 'next/head';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hi! I'm Ridwan Maulana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">RM</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="mx-auto py-2 bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <div className="text-center p-2 py-2">
            <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-blue-400 md:text-6xl">
              Ridwan Maulana
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-base">
              Someone interested in web development. I'm currently learning Laravel, React, React Native, and Flutter.
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.facebook.com/rmfhdofficial"><AiFillFacebook /></a>
              <a href="https://www.linkedin.com/in/ridwan-maulana-7349671b5?originalSubdomain=id"><AiFillLinkedin /></a>
              <a href="https://github.com/hirridwan"><AiFillGithub /></a>
              <a href="https://www.instagram.com/hi_rridwan"><AiFillInstagram /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
