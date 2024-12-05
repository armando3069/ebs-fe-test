# Welcome to the Front-End Developer Test!

Shopping Cart Application

This project is a simple Shopping Cart Application built using React and TypeScript. It includes features such as adding/removing items from the cart, viewing product details, and more.

Features

    •	Dynamic Shopping Cart: Add, remove, and adjust item quantities.
    •	Product Management: Fetch and display products from an API.
    •	Persistent State: Cart items are saved in local storage.
    •	Responsive Design: Works across various devices clean design.

Tech Stack

    •	React: Component-based UI.
    •	TypeScript: Type safety for better development.
    •	Local Storage: Persistent cart functionality.
    •	CSS: Styling and layout.

Getting Started

Prerequisites

Ensure you have the following installed:
• Node.js (v16 or later)
• npm or yarn

Installation

    1.	Clone the repository:

git clone https://github.com/armando3069/ebs-fe-test.git
cd shopping-cart-app

    2.	Install dependencies:

npm install

# or

yarn install

Running the Application

To start the development server:

npm start

# or

yarn start

The application will be accessible at http://localhost:5173/.

Building for Production

To build the project for production:

npm run build

# or

yarn build

The output will be located in the build folder.

Linting and Formatting

To check and fix code style issues:

npm run lint
npm run format

# or

yarn lint
yarn format

Testing

Run the tests using React Testing Library and Jest:

npm test

# or

yarn test

Folder Structure

src/
│
├── API/ # API fetch logic
├── components/ # Reusable components (Cart, ProductList, etc.)
├── context/ # Context API for global state
├── hooks/ # Custom hooks (e.g., useLocalStorage)
├── pages/ # Main application pages
├── styles/ # CSS/SCSS files
├── utils/ # TypeScript types and interfaces
└── App.tsx # Main application component

License

This project is licensed under the MIT License.

Feel free to modify the details according to your project’s specifics!
