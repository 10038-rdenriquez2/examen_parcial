class ReceptorComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    this.p = document.createElement('p');
    shadow.appendChild(this.p);

    // Escuchar el evento personalizado 'mensajeEnviado' en el propio elemento
    document.body.addEventListener('mensajeEnviado', (event) => {
      this.mostrarMensaje(event.detail.mensaje);
    });
  }

  mostrarMensaje(mensaje) {
    this.p.textContent = `Mensaje recibido: ${mensaje}`;
  }
}

customElements.define('receptor-component', ReceptorComponent);
