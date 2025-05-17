FinTrack Dashboard
FinTrack Dashboard is a React-based financial management application that provides users with a comprehensive view of their financial data, including income, expenses, savings goals, transactions, budgets, and spending insights. The dashboard features interactive charts, a responsive sidebar, and a dark/light mode toggle for enhanced user experience.
Instructions for Running the Application
Prerequisites

Node.js: Ensure Node.js (version 16 or higher) and npm are installed on your system.
Git: Required to clone the repository (optional if you have the source files).
Code Editor: A code editor like Visual Studio Code is recommended for development.

Setup and Installation

Clone the Repository (if applicable):
git clone <repository-url>
cd fintrack-dashboard


Install Dependencies:Run the following command to install all required npm packages:
npm install

Key dependencies include:

react, react-dom: Core React libraries.
recharts: For rendering charts (AreaChart and PieChart).
lucide-react: For icons used in the UI.
tailwindcss: For styling the application.


Project Structure:Ensure the following files are present in your project directory:

src/components/Dashboard.js: Main dashboard component.
src/components/Header.js: Header component with user info and theme toggle.
src/components/Sidebar.js: Sidebar navigation component.
src/components/FinancialCard.js: Reusable card component for financial metrics.
src/Mockdata/mockFinancialData.js: Mock data for financial overview, transactions, and charts.
src/Mockdata/mockNotifications.js: Mock data for notifications and budgets.
index.html: Entry point with CDN-hosted React, Tailwind CSS, and other dependencies.
src/index.js: Entry point for rendering the React app.


Run the Application:Start the development server using:
npm start

This will launch the application in your default browser at http://localhost:3000 (or another available port).

Build for Production (optional):To create a production-ready build, run:
npm run build

The optimized files will be generated in the build directory.


Usage

Navigation: Use the sidebar to navigate between Dashboard, Transactions, Budgets, Calendar, Reports, and Settings (Dashboard is active by default).
Theme Toggle: Click the sun/moon icon in the header to switch between light and dark modes.
Sidebar Toggle: On mobile devices, click the menu icon in the header to open/close the sidebar.
Financial Overview: Select Monthly, Quarterly, or Year-to-date to view financial metrics for different timeframes.
Charts: Interact with the Income vs Expenses AreaChart and Spending by Category PieChart. Click a pie segment to filter by category, and click "Back to all categories" to reset.
Transactions: Search transactions by description or category using the search bar.
Notifications and Budgets: View smart insights and budget tracking in the right column.

Time Spent
The development and refinement of the FinTrack Dashboard took approximately 10 hours, broken down as follows:

Project Setup (1 hour): Setting up the React environment, installing dependencies, and configuring Tailwind CSS.
Component Development (4 hours):
Header: 1 hour (including theme toggle and mobile sidebar toggle).
Sidebar: 1 hour (responsive design and navigation items).
FinancialCard: 0.5 hours (reusable card with dynamic formatting).
Dashboard: 1.5 hours (layout, state management, and integration of components).


Charts and Data Visualization (2.5 hours):
Income vs Expenses AreaChart: 1 hour (using Recharts, formatting data).
Spending by Category PieChart: 1.5 hours (interactive pie chart with click handling and dynamic labels).


Mock Data Creation (1 hour): Designing and structuring mock data for financial overview, transactions, budgets, and notifications.
Styling and Responsiveness (1 hour): Ensuring Tailwind CSS classes provide a consistent look and responsive design across mobile and desktop.
Testing and Debugging (0.5 hours): Verifying functionality, responsiveness, and chart interactions.

Assumptions

Static Data: The application uses mock data (mockFinancialData.js and mockNotifications.js) instead of a backend API, assuming no real-time data fetching is required.
Single User: The dashboard is designed for a single user (mockUser), with no authentication or multi-user support.
Browser Compatibility: The application is built to run on modern browsers (Chrome, Firefox, Safari) using CDN-hosted libraries for React, Recharts, and Tailwind CSS.
Tailwind CSS: Assumed to be the preferred styling framework, as it aligns with rapid development and responsive design needs.
Recharts Library: Chosen for chart rendering due to its simplicity and compatibility with React.
No Form Submissions: The application avoids <form> elements, as per guidelines, using buttons and input fields for interactions like search.
Fixed Date: Transactions and data are set for May 2025, aligning with the provided mock data.

Decisions

React with CDN: Used CDN-hosted React and dependencies in index.html to simplify setup and ensure compatibility with sandboxed environments, avoiding complex build tools like Vite or Webpack.
Tailwind CSS for Styling: Selected Tailwind CSS for its utility-first approach, enabling rapid styling and responsive design without writing custom CSS.
Recharts for Charts: Opted for Recharts over other libraries (e.g., Chart.js) due to its native React integration and support for interactive charts like AreaChart and PieChart.
Responsive Sidebar: Implemented a fixed sidebar for desktop and a toggleable sidebar for mobile, using Tailwind's transform classes for smooth animations.
Interactive Pie Chart: Added click functionality to filter the PieChart by category, enhancing user interaction and data exploration.
Dynamic Financial Cards: Designed the FinancialCard component to handle both currency and percentage values, improving reusability.
State Management: Used React's useState and useEffect for local state management (e.g., timeframe, search, theme), avoiding external libraries like Redux for simplicity.
Dark/Light Mode: Implemented theme toggling with conditional Tailwind classes, ensuring a seamless user experience across modes.
No Backend: Focused on frontend-only functionality with mock data, as no backend integration was specified.
Error Handling: Added fallback UI for empty search results in the transactions table to improve UX.

Notes

The application is fully functional as a single-page application (SPA) with no server-side dependencies.
The sidebar navigation links are placeholders (href="#") and can be extended to route to other pages using a router like react-router-dom.
The mock data can be replaced with API calls by updating the data imports and adding fetch logic.
For production, consider adding error boundaries, loading states, and proper routing.

