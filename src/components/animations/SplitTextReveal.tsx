import React, { useEffect, useRef, useMemo, useId } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  children,
  as: Component = 'span',
  className = '',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const instanceId = useId();

  const isReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);

  let charCounter = 0;
  let wordCounter = 0;
  let spaceCounter = 0;

  const parseNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      const words = node.split(/(\s+)/);
      return words.map((word) => {
        if (word === '') return null;
        if (/^\s+$/.test(word)) {
          return <span key={`${instanceId}-s-${spaceCounter++}`}>{word}</span>;
        }
        return (
          <span
            key={`${instanceId}-w-${wordCounter++}`}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {word.split('').map((char) => (
              <span
                key={`${instanceId}-c-${charCounter++}-${char}`}
                className="gsap-char"
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                  marginRight: '0.02em',
                }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node as React.ReactElement, {
        key: (node as React.ReactElement).key || `${instanceId}-el-${wordCounter++}`,
        children: React.Children.map((node as React.ReactElement).props.children, parseNode),
      } as any);
    }

    if (Array.isArray(node)) {
      return React.Children.map(node, parseNode);
    }

    return node;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    if (isReducedMotion) {
      const chars = containerRef.current.querySelectorAll('.gsap-char');
      chars.forEach((c) => {
        (c as HTMLElement).style.opacity = '1';
        (c as HTMLElement).style.transform = 'none';
        (c as HTMLElement).classList.add('is-revealed');
      });
      return;
    }

    const ctx = gsap.context(() => {
      const chars = containerRef.current?.querySelectorAll('.gsap-char');
      if (!chars || chars.length === 0) return;

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          scale: 2,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.035,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
          onComplete: () => {
            chars.forEach((c) => {
              (c as HTMLElement).style.opacity = '1';
              (c as HTMLElement).style.transform = 'none';
              (c as HTMLElement).classList.add('is-revealed');
            });
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [children, isReducedMotion]);

  return (
    <Component ref={containerRef} className={className}>
      {React.Children.map(children, parseNode)}
    </Component>
  );
};
