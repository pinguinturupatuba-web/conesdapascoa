const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-2">
      <p className="text-muted-foreground text-sm">
        © 2026 Guia Inglês com Música. Todos os direitos reservados.
      </p>
      <p className="text-muted-foreground text-xs max-w-2xl mx-auto">
        Este produto é digital e será entregue por e-mail após a confirmação do pagamento.
        Nenhuma informação contida neste produto deve ser interpretada como garantia de
        resultado específico — os resultados variam de acordo com a dedicação de cada aluno.
      </p>
      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
        <a href="#" className="hover:text-primary transition">Termos de uso</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition">Política de privacidade</a>
      </div>
    </div>
  </footer>
);

export default Footer;
