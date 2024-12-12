document
  .getElementById("highlight-checkbox")
  .addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { highlight: isChecked });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  });
