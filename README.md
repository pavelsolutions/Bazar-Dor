<div align="center">

# 🛒 বাজার দর | BazarDor

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজেই।

A responsive Bengali-language web application to explore everyday product prices, browse categories, compare market-wise prices, and manage user accounts through a simple interface.

[🌐 Live Demo](https://bazar-dor-asjs.vercel.app/) · [💻 GitHub Repository](https://github.com/pavelsolutions/Bazar-Dor)

</div>

---

## 📖 About the Project

**বাজার দর (BazarDor)** is designed to make everyday market-price information easier to access for Bengali-speaking users.

Users can explore essential products, browse categories, view price changes, compare prices across markets, and manage their profiles through a responsive interface.

## ✨ Key Features

- 📈 **Daily Price Trends** — Explore products with increasing and decreasing prices.
- 🗂️ **Category-Based Browsing** — Browse products by category.
- ↕️ **Product Sorting** — Sort products by default order, lowest price, or highest price.
- 🛍️ **Product Details** — View product information, units, price summaries, and market-wise prices.
- 🔐 **Authentication** — Register and sign in with email and password, plus Google and GitHub login when configured.
- 👤 **Profile Management** — View account information and update your name.
- 📱 **Responsive Design** — Designed for mobile, tablet, and desktop screens.
- ⏳ **Loading and Empty States** — Display skeleton loaders and helpful messages when data is unavailable.
- 🔔 **Toast Notifications** — Show feedback for authentication, validation, and profile updates.
- 🧭 **Custom Error Pages** — Provide a friendly message and a link back home for unknown routes.

> Keep this feature list aligned with what is actually implemented in the application.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js App Router](https://nextjs.org/) | Application structure and routing |
| [React](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling |
| [HeroUI](https://www.heroui.com/) | UI components and toast notifications |
| [Better Auth](https://www.better-auth.com/) | Authentication and session management |
| MongoDB | Authentication database, if configured |
| [Vercel](https://vercel.com/) | Hosting and deployment |
| Git & GitHub | Version control and collaboration |

## 🖼️ Project Preview

<div align="center">
  <img
    width="49%"
    alt="BazarDor home page"
    src="https://github.com/user-attachments/assets/b66ac65d-122e-45e6-a264-885e6d7df39f"
  />
</div>

---

## 🔌 API Documentation

### Base URLs

| API | Base URL |
|---|---|
| Main API | `https://openapi.programming-hero.com/api/bazardor` |
| Primary API | `https://api.api-store.workers.dev/api/bazardor` |
| Alternative API | `https://api.abcz.workers.dev/api/bazardor` |

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/products` | Get all products |
| `GET` | `/products?category=chal` | Filter products by category |
| `GET` | `/products/1` | Get a single product |
| `GET` | `/categories` | Get all categories |
| `GET` | `/categories/chal` | Get a single category |

### Example API Request

```typescript
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

> Confirm the active API base URL and endpoint behavior against the API used by your application.

---

## 🚀 Getting Started

### Prerequisites

- Node.js version compatible with the Next.js version in this project
- npm
- Access to the configured database, if required
- OAuth credentials if Google or GitHub sign-in is enabled

### 1. Clone the Repository

```bash
git clone https://github.com/pavelsolutions/Bazar-Dor.git
cd Bazar-Dor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the variables required by your application's configuration.

Example placeholders only:

```env
BETTER_AUTH_SECRET="your_generated_auth_secret"
BETTER_AUTH_URL="http://localhost:3000"
DATABASE_URL="your_database_connection_string"

GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
```

> **Security:** These are placeholders, not real credentials. Use the exact environment variable names required by your project. Never commit `.env.local`, database credentials, OAuth secrets, or other private values to GitHub.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 🚢 Deploy with Vercel CLI

### 1. Install Vercel CLI

```bash
npm install --global vercel
```

Or run it without a global installation:

```bash
npx vercel --version
```

### 2. Log In to Vercel

```bash
vercel login
```

### 3. Link Your Project

```bash
vercel link
```

Follow the prompts to link the local project to a Vercel project, or create a new one.

### 4. Configure Environment Variables

In the Vercel dashboard, open:

**Project → Settings → Environment Variables**

Add the variables required by your application, including database and Better Auth configuration. Add Google and GitHub OAuth credentials if those providers are enabled.

```bash
vercel env ls
vercel env pull .env.local
```

Never commit the generated `.env.local` file.

### 5. Deploy a Preview

```bash
vercel
```

### 6. Deploy to Production

```bash
npm run build
vercel --prod
```

### 7. Verify the Deployment

- [ ] Home page and product data load correctly.
- [ ] Category filtering and product sorting work.
- [ ] Product detail pages work after directly refreshing the browser.
- [ ] Sign-in and sign-up work.
- [ ] Google and GitHub sign-in work if configured.
- [ ] Protected routes require authentication.
- [ ] Profile updates work.
- [ ] The layout works on mobile, tablet, and desktop.
- [ ] Unknown routes display a friendly 404 page.

For OAuth, configure callback URLs for the deployed domain according to your Better Auth setup. A GitHub callback commonly follows this format:

```text
https://YOUR_DOMAIN/api/auth/callback/github
```

Use the exact callback URL required by your authentication configuration.

---

## 🗺️ Application Routes

The routes below are examples based on the described application. Update them to match your actual route structure.

| Route | Description |
|---|---|
| `/` | Home page with price trends and products |
| `/category/[slug]` | Products filtered by category |
| `/product/[slug]` | Product details and market prices |
| `/sign-in` | Sign-in page |
| `/sign-up` | Registration page |
| `/profile` | User profile |
| `/profile/update` | Update profile information |

## 📱 Responsive Design

- **Mobile:** Compact product cards and usable navigation.
- **Tablet:** Flexible product grids and layouts.
- **Desktop:** Multi-column product grids and wider content areas.
- **All devices:** Readable Bengali text and accessible controls.

## 🔐 Authentication and Security

- Email/password authentication through Better Auth.
- Google and GitHub login when configured.
- Toast feedback for login, registration, logout, and validation.
- Protected routes and server-side session verification for protected resources.
- Secure handling of environment variables.

**Never publish real OAuth secrets, database credentials, API keys, or `.env.local` contents.** If a credential was accidentally committed or exposed, rotate it with the provider and remove it from Git history as needed.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push the branch and open a pull request.

## 📄 License

No license has been specified yet. Add a `LICENSE` file and update this section before distributing the project under an open-source license.

---

<div align="center">

### 💚 বাজারদর জানুন, সচেতন সিদ্ধান্ত নিন।

Made with ❤️ for Bengali-speaking users.

</div>
