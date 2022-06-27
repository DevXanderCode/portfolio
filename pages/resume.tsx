import { NextPage } from "next";
import { motion } from "framer-motion";
import { Bar } from "../components";
import { fadeInUp } from "../animations";
import { languages, tools } from "../data";

const Resume: NextPage = () => {
  return (
    <div className="px-6 py-2">
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Mechanical Engineering</h5>
            <p className="font-semibold">
              University of Port-Harcourt (2017 - present)
            </p>
            <p className="my-1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to In publishing and graphic design, Lorem
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Lead Front End Developer</h5>
            <p className="font-semibold">Digit Home Limited (2022 - present)</p>
            <p className="my-3">
              I worked as the lead frontend developer for both mobile and web of
              this property tech start up based in Lagos Nigeria
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
    </div>
  );
};

export default Resume;
