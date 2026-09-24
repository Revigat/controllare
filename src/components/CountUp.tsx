import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  const display =
    decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : Math.round(value).toString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
