import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Conhecemos sua empresa.",
    text: "Ouvimos, entendemos o momento e mapeamos como as coisas funcionam hoje.",
  },
  {
    title: "Organizamos as informações.",
    text: "Reunimos, limpamos e damos sentido aos dados que estavam espalhados.",
  },
  {
    title: "Estruturamos processos.",
    text: "Criamos fluxos claros para que cada rotina rode sem depender de heroísmos.",
  },
  {
    title: "Acompanhamos indicadores.",
    text: "Traduzimos números em insights e disponibilizamos painéis fáceis de ler.",
  },
  {
    title: "Evoluímos continuamente.",
    text: "Ajustamos, refinamos e crescemos junto com a sua operação.",
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      className="section process"
      id="metodo"
      aria-labelledby="metodo-title"
    >
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Como trabalhamos</p>
            <h2 id="metodo-title">
              Um caminho previsível para chegar à clareza.
            </h2>
            <p>
              Sem atalhos mágicos. Um método simples, repetível e próximo da
              realidade da sua operação.
            </p>
          </div>
        </Reveal>

        <div className="steps-wrapper">
          {/* Linha de progresso jade — cresce da esquerda para direita (desktop only) */}
          {!reduce && (
            <motion.div
              className="process-track"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
            />
          )}

          <div className="steps">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} className="step">
                <span className="step-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
