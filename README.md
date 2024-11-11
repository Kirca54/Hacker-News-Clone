# Hacker News Clone

This is a clone of the popular Hacker News platform, built using Vue 3. The app allows users to view news posts, comment on them, and explore various categories like "hot" and "new". It includes offline support through service workers, allowing users to access previously visited pages even when they are not connected to the internet.

## Features

- **View Posts**: Browse through different categories like "hot", "new", "ask", etc.
- **Post Details**: Click on any post to view more details and comments.
- **Search Functionality**: Use the search bar to search for specific posts.
- **Offline Mode**: The application caches visited pages and serves them offline, using service workers. This ensures a smooth experience even when you lose your internet connection.

## Project setup

To get the project up and running locally, follow the steps below.

### 1. Install Dependencies
First, install all required dependencies:

```
npm install
```

### 2. Run the Development Server
To start the development server and hot-reload the app for development:

```
npm run serve
```

This will open the app in your default browser at http://localhost:8080.

### 3. Build for Production
To build the app for production (optimized for performance):

```
npm run build
```

The production files will be outputted to the `dist` folder.

### 4. Lint and Fix Files
To lint and automatically fix any code style issues:

```
npm run lint
```


### 5. Customize Configuration
For more information on customizing the configuration, check out the official Vue CLI documentation [here](https://cli.vuejs.org/config/).

## Testing Offline Mode

To test the offline functionality of the app, follow these steps:

### 1. Build the Application for Production
First, run the following command to build the app for production:

```
npm run build
```

### 2. Serve the Production Build Locally
After building, you need to serve the production files locally. You can use the `serve` package to do this:

- Install `serve` globally if you haven't already:

```
npm install -g serve
```

Serve the app from the dist folder:

```
serve -s dist
```

This will start a local server at http://localhost:3000 (or another port if specified).

### 3. Testing Offline
- Open the app in your browser at http://localhost:3000.
- Navigate through some pages (e.g., browse posts in the hot category or open a post for its details).
- Turn off your internet connection.
- Refresh the page or visit other pages. You should see that previously loaded pages appear from the cache, showing that offline functionality is working.
   
#### Important Notes:
- The service worker caches pages as you visit them, so ensure you browse through the sections you want available offline while connected to the internet.
- If you clear the cache or perform a fresh build, the cached content may be cleared.