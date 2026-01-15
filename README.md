# Manus AI

A modern Next.js application with a clean deployment strategy using Vercel, featuring separate staging and production environments.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## Project Structure

```
manus-ai/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles with Tailwind
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables (git-ignored)
├── vercel.json             # Vercel deployment configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Vercel account (for deployment)
- GitHub account

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:zedaan/ManusAI.git
   cd "Manus AI"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your local configuration.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment Strategy

This project uses a multi-environment deployment strategy with Vercel:

### Branch Strategy

| Branch | Environment | Vercel Deployment | Purpose |
|--------|-------------|-------------------|---------|
| `main` | Production | Automatic | Live production site |
| `staging` | Staging | Automatic | Pre-production testing |
| Feature branches | Preview | Automatic (PR) | Development and testing |

### Environment Configuration

#### Local Development
- Uses `.env.local` file
- `NEXT_PUBLIC_APP_ENV=development`

#### Staging Environment
- Deployed from `staging` branch
- Configure in Vercel Dashboard:
  - `NEXT_PUBLIC_APP_ENV=staging`
  - Add staging-specific API URLs and keys

#### Production Environment
- Deployed from `main` branch
- Configure in Vercel Dashboard:
  - `NEXT_PUBLIC_APP_ENV=production`
  - Add production API URLs and keys

### Deployment Workflow

#### 1. Feature Development
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature-name

# Create a Pull Request to 'staging' branch
```
A preview deployment will be created automatically for your PR.

#### 2. Staging Deployment
```bash
# Merge PR to staging branch
# Vercel will automatically deploy to staging environment

# Or push directly to staging (if working on staging)
git checkout staging
git merge feature/your-feature-name
git push origin staging
```

#### 3. Production Deployment
```bash
# After testing on staging, merge to main
git checkout main
git merge staging
git push origin main
```

## Vercel Setup Instructions

### Initial Setup

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `zedaan/ManusAI`
   - Vercel will auto-detect Next.js settings

3. **Configure Production:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)

4. **Set up Environment Variables:**
   - Go to Project Settings > Environment Variables
   - Add variables for each environment (Production, Preview, Development)

### Environment Variables Setup in Vercel

For each variable in `.env.example`, add them in Vercel Dashboard:

**Production Environment:**
```
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_API_URL=https://api.production.example.com
```

**Preview/Staging Environment:**
```
NEXT_PUBLIC_APP_ENV=staging
NEXT_PUBLIC_API_URL=https://api.staging.example.com
```

### Branch Configuration

1. Go to Project Settings > Git
2. **Production Branch:** Set to `main`
3. Enable automatic deployments for `staging` branch:
   - The `staging` branch will deploy to a staging URL
   - Each PR will get a unique preview URL

### Custom Domains (Optional)

**Production:**
- Add your production domain in Project Settings > Domains
- Example: `manusai.com`

**Staging:**
- Add a staging subdomain
- Example: `staging.manusai.com`

## Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Workflow Best Practices

### 1. Development Flow
- Always create feature branches from `staging`
- Use descriptive branch names: `feature/`, `fix/`, `chore/`
- Keep commits atomic and well-described

### 2. Testing Flow
- Test locally first
- Create PR to `staging`
- Review preview deployment
- Merge to `staging` for team testing
- Only merge to `main` after thorough testing

### 3. Hotfix Flow
For urgent production fixes:
```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/critical-bug

# Fix and test
git add .
git commit -m "Fix: critical bug description"

# Merge to main
git checkout main
git merge hotfix/critical-bug
git push origin main

# Also merge back to staging
git checkout staging
git merge hotfix/critical-bug
git push origin staging
```

## Preview Deployments

Every Pull Request automatically gets a unique preview URL:
- View deployments in the PR comments
- Test features before merging
- Share with team members for review

## Monitoring & Debugging

### Vercel Dashboard
- View deployment logs
- Monitor performance analytics
- Check build errors

### Environment Verification
The landing page displays the current environment at the bottom.
Verify you're on the correct environment by checking this badge.

## Troubleshooting

### Build Failures
1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Test build locally: `npm run build`

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable scope (Production/Preview/Development)

### Branch Not Deploying
- Verify branch is pushed to GitHub
- Check Vercel Git settings
- Ensure deployment is enabled for the branch

## Contributing

1. Fork the repository
2. Create your feature branch from `staging`
3. Commit your changes
4. Push to your fork
5. Create a Pull Request to `staging`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

Private - Manus AI

## Support

For issues or questions, please create an issue in the GitHub repository.
