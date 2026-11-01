import { useState, useEffect } from 'react';

function Home() {
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=b')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setRecetas(datos.meals ? datos.meals.slice(0, 6) : []);
        setCargando(false);
      })
      .catch(error => console.error("Error:", error));
  }, []);

  if (cargando) {
    return <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Cargando recetas...</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Recetas</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Platos destacados y especialidades del mundo</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {recetas.map((item) => (
          <div key={item.idMeal} style={{ border: '1px solid #ccc', borderRadius: '8px', width: '280px', padding: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img 
              src={item.strMealThumb} 
              alt={item.strMeal} 
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{item.strMeal}</h3>
            <p style={{ fontSize: '13px', color: '#555' }}>Categoría: {item.strCategory} | Origen: {item.strArea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;