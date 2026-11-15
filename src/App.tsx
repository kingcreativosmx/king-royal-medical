import { CalendarDays, Mail, MapPin, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import { victoriaTapia } from './data/victoriaTapia';

function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="brand-mark" aria-hidden="true">VT</div>
        <p className="eyebrow">Royal Card Medical · Demo</p>
        <h1>{victoriaTapia.name}</h1>
        <h2>{victoriaTapia.specialty}</h2>
        <p className="slogan">{victoriaTapia.slogan}</p>

        <div className="quick-actions">
          <a className="action" href="tel:+527821234567"><Phone size={20}/> Llamar</a>
          <a className="action" href="https://wa.me/527829876543"><MessageCircle size={20}/> WhatsApp</a>
          <a className="action" href="#agenda"><CalendarDays size={20}/> Agendar cita</a>
          <a className="action" href="#ubicacion"><MapPin size={20}/> Ubicación</a>
          <a className="action" href="mailto:citas@victoriatapia.demo"><Mail size={20}/> Correo</a>
        </div>
      </section>

      <section className="content-card" id="servicios">
        <div className="section-heading">
          <Stethoscope size={26}/>
          <div>
            <p className="eyebrow">Atención especializada</p>
            <h3>Servicios</h3>
          </div>
        </div>
        <div className="service-grid">
          {victoriaTapia.services.map((service) => (
            <article className="service-item" key={service}>
              <span className="service-dot" />
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card" id="ubicacion">
        <p className="eyebrow">Consultorio</p>
        <h3>Información de contacto</h3>
        <p>{victoriaTapia.address}</p>
        <p><strong>Teléfono:</strong> {victoriaTapia.phone}</p>
        <p><strong>WhatsApp:</strong> {victoriaTapia.whatsapp}</p>
        <p><strong>Correo:</strong> {victoriaTapia.email}</p>
      </section>

      <section className="content-card" id="agenda">
        <p className="eyebrow">Conversión</p>
        <h3>Agenda tu cita</h3>
        <p>Esta demo será la base para integrar WhatsApp, llamadas, mapas, redes sociales y generación de PDF.</p>
        <a className="primary-cta" href="https://wa.me/527829876543">Solicitar cita por WhatsApp</a>
      </section>
    </main>
  );
}

export default App;
