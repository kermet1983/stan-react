# README

## Tech Stack

TypeScript,
Babel,
Webpack,
Jest,
React,
Styled Components,
React Router

## Installation Instructions:

This project used Yarn

```bash
1. Pull Repo
2. cd into stan-react and install dependencies
3. run "yarn" to install dependencies
4. run "yarn start"
6. go to "http://localhost:3000"
```

## Path Aliases

Path aliases are configured in tsconfig.json, jest.config.js and webpack.config.ts

## Testing:

```bash
1. Jest, react testing library are used to test the Client
2. Test files are located in "*/__tests__/**" directory
3. To run tests, execute "yarn test"
```

## Building the app:
Webpack is used to build and bundle a production application into a dist/ directory. Config can be found in [Webpack config](./webpack.config.ts)

```bash
yarn build
```

## Technical and Architectural Choices

These choices were made to create a robust, maintainable, and efficient web application. Modern and powerful technical choices provide a component-based architecture that boosts UI reusability and performance, ideal for scalable applications. Strong typing capabilities, enhancing code quality, maintainability, and developer collaboration. Well tested pages, components and functionality ensure reliability whilst being able to use that latest and greatest Javascript features across various browsers. Webpack optimises bundling, improving load times and resource management whilst enhancing the developer experience. The router technology is the defacto in React applications that are not using Next.js (SSR). Easy enchancement of CSS management in React components, allowing dynamic styling and reducing style conflicts.


## Potential Improvements
- **Server-Side Rendering**: Using a SSR framework such Next.js could improve initial load times and SEO, providing a better user experience and visibility. Adoption and upskill should be marginal and Next.js is built on React

- **State Management**: For complex applications, considering a state management library like Redux or Zustand could provide a more organised and scalable solution.

- **Progressive Web App (PWA)**: Enhancing the application to be a PWA for offline support, faster load times, and a more native-like experience on mobile devices.

- **Accessibility/Performace Improvements**: Conducting an accessibility/performance audit and implementing recommended changes to ensure the application is usable by everyone.

## Considerations with More Time

- Micro-Frontends Architecture: As the application, using a micro-frontends approach could improve scalability and team autonomy by breaking the application into smaller, independently deployable packages.

- Improve the responsiveness below the 900px breakpoint

- Improve logging and error handling eg, when the API fails should we render the ErrorBoundary or just show a notificxation pop up.

- Improve SEO with a library such as React Helmet

- Add smoother page transitions such as a fade effect