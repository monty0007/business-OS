import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const hasRun = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [scope]);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      { duration: 0.5, delay: stagger(0.05) }
    );
  }, [isVisible, animate]);

  return (
    <motion.p ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0 inline-block mr-1.5"
          style={{ filter: "blur(10px)" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
