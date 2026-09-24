import { Reveal } from "./Reveal";

const PURPOSE_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export function Purpose() {
  return (
    <section
      className="section purpose"
      id="sobre"
      aria-labelledby="sobre-title"
    >
      <div className="purpose-media" aria-hidden="true">
        <img src={PURPOSE_IMAGE} alt="" width={2000} height={1200} />
        <div className="purpose-veil" />
      </div>

      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ color: "rgba(195,221,216,0.58)" }}>
            Nosso propósito
          </p>
          <h2 id="sobre-title">
            Existimos para que empresários voltem a enxergar o próprio negócio.
          </h2>
          <p className="purpose-lead">
            A Controllare nasceu porque vimos, de perto, empresas competentes
            perdendo o sono não por falta de vendas, mas por falta de clareza.
            Somos o time que fica entre a operação e a decisão — organizando,
            traduzindo e devolvendo o controle a quem lidera.
          </p>
          <div className="purpose-values">
            <span>Clareza</span>
            <span>Organização</span>
            <span>Continuidade</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
