export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#topo">
              Controllare
            </a>
            <p>
              Organização financeira e clareza para empresas que querem crescer
              com segurança. São Paulo · Brasil.
            </p>
          </div>

          <div className="footer-col">
            <h3>Soluções</h3>
            <ul>
              <li><a href="#solucoes">Gestão Financeira</a></li>
              <li><a href="#solucoes">Processos</a></li>
              <li><a href="#solucoes">Dashboards</a></li>
              <li><a href="#solucoes">Consultoria</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Empresa</h3>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#metodo">Como trabalhamos</a></li>
              <li><a href="#resultados">Resultados</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="mailto:contato@controllare.com.br">
                  contato@controllare.com.br
                </a>
              </li>
              <li>São Paulo · Brasil</li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Controllare. Todos os direitos
            reservados.
          </span>
          <span>Feito com clareza.</span>
        </div>
      </div>
    </footer>
  );
}
