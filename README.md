
# Qtec Job Board Frontend

GitHub Repository: [https://github.com/DarkAsfu/qtec-job-task](https://github.com/DarkAsfu/qtec-job-task)

---

## Installation & Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarkAsfu/qtec-job-task.git
   cd qtec-job-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the `qtec-job-task` directory with:
     ```
     NEXT_PUBLIC_API_URL=https://qtec-job-task-server.vercel.app
     NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
     ```
   - Replace `your_imgbb_api_key` with your actual imgbb API key for logo uploads.
   - Make sure your backend is running at the specified API URL.


4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui (for UI components)
- Lucide Icons
- imgbb API (for image uploads)

---

## Environment Variables

- `NEXT_PUBLIC_API_URL` — The base URL for the backend API (default: https://qtec-job-task-server.vercel.app)
- `NEXT_PUBLIC_IMGBB_API_KEY` — Your imgbb API key for uploading company logos

---

## Project Structure

- `app/` — Main Next.js app directory (pages, components, dashboard, etc.)
- `components/` — Shared UI components
- `hooks/`, `lib/`, `public/` — Utilities, static assets

---

## Features

- Modern, responsive job board interface
- Powerful search and filtering for jobs
- Detailed job pages and easy application process
- Secure admin dashboard for job and application management
- Company logo uploads via imgbb integration


