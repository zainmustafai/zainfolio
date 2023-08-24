import ParticlesComponent from "./components/ParticlesComponent";
import Image from "next/image";
import logo from "./reactifier-portfolio-logo.png";

import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookFilled />,
    link: "https://www.facebook.com/zforzain2000",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <InstagramFilled />,
    link: "https://www.instagram.com/zforzain2000",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <TwitterSquareFilled />,
    link: "https://twitter.com/zforzain2000",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <LinkedinFilled />,
    link: "https://www.linkedin.com/in/zforzain2000/",
  },
  {
    id: 5,
    name: "Github",
    icon: <GithubFilled />,
    link: "https://www.github.com/zforzain2000/",
  },
];
const HomePage = () => {
  return (
    <div className="container h-full  flex items-center justify-center flex-col animate-fade-in">
      <div className="">
        <ParticlesComponent />
      </div>
      <div className="text-center ">
        <h1 className=" text-3xl md:text-4xl font-bold  dark:text-white ">
          Hello I&apos;m &nbsp;
          <span className="text-primary dark:text-primary  ">
            Muhammad Zain Ul Abidin.
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-2xl">
          I&apos;m a freelance react developer. I can provide clean code and
          pixel perfect design.
        </p>

        <section className="flex justify-center items-center mt-8 text-lg">
          {socialLinks.map((link) => {
            return (
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                key={link.id}
                className="p-2 border-2 border-lightGray dark:border-black rounded-full hover:border-primary dark:hover:border-primary transition-all duration-500 mx-2 text-lg aspect-square w-12 flex justify-center items-center hover:text-primary hover:text-opacity-50 "
              >
                {link.icon}
              </a>
            );
          })}
        </section>
      </div>

      {/* LOGO */}
      {/* <a
        href="https://9724054718399.gumroad.com/l/reactifier-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" w-16 md:w-10 aspect-square fixed bottom-8 right-4 z-50 rounded-ful -rotate-45 ">
          <Image
            src={logo}
            alt="Logo"
            className="w-[50%] h-[50%] object-cover slow-spin scale-0 md:scale-150 shadow-lg "
          />
          <p className="text-primary text-4xl underline underline-offset-8 font-light absolute top-[100%] left-[25%] -translate-x-[50%] -translate-y-[50%] signature-text">
            ~zain~
          </p>
        </div>
      </a> */}
    </div>
  );
};

export default HomePage;
