# Ecommerce
[Live View](https://rpsingh0.github.io/EcommerceFrontend/)

## Overview

This project is an e-commerce website, forming a crucial part of our comprehensive full-stack application. It provides users with a seamless shopping experience, enabling them to explore a wide range of products, utilize essential features like cart and wishlist management, make secure purchases, and contribute valuable feedback through product reviews.

## Key Features

- **Product Catalog**: Browse through a diverse collection of products across various categories.
- **Cart and Wishlist**: Conveniently manage items in the cart for streamlined checkout and save favorites to the wishlist for future reference.
- **Secure Checkout**: Enjoy a secure and hassle-free checkout process for purchasing desired products.
- **Product Reviews**: Share your experiences by adding reviews and ratings to products you've purchased, helping other users make informed decisions.


## Technologies Used

- **React**: Used for building the user interface and managing components.
- **React Router**: Utilized for managing client-side routing and navigation.
- **Axios**: Employed for making API calls and handling asynchronous data fetching.
- **React Context API**: Used for managing certain contexts like Cart, Order, SingleProduct, and Wishlist, providing a centralized state management solution.
- **React Material-UI (MUI)**: Utilized for a wide range of pre-designed components and styling.
- **Emotion**: Used for styling components with CSS-in-JS, providing a scalable and maintainable styling solution.
- **Custom Hooks**: Implemented custom hooks for reusable logic and state management across components.
- **Firebase**: Integrated for image uploading when users fill out the signup form, enabling efficient storage and retrieval of uploaded images.
- **Redux**: Used for global user state management, ensuring consistent and predictable state handling across the application.
- **Local Storage**: Utilized to store authentication status and other key-value pairs locally, enhancing user experience and session management.
- **react-hot-toast**: Integrated for providing notification feedbacks, enhancing user interaction and feedback mechanisms.
- **react-hook-forms**: Utilized with controllers for managing form state and validation, simplifying form handling and data submission processes.

# Routes
| Route                                               | Description                                                | Component(s) Used                       |
| --------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| `/home`                                             | Displays best of subcategories.                            | `<BestOfSubCategory/>`                  |
| `/home/by/parent/:category`                         | Displays subcategories by parent category.                 | `<SingleSubCategoryByParentContainer/>` |
| `/home/by/parent/:category/:subCategory`            | Displays products for a specific subcategory.              | `<SubCategoryProductDashboard/>`        |
| `/home/by/parent/:category/:subCategory/:productId` | Displays details of a single product.                      | `<SingleProduct/>`                      |
| `/signup`                                           | Displays the signup form.                                  | `<Signup/>`                             |
| `/login`                                            | Displays the login form.                                   | `<Login/>`                              |
| `/account`                                          | Displays user account details, orders, cart, and wishlist. | `<Account/>`                            |
| `/cart`                                             | Displays the user's cart items.                            | `<Cart/>`                               |
| `/wishlist`                                         | Displays the user's wishlist items.                        | `<Wishlist/>`                           |
| `/order/:orderId`                                   | Displays the receipt for a specific order.                 | `<OrderReceipt/>`                       |
| `/orders`                                           | Displays the user's orders history.                        | `<Orders/>`                             |
| `/*`                                                | Displays a 404 Page Not Found error for unmatched routes.  | `<PageNotFound/>`                       |


## How to prepare this for GitHub pages

* Install `gh-pages` with following command and save as dev dependency

```bash
npm install gh-pages --save-dev
```

* Now, head to `package.json` and the following at top

```json
{
  "homepage": "https://<github-user-name>.github.io/<repository-name>/"
}
```

* And add the following to the scripts (since we're using [Vite](https://vitejs.dev/guide/) for our application, we'll
  be using deploy command with `dist` instead of `build`)

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

* Now, head to `vite.config.js` and add the following in config

```json
{
  "base": "/<repository-name>/"
}
```

* One last change 😁, if you're using BrowserRouter with react-route, GitHub doesn't support that as of now, so go ahead
  to your imports and change

```js
import {HashRouter} from "react-router-dom";
```

* And use `HashRouter` in place of `BrowserRoute`

```jsx
<HashRouter>
    ...
</HashRouter>
```

### After all the steps above, save all of your code and run the following command

```bash
npm run deploy
```

* This will do the following things
    * Build the project and put the built files under `dist` directory
    * Reach out to GitHub and create/update the build files under the branch `gh-pages`
    * Once you see `Published` in your console, it's all done!

### Now go to GitHub under the following path

* `github` -> `repository` -> `settings` -> `pages`
* And ensure that `gh-pages` is selected as deploy under `Build and deployment` section and `source` is set
  to `Deploy from a branch`
* After a few minutes, you'll be able to see the url for your site 🥳