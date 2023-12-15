class UserListComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Crear un contenedor para la lista de usuarios
    const userListContainer = document.createElement('div');
    userListContainer.classList.add('user-list-container');

    // Obtener datos de la API
    this.fetchUserData().then((users) => {
      // Crear elementos de lista de usuarios
      users.forEach((user) => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
        `;
        userListContainer.appendChild(userItem);
      });
    });

    // Añadir la lista de usuarios al Shadow DOM
    shadow.appendChild(userListContainer);
  }

  async fetchUserData() {
    try {
      // Hacer una solicitud a la API de JSONPlaceholder
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
      return [];
    }
  }
}

customElements.define('user-list-component', UserListComponent);
