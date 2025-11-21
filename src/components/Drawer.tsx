import { AnimatePresence, motion } from "framer-motion";
import { avatars } from "../constants/avatars.tsx";

const Drawer = ({
  open,
  setOpen,
  setURL,
  setCurrentPos,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setURL: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPos: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Blur Overlay */}
          <motion.div
            className="fixed bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 z-100 h-full w-75 bg-[#1a1a1a] text-white shadow-xl p-5"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Select Your Avatar</h2>
            <div className="flex flex-wrap justify-center gap-5 mt-6">
              {avatars.map((avatar) => (
                <motion.div
                  key={avatar.id}
                  className="
                        relative cursor-pointer rounded-xl overflow-hidden
                        border border-white/20
                        backdrop-blur-xl
                        transition-all duration-300
                        "
                  onClick={() => (
                    setURL(avatar.url), setCurrentPos(avatar.posy)
                  )}
                >
                  {/* Inner image container */}
                  <div className="overflow-hidden">
                    <img src={avatar.img} className="w-26 h-26 object-cover" />
                  </div>

                  {/* Soft overlay on hover */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-all duration-300 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
