export const typingEffect = (delayValue: number) => {
  return {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    },
    transition: {
      duration: 0.2,
      delay: delayValue * 0.02,
    },
    viewport: {
      once: true,
    },
  };
};
