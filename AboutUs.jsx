
---

## 2. AboutUs.jsx (Pregunta 2)

**Contenido:** información sobre la empresa (Paradise Nursery).

**Ruta:** `src/components/AboutUs.jsx`

```jsx
// src/components/AboutUs.jsx
// Esta página cuenta un poco quiénes somos y por qué vendemos plantas.

import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <h2>🌿 Sobre Paradise Nursery</h2>
      <div className="about-content">
        <p>
          Paradise Nursery nació en 2022, cuando un grupo de amigos decidió 
          convertir su afición por las plantas en un pequeño negocio. 
          Empezamos en un balcón de 3 metros cuadrados y hoy tenemos 
          un vivero con más de 50 variedades.
        </p>
        <p>
          Creemos que las plantas no solo decoran, también mejoran el ánimo 
          y la calidad del aire. Por eso seleccionamos cada especie con 
          cuidado, asegurándonos de que sean resistentes y fáciles de cuidar 
          para que todo el mundo pueda disfrutarlas.
        </p>
        <p>
          Todos nuestros productos son ecológicos y libres de pesticidas. 
          Además, cada compra ayuda a financiar proyectos de reforestación 
          urbana en nuestra ciudad.
        </p>
        <div className="about-mission">
          <h3>Nuestra misión</h3>
          <p>
            Acercar la naturaleza a los hogares urbanos, demostrando que 
            cualquiera puede tener un pequeño jardín interior. 
            Y si además aprendes a cocinar con albahaca o a hacer infusiones 
            con manzanilla, mejor que mejor.
          </p>
        </div>
        <div className="about-team">
          <h3>El equipo</h3>
          <p>
            Somos cuatro personas: Laura (la experta en suculentas), 
            Marcos (el de las aromáticas), Sofía (la que sabe de medicinales) 
            y yo, el que escribe el código y riega las plantas cuando se olvidan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;