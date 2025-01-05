# Portfolio Project - React + Vite

Welcome to my portfolio project! This project is built using React and Vite, providing a fast and modern development experience. Below you'll find detailed information about the project setup, features, and how to get started.


## Thanks to

* [Clonify](https://dribbble.com/clonifylibrary) for providing the UI design concept.

## Domain Status

| Domain                                                                                    | Status |
| ----------------------------------------------------------------------------------------- | ------ |
| <a href="https://www.nabildr.tech">www.nabildr.tech</a>                                   | Active |
| <a href="https://nabildr.tech">nabildr.tech</a>                                           | Active |
| <a href="https://portfolio-deploy-2.vercel.app">https://portfolio-deploy-2.vercel.app</a> | Active |

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This portfolio project showcases my skills and projects as a web developer. It includes sections for my projects, journals, contact information, and more. The project is built using React for the frontend and Vite for the build tool, ensuring a fast and efficient development process.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For utility-first CSS styling.
- **Framer Motion**: For animations and transitions.
- **EmailJS**: For handling contact form submissions.
- **AOS (Animate On Scroll)**: For scroll animations.
- **Responsive Design**: Ensures the site looks great on all devices.
- **SEO Optimized**: Meta tags and Open Graph data for better search engine visibility.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/portfolio-project.git
   cd portfolio-project
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and open the project in your default browser. Any changes you make to the code will be hot-reloaded.

## Project Structure

Here's an overview of the project's structure:

```
portfolio-project/
├── public/
│ ├── favicon.ico
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── About/
│ │ ├── Contact/
│ │ ├── Home/
│ │ ├── Journals/
│ │ ├── Nav/
│ │ ├── Projects/
│ │ └── Shared/
│ ├── App.jsx
│ ├── index.jsx
│ └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

## Available Scripts

Available Scripts
In the project directory, you can run:

- npm run dev: Starts the development server.
- npm run build: Builds the app for production.
- npm run serve: Serves the production build locally.
- npm run lint: Runs ESLint to check for code quality issues.

## Deployment

This project is configured to be deployed on Vercel. To deploy, follow these steps:

1. **Install Vercel CLI**:

   ```sh
   npm install -g vercel
   ```

2. **Deploy the Project**:

   ```sh
   vercel
   ```

3. **Configure Vercel for client-side routing**:
   Ensure you have a vercel.json file with the following content:

   ````json
   {
   "rewrites": [
     { "source": "/(.*)", "destination": "/" }
   ]
   } ```
   ````

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements

- [React](https://reactjs.org/docs/getting-started.html)
- [Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/)
- [Framer Motion](https://www.framer.com/docs/)
- [EmailJS](https://www.emailjs.com/docs/)
- [AOS](https://michalsnik.github.io/aos/)

Thank you for checking out my portfolio project! If you have any questions or feedback, feel free to reach out.

This `README.md` file provides a comprehensive overview of your project, including installation instructions, usage, project structure, available scripts, deployment steps, and more. It also includes acknowledgements for the tools and libraries used in the project.
# nabildzr-portfolio
