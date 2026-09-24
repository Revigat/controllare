import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── dados ─── */
const ROWS = [
  { id: 0, date: "02/07", label: "Faturamento mensal",    value: "+ R$ 124.500", type: "in"  },
  { id: 1, date: "08/07", label: "Recebimento cliente A", value: "+ R$  38.700", type: "in"  },
  { id: 2, date: "10/07", label: "Folha de pagamento",    value: "- R$  32.800", type: "out" },
  { id: 3, date: "15/07", label: "Fornecedores",          value: "- R$  17.600", type: "out" },
  { id: 4, date: "20/07", label: "Impostos (DAS/ISS)",    value: "- R$   8.200", type: "out" },
  { id: 5, date: "25/07", label: "Aluguel e contas",      value: "- R$   4.600", type: "out" },
] as const;

const H       = 52;                          // altura de cada linha
const EASE    = [0.22, 1, 0.36, 1] as const;

/* posições caóticas (offset do topo-esquerdo do container) */
const CHAOS = [
  { x:  80, y: -10, r:  14 },
  { x: -10, y:  70, r: -10 },
  { x: 110, y:  20, r:   8 },
  { x:  20, y: 160, r: -13 },
  { x: 130, y: 100, r:  11 },
  { x:  48, y: 230, r:  -7 },
];

const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

/* ─── componente ─── */
export function HeroWidget() {
  /* um useAnimation por linha — hooks em ordem fixa, nunca condicional */
  const a0 = useAnimation();
  const a1 = useAnimation();
  const a2 = useAnimation();
  const a3 = useAnimation();
  const a4 = useAnimation();
  const a5 = useAnimation();
  const anims = [a0, a1, a2, a3, a4, a5];

  const scanEl   = useRef<HTMLDivElement>(null);
  const [saldo, setSaldo] = useState(false);

  useEffect(() => {
    let on = true;

    async function cycle() {
      /* 1 ── posiciona invisível nas posições caóticas */
      anims.forEach((a, i) =>
        a.set({ x: CHAOS[i].x, y: CHAOS[i].y, rotate: CHAOS[i].r, opacity: 0 })
      );
      setSaldo(false);
      await wait(700);
      if (!on) return;

      /* 2 ── cada item aparece na posição caótica */
      await Promise.all(
        anims.map((a, i) =>
          a.start({
            opacity: 1,
            x: CHAOS[i].x,
            y: CHAOS[i].y,
            rotate: CHAOS[i].r,
            transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
          })
        )
      );
      await wait(950);
      if (!on) return;

      /* 3 ── organiza: cada item vai para sua linha */
      await Promise.all(
        anims.map((a, i) =>
          a.start({
            x: 0,
            y: i * H,
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
          })
        )
      );
      if (!on) return;

      /* 4 ── scanner jade percorre a lista */
      const el = scanEl.current;
      if (el) {
        el.classList.remove("hw-scan--run");
        void el.offsetWidth;          // reflow → garante restart da @keyframes
        el.classList.add("hw-scan--run");
      }

      await wait(380);
      if (!on) return;
      setSaldo(true);                 // saldo aparece após o scanner começar

      await wait(3000);
      if (!on) return;

      /* 5 ── fade out */
      setSaldo(false);
      await Promise.all(
        anims.map((a) =>
          a.start({ opacity: 0, transition: { duration: 0.3 } })
        )
      );
      await wait(450);
      if (!on) return;

      cycle();                        // loop
    }

    cycle();
    return () => { on = false; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="hw-wrap" aria-hidden="true">
      {/* cabeçalho */}
      <div className="hw-head">
        <span>Data</span>
        <span>Descrição</span>
        <span>Valor</span>
      </div>

      {/* lista */}
      <div className="hw-body">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.id}
            className={`hw-row hw-row--${row.type}`}
            animate={anims[i]}
            initial={{ opacity: 0, x: CHAOS[i].x, y: CHAOS[i].y, rotate: CHAOS[i].r }}
          >
            <span className="hw-date">{row.date}</span>
            <span className="hw-desc">{row.label}</span>
            <span className="hw-val">{row.value}</span>
          </motion.div>
        ))}

        {/* barra scanner — sempre no DOM, ativada via classe */}
        <div ref={scanEl} className="hw-scan" />
      </div>

      {/* saldo */}
      <motion.div
        className="hw-foot"
        animate={{ opacity: saldo ? 1 : 0, y: saldo ? 0 : 6 }}
        transition={{ duration: 0.35 }}
      >
        <span>Saldo do período</span>
        <span className="hw-foot-val">+ R$ 100.000</span>
      </motion.div>
    </div>
  );
}
