import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#solucoes",   label: "Soluções" },
  { href: "#metodo",     label: "Como trabalhamos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre",      label: "Sobre" },
  { href: "#contato",    label: "Contato" },
];

export function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <a className="logo" href="#topo" aria-label="Controllare — início">
            Controllare
          </a>

          <nav className="nav" aria-label="Principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-light header-cta" href="#contato">
            Vamos conversar
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            aria-modal="true"
            role="dialog"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-nav-top">
              <a className="logo" href="#topo" onClick={close}>
                Controllare
              </a>
              <button
                className="menu-toggle"
                type="button"
                aria-label="Fechar menu"
                onClick={close}
              >
                <span aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.065 + 0.08,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
