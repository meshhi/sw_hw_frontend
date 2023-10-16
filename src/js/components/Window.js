const placeholderHTML = `
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

class Window {
    constructor() {
      this.window = document.createElement('div');
      this.window.classList.add('window');
      this.windowTitleContainer = document.createElement('div');
      this.windowTitleContainer.classList.add('window-title-container');
      this.window.appendChild(this.windowTitleContainer);
      this.windowTitle = document.createElement('h1');
      this.windowTitle.classList.add('window-title');
      this.windowTitle.textContent = 'Новости мира и кино';
      this.windowTitleContainer.appendChild(this.windowTitle);
      this.windowTitleRefreshButton = document.createElement('button');
      this.windowTitleRefreshButton.classList.add('window-title-refresh-button');
      this.windowTitleRefreshButton.textContent = 'Обновить';
      this.windowTitleContainer.appendChild(this.windowTitleRefreshButton);
      this.contentPlaceholder = document.createElement('div');
      this.contentPlaceholder.classList.add('card-body');
      this.contentPlaceholder.innerHTML = placeholderHTML;
      this.window.appendChild(this.contentPlaceholder);
      this.noConnectionElement = document.createElement('div');
      this.noConnectionElement.classList.add('no-connection');
      this.noConnectionElement.textContent = 'Нет соединения';
      this.window.appendChild(this.noConnectionElement);

      this.windowTitleRefreshButton.addEventListener('click', this.getData);
    }

    bindToDOM = (container) => {
        container.appendChild(this.window);
    }

    getData = async() => {
        this.contentPlaceholder.innerHTML = placeholderHTML;
        this.noConnectionElement.style.display = 'none';
        let response;
        try {
            response = await fetch('https://sw-hw-backend.onrender.com/');
            let responseJSON = await response.json();
            this.contentPlaceholder.innerHTML = `<h2>${responseJSON.title}</h2><div>${responseJSON.content}</div>`;
        } catch (err) {
          this.noConnectionElement.style.display = 'flex';
        }
    }
}

export { Window };