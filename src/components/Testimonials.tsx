import { Reveal } from "./Reveal";

const quotes = [
  {
    text: "Pela primeira vez consigo olhar para o financeiro sem ansiedade. Sei onde estamos e para onde vamos.",
    name: "Fernanda Lopes",
    role: "Sócia-diretora · Ótica Vista",
  },
  {
    text: "A Controllare não trouxe planilhas. Trouxe silêncio para pensar. A rotina simplesmente passou a rodar.",
    name: "Rafael Menezes",
    role: "CEO · Indústria RM",
  },
  {
    text: "As reuniões mensais viraram o momento mais estratégico da empresa. Decidimos com dados, não com achismo.",
    name: "Camila Prado",
    role: "Diretora · Clínica Sorriso",
  },
];

export function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="dep-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Depoimentos</p>
            <h2 id="dep-title">
              Quem vive a diferença, <span style={{ color: "#3162DA" }}>conta melhor</span> do que a gente.
            </h2>
          </div>
        </Reveal>

        <div className="quote-grid">
          {quotes.map((quote, i) => (
            <Reveal key={quote.name} delay={i * 0.09} className="quote">
              <span className="quote-mark" aria-hidden="true">"</span>
              <blockquote>{quote.text}</blockquote>
              <div className="quote-attribution">
                <span className="quote-name">{quote.name}</span>
                <span className="quote-role">{quote.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
