function LocalData() {
  const comidasRegionales = [
    {
      id: 1,
      titulo: "Empanadas Salteñas",
      descripcion: "Tradicionales empanadas cortadas a cuchillo, jugosas y horneadas en barro.",
      imagen: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      titulo: "Locro Criollo",
      descripcion: "Guiso tradicional a base de maíz, zapallo y carnes, ideal para compartir.",
      imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      titulo: "Tamales Salteños",
      descripcion: "Masa de maíz rellena de carne sazonada, envuelta en chala de choclo.",
      imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Recetas Regionales</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Los sabores más representativos de nuestra gastronomía tradicional</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {comidasRegionales.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', width: '280px', padding: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img 
              src={item.imagen} 
              alt={item.titulo} 
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{item.titulo}</h3>
            <p style={{ fontSize: '13px', color: '#555' }}>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocalData;