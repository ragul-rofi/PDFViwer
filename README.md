
# PDF Viewer Project

This is a simple online PDF viewer built using JavaScript and [PDF.js](https://mozilla.github.io/pdf.js/). The viewer allows users to render and navigate PDF files in the browser. This project includes navigation controls to move between pages of the PDF.

## Features

- Render PDF pages in the browser
- Navigate between pages (Previous/Next buttons)
- Display current page number and total page count

## Prerequisites

- A local web server is required to load the project files (e.g., Python's `http.server` module).

## Installation

1. Clone or download this project to your local machine.

2. Place the PDF file you want to view inside the project directory.

3. Start a local web server. If you have Python installed, navigate to the project directory in a terminal and run:
    ```bash
    python -m http.server
    ```

4. Open a browser and go to `http://localhost:8000/index.html`.

## Project Structure

```
pdf-viewer/
├── index.html     # The HTML structure for the PDF viewer
├── style.css      # Basic styling for the viewer
├── app.js         # JavaScript to load and render the PDF
└── my-pdf-file.pdf # The PDF file to be rendered
```

## Usage

1. Once the web server is running, go to `http://localhost:8000/index.html` in your browser.
2. The PDF file will be rendered in the browser.
3. Use the "Previous" and "Next" buttons to navigate between pages.

## Dependencies

- [PDF.js](https://mozilla.github.io/pdf.js/) (included via CDN)

## License

This project is licensed under the MIT License.
