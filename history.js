// history.js
export function setupHistoryAPI({ getCurrentPage, setCurrentPage }) {
  // Push a state whenever the page changes
  function pushPage(page) {
    history.pushState({ page }, "", "#" + page);
  }

  // When back/forward buttons are pressed
  window.onpopstate = function (event) {
    if (event.state && event.state.page) {
      setCurrentPage(event.state.page);
    } else {
      setCurrentPage("home");
    }
  };

  // Initialize on load
  const initialPage = location.hash ? location.hash.replace("#", "") : "home";
  setCurrentPage(initialPage);
  history.replaceState({ page: initialPage }, "", "#" + initialPage);

  return { pushPage };
}
