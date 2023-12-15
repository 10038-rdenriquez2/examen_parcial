class ContenedorComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Crear elementos para el encabezado y el cuerpo
    const encabezado = document.createElement('div');
    encabezado.setAttribute('slot', 'encabezado');
    encabezado.innerHTML = '<h2>Encabezado Predeterminado</h2>';

    const cuerpo = document.createElement('div');
    cuerpo.setAttribute('slot', 'cuerpo');
    cuerpo.innerHTML = '<p>Cuerpo Predeterminado</p>';

    // Añadir elementos al Shadow DOM
    shadow.appendChild(encabezado);
    shadow.appendChild(cuerpo);
  }
}

customElements.define('contenedor-component', ContenedorComponent);
