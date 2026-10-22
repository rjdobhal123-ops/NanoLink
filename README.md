# 🔗 NanoLink — URL Shortener

**NanoLink** is a URL shortener web application built with Next.js and MongoDB. It allows users to convert long URLs into short, easy-to-share links using custom short URLs.

The application stores shortened URLs in MongoDB and redirects users to the original destination when they visit a generated short link.

## 🚀 Features

* **Shorten Long URLs:** Convert long URLs into short, shareable links.
* **Custom Short URLs:** Choose a custom alias for your shortened link.
* **Instant Redirection:** Automatically redirect users to the original URL when they visit a short link.
* **Duplicate URL Handling:** Prevent duplicate short aliases from being stored.
* **MongoDB Integration:** Store and retrieve URL mappings from a MongoDB database.
* **Input Handling:** Manage form inputs and provide feedback for URL generation.
* **Responsive UI:** A clean interface designed to work across different screen sizes.
* **Error Handling:** Handle duplicate aliases and unavailable short links.
* **Production Deployment:** Deployable on Vercel.

## 🛠️ Tech Stack

| Technology     | Purpose                                       |
| -------------- | --------------------------------------------- |
| Next.js        | React framework and application routing       |
| React.js       | Building interactive UI components            |
| Tailwind CSS   | Styling and responsive design                 |
| MongoDB        | Storing original URLs and their short aliases |
| Node.js        | JavaScript runtime                            |
| React Toastify | Displaying notifications                      |
| Vercel         | Application deployment                        |

## 📸 How It Works

1. Open the NanoLink application.
2. Enter the original URL you want to shorten.
3. Enter a custom short alias.
4. Generate your shortened URL.
5. Share the generated link with others.
6. When someone opens the short link, NanoLink redirects them to the original destination.

### Example

**Original URL:**

```text
https://example.com/products/technology/web-development
```

**Custom alias:**

```text
webdev
```

**Generated short link:**

```text
https://your-domain.vercel.app/webdev
```

When someone visits the generated short link, they are redirected to the original URL.

## 📂 Project Structure

The project follows the Next.js App Router structure.

```text
NanoLink/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js
│   ├── [shorturl]/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── lib/
│   └── mongodb.js
├── public/
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

*Note: Your actual folder structure may differ depending on how you organized your components and MongoDB connection file.*

## ⚙️ Installation and Setup

Follow these steps to run NanoLink locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/NanoLink.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Navigate to the Project Directory

```bash
cd NanoLink
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project's root directory.

Add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.

**Important:** Never upload your `.env.local` file or expose your MongoDB credentials on GitHub.

### 5. Configure MongoDB

Ensure that your MongoDB database is accessible through the connection string.

NanoLink uses the following database structure:

* **Database:** `NanoLink`
* **Collection:** `urls`

A URL record contains the original URL and its associated short alias.

Example document:

```json
{
  "url": "https://example.com/products/web-development",
  "shorturl": "webdev"
}
```

### 6. Start the Development Server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://localhost:3000
```

Your NanoLink application should now be running locally.

## 🔌 Application Routes

| Route           | Method | Description                                                         |
| --------------- | ------ | ------------------------------------------------------------------- |
| `/`             | GET    | Displays the main URL-shortening interface                          |
| `/api/generate` | POST   | Generates and stores a shortened URL                                |
| `/<shorturl>`   | GET    | Redirects users to the original URL associated with the short alias |

### Example API Request

**Endpoint:**

```text
POST /api/generate
```

**Request body:**

```json
{
  "url": "https://example.com",
  "shorturl": "example"
}
```

The API processes the request, checks whether the short alias already exists, and stores the URL mapping if the alias is available.

*The response format and validation behavior depend on the API implementation.*

## 🗄️ Database Design

NanoLink uses MongoDB to store shortened URL mappings.

Each document in the `urls` collection contains:

| Field      | Description                                 |
| ---------- | ------------------------------------------- |
| `url`      | The original destination URL                |
| `shorturl` | The custom alias used in the shortened link |

A unique index on the `shorturl` field can be used to prevent multiple records from having the same alias.

## 🌐 Deployment

NanoLink can be deployed using Vercel.

### Deployment Steps

1. Push your project to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Import your NanoLink repository.
4. Add the `MONGODB_URI` environment variable in the project's Vercel settings.
5. Deploy the application.
6. Open the generated deployment URL and test URL generation and redirection.

**Important:** Configure your MongoDB network access and database permissions appropriately so the deployed application can connect securely.

## 🔒 Security Considerations

* Keep database credentials in environment variables.
* Never commit `.env.local` to GitHub.
* Validate URLs before saving them.
* Restrict accepted destination URLs to appropriate protocols, such as `https://` and `http://`.
* Use a unique database index for short aliases.
* Configure MongoDB access permissions securely.

## 🔮 Future Improvements

Possible enhancements for NanoLink include:

* QR code generation for shortened URLs.
* Click analytics and visit statistics.
* Expiration dates for shortened links.
* User authentication and personal link management.
* Random short-link generation.
* Copy-to-clipboard functionality.
* A dashboard for managing previously created links.

## 👨‍💻 Author

**Rajat Dobhal**

B.Tech Computer Science and Engineering Student

GitHub: [YOUR_GITHUB_PROFILE](https://github.com/YOUR_USERNAME)

## 📄 License

This project is available for educational and personal use. Add a license file to the repository if you want to specify formal permissions for reuse and distribution.
