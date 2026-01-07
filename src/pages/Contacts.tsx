import './Contacts.css';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contacts = () => {
  const contacts = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Koquin', // Substituir com seu usuário
      placeholder: true
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/iago_jrdc', // Substituir com seu usuário
      placeholder: true
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/iagojrdc/', // Substituir com seu usuário
      placeholder: true
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/+5586999287521', // Substituir com seu número
      placeholder: true
    }
  ];

  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <h1>Entre em Contato</h1>
        <p className="contacts-subtitle">Vamos conversar! Escolha seu canal preferido</p>
        
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
