type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageIntro({ eyebrow, title, description, className = '' }: PageIntroProps) {
  return (
    <section className={`page-intro ${className}`.trim()} aria-labelledby="page-title">
      <div className="page-wrap page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="page-intro__description">{description}</p>
      </div>
    </section>
  );
}
