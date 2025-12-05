import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1], // springy pop ease
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1], // quick ease out
    },
  },
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          willChange: "opacity, transform", // helps smooth performance
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}