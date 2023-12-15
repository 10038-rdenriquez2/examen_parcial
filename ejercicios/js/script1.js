// Definir la clase del componente
class SaludoComponent extends HTMLElement {
  constructor() {
    super();

    // Crear un Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear un elemento de párrafo y establecer el saludo
    const p = document.createElement('p');
    p.textContent = '¡Hola, Mundo!';

    // Añadir el párrafo al Shadow DOM
    shadow.appendChild(p);
  }
}

// Definir el elemento personalizado
customElements.define('saludo-component', SaludoComponent);
