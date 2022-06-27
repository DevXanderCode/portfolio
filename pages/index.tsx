import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import { services } from "../data";
import { fadeInUp, stagger, routeAnimation } from "../animations";

const index: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web | Mobile Developer| portfolio</title>
      </Head>
      <h5 className="my-3 font-medium">
        A Full stack web and Mobile Developer, seeking adventure and an
        opportunity to make impact. A Fast learner and creative developer who
        loves what he does and is easy to work with. Advise and consultation
        options also available.
      </h5>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="flex-grow p-4 mt-5 -mx-6 bg-gray-400 dark:bg-dark-100"
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What i offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services?.map((service, idx) => (
            <motion.div
              variants={fadeInUp}
              key={service?.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
