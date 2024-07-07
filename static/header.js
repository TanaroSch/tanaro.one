// header.js
(function (window) {
  function Header(config) {
    this.config = config;
  }

  Header.prototype.generateHeader = function () {
    var headerContent =
      '\
            <div class="container">\
                <div id="branding">\
                    <a href="#home"><h1>' +
      this.config.branding.text +
      '</h1></a>\
                </div>\
                <nav>\
                    <ul class="main-menu">\
                        ' +
      this.generateNavItems() +
      '\
                    </ul>\
                </nav>\
                <button id="mode-toggle" class="mode-toggle" aria-label="Toggle dark mode">\
                    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\
                        <circle cx="12" cy="12" r="5"></circle>\
                        <line x1="12" y1="1" x2="12" y2="3"></line>\
                        <line x1="12" y1="21" x2="12" y2="23"></line>\
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\
                        <line x1="1" y1="12" x2="3" y2="12"></line>\
                        <line x1="21" y1="12" x2="23" y2="12"></line>\
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\
                    </svg>\
                    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\
                    </svg>\
                </button>\
            </div>\
        ';

    return headerContent;
  };

  Header.prototype.generateNavItems = function () {
    return this.config.navigation
      .map(function (item) {
        if (item.dropdown) {
          return (
            '\
                    <li class="has-dropdown">\
                        <a href="' +
            item.link +
            '">' +
            item.text +
            '</a>\
                        <ul class="dropdown">\
                            ' +
            item.dropdown
              .map(function (dropdownItem) {
                return (
                  '<li><a href="' +
                  dropdownItem.link +
                  '">' +
                  dropdownItem.text +
                  "</a></li>"
                );
              })
              .join("") +
            "\
                        </ul>\
                    </li>\
                "
          );
        } else {
          return '<li><a href="' + item.link + '">' + item.text + "</a></li>";
        }
      })
      .join("");
  };

  Header.prototype.generateFooter = function () {
    return (
      '\
    <footer class="footer">\
        <div class="container">\
            <p>Made with ♥ by <a href="' +
      this.config.developerInfo.website +
      '" target="_blank">' +
      this.config.developerInfo.name +
      '</a> and \
            <a href="https://www.claude.ai" target="_blank">Claude</a></p>\
        </div>\
    </footer>\
    '
    );
  };

  Header.prototype.render = function (targetId) {
    console.log("Rendering header");
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.innerHTML = this.generateHeader();
      console.log("Header HTML inserted");
      this.setupEventListeners();

      // Add footer to the body
      document.body.insertAdjacentHTML("beforeend", this.generateFooter());
      logger.debug("Footer HTML inserted");
    } else {
      console.error('Element with id "' + targetId + '" not found.');
    }
  };

  Header.prototype.setupEventListeners = function () {
    console.log("Setting up event listeners");
    var modeToggle = document.getElementById("mode-toggle");
    console.log("Mode toggle button:", modeToggle);
    if (modeToggle) {
      modeToggle.addEventListener("click", this.toggleDarkMode.bind(this));
      console.log("Event listener added successfully");
    } else {
      console.error("Mode toggle button not found");
    }
  };

  Header.prototype.toggleDarkMode = function () {
    console.log("Toggling dark mode");
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  window.Header = Header;
})(window);