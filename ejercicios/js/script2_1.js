class EmisorComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.textContent = 'Enviar Mensaje';
    button.addEventListener('click', () => {
      const evento = new CustomEvent('mensajeEnviado', {
        bubbles: true,
        composed: true,
        detail: { mensaje: '¡Hola desde Emisor!' }
      });
      this.dispatchEvent(evento);
    });

    shadow.appendChild(button);
  }
}

customElements.define('emisor-component', EmisorComponent);
