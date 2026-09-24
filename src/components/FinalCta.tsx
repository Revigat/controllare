import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section
      className="section final-cta"
      id="contato"
      aria-labelledby="cta-title"
    >
      <div className="wrap">
        <Reveal>
          <h2 id="cta-title">
            Toda empresa <span style={{ color: "#3162DA" }}>conta uma história</span> através dos seus números.
          </h2>
          <p className="final-cta-lead">Nós ajudamos você a entendê-la.</p>
          <a
            className="btn btn-primary"
            href="mailto:contato@controllare.com.br"
          >
            Vamos conversar
          </a>
          <p className="final-note">Respondemos em até 1 dia útil.</p>
        </Reveal>
      </div>
    </section>
  );
}
