import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar, NavBar } from "../components";
import { routeAnimation } from "../animations";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <motion.div
        className="grid grid-cols-12 gap-6 px-5 lg:px-28 my-14 sm:px-14 md:px-20"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
      >
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-4 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-8 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
