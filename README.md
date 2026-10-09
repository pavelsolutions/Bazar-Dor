<div align="center">

# 🛒 বাজার দর | BazarDor

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজেই

BazarDor is a responsive, Bengali-first web application for exploring everyday product prices, comparing market information, browsing categories, and managing user accounts.

<p>
  <img src="https://img.shields.io/badge/Next.js-App%20Router-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-UI-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Type%20Safety-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Authentication-Better%20Auth-222222" alt="Better Auth" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel" alt="Vercel" />
</p>

<!-- Replace these URLs with your actual deployed website and GitHub repository. -->
[Live Demo](https://YOUR_LIVE_URL) · [GitHub Repository](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY)

</div>

---

## 📖 About BazarDor

**বাজার দর (BazarDor)** helps users explore prices of everyday essentials through a simple Bengali-language interface. Users can browse products by category, view price changes, sort products by price, and inspect market-wise prices where data is available.

The interface is designed for mobile, tablet, and desktop screens, with clear product cards, loading states, helpful empty states, and account management.

## ✨ Key Features

1. **📈 Daily Price Trends** — Highlight products whose prices have increased or decreased.
2. **🗂️ Category-Based Browsing** — Explore products by category and navigate between category pages.
3. **↕️ Numeric Price Sorting** — Sort products by default order, lowest price, or highest price.
4. **🔎 Product Details and Market Comparison** — Review a product's summary, unit, minimum, maximum, average, and market-wise prices when supplied by the API.
5. **🔐 Authentication** — Register and sign in with email/password, with Google and GitHub sign-in available when configured.
6. **👤 Profile Management** — View account details and update the profile name.
7. **📱 Responsive Design** — Layouts adapt to mobile, tablet, and desktop screens.
8. **⏳ Loading and Empty States** — Skeleton loaders and helpful messages improve the user experience during loading or when no products are available.
9. **🔔 User Feedback** — Toast notifications communicate authentication, validation, and profile-update results.
10. **🧭 Friendly Navigation and Error Pages** — Clear navigation and a home-page link for unknown or unavailable routes.

## 🧰 Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js App Router](https://nextjs.org/docs/app) | Pages, layouts, routing, and server rendering |
| [React](https://react.dev/) | Reusable user-interface components |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe application development |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling |
| [HeroUI](https://www.heroui.com/) | UI components |
| [Better Auth](https://www.better-auth.com/) | Authentication and session management |
| [MongoDB](https://www.mongodb.com/) | Authentication database |
| [react-hot-toast](https://react-hot-toast.com/) | Toast notifications, if used in the current implementation |
| [Vercel](https://vercel.com/) | Deployment |

> Keep this list aligned with the packages and features actually used in your repository. Remove any technology that is not installed or implemented.

## 🔌 API Reference

BazarDor uses the following API base URLs:

- **Primary:** `https://api.api-store.workers.dev/api/bazardor`
- **Alternative:** `https://api.abcz.workers.dev/api/bazardor`

| Purpose | Endpoint |
| --- | --- |
| All products | `/products` |
| Filter products by category | `/products?category=chal` |
| Get one product | `/products/1` |
| All categories | `/categories` |
| Get one category | `/categories/chal` |

Example:

```ts
const API_BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
```

If the primary API is unavailable, the alternative base URL can be used. Confirm the response shape before relying on API fields in the UI.

## 🖼️ Screenshots

Add screenshots from your running application to make the repository easier to explore.

<!--
Create a `screenshots/` directory and add your screenshots, then uncomment and update these examples.

![BazarDor Home Page](./screenshots/home.png)
![BazarDor Category Page](./screenshots/category.png)
![BazarDor Product Details](./screenshots/product-details.png)
![BazarDor Profile Page](./screenshots/profile.png)
-->

## 🚀 Getting Started

### Prerequisites

- Node.js version supported by the Next.js version used in this project
- npm
- A MongoDB database for authentication
- OAuth credentials for Google and/or GitHub if social login is enabled

### 1. Clone the repository

Replace the placeholders with your actual GitHub username and repository name.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. Add the variables required by your local Better Auth and OAuth configuration.

```env
BETTER_AUTH_MD_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_long_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Add these only if the corresponding social providers are configured.
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> **Important:** Environment variable names depend on your current auth configuration. Keep `.env.local` private, never commit secrets, and check the variable names used by your code before running the app.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Check the production build

```bash
npm run build
npm run start
```

Resolve build errors before deploying.

## 🗺️ Main Application Routes

| Route | Description |
| --- | --- |
| `/` | Home page with price trends and all products |
| `/category/[slug]` | Products in a selected category |
| `/product/[slug]` | Product details and market-wise prices; login required |
| `/signin` | Sign-in page |
| `/signup` | Registration page |
| `/profile` | User profile and account information |
| `/profile/update` | Profile name update form, if implemented |
| `/not-found` | Optional custom not-found route; Next.js `not-found.tsx` is also supported |

> Use the actual route names from your project. If your app uses `/sign-in` and `/sign-up` rather than `/signin` and `/signup`, update this table accordingly.

## 📱 Responsive Design

The application is designed to support:

- **Mobile:** Single-column or compact product layouts and usable navigation.
- **Tablet:** Flexible two-column layouts where appropriate.
- **Desktop:** Multi-column product grids and wider content containers.
- **All sizes:** Readable Bengali text, usable controls, and no unintended horizontal overflow.

## 🔐 Authentication and Security

- Email/password authentication through Better Auth.
- Google and GitHub login when provider credentials are configured.
- Toast messages for sign-in, sign-up, sign-out, and validation outcomes.
- Protected product details and profile functionality where required.
- Server-side session checks for protected data and routes.
- Secrets stored in environment variables rather than source code.

OAuth callback URLs must match the provider configuration for each environment. For example, the GitHub callback URL commonly follows:

```text
https://YOUR_DOMAIN/api/auth/callback/github
```

For local development, use the local callback URL required by your Better Auth setup.

## 🚢 Deployment

This project can be deployed to [Vercel](https://vercel.com/).

1. Push the latest code to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables in Vercel Project Settings.
4. Configure OAuth callback URLs for the deployed domain.
5. Deploy and test the home, category, product, sign-in, sign-up, and profile routes.
6. Reload dynamic routes directly in the browser to verify that they do not return unexpected 404 errors.

## ✅ Pre-Submission Checklist

- [ ] Test the layout on mobile, tablet, and desktop.
- [ ] Verify the primary API and, if needed, the alternative API.
- [ ] Confirm category filtering and product detail data.
- [ ] Confirm sorting compares numeric prices correctly, including Bengali-formatted display values.
- [ ] Test skeleton loaders, empty states, and unknown routes.
- [ ] Test email/password authentication and configured social login providers.
- [ ] Test protected-route redirects and toast notifications.
- [ ] Test profile name updates.
- [ ] Run `npm run build` successfully.
- [ ] Deploy the application and test direct page reloads.
- [ ] Make at least **8 meaningful Git commits** with clear messages.
- [ ] Replace all placeholder URLs and add screenshots.
- [ ] Verify the README matches the features actually implemented.

### Suggested meaningful commit messages

```text
chore: initialize Next.js project
feat: build responsive navbar and category navigation
feat: add product price ticker and hero section
feat: display rising and falling product prices
feat: implement product listing and numeric sorting
feat: add category and product detail pages
feat: integrate Better Auth and social login
feat: add profile update functionality
fix: handle loading, empty, and not-found states
docs: improve BazarDor README
```

## 🛣️ Future Improvements

- Search products by Bengali name.
- Filter products by market and price range.
- Display historical price trends with charts.
- Add a favorites or watchlist feature.
- Improve accessibility and automated testing.

## 🤝 Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes with a clear message.
4. Push the branch and open a Pull Request.

## 📄 License

No license has been specified in this repository yet. Add a `LICENSE` file and update this section if you decide to publish the project under an open-source license.

---

<div align="center">

### 💚 বাজারদর জানুন, সচেতন সিদ্ধান্ত নিন।

Made with ❤️ for Bengali-speaking users.

</div>
