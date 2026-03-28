import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onDone: () => void;
  videoSrc: string;
}

export const LoadingScreen = ({ onDone, videoSrc }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setVisible(false);
      setTimeout(onDone, 600);
    };

    // Preload the video
    const video = document.createElement("video");
    video.src = videoSrc;
    video.muted = true;
    video.preload = "auto";

    // Resolve when enough data to start playing (or after 4s max)
    const onReady = () => finish();
    video.addEventListener("canplaythrough", onReady, { once: true });
    video.addEventListener("loadeddata", onReady, { once: true });
    video.load();

    // Hard cap: never wait more than 4 seconds
    const cap = setTimeout(finish, 4000);

    return () => {
      clearTimeout(cap);
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata", onReady);
    };
  }, [onDone, videoSrc]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            animate={{ y: [0, -18, 0], scaleY: [1, 0.92, 1.06, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="56" height="72" viewBox="0 0 56 72" fill="none">
              <motion.path
                d="M28 4 C28 4 4 34 4 48 C4 61 15 68 28 68 C41 68 52 61 52 48 C52 34 28 4 28 4Z"
                fill="currentColor"
                className="text-sky-400"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <ellipse cx="20" cy="40" rx="5" ry="8" fill="white" opacity="0.15" transform="rotate(-20 20 40)" />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-sm text-muted-foreground tracking-widest uppercase"
          >
            Drink More
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
