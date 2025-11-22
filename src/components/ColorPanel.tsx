import { AnimatePresence, motion } from "framer-motion";
import ColorPicker from "react-best-gradient-color-picker";
import { useColor } from "../context/ColorContext";

const ColorPanel = () => {
  let { color, setColor, colorPickerPopUp, setColorPickerPopUp } = useColor();

  return (
    <AnimatePresence>
      {colorPickerPopUp && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setColorPickerPopUp(!colorPickerPopUp)}
        >
          <motion.div
            className="bg-white/99 dark:bg-[#202020] px-7 py-5 w-[350px] rounded-2xl shadow-xl relative"
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color Picker */}
            <ColorPicker value={color} onChange={setColor} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ColorPanel;
