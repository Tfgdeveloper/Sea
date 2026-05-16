import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 40,        // Stagger delay between characters (ms)
  animationDelay = 0, // NEW: Wait X seconds before starting the whole animation
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars,words',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  tag = 'h2',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;
      
      gsap.set(el, { visibility: 'visible' });

      if (el._rbsplitInstance) {
        el._rbsplitInstance.revert();
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const start = `top ${startPct}%${marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`}`;

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        tagName: "span",
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
      });

      let targets = splitInstance.chars.length ? splitInstance.chars : (splitInstance.words.length ? splitInstance.words : splitInstance.lines);

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          delay: animationDelay, // <--- THIS APPLIES THE INITIAL WAIT TIME
          stagger: delay / 1000,
          immediateRender: true,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
        }
      );

      el._rbsplitInstance = splitInstance;

      return () => {
        if (el._rbsplitInstance) el._rbsplitInstance.revert();
      };
    },
    { 
        dependencies: [text, fontsLoaded, delay, animationDelay, duration, splitType], 
        scope: ref 
    }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        visibility: 'hidden',
        display: tag.startsWith('h') ? 'block' : 'inline-block',
        whiteSpace: 'normal',
        wordBreak: 'break-word'
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;