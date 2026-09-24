import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HeroWidget } from "./HeroWidget";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);
  const easing = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} className="hero" id="topo" aria-labelledby="hero-brand">
      {/* Mídia de fundo */}
      <div className="hero-media" aria-hidden="true">
        <motion.img
          src={HERO_IMAGE}
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
          style={reduce ? {} : { y: imgY, scale: 1.18 }}
        />
        <div className="hero-veil" />
      </div>

      {/* Grid: texto esquerda | widget direita */}
      <div className="hero-content">
        {/* Coluna esquerda */}
        <div className="hero-text">
          <motion.p
            id="hero-brand"
            className="hero-brand"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: easing }}
          >
            Controllare
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: easing }}
          >
            Você abriu uma empresa para crescer não para apagar incêndios.
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.28, ease: easing }}
          >
            Organizamos o financeiro, estruturamos processos e traduzimos os
            números — para que crescer volte a ser estratégia, não urgência.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: easing }}
          >
            <a className="btn btn-primary" href="#contato">
              Quero entender minha empresa
            </a>
            <a className="btn btn-on-dark" href="#sobre">
              Conheça a Controllare
            </a>
          </motion.div>
        </div>

        {/* Coluna direita — animação de organização */}
        <motion.div
          className="hero-aside"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: easing }}
        >
          <HeroWidget />
        </motion.div>
      </div>
    </section>
  );
}
