import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Crown,
  Gem,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Users,
  X,
  PartyPopper,
  Truck,
} from 'lucide-react';
import './styles.css';

const PHONE = '918777200698';
const PHONE_DISPLAY = '+91 87772 00698';
const EMAIL = 'info.alfasmokie@gmail.com';
const WHATSAPP = `https://wa.me/${PHONE}`;

const services = [
  {
    no: '01',
    icon: Gem,
    title: 'Wedding & Celebrations',
    text: 'A refined shisha setup to complement your wedding celebrations, receptions and special milestones.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
  },
  {
    no: '02',
    icon: PartyPopper,
    title: 'Private Parties',
    text: 'Bring a lounge-inspired atmosphere to birthdays, house parties and evenings with friends.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    no: '03',
    icon: Users,
    title: 'Personal Gatherings',
    text: 'Thoughtful service for intimate get-togethers, anniversaries and occasions worth remembering.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85',
  },
  {
    no: '04',
    icon: Truck,
    title: 'Home Shisha Enquiries',
    text: 'Ask about shisha service or delivery availability for your area, timing and preferences.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85',
  },
];

const heroSlides = [
  {
    kicker: 'THE ART OF THE OCCASION',
    title: (
      <>
        Make room for
        <br />
        <em>better nights.</em>
      </>
    ),
    copy: 'Premium shisha service for celebrations, private events and evenings worth remembering.',
    image: '/assets/Emerald%20Rooftop%20Hookah%20Lounge%20at%20Night.png',
  },
  {
    kicker: 'YOUR EVENT, YOUR ATMOSPHERE',
    title: (
      <>
        Bring the lounge
        <br />
        <em>to your moment.</em>
      </>
    ),
    copy: 'Elegant shisha setups and thoughtful coordination for weddings, parties and special gatherings.',
    image: '/assets/Golden%20Hookahs%20in%20a%20Luxe%20Night%20Lounge.png',
  },
  {
    kicker: 'MADE FOR THE MOMENTS THAT MATTER',
    title: (
      <>
        Gather well.
        <br />
        <em>Remember more.</em>
      </>
    ),
    copy: 'Distinctive shisha experiences designed around your occasion, your guests and your setting.',
    image: '/assets/Emerald%20Rooftop%20Hookah%20Lounge%20at%20Night.png',
  },
];

