import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar: React.FC = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/chinedu/image/upload/v1629700885/ndoqwxe58ode0jadq2ez.jpg"
        className="w-32 h-32 mx-auto rounded-full"
        alt="user avartar"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="font-Kaushan text-green">Alex </span>
        Chinedu
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Web and Mobile Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download=""
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div className="py-4 my-5 -mx-4 bg-gray-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Lagos, Nigeria</span>
        </div>
        <p className="my-3">nwekealexchinedu@gmail.com</p>
        <p className="my-3">08083409309</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => {
          window.open("mailto:nwekealexchinedu@gmail.com");
        }}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
