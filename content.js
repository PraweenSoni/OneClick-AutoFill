browser.runtime.onMessage.addListener((message) => {
    if (message.highlight !== undefined) {
      const inputs = document.querySelectorAll("input");
      const textareas = document.querySelectorAll("textarea");
      inputs[6].value = "New Updatesss";
      inputs.forEach((input) => {
        if (input.type !== "button" && input.type !== "submit"){
            input.style.border = message.highlight ? "1px solid red !important" : "";
        }
      });
      textareas.forEach((textarea)=>{
        textarea.style.border = "1px solid blue";
      })
    }
  });
  