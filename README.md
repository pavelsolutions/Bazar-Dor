
<div align="center">

# 🛒 বাজার দর | BazarDor

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজেই।

BazarDor is a responsive Bengali-language web application that helps users explore everyday product prices, browse categories, compare market-wise prices, and manage their accounts through a simple and user-friendly interface.

[🌐 Live Demo](YOUR_LIVE_URL) · [💻 GitHub Repository](YOUR_GITHUB_REPOSITORY_URL)

</div>

---

## 📖 About the Project

**বাজার দর (BazarDor)** is designed to make everyday market-price information easier to access for Bengali-speaking users.

Users can explore essential products, browse different categories, view price changes, compare prices across markets, and manage their profiles through a responsive interface.

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

> Keep the features listed here aligned with what you have actually implemented.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| Next.js App Router | Application structure and routing |
| React | UI components |
| TypeScript | Type-safe development |
| Tailwind CSS | Responsive styling |
| HeroUI | UI components |
| Better Auth | Authentication and session management |
| MongoDB | Authentication database |
| Vercel CLI | Deployment from the terminal |
| Vercel | Hosting and deployment |

## 🔌 API Documentation

### Base URLs

**Primary API**

```text
https://api.api-store.workers.dev/api/bazardor
```

**Alternative API**

```text
https://api.abcz.workers.dev/api/bazardor
```

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products?category=chal` | Filter products by category |
| GET | `/products/1` | Get a single product |
| GET | `/categories` | Get all categories |
| GET | `/categories/chal` | Get a single category |

### Example API Request

```typescript
const API_BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

export async function getProducts() {
  const response = await fetch(
    `${API_BASE_URL}/products`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
```

## 🖼️ Screenshots

Add screenshots of your application to showcase the interface.

Create a `screenshots` folder in your repository and add your screenshots.

```markdown
![Home Page](./screenshots/home.png)
![Category Page](./screenshots/category.png)
![Product Details](./screenshots/product-details.png)
![Profile Page](./screenshots/profile.png)
```

## 🚀 Getting Started

### Prerequisites

- Node.js version supported by your Next.js version
- npm
- MongoDB database for authentication
- OAuth credentials if Google or GitHub login is enabled

### 1. Clone the Repository

Replace the placeholders with your actual GitHub repository details.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
BETTER_AUTH_MD_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Add these only if used in your authentication configuration.
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Use the exact environment variable names configured in your application. Add only the variables you need. Never commit `.env.local` or expose credentials publicly.

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

You can deploy BazarDor directly from your terminal using the Vercel CLI.

### 1. Install Vercel CLI

Install Vercel CLI globally using npm:

```bash
npm install --global vercel
```

Verify the installation:

```bash
vercel --version
```

Alternatively, use Vercel CLI without a global installation:

```bash
npx vercel --version
```

### 2. Log In to Vercel

```bash
vercel login
```

Follow the instructions in your terminal to log in to your Vercel account.

### 3. Link Your Project

Run this command from your project root directory:

```bash
vercel link
```

Follow the prompts to link your local project to a Vercel project. You can create a new project if needed.

### 4. Configure Environment Variables

Open:

**Vercel Dashboard → Project → Settings → Environment Variables**

Add the environment variables required by your application, including your MongoDB connection string and Better Auth configuration.

If Google or GitHub authentication is enabled, configure the corresponding OAuth credentials as well.

To view configured environment variables:

```bash
vercel env ls
```

To pull environment variables into your local `.env.local` file:

```bash
vercel env pull .env.local
```

> Never commit `.env.local` or expose database credentials, OAuth secrets, or other private environment variables.

### 5. Deploy a Preview

```bash
vercel
```

Vercel will build and deploy a preview version of your application. Open the generated URL and test the website.

### 6. Deploy to Production

First, verify that the production build succeeds:

```bash
npm run build
```

Then deploy the application to production:

```bash
vercel --prod
```

### 7. Verify the Deployment

After deployment, check the following:

- Home page and product data load correctly.
- Category filtering and product sorting work.
- Product detail pages work after directly refreshing the browser.
- Sign-in, sign-up, and configured social login work.
- Protected routes require authentication.
- Profile updates work.
- The layout works on mobile, tablet, and desktop.
- Unknown routes display a friendly 404 page.

For OAuth login, make sure the callback URLs are configured for your deployed domain.

For GitHub, the callback URL commonly follows this format:

```text
https://YOUR_DOMAIN/api/auth/callback/github
```

Use the callback URL required by your Better Auth configuration.

---

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Home page with price trends and products |
| `/category/[slug]` | Products filtered by category |
| `/product/[slug]` | Product details and market prices |
| `/signin` | Sign-in page |
| `/signup` | Registration page |
| `/profile` | User profile |
| `/profile/update` | Update profile information |

> Update these paths if your application uses different route names.

## 📱 Responsive Design

BazarDor aims to provide a consistent experience across different screen sizes.

- **Mobile:** Compact product cards and usable navigation.
- **Tablet:** Flexible product grids and layouts.
- **Desktop:** Multi-column product grids and wider content areas.
- **All devices:** Readable Bengali text and usable controls.

## 🔐 Authentication and Security

- Email and password authentication through Better Auth.
- Google and GitHub login when configured.
- Toast feedback for login, registration, logout, and validation.
- Protected product details for authenticated users.
- Secure handling of environment variables.
- Server-side session verification for protected resources.

Keep database credentials, OAuth secrets, and `.env.local` private.

## 🛣️ Future Improvements

- Search products by Bengali name.
- Filter products by market and price range.
- Display historical price trends with charts.
- Add a favorites or watchlist feature.
- Improve accessibility and automated testing.

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you decide to publish the project under an open-source license.

---

<div align="center">

### 💚 বাজারদর জানুন, সচেতন সিদ্ধান্ত নিন।

Made with ❤️ for Bengali-speaking users.

</div>
