import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const metrics = [
  {
    end: 120,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Empresas atendidas",
    sub: "Do varejo à indústria",
  },
  {
    end: 340,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "CNPJs administrados",
    sub: "Com rotina organizada",
  },
  {
    end: 12,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "Anos de experiência",
    sub: "Método próprio",
  },
  {
    end: 1.4,
    prefix: "R$ ",
    suffix: " Bi",
    decimals: 1,
    label: "Movimentados por ano",
    sub: "Com previsibilidade",
  },
];

export function Results() {
  return (
    <section
      className="section results"
      id="resultados"
      aria-labelledby="res-title"
    >
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Resultados</p>
            <h2 id="res-title">Números que contam <span style={{ color: "#3162DA" }}>nossa história.</span></h2>
            <p>
              Mais de uma década ajudando empresas a organizar rotinas e
              traduzir dados em decisões mais tranquilas.
            </p>
          </div>
        </Reveal>

        <div className="metrics">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.1} className="metric">
              <strong>
                <CountUp
                  end={metric.end}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                  duration={1600 + i * 100}
                />
              </strong>
              <span className="metric-label">{metric.label}</span>
              <span className="metric-sub">{metric.sub}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
