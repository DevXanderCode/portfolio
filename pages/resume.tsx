import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { Bar } from "../components";
import { fadeInUp, routeAnimation } from "../animations";
import { languages, tools } from "../data";

const Resume: NextPage = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web | Mobile Developer| portfolio</title>
      </Head>
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Mechanical Engineering</h5>
            <p className="font-semibold">
              University of Port-Harcourt (2017 - present)
            </p>

            <h5 className="my-1 text-xl font-bold">
              Google Africa Developement Scholarship(GADS)
            </h5>
            <p className="font-semibold">Virtual(April 2020 - November 2020)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Lead Front End Developer</h5>
            <p className="font-semibold">Digit Home Limited (2022 - present)</p>
            <h5 className="my-1 text-xl font-bold">Lead Frontend Developer</h5>
            <p className="font-semibold">
              EDO STATE GOVERNMENT [EDSG] (Dec 2020 - 2021)
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages?.map((language) => (
              <Bar data={language} key={language?.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools?.map((tool) => (
              <Bar data={tool} key={tool?.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
