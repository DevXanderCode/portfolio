export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 10,
      stiffnes: 100,
    },
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
