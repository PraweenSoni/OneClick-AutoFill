# Auto fill inputs in webpages extension
# OneClick Fill

OneClick Fill is a browser extension designed to streamline the process of filling out online forms. Whether you're entering your name, address, pin code, or payment information, OneClick Fill helps you save time and avoid missing out on fast-moving products by highlighting input fields and providing the foundation for auto-filling them in the future.

## Inspiration
The idea for OneClick Fill came from real-world frustration: when purchasing products online, manually entering information like name, address, and payment details often led to delays, causing products to go out of stock. This extension aims to eliminate those delays and make form-filling faster and more efficient.

## Features
- **Input Field Highlighter**: Easily identify all input fields on a webpage with a red border.
- **Exclude Button Fields**: Ensures buttons are not mistakenly highlighted.
- **Future-Ready**: The extension is designed with plans to include auto-fill functionality for form fields in the future.

## How to Install
1. Clone or download this repository to your local machine.
2. Open your browser:
   - **Firefox**: Navigate to `about:debugging#/runtime/this-firefox`.
   - **Chrome**: Go to `chrome://extensions/`.
3. Enable **"Developer Mode"**.
4. Click **"Load Temporary Add-on"** (Firefox) or **"Load Unpacked"** (Chrome).
5. Select the `manifest.json` file from the extension folder.

## How to Use
1. Click the OneClick Fill extension icon in the browser toolbar.
2. A popup will appear with a checkbox labeled **"Highlight Input Fields"**.
3. Check the box to highlight all input fields on the current webpage (excluding buttons).
4. Uncheck the box to remove the highlights.

## Future Enhancements
- **Auto-Fill Functionality**: Automatically fill out common fields like name, address, and payment information.
- **Customizable Fields**: Allow users to predefine values for specific input fields.
- **Form Profiles**: Save and switch between multiple form profiles for different scenarios.

## Files in This Repository
- **manifest.json**: Defines the extension metadata and configuration.
- **popup.html**: The HTML for the extension's popup UI.
- **popup.js**: The JavaScript controlling the popup's behavior.
- **content.js**: The script that applies styles to input fields on the active webpage.

# Development

To modify or enhance the extension:

1. **Prerequisites**: Ensure you have basic knowledge of HTML, CSS, and JavaScript.
2. **Modify Code**: Edit the relevant files (`popup.html`, `popup.js`, `content.js`) as needed.
3. **Test Changes**: Reload the extension in Firefox to see your updates in action.


**Note**: Always ensure your personal data is handled securely. OneClick Fill stores information locally and does not transmit data externally.

## License
This project is open-source and available under the [MIT License](LICENSE).

<!-- ## Screenshots
![Popup UI](https://via.placeholder.com/400x150?text=Popup+UI+Preview)
![Highlighted Fields](https://via.placeholder.com/400x300?text=Highlighted+Fields+Preview) -->

---

Enjoy faster and hassle-free form-filling with OneClick Fill!
