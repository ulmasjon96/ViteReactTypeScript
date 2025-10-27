import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mt-20"
    >
      <h1 className="text-4xl font-bold mb-4">🏡 Home Page</h1>
      <p className="text-gray-600">React + TypeScript + Vite starter project</p>
    </motion.div>
  );
}
