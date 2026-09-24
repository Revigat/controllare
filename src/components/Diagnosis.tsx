import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const pains = [
  "Você trabalha muito, mas nunca sobra tempo para entender seus números.",
  "Sua empresa cresce, mas a organização parece não acompanhar.",
  "Muitas decisões ainda são tomadas no feeling.",
  "Você sabe que pode melhorar, mas não sabe exatamente por onde começar.",
];

export function Diagnosis() {
  const reduce = useReducedMotion();

  return (
    <section className="section diagnosis" aria-labelledby="diag-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Diagnóstico</p>
            <h2 id="diag-title">Talvez você conheça <span style={{ color: "#3162DA" }}>essa sensação.</span></h2>
          </div>
        </Reveal>

        <div className="diag-grid">
          {/* Lista de dores — entra da esquerda sequencialmente */}
          <div className="pain-list">
            {pains.map((pain, i) => (
              <motion.div
                key={pain}
                className="pain-item"
                initial={reduce ? false : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Linha jade animada: cresce de cima para baixo */}
                <motion.div
                  className="pain-accent"
                  aria-hidden="true"
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.1 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.span
                  className="pain-num"
                  aria-hidden="true"
                  initial={reduce ? false : { opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.38,
                    delay: i * 0.1 + 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  0{i + 1}
                </motion.span>
                <p>{pain}</p>
              </motion.div>
            ))}
          </div>

          {/* Conclusão — lado direito no desktop, sticky ao rolar */}
          <Reveal delay={0.3} className="diag-close-col">
            <div className="diag-close-inner">
              <div className="diag-close-bar" aria-hidden="true" />
              <p className="diagnosis-close">
                Empresa nenhuma cresce porque ficou mais complicada. Ela cresce
                quando fica mais <span style={{ color: "#3162DA" }}>organizada.</span>
              </p>
              <p className="diag-close-sub">
                Esse é o ponto de partida de tudo que fazemos.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
