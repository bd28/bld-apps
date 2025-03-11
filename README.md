# BLD Apps Website

A modern, responsive website for BLD Apps, a software development company specializing in custom web and mobile applications.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS and shadcn/ui components
- Server-side rendering with Next.js
- Contact form with email functionality
- SEO optimization

## Tech Stack

- **Next.js** - React framework for server-side rendering
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **shadcn/ui** - Component library
- **React Hook Form** - For form handling
- **Zod** - For form validation
- **Resend** - For email functionality

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bld-apps.git
   cd bld-apps
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
   You can get a Resend API key by signing up at [resend.com](https://resend.com).

4. Download placeholder images for the projects:
   ```bash
   chmod +x scripts/download-images.sh
   ./scripts/download-images.sh
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `src/app` - Next.js App Router pages
- `src/components` - Reusable components
  - `ui` - shadcn/ui components
  - `layout` - Layout components (Navbar, Footer)
  - `sections` - Page sections (Hero, Services, CTA)
- `src/lib` - Utility functions
- `public` - Static assets

## Troubleshooting

If you encounter any issues when running the development server:

1. **Module not found errors**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Image loading issues**:
   Make sure you've run the `scripts/download-images.sh` script to download placeholder images.

3. **Contact form not working**:
   Ensure you have a valid Resend API key in your `.env.local` file.

## Deployment

The website can be deployed to Vercel with the following steps:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact:

- Email: info@bldapps.com
- Phone: (832) 590-0729
