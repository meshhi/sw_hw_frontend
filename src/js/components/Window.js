class Window {
    constructor() {
        this.window = document.createElement('div');
        this.window.classList.add('window');
        this.windowTitle = document.createElement('h1');
        this.windowTitle.classList.add('window-title');
        this.windowTitle.textContent = 'Новости мира и кино';
        this.window.appendChild(this.windowTitle);
        this.contentPlaceholder = document.createElement('div');
        this.contentPlaceholder.classList.add('card-body');
        this.contentPlaceholder.innerHTML = `
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
      `
      this.window.appendChild(this.contentPlaceholder);
    }

    bindToDOM = (container) => {
        container.appendChild(this.window);
    }

    getData = async() => {
        let response;
        try {
            response = await fetch('https://sw-hw-backend.onrender.com/');
            this.contentPlaceholder.innerHTML = response.status;
        } catch (err) {
            this.contentPlaceholder.innerHTML = 'Нет соединения';
        }
    }
}

export { Window };