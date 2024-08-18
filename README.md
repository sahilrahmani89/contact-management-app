# Contact Management System

**Overview**

This Contact Management System is a React application designed to manage contacts efficiently. The app features a responsive UI with a navbar, sidebar, and main content area, providing a seamless experience for creating, editing, and deleting contacts. Additionally, the application includes a Dashboard that presents COVID-19 data through interactive charts and a map.

- Features
  - Navbar: Provides easy navigation across the application.
  - Sidebar: Contains links to different sections such as Contacts and Dashboard.
  - Main Content: Displays the core functionalities based on the selected route.
  - Contacts:Default route (/). Create, edit, and delete contacts.
  - Dashboard: Displays three types of visualizations
         ``Line Chart``
         ``Bar Chart``
        ``Leaflet Map showing COVID-19 data``.

**Folder Structure**

The project is organized as follows:


src/
- `├── assets/ # Contains icons and other static assets`
- `├── components/ # Reusable UI components`
- `├── feature/ # Redux Toolkit slices for state management`
- `├── hooks/ # Custom React hooks`
- `├── pages/ # Contains route pages (Contact and Dashboard)`
- `└── store/ # Redux store configuration and error handling`

Installation
To run the project locally, follow these steps:

Clone the repository:

bash
Copy code

git clone https://github.com/sahilrahmani89/contact-management-app.git

cd contact-management-system

Install dependencies:


npm install

Start the development server:


npm start

The app should be running on http://localhost:3000.

Usage

Navigating the App: Use the sidebar to switch between the Contacts and Dashboard sections.

Managing Contacts: On the Contacts page, you can create a new contact, edit existing ones, or delete them.

Viewing Dashboard: The Dashboard page provides insights through various charts and a map, using COVID-19 data.
- Dependencies
    - React: Frontend framework.
    - Redux Toolkit: State management.
    - React-Router: For handling routing.
    - react-chartjs-2: For rendering charts.
    - Leaflet: For interactive maps.

Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

