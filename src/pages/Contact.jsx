import { useState } from 'react';

function Contact() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && mensaje) {
      setEnviado(true);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Contacto y Ubicación</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Formulario interactivo y mapa integrado</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '30px', justifyContent: 'space-between' }}>
        <form onSubmit={handleSubmit} style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3>Envíanos un mensaje</h3>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
              placeholder="Tu nombre..."
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Mensaje:</label>
            <textarea 
              value={mensaje} 
              onChange={(e) => setMensaje(e.target.value)} 
              style={{ width: '100%', padding: '8px', height: '100px', boxSizing: 'border-box' }} 
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>
          <button type="submit" style={{ padding: '10px', backgroundColor: '#222', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Enviar Mensaje
          </button>

          {enviado && <p style={{ color: 'green', fontWeight: 'bold' }}>¡Mensaje enviado con éxito!</p>}
        </form>

        <div style={{ flex: '1', minWidth: '280px' }}>
          <h3>Nuestra Ubicación</h3>
          <div style={{ width: '100%', height: '250px', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
            <iframe 
              title="Mapa de Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0163351634!2d-65.4187216!3d-24.7821276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc32ad40d3a77%3A0xc3c5443f11d612e3!2sSalta%2C%20Salta%20Province%2C%20Argentina!5e0!3m2!1sen!2sar!4v1650000000000!5f0" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;