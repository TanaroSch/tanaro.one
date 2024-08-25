// header.js
(function (window) {
  var logger = new Logger(LogLevel.INFO);

  function Header(config) {
    this.config = config;
  }

  Header.prototype.generateHeader = function () {
    var headerContent =
      '\
        <div class="container">\
            <div class="branding-container">\
                <a href="./index.html" class="branding-link">\
                    <div class="header-svg">\
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="neural-network-svg" width="100%" height="100%">\
                            ' +
      SVGPaths.getNeuralNetworkPaths() +
      '\
                        </svg>\
                    </div>\
                    <div id="branding">\
                        <h1>' +
      this.config.branding.text +
      '</h1>\
                    </div>\
                </a>\
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
                    ' +
      SVGPaths.getSun() +
      '\
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
    logger.debug("Rendering header");
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.innerHTML = this.generateHeader();
      logger.debug("Header HTML inserted");
      this.setupEventListeners();

      // Add footer to the body
      document.body.insertAdjacentHTML("beforeend", this.generateFooter());
      logger.debug("Footer HTML inserted");
    } else {
      logger.error('Element with id "' + targetId + '" not found.');
    }
  };

  Header.prototype.setupEventListeners = function () {
    logger.debug("Setting up event listeners");
    var modeToggle = document.getElementById("mode-toggle");
    logger.debug("Mode toggle button:", modeToggle);
    if (modeToggle) {
      modeToggle.addEventListener("click", this.toggleDarkMode.bind(this));
      logger.debug("Event listener added successfully");
    } else {
      logger.error("Mode toggle button not found");
    }
  };

  Header.prototype.toggleDarkMode = function () {
    logger.info("Toggling dark mode");
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  window.Header = Header;
})(window);
