import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { motion } from "framer-motion";

const headingAnimation = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const paragraphAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
      delay: 2.5,
      ease: [0, 0.71, 0.2, 1.01],
      opacity: {
        duration: 1.8,
        ease: "easeIn",
      },
    },
  },
};
const particlesAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [
      0.2, 0, 0, 1, 0, 0, 0.1, 0, 0, 1, 0, 0, 0, 1, 0, 0.8, 0, 1, 0, 0, 0, 0, 1,
      0, 0, 0.5, 1,
    ],
    transition: {
      delay: 0.2,
      duration: 1.5,
      // ease: "easeIn",
      ease: [0.2, 0.3, 0.4, 0.7],
    },
  },
};

const Hero = () => {
  return (
    <div className="min-h-screen overflow-hidden px-8 pt-10">
      <div className="relative grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3">
          <article className="lg:ml-16">
            <motion.h1
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              transition={{
                type: "tween",
                duration: 2,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01],
                opacity: {
                  duration: 1.8,
                  ease: "easeOut",
                },
              }}
              className="hidden bg-gradient-to-r from-slate-400 to-white bg-clip-text py-2 font-['Expletus_Sans'] text-8xl font-extrabold normal-case text-transparent md:block md:py-4 md:text-8xl lg:mt-10"
            >
              <span className="text-9xl">A</span>YOOB{" "}
              <span className="text-9xl">S</span>ALARI
            </motion.h1>
            <motion.h1
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              transition={{
                type: "tween",
                duration: 2,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01],
                opacity: {
                  duration: 1.8,
                  ease: "easeOut",
                },
              }}
              className="bg-gradient-to-r from-slate-400 to-white bg-clip-text py-2 text-center font-['Expletus_Sans'] text-7xl font-extrabold normal-case text-transparent md:hidden md:py-4 md:text-8xl lg:mt-10"
            >
              AYOOB
            </motion.h1>
            <motion.h1
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              transition={{
                type: "tween",
                duration: 2,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01],
                opacity: {
                  duration: 1.8,
                  ease: "easeOut",
                },
              }}
              className="bg-gradient-to-r from-slate-400 to-white bg-clip-text py-2 text-center font-['Expletus_Sans'] text-7xl font-extrabold normal-case text-transparent md:hidden md:py-4 md:text-8xl lg:mt-10"
            >
              SALARI
            </motion.h1>
            <motion.div
              variants={paragraphAnimation}
              initial="hidden"
              animate="visible"
              className="my-10 text-justify font-['Roboto'] text-xl leading-loose text-slate-400 md:text-2xl md:leading-loose"
            >
              <p className="py-4">
                Welcome to my website! My name is Ayoob, and I have developed
                extensive experience in electrical engineering, thanks to my
                education and work in the communication systems and electrical
                engineering fields.
              </p>
              <p className="py-4">
                I possess a passion for research and development and have an
                insatiable desire to learn and gain experience. I relish the
                opportunity to network with people and welcome any direct rebuke
                or advice that can help me grow in my profession.
              </p>
            </motion.div>
          </article>
        </div>
        <motion.div
          className="absolute -top-10 left-0 -z-30 w-full sm:left-20 sm:w-3/4 md:left-60 md:w-1/2 lg:top-0 lg:left-1/2 lg:w-1/2"
          variants={particlesAnimations}
          initial="hidden"
          animate="visible"
        >
          <BackgroundAnimation />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
