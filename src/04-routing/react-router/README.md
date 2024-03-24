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
`import { createBrowserRouter, RouterProvider } from "react-router-dom";`
### Nested Route
`{... children:[{...}]}`
#### Deep nested routes
>[reactjs - createBrowserRouter How to nest child routes inside another route that itself is a nested child route? - Stack Overflow](https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668)
### Handle Not Found Error
ErrorBoundary 
`errorElement: ...`
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

### Loading Data
export an async loader function from root.jsx
import the loader function in main.jsx
`loader: loaderFunction`
`import {useLoaderData} from "react-router-dom"`
### Data Writes + HTML Forms
React Router emulates HTML Form navigation as the data mutation primitive
Links can only change the URL while forms can also change the request method (GET vs POST) and the request body (POST form data)
#### Form component 
`import { Form } from "react-router-dom";`
- [`<Form>`](https://reactrouter.com/en/main/components/form) prevents the browser from sending the request to the server and sends it to your route `action` instead.
- React Router uses POST as a hint to automatically revalidate the data on the page after the action finishes. That means all of your `useLoaderData` hooks update and the UI stays in sync with your data automatically!
#### URL Params
`path: "contacts/:contactId"`
- The colon (`:`) has special meaning, turning it into a "dynamic segment". We call these values in the URL "URL Params", or just "params" for short.
- These params are most often used to find a record by ID

### Update with FormData
[FormData - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
Without JavaScript, when a form is submitted, the browser will create [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) and set it as the body of the request when it sends it to the server
React Router prevents that and sends the request to your action instead, including the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
Each field in the form is accessible with `formData.get(name)`
```jsx
export async function action({ request, params }) {
  const formData = await request.formData();
  const firstName = formData.get("first");
  const lastName = formData.get("last");
  // ...
}
 ```

### Active Link Styling
We can use [`NavLink`](https://reactrouter.com/en/main/components/nav-link)
we are passing a function to `className`. When the user is at the URL in the `NavLink`, then `isActive` will be true. When it's _about_ to be active (the data is still loading) then `isPending` will be true





