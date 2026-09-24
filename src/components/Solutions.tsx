import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const blue = "#3162DA";

const solutions: { id: string; label: string; title: ReactNode; description: string; items: string[]; img: string; alt: string }[] = [
  {
    id: "gestao",
    label: "Gestão Financeira",
    title: <>Rotina financeira <span style={{ color: blue }}>sob controle</span>, sem depender de você.</>,
    description:
      "Enquanto você cuida dos clientes e do crescimento, nós cuidamos para que o caixa rode com previsibilidade.",
    items: [
      "Contas a pagar e a receber",
      "Conciliação bancária",
      "Fluxo de caixa",
      "Programação bancária",
      "Conferência financeira",
      "Controle de pagamentos e recebimentos",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    caption: "Rotina financeira organizada — do boleto ao saldo do dia.",
  },
  {
    id: "processos",
    label: "Processos",
    title: <>Cada etapa do seu negócio com um <span style={{ color: blue }}>caminho claro.</span></>,
    description:
      "Tiramos o improviso do dia a dia e criamos fluxos que a operação consegue seguir sem heroísmo.",
    items: [
      "Mapeamento de rotinas",
      "Padronização operacional",
      "Fluxos de aprovação",
      "Checklist e responsabilidades",
      "Redução de retrabalho",
      "Continuidade sem dependência de pessoas",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    caption: "Processos claros para a empresa andar sem atrito.",
  },
  {
    id: "dashboards",
    label: "Dashboards",
    title: <>Os números da sua empresa em uma <span style={{ color: blue }}>tela que faz sentido.</span></>,
    description:
      "Traduzimos dados espalhados em painéis legíveis — para decidir com o que está acontecendo de verdade.",
    items: [
      "Indicadores financeiros",
      "Visão de entradas e saídas",
      "Acompanhamento mensal",
      "Alertas de desvio",
      "Leitura simples para liderança",
      "Histórico para comparar períodos",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    caption: "Painéis que mostram o negócio, não só planilhas.",
  },
  {
    id: "consultoria",
    label: "Consultoria",
    title: <><span style={{ color: blue }}>Alguém do seu lado</span>, ajudando a decidir com clareza.</>,
    description:
      "Não entregamos só organização — acompanhamos as decisões com leitura próxima da realidade da empresa.",
    items: [
      "Reuniões de acompanhamento",
      "Leitura de indicadores",
      "Priorização de ações",
      "Suporte às decisões",
      "Olhar externo sem distanciamento",
      "Evolução contínua da operação",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    caption: "Conversa estratégica com base em números reais.",
  },
] as const;

/* Variantes para a lista de itens — entram da esquerda em cascata */
const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Solutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section
      className="section solutions"
      id="solucoes"
      aria-labelledby="sol-title"
    >
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Soluções</p>
            <h2 id="sol-title"><span style={{ color: "#3162DA" }}>O empresário</span> não precisa entender de tudo.</h2>
            <p>
              Enquanto você cuida dos clientes e do crescimento, nós ajudamos
              sua empresa a ganhar estrutura para crescer com segurança.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="solution-tabs" role="tablist" aria-label="Soluções">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls={`panel-${item.id}`}
                id={`tab-${item.id}`}
                className={`solution-tab${active === index ? " active" : ""}`}
                onClick={() => setActive(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="solution-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="solution-copy">
              <h3>{current.title}</h3>
              <p>{current.description}</p>

              {/* Itens entram da esquerda em cascata — como uma checklist sendo preenchida */}
              <motion.ul
                className="solution-list"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                key={`list-${current.id}`}
              >
                {current.items.map((item) => (
                  <motion.li key={item} variants={itemVariants}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <figure className="solution-visual">
              <img src={current.image} alt="" width={1400} height={900} />
              <figcaption>{current.caption}</figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
