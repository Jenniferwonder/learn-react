---
aliases: react-router
---
# React Router
>[Feature Overview v6.22.3 | React Router](https://reactrouter.com/en/main/start/overview)
## Why 
React Router enables "==client side routing=="
### What is Client Side Routing & Why?
In traditional websites, the browser **requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server**. When the user clicks a link, it starts the process all over again for a new page
Client side routing allows your app to update the URL from a link click **without making another request for another document from the server**. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information
## Use
### Main Route
### Nested Route
### Handle Not Found Error
ErrorBoundary 
errorElement
#### ErrorPage
```jsx
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```
