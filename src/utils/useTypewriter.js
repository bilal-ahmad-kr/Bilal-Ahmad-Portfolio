import { useState, useEffect, useRef } from "react";

/**
 * useTypewriter
 * -------------
 * Cycles through an array of strings with a type -> pause -> delete -> next loop.
 * Runs forever on its own. Call `togglePause()` (e.g. on click) to stop/resume it.
 *
 * Usage:
 *   const { text, paused, togglePause } = useTypewriter(["A", "B", "C"]);
 */
export default function useTypewriter(
  words,
  { typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused || !words?.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next === currentWord) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, paused, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  const togglePause = () => setPaused((p) => !p);

  return { text, paused, togglePause };
}