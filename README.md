## Qtec Job Board Frontend

This is the Next.js frontend for the Qtec Job Board project. It provides a modern UI for job seekers and admins, including job listings, job details, application forms, and an admin dashboard for managing jobs and applications.

---

### How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the `frontend` directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
   ```
   - Replace `your_imgbb_api_key` with your actual imgbb API key for logo uploads.
   - Make sure your backend is running at the specified API URL.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Environment Variables

- `NEXT_PUBLIC_API_URL` — The base URL for the backend API (default: http://localhost:5000)
- `NEXT_PUBLIC_IMGBB_API_KEY` — Your imgbb API key for uploading company logos

---

### Project Structure

- `app/` — Main Next.js app directory (pages, components, dashboard, etc.)
- `components/` — Shared UI components
- `hooks/`, `lib/`, `public/` — Utilities, static assets

---

### Features

Key Features:

- Modern, responsive job board interface
- Powerful search and filtering for jobs
- Detailed job pages and easy application process
- Secure admin dashboard for job and application management
- Company logo uploads via imgbb integration

---

For backend setup and full-stack instructions, see the main [README.md](../README.md).
