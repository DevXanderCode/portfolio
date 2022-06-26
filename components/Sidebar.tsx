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
        <span>Alex </span>
        Chinedu
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Web and Mobile Developer
      </p>
      <p>
        <GiTie className="w-6 h-6" /> Download Resume
      </p>

      {/* Social icons */}
      <div className="flex">
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8" />
        </a>
      </div>
      {/* Address */}
      <div>
        <div>
          <GoLocation />
          <span>Lagos, Nigeria</span>
        </div>
        <p>nwekealexchinedu@gmail.com</p>
        <p>08083409309</p>
        {/* Email Button */}
        <button>Email Me</button>
        <button>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Sidebar;
