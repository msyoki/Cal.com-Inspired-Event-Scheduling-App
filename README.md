# Counseling Psychologist Booking App

A modern web application for booking appointments with counseling psychologists. The app provides a seamless, accessible interface for users to view available psychologists, book sessions, and manage their appointments.

---

## Features

- Browse available counseling psychologists
- Book and manage appointments
- Responsive, mobile-friendly UI
- Modular JavaScript SPA architecture (hash-based routing)
- Accessible design and ARIA support
- Dynamic content rendering with reusable components
- End-to-end testing with Playwright

---

## Technologies & Integrations

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Custom styles, responsive layouts, Google Fonts (Inter)
- **JavaScript (ES6+)**: SPA logic, routing, and UI components
- **Playwright & @playwright/test**: Automated end-to-end testing
- **Node.js & npm**: Dependency management and scripts
- **VS Code**: Recommended for development
- **[serve](https://www.npmjs.com/package/serve)**: For running a local static server (optional, for SPA routing)

---

## Project Structure

```
index.html
package.json
playwright.config.js
README.md
css/
  styles.css
images/
js/
  app.js
  components.js
  router.js
tests/
  example.spec.js
```

---

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/msyoki/Cal.com-Inspired-Event-Scheduling-App.git
   cd Cal.com-Inspired-Event-Scheduling-App
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Running the Application

### Option 1: Open Directly

Open `index.html` in your browser. (Some SPA features may not work due to browser security restrictions.)

### Option 2: Run with a Local Server (Recommended)

Install [serve](https://www.npmjs.com/package/serve) globally if you don't have it:

```sh
npm install -g serve
```

Then start the server:

```sh
serve .
```

The app will be available at `http://localhost:5000` (or the port shown in your terminal).

---

## Running Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

To run all tests:

```sh
npx playwright test
```

Test files are located in the `tests/` directory. See `playwright.config.js` for configuration.

---

## Usage

1. Open the app in your browser (see above).
2. Browse the list of psychologists and available services.
3. Book an appointment or send a contact request.
4. Manage your bookings from the dashboard.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, please open an issue on GitHub or connect via the [LinkedIn Profile](https://ke.linkedin.com/in/consuella-kamonya-517a712a6).
