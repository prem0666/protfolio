import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -2 : 2,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      {/* Dot */}
      <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-green-500 rounded-full top-4" />

      {/* Card */}
      <div
        className={`
          ml-12 sm:ml-0 w-full
          sm:max-w-lg
        
         
          rounded-xl p-6 sm:p-8
          text-white
          ${isLeft ? "lg:pr-24" : "lg:pl-24"}
        `}
      >
        <span className="text-green-400 text-sm font-semibold">
          {item.year}
        </span>

        <h3 className="mt-2 text-xl sm:text-2xl font-bold">
          {item.company}
        </h3>

        <p className="mt-1 text-sm font-medium text-gray-300">
          {item.role}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
