export function CertificateSection() {
  return (
    <section className="certificate-section" aria-label="SEVA Charitable Trust certificates">
      <div className="page-wrap certificate-section__inner">
        <img
          className="certificate-section__image"
          src="/seva-e-mudra-certificate.jpeg"
          alt="Certificate of enrolment for SEVA Charitable Trust on the e-Mudra portal, NGO ID MH/00040867"
          loading="lazy"
        />
        <img
          className="certificate-section__image"
          src="/seva-ngo-darpan-certificate.jpeg"
          alt="Certificate of enrolment for SEVA Charitable Trust on the NITI Aayog NGO Darpan portal, Unique ID MH/2024/047461"
          loading="lazy"
        />
      </div>
    </section>
  );
}
