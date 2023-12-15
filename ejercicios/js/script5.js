class ContadorComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Inicializar el estado del contador
    this.estado = 0;

    // Crear elementos del contador
    const contadorContainer = document.createElement('div');
    contadorContainer.classList.add('contador-container');

    const botonIncrementar = document.createElement('button');
    botonIncrementar.textContent = '+';
    botonIncrementar.addEventListener('click', () => {
      this.incrementarContador();
      this.actualizarContador();
    });

    const contador = document.createElement('span');
    contador.textContent = this.estado;

    const botonDisminuir = document.createElement('button');
    botonDisminuir.textContent = '-';
    botonDisminuir.addEventListener('click', () => {
      this.disminuirContador();
      this.actualizarContador();
    });

    // Añadir elementos al Shadow DOM
    contadorContainer.appendChild(botonIncrementar);
    contadorContainer.appendChild(contador);
    contadorContainer.appendChild(botonDisminuir);
    shadow.appendChild(contadorContainer);
  }

  incrementarContador() {
    this.estado++;
  }

  disminuirContador() {
    this.estado--;
  }

  actualizarContador() {
    // Actualizar el contenido del contador
    this.shadowRoot.querySelector('span').textContent = this.estado;
  }
}

customElements.define('contador-component', ContadorComponent);
