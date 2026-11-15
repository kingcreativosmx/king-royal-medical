import {
  CalendarDays,
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  FileDown,
  GraduationCap,
  Award,
  Flower2,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { victoriaTapia } from './data/victoriaTapia';

type Screen = 'inicio' | 'servicios' | 'perfil' | 'contacto';

const navItems: Array<{ id: Screen; label: string; icon: typeof Heart }> = [
  { id: 'inicio', label: 'Inicio', icon: Heart },
  { id: 'servicios', label: 'Servicios', icon: Stethoscope },
  { id: 'perfil', label: 'Sobre mí', icon: UserRound },
  { id: 'contacto', label: 'Contacto', icon: MapPin },
];

function MedicalLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'medical-logo compact' : 'medical-logo'}>
      <div className="logo-mark" aria-hidden="true">
        <span className="logo-profile" />
        <span className="logo-leaf leaf-a" />
        <span className="logo-leaf leaf-b" />
      </div>
      <div className="logo-copy">
        <small>Ginecóloga</small>
        <strong>Victoria Tapia</strong>
        <span>Ginecología y Obstetricia</span>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState<Screen>('inicio');
  const [openService, setOpenService] = useState<number | null>(1);

  const mapUrl = useMemo(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(victoriaTapia.address)}`,
    [],
  );

  const changeScreen = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePdf = () => {
    window.print();
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className="app-card">
        <header className="app-header">
          <MedicalLogo compact />
          <button className="pdf-mini" type="button" onClick={generatePdf} title="Guardar información en PDF">
            <FileDown size={18} />
            <span>PDF</span>
          </button>
        </header>

        <div className="content-area">
          {screen === 'inicio' && (
            <section className="view home-view">
              <div className="hero-card">
                <div className="hero-ribbon ribbon-a" />
                <div className="hero-ribbon ribbon-b" />
                <MedicalLogo />
                <div className="doctor-photo-wrap">
                  <img src="/victoria-tapia-demo.jpg" alt="Fotografía de demostración de la Dra. Victoria Tapia" />
                  <span className="verified-pill"><ShieldCheck size={15} /> Atención profesional</span>
                </div>
                <blockquote>“{victoriaTapia.slogan}”</blockquote>
              </div>

              <div className="quick-actions">
                <a href={`https://wa.me/${victoriaTapia.whatsappHref}`} target="_blank" rel="noreferrer" className="action-tile whatsapp">
                  <span><img src="/icono-whatsapp.png" alt="WhatsApp" className="whatsapp-img" /></span><strong>WhatsApp</strong>
                </a>
                <a href={`tel:${victoriaTapia.phoneHref}`} className="action-tile purple">
                  <span><Phone size={25} /></span><strong>Llamar</strong>
                </a>
                <button className="action-tile blue" type="button" onClick={() => changeScreen('contacto')}>
                  <span><CalendarDays size={25} /></span><strong>Agendar cita</strong>
                </button>
                <a href={mapUrl} target="_blank" rel="noreferrer" className="action-tile lavender">
                  <span><MapPin size={25} /></span><strong>Ubicación</strong>
                </a>
                <a href={`mailto:${victoriaTapia.email}`} className="action-tile blue-soft">
                  <span><Mail size={25} /></span><strong>Correo</strong>
                </a>
              </div>

              <button className="primary-cta" type="button" onClick={() => changeScreen('servicios')}>
                Conoce mis servicios <Sparkles size={18} />
              </button>
            </section>
          )}

          {screen === 'servicios' && (
            <section className="view services-view">
              <div className="page-heading centered">
                <Flower2 size={36} />
                <h1>Mis Servicios</h1>
                <p>Atención integral para tu salud femenina en todas las etapas de tu vida.</p>
              </div>

              <div className="service-list premium">
                {victoriaTapia.services.map((service, index) => {
                  const open = openService === index;
                  return (
                    <article className={open ? 'service-card open' : 'service-card'} key={service.title}>
                      <button type="button" onClick={() => setOpenService(open ? null : index)}>
                        <span className="service-icon"><Heart size={21} /></span>
                        <span className="service-title">{service.title}</span>
                        <ChevronDown className="service-chevron" size={21} />
                      </button>
                      <div className="service-detail">
                        <div>
                          <p>{service.description}</p>
                          <a href={`https://wa.me/${victoriaTapia.whatsappHref}`} target="_blank" rel="noreferrer">
                            <img src="/icono-whatsapp.png" alt="WhatsApp" className="whatsapp-img whatsapp-img--small" /> Agendar por WhatsApp
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {screen === 'perfil' && (
            <section className="view profile-view">
              <div className="page-heading centered">
                <h1>Sobre la especialista</h1>
              </div>
              <div className="profile-card">
                <img src="/victoria-tapia-demo.jpg" alt="Dra. Victoria Tapia" />
                <div>
                  <h2>{victoriaTapia.name}</h2>
                  <p>{victoriaTapia.specialty}</p>
                  <span><ShieldCheck size={16} /> Cédula demo: 12345678</span>
                  <span><Award size={16} /> +10 años de experiencia</span>
                </div>
              </div>
              <p className="bio-copy">Médica especialista enfocada en la salud integral de la mujer, con una atención humana, profesional y preventiva. Esta demo está diseñada para mostrar cómo un profesionista puede transmitir confianza antes de la primera consulta.</p>
              <div className="trust-grid">
                <div><GraduationCap size={28} /><strong>Formación</strong><span>Especializada</span></div>
                <div><Award size={28} /><strong>Certificaciones</strong><span>Vigentes</span></div>
                <div><Heart size={28} /><strong>Atención</strong><span>Personalizada</span></div>
              </div>
              <div className="credential-card">
                {victoriaTapia.credentials.map((item) => <p key={item}><ShieldCheck size={17} />{item}</p>)}
              </div>
            </section>
          )}

          {screen === 'contacto' && (
            <section className="view contact-view">
              <div className="page-heading">
                <span className="heading-icon"><MapPin size={25} /></span>
                <div><small>Consultorio</small><h1>Contacto</h1></div>
              </div>

              <div className="clinic-card">
                <div className="clinic-address"><MapPin size={22} /><div><strong>Consultorio Victoria Tapia</strong><p>{victoriaTapia.address}</p></div></div>
                <div className="map-demo">
                  <div className="street street-one" /><div className="street street-two" /><div className="street street-three" />
                  <span className="map-pin"><MapPin size={25} /></span>
                  <small>Mapa demostrativo</small>
                </div>
                <a href={mapUrl} target="_blank" rel="noreferrer" className="map-link">Cómo llegar</a>
              </div>

              <div className="schedule-card"><CalendarDays size={22} /><div><small>Horario de atención</small><strong>{victoriaTapia.schedule}</strong></div></div>

              <div className="contact-list">
                <a href={`https://wa.me/${victoriaTapia.whatsappHref}`} target="_blank" rel="noreferrer"><span className="green"><img src="/icono-whatsapp.png" alt="WhatsApp" className="whatsapp-img" /></span><div><small>WhatsApp</small><strong>{victoriaTapia.whatsapp}</strong></div></a>
                <a href={`tel:${victoriaTapia.phoneHref}`}><span className="purple-bg"><Phone size={20} /></span><div><small>Teléfono</small><strong>{victoriaTapia.phone}</strong></div></a>
                <a href={`mailto:${victoriaTapia.email}`}><span className="blue-bg"><Mail size={20} /></span><div><small>Correo</small><strong>{victoriaTapia.email}</strong></div></a>
              </div>

              <div className="contact-actions">
                <a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Cómo llegar</a>
                <a href={`https://wa.me/${victoriaTapia.whatsappHref}`} target="_blank" rel="noreferrer"><CalendarDays size={18}/> Agendar cita</a>
              </div>

              <button className="pdf-button" type="button" onClick={generatePdf}><FileDown size={19}/> Guardar información en PDF</button>
              <p className="demo-note">Todos los datos de esta tarjeta son ficticios y se utilizan únicamente como demostración comercial.</p>
            </section>
          )}
        </div>

        <nav className="bottom-nav" aria-label="Navegación principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            return <button key={item.id} type="button" className={screen === item.id ? 'active' : ''} onClick={() => changeScreen(item.id)}><Icon size={21}/><span>{item.label}</span></button>;
          })}
        </nav>
      </section>

      <section className="pdf-sheet" aria-hidden="true">
        <div className="pdf-head">
          <MedicalLogo />
          <p>{victoriaTapia.slogan}</p>
        </div>
        <div className="pdf-profile">
          <img src="/victoria-tapia-demo.jpg" alt="" />
          <div>
            <h1>{victoriaTapia.name}</h1>
            <h2>{victoriaTapia.specialty}</h2>
            <p>Atención integral, preventiva y humana para la salud de la mujer.</p>
          </div>
        </div>
        <h3>Servicios</h3>
        <div className="pdf-services">
          {victoriaTapia.services.map((service) => <div key={service.title}><strong>{service.title}</strong><span>{service.description}</span></div>)}
        </div>
        <h3>Contacto</h3>
        <div className="pdf-contact">
          <p><strong>Teléfono:</strong> {victoriaTapia.phone}</p>
          <p><strong>WhatsApp:</strong> {victoriaTapia.whatsapp}</p>
          <p><strong>Correo:</strong> {victoriaTapia.email}</p>
          <p><strong>Dirección:</strong> {victoriaTapia.address}</p>
          <p><strong>Horario:</strong> {victoriaTapia.schedule}</p>
        </div>
        <footer>Royal Card Medical · Demo creada por King Creativos · Información ficticia para demostración comercial.</footer>
      </section>

      <p className="brand-footer">King Creativos · Royal Card Medical</p>
    </main>
  );
}

export default App;
