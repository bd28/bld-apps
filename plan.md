# BLD Apps Website Plan

## Website Structure

### Pages
- [x] **Home** (`/`) - Main landing page with hero section, services overview, and featured projects
- [x] **About** (`/about`) - Information about BLD Apps, your skills, and experience
- [x] **Projects** (`/projects`) - Showcase of your software development projects
- [x] **Services** (`/services`) - Details about the services you offer
- [x] **Contact** (`/contact`) - Contact form and information
- [x] **Privacy Policy** (`/privacy`) - Privacy policy page
- [x] **Terms of Service** (`/terms`) - Terms of service page

### Components
- [x] Navigation bar (responsive with mobile menu)
- [x] Footer with links and contact information
- [x] Hero section for the homepage
- [x] Project cards/grid for displaying projects
- [x] Contact form with validation
- [x] Call-to-action sections

## Tech Stack

### Core Technologies
- [x] **Next.js** - React framework for server-side rendering and static site generation
- [x] **TypeScript** - For type safety and better developer experience
- [x] **Tailwind CSS** - For styling (utility-first CSS framework)
- [x] **shadcn/ui** - Component library built on Radix UI and Tailwind CSS
- [x] **React Hook Form** - For form handling and validation

### Additional Tools
- [ ] **Vercel** - For deployment and hosting
- [x] **Resend** - For email handling (using your API key)
- [x] **ESLint/Prettier** - For code quality and formatting
- [x] **React Icons** - For additional icons not covered by shadcn/ui
- [x] **Next SEO** - For SEO optimization

## Project Structure
```
bld-apps/
├── public/             # Static assets
│   ├── images/         # Image assets
│   ├── favicon.ico     # Favicon
│   └── ...
├── src/                # Source code
│   ├── app/            # Next.js App Router
│   │   ├── page.tsx    # Home page
│   │   ├── about/      # About page
│   │   ├── projects/   # Projects page
│   │   ├── services/   # Services page
│   │   ├── contact/    # Contact page
│   │   │   ├── page.tsx        # Contact page UI
│   │   │   └── actions.ts      # Server actions for form handling
│   │   ├── privacy/    # Privacy policy page
│   │   ├── terms/      # Terms page
│   │   ├── api/        # API routes
│   │   │   └── send/   # Email sending endpoint
│   │   └── layout.tsx  # Root layout
│   ├── components/     # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── layout/     # Layout components
│   │   └── sections/   # Page sections
│   ├── lib/            # Utility functions
│   │   └── email.ts    # Email sending functionality with Resend
│   ├── types/          # TypeScript types
│   └── styles/         # Global styles
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── components.json     # shadcn/ui configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Implementation Plan

### Phase 1: Project Setup
- [x] Initialize Next.js project with TypeScript
- [x] Set up Tailwind CSS
- [x] Install and configure shadcn/ui
- [x] Configure ESLint and Prettier
- [x] Create basic folder structure
- [x] Set up basic layout components (Navbar, Footer) with GitHub link to https://github.com/bd28

### Phase 2: Core Pages Development
- [x] Develop Home page with hero section and overview
- [x] Create About page with company information
- [x] Build Projects page with project showcase
- [x] Implement Services page
- [x] Develop Contact page with form using shadcn/ui components

### Phase 3: Email Functionality
- [x] Set up Resend with the provided API key
- [x] Implement server action for form submission
- [x] Configure form to send submissions to info@bldapps.com
- [x] Add form validation and success/error handling
  > _Note: Successfully implemented email functionality using Resend. Created both API routes and server actions for handling form submissions._

### Phase 4: Layout & Design Refinement
- [x] Fix centering issues on all pages
  > _Note: Updated container configuration in tailwind.config.ts and fixed layout issues in all section components._
- [x] Make header sticky and prevent content from being obscured
  > _Note: Made header fixed at the top with backdrop blur and added padding to main content._
- [x] Remove email address from contact page
  > _Note: Removed email address from contact page as requested to prevent spam._
- [x] Refine responsive design
- [x] Implement SEO optimization
- [ ] Add animations and transitions for better UX
  > _Note: Could add subtle animations for page transitions and hover effects._

### Phase 5: Legal Pages & Content
- [x] Create Privacy Policy page
- [x] Create Terms of Service page
- [ ] Review and update content for accuracy
  > _Note: Consider reviewing all page content for consistency and accuracy._

### Phase 6: Testing & Deployment
- [x] Test contact form functionality
  > _Note: Contact form is now working correctly with Resend._
- [ ] Test across different devices and browsers
  > _Note: Need to verify responsive design on various screen sizes._
- [ ] Optimize performance
  > _Note: Consider image optimization and code splitting for better performance._
- [ ] Deploy to Vercel
  > _Note: Need to set up Vercel deployment with environment variables._
- [ ] Set up custom domain (bldapps.com)
  > _Note: Will need to configure DNS settings for the domain._
- [ ] Final review and adjustments
  > _Note: Conduct a comprehensive review before final launch._

## Contact Form Implementation

The contact form:
- [x] Uses shadcn/ui components for a polished look
- [x] Includes fields for Name, Email, Subject, and Message
- [x] Validates inputs on the client side
- [x] Submits data via a server action
- [x] Uses Resend to send the form data to info@bldapps.com
- [x] Shows appropriate success/error messages to users
- [x] Does not display any email address on the page to avoid spam
  > _Note: Successfully implemented all contact form requirements. Form is fully functional and sends emails to info@bldapps.com._

## Social Links
- [x] GitHub: https://github.com/bd28 (included in the navigation and footer)
- [x] Phone: (832) 590-0729 (displayed on the contact page)
- [x] Address: 14450 John F Kennedy Blvd, Houston TX 77032 (displayed on the contact page)

## Security Considerations
- [x] The Resend API key is stored as an environment variable
- [x] Form submissions are validated on both client and server
- [ ] Implement rate limiting to prevent abuse
  > _Note: Consider adding rate limiting middleware to prevent form spam._
- [x] CSRF protection is enabled (built into Next.js)

## Design Considerations

### Color Scheme
- [x] Primary: #3B82F6 (Blue)
- [x] Secondary: #10B981 (Green)
- [x] Accent: #6366F1 (Indigo)
- [x] Background: #FFFFFF (White)
- [x] Text: #1F2937 (Dark Gray)

### Typography
- [x] Headings: Inter (sans-serif)
- [x] Body: Inter (sans-serif)

### UI Elements
- [x] Rounded corners for cards and buttons
- [x] Subtle shadows for depth
- [x] Clean, minimalist design with ample white space
- [x] Consistent padding and margins

## Next Steps

1. **Animations & Transitions**
   - Add subtle page transitions
   - Implement hover animations for interactive elements
   - Consider adding scroll animations for sections

2. **Performance Optimization**
   - Optimize images using Next.js Image component
   - Implement code splitting for better load times
   - Run Lighthouse audits and address any issues

3. **Deployment**
   - Set up Vercel project
   - Configure environment variables for Resend API key
   - Set up custom domain and SSL

4. **Additional Features to Consider**
   - Blog section for sharing insights and updates
   - Dark mode toggle (already implemented)
   - Newsletter subscription option
   - Integration with analytics tools 