function App() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Event shisha service',
    occasion: 'Private party',
    date: '',
    guests: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };

  const goContact = (service = 'Event shisha service') => {
    setForm((current) => ({ ...current, service }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const message = [
      'Hi AL-FA SMOKIE! I would like to enquire about your shisha services.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Service: ${form.service}`,
      `Occasion: ${form.occasion}`,
      `Date: ${form.date || 'Flexible / not decided'}`,
      `Guests: ${form.guests || 'Not specified'}`,
      `Location: ${form.location}`,
      `Details: ${form.message || 'No extra details'}`,
    ].join('\n');

    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="live-dot" />
        KOLKATA · SHISHA SERVICE · PRIVATE EVENTS
        <span className="announcement-right">MADE FOR THE MOMENT</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="AL-FA SMOKIE home">
          <img src="/assets/alfa-smokie-logo.jpeg" alt="AL-FA SMOKIE logo" />
          <span>
            <b>AL-FA SMOKIE</b>
            <small>THE ART OF THE OCCASION</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Shisha services</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#occasions" onClick={() => setMenuOpen(false)}>Occasions</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <button className="nav-cta" onClick={() => goContact()}>
            Plan your event <ArrowUpRight size={15} />
          </button>
        </nav>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{ '--hero-image': `url("${heroSlides[slide].image}")` }}
        >
          <div className="hero-shade" />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="hero-inner">
            <div className="hero-copy" key={slide}>
              <div className="eyebrow">
                <span />{heroSlides[slide].kicker}<span />
              </div>
              <h1>{heroSlides[slide].title}</h1>
              <p>{heroSlides[slide].copy}</p>
              <div className="hero-foot">
                <span className="hero-star">✳</span>
                <span>THOUGHTFUL SERVICE. MEMORABLE ATMOSPHERE.</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="slide-indicator">
              <b>0{slide + 1}</b><span> / 0{heroSlides.length}</span>
            </div>
            <div className="slide-dots">
              {heroSlides.map((item, index) => (
                <button
                  key={item.kicker}
                  className={slide === index ? 'active' : ''}
                  onClick={() => setSlide(index)}
                  aria-label={`Show hero slide ${index + 1}`}
                  aria-pressed={slide === index}
                />
              ))}
            </div>
            <span className="hero-bottom-note">SCROLL TO DISCOVER <ChevronDown size={15} /></span>
          </div>
          <div className="hero-image-label"><span>01</span><i /> SHISHA · SETTING · SERVICE</div>
        </section>

        <section className="trust-strip">
          <div><Crown /><span><b>Curated presentation</b><small>Details that set the mood</small></span></div>
          <div><Sparkles /><span><b>Personalised planning</b><small>Shaped around your occasion</small></span></div>
          <div><MessageCircle /><span><b>Direct coordination</b><small>Clear enquiry and follow-up</small></span></div>
        </section>

        <section className="about section" id="about">
          <div className="section-kicker"><span>01</span> GET TO KNOW AL-FA SMOKIE</div>
          <div className="about-grid">
            <div className="about-heading">
              <p className="overline">MORE THAN A SETUP</p>
              <h2>We create the<br /><em>shisha experience.</em></h2>
              <div className="about-stamp"><Crown /><span>AL-FA<br />SMOKIE</span></div>
            </div>
            <div className="about-copy">
              <p className="lead">Every occasion has its own energy. Our role is to complement it with a shisha service experience that feels considered, welcoming and effortless.</p>
              <p>AL-FA SMOKIE is focused on shisha experiences for private celebrations, parties and special gatherings in Kolkata. From understanding the setting and guest count to discussing the service details, we work with you to shape an experience that suits your plans.</p>
              <p>We believe the experience is in the details: thoughtful presentation, clear communication and coordination that lets you focus on your guests. Tell us about your occasion and we’ll discuss the available setup and service options.</p>
              <button className="text-link" onClick={() => goContact('Event shisha service')}>Tell us about your occasion <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="experience-band">
            <div><span className="experience-number">01</span><b>Understand your occasion</b><small>We learn about the event, venue and atmosphere you have in mind.</small></div>
            <div><span className="experience-number">02</span><b>Discuss the service</b><small>We talk through your preferences, requirements and availability.</small></div>
            <div><span className="experience-number">03</span><b>Coordinate the details</b><small>We align on practical arrangements before your event.</small></div>
          </div>
          <p className="experience-note">Our experience is centred on shisha service and event coordination. Service options and availability are confirmed individually; no unverified years-in-business claims are made.</p>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span> WHAT WE CAN HELP WITH</div><h2>Shisha services,<br /><em>made for your moment.</em></h2></div>
            <p>Tell us what you’re planning. We’ll discuss the right service approach, practical details and availability for your occasion.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.no} style={{ '--service-image': `url("${service.image}")` }}>
                  <div className="service-photo" />
                  <div className="service-card-shade" />
                  <div className="service-card-top"><span>{service.no} / SERVICE</span><Icon size={21} /></div>
                  <div className="service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <button onClick={() => goContact(service.title)} className="service-link">Enquire about this <ArrowUpRight size={15} /></button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="service-disclaimer"><Sparkles size={16} /> Availability, service coverage, setup requirements and applicable venue rules are confirmed during enquiry.</div>
        </section>

        <section className="menu section" id="menu">
          <div className="section-heading">
            <div><div className="section-kicker"><span>03</span> OUR OFFERINGS</div><h2>Premium packages<br /><em>for every setting.</em></h2></div>
            <p>From single chillams to full-scale event setups, explore our curated packages. Add-ons like disposable pipes, heaters, and fancy bases are available on request.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '2rem' }}>
            <a 
              href="/assets/alfa-smokie-shisha-menu.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
              style={{ textDecoration: 'none', display: 'inline-flex', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 'bold' }}
            >
              View Full Menu (PDF) <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </section>

        <section className="occasions section" id="occasions">
          <div className="section-heading">
            <div><div className="section-kicker"><span>04</span> FIND YOUR OCCASION</div><h2>For nights that<br /><em>bring people together.</em></h2></div>
            <p>From intimate get-togethers to milestone celebrations, let’s make the setting feel like you.</p>
          </div>
          <div className="occasion-row">
            <div><span>01</span><h3>Weddings &amp;<br />celebrations</h3><p>A distinctive addition to your special day.</p><button onClick={() => goContact('Wedding and celebration shisha service')}>Plan your event <ArrowUpRight size={15} /></button></div>
            <div><span>02</span><h3>Birthdays &amp;<br />private parties</h3><p>Bring your people together in style.</p><button onClick={() => goContact('Birthday or private party shisha service')}>Plan your event <ArrowUpRight size={15} /></button></div>
            <div><span>03</span><h3>Home gatherings<br />&amp; special nights</h3><p>Ask about options for a relaxed evening.</p><button onClick={() => goContact('Home shisha service enquiry')}>Make an enquiry <ArrowUpRight size={15} /></button></div>
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="section-heading">
            <div><div className="section-kicker"><span>05</span> THE ATMOSPHERE</div><h2>Set the mood.<br /><em>Make it memorable.</em></h2></div>
            <p>A visual direction for warm lighting, considered details and gatherings that feel special.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-large">
              <img src="/assets/Golden%20Nights%20at%20the%20Shisha%20Lounge.png" alt="Golden-lit shisha lounge setting" loading="lazy" />
              <figcaption><span>01</span> THE SETTING</figcaption>
            </figure>
            <figure>
              <img src="/assets/Emerald%20Rooftop%20Hookah%20Lounge%20at%20Night.png" alt="Emerald rooftop shisha lounge" loading="lazy" />
              <figcaption><span>02</span> THE CELEBRATION</figcaption>
            </figure>
            <figure>
              <img src="/assets/Golden%20Hookahs%20in%20a%20Luxe%20Night%20Lounge.png" alt="Gold hookahs in a luxury lounge" loading="lazy" />
              <figcaption><span>03</span> THE DETAILS</figcaption>
            </figure>
          </div>
          <p className="gallery-note">Gallery visuals represent the intended atmosphere and may not depict an actual AL-FA SMOKIE setup.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <div className="section-kicker"><span>06</span> LET’S PLAN SOMETHING</div>
            <h2>Your occasion.<br /><em>Our shisha service.</em></h2>
            <p>Share a few details and our team can follow up to discuss your event, preferences and availability.</p>
            <div className="contact-highlights">
              <span><Check size={15} /> Personal follow-up</span>
              <span><Check size={15} /> Event-focused planning</span>
              <span><Check size={15} /> Kolkata enquiries</span>
            </div>
            <div className="contact-direct">
              <span className="contact-icon"><Phone size={18} /></span>
              <div><small>CALL / WHATSAPP</small><a href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a><a className="whatsapp-link" href={WHATSAPP} target="_blank" rel="noreferrer">Chat with our team <ArrowUpRight size={14} /></a></div>
            </div>
            <div className="contact-direct">
              <span className="contact-icon"><Mail size={18} /></span>
              <div><small>EMAIL ENQUIRIES</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={submit}>
            <div className="form-heading"><div><span>AL-FA SMOKIE / ENQUIRY DESK</span><h3>Tell us about it.</h3></div><MessageCircle /></div>
            <p className="form-description">Complete the form and your enquiry will open in WhatsApp for you to send directly.</p>
            <div className="form-grid">
              <label>Your full name *<input name="name" value={form.name} onChange={update} placeholder="Your name" required autoComplete="name" /></label>
              <label>Phone / WhatsApp *<input name="phone" value={form.phone} onChange={update} placeholder="+91 00000 00000" required type="tel" autoComplete="tel" /></label>
              <label>Email address<input name="email" value={form.email} onChange={update} placeholder="you@example.com" type="email" autoComplete="email" /></label>
              <label>Service required *<select name="service" value={form.service} onChange={update} required><option>Event shisha service</option><option>Wedding &amp; Celebrations</option><option>Private Parties</option><option>Personal Gatherings</option><option>Home Shisha Enquiries</option><option>General enquiry</option></select></label>
              <label>Occasion type<select name="occasion" value={form.occasion} onChange={update}><option>Private party</option><option>Wedding</option><option>Birthday</option><option>Anniversary</option><option>Corporate event</option><option>House party / get-together</option><option>Home gathering</option><option>Other celebration</option></select></label>
              <label>Event date<span className="input-with-icon"><CalendarDays size={15} /><input name="date" value={form.date} onChange={update} type="date" /></span></label>
              <label>Expected guests<select name="guests" value={form.guests} onChange={update}><option value="">Choose a range</option><option>1–10 guests</option><option>11–25 guests</option><option>26–50 guests</option><option>51–100 guests</option><option>100+ guests</option><option>Not sure yet</option></select></label>
              <label>Event area / venue *<span className="input-with-icon"><MapPin size={15} /><input name="location" value={form.location} onChange={update} placeholder="Area, city or venue" required /></span></label>
              <label className="field-wide">Tell us more<textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Your plans, preferred setup or questions..." /></label>
            </div>
            <div className="form-submit"><small><span /> Your details help us respond to your enquiry.</small><button className="btn btn-gold" type="submit">Send enquiry <Send size={15} /></button></div>
            {submitted && <p className="form-success"><Check size={16} /> WhatsApp opened with your enquiry. Press Send in WhatsApp to deliver it.</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand" href="#home" aria-label="AL-FA SMOKIE home">
            <img src="/assets/alfa-smokie-logo.jpeg" alt="AL-FA SMOKIE logo" />
            <span><b>AL-FA SMOKIE</b><small>THE ART OF THE OCCASION</small></span>
          </a>
          <p>Shisha service for<br /><em>moments worth remembering.</em></p>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-item"><Mail size={18} /><div><small>EMAIL US: </small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
          <div className="footer-contact-item"><Phone size={18} /><div><small>CALL / WHATSAPP</small><a href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a></div></div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AL-FA SMOKIE. ALL RIGHTS RESERVED.</span>
          <span>KOLKATA, INDIA · MADE FOR THE MOMENT</span>
        </div>
        <p className="responsible-note">Services are subject to local laws, venue rules, service coverage and applicable age requirements. Adults only where legally permitted. Please enjoy responsibly.</p>
      </footer>

      <a className="floating-wa" href={`${WHATSAPP}?text=${encodeURIComponent('Hi AL-FA SMOKIE, I would like to enquire about your shisha services.')}`} target="_blank" rel="noreferrer" aria-label="Message AL-FA SMOKIE on WhatsApp">
        <MessageCircle size={19} /><span>LET’S TALK</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);