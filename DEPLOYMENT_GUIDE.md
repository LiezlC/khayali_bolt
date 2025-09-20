# Getting Your Website Online: Deployment Guide

*Simple, step-by-step instructions for getting your portfolio live on khayali.xyz*

## The Big Picture

Right now, your website exists only on your computer. To make it visible to the world at khayali.xyz, you need to:
1. **Build** your website (create the final version)
2. **Upload** it to a hosting service
3. **Connect** your domain name to point to the hosted site

Since you mentioned your domain is already connected to Vercel, we'll use that - it's the easiest path.

## Option 1: Deploy with Vercel (Recommended)

Vercel is perfect for this type of website and you're already set up with them.

### Method A: Using GitHub (Most Reliable)

#### Step 1: Put Your Code on GitHub
1. **Go to GitHub.com** and sign in (or create account)
2. **Click "New repository"** (green button)
3. **Name it** something like "khayali-portfolio"
4. **Make it public** (unless you prefer private)
5. **Click "Create repository"**

#### Step 2: Upload Your Website Files
You have two options here:

**Option 2A: Drag and Drop (Easiest)**
1. **Download your website files** as a ZIP from wherever you're working on them
2. **Extract the ZIP** so you have a folder with all your files
3. **On your GitHub repository page**, click "uploading an existing file"
4. **Drag your entire project folder** into the upload area
5. **Write a commit message** like "Initial portfolio upload"
6. **Click "Commit changes"**

**Option 2B: GitHub Desktop (If you want to learn)**
1. **Download GitHub Desktop** from desktop.github.com
2. **Clone your repository** to your computer
3. **Copy your website files** into the cloned folder
4. **Commit and push** the changes

#### Step 3: Connect to Vercel
1. **Go to vercel.com** and sign in
2. **Click "New Project"**
3. **Import from GitHub** - select your repository
4. **Configure the project**:
   - Framework Preset: "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Click "Deploy"**

#### Step 4: Connect Your Domain
1. **In your Vercel dashboard**, go to your project
2. **Click "Settings"** then "Domains"
3. **Add your domain**: khayali.xyz
4. **Follow Vercel's instructions** to update your domain's DNS settings at Namecheap

### Method B: Direct Upload to Vercel

If you don't want to use GitHub:

#### Step 1: Build Your Website
1. **Open terminal/command prompt** in your website folder
2. **Run**: `npm run build`
3. **Wait for it to finish** - you'll see a "dist" folder created

#### Step 2: Upload to Vercel
1. **Install Vercel CLI**: `npm install -g vercel`
2. **In your website folder, run**: `vercel`
3. **Follow the prompts**:
   - Login to your Vercel account
   - Choose "Link to existing project" or create new
   - Confirm the settings
4. **Deploy**: `vercel --prod`

## Option 2: Other Hosting Services

### Netlify (Alternative to Vercel)
1. **Build your site**: `npm run build`
2. **Go to netlify.com** and sign up
3. **Drag the "dist" folder** to Netlify's deploy area
4. **Connect your domain** in Netlify's domain settings

### Traditional Web Hosting
If you have traditional web hosting:
1. **Build your site**: `npm run build`
2. **Upload the contents of the "dist" folder** to your web host
3. **Point your domain** to the hosting location

## Domain Configuration

Since your domain is at Namecheap but connected to Vercel:

### If Using Vercel:
1. **In Vercel**, add khayali.xyz as a custom domain
2. **Vercel will give you DNS settings**
3. **Go to Namecheap** → Domain List → Manage → Advanced DNS
4. **Update the DNS records** as Vercel instructs
5. **Wait 24-48 hours** for DNS to propagate

### DNS Records You'll Likely Need:
- **A Record**: @ → Vercel's IP address
- **CNAME Record**: www → your-project.vercel.app

## Testing Your Deployment

### Before Going Live:
1. **Test locally**: `npm run dev` - make sure everything works
2. **Build locally**: `npm run build` - make sure it builds without errors
3. **Preview build**: `npm run preview` - test the built version

### After Deployment:
1. **Visit your Vercel URL** (something like your-project.vercel.app)
2. **Check all pages work**
3. **Test on mobile** and desktop
4. **Verify your custom domain** works

## Updating Your Website

### With GitHub + Vercel (Automatic):
1. **Make changes** to your website files
2. **Commit and push** to GitHub
3. **Vercel automatically rebuilds** and deploys
4. **Changes appear** in 1-2 minutes

### With Direct Vercel Deploy:
1. **Make changes** to your website files
2. **Run**: `npm run build`
3. **Run**: `vercel --prod`
4. **Changes go live** immediately

## Troubleshooting Common Issues

### "Build Failed" Error:
- **Check for typos** in your code
- **Run `npm run build` locally** to see the error
- **Fix the error** and try again

### Domain Not Working:
- **Wait 24-48 hours** for DNS changes
- **Check DNS settings** are correct
- **Try incognito/private browsing** to avoid cache issues

### Images Not Loading:
- **Check file paths** are correct
- **Make sure images are in the public folder**
- **Use forward slashes** in paths: `/images/photo.jpg`

### Site Looks Broken:
- **Check the browser console** for errors (F12 → Console)
- **Verify all files uploaded** correctly
- **Test the build locally** first

## Costs

### Vercel:
- **Free tier**: Perfect for personal portfolios
- **Custom domains**: Free
- **Bandwidth**: Generous free allowance

### Domain:
- **You already own khayali.xyz**: No additional cost
- **DNS changes**: Free at Namecheap

## Security and Backups

### Automatic Backups:
- **GitHub**: Keeps all your code versions
- **Vercel**: Keeps deployment history
- **Your computer**: Keep local copies

### Security:
- **HTTPS**: Automatic with Vercel
- **No server**: Static sites are very secure
- **Regular updates**: Update dependencies occasionally

## Getting Help

### If You Get Stuck:
1. **Check Vercel's documentation**: vercel.com/docs
2. **Look at error messages** carefully
3. **Try the simplest approach** first
4. **Google the specific error** you're seeing

### Common Resources:
- **Vercel Support**: vercel.com/support
- **GitHub Help**: docs.github.com
- **Domain Help**: Namecheap support

## Quick Start Checklist

- [ ] Website works locally (`npm run dev`)
- [ ] Website builds successfully (`npm run build`)
- [ ] Code is on GitHub (if using GitHub method)
- [ ] Vercel project is created and deployed
- [ ] Custom domain is added in Vercel
- [ ] DNS settings updated at Namecheap
- [ ] Website is live and working at khayali.xyz

## Remember

- **Start simple**: Get the basic deployment working first
- **Test everything**: Before and after deployment
- **Be patient**: DNS changes take time
- **Keep backups**: Of your code and content
- **Document changes**: So you remember what you did

Your website is designed to be deployment-friendly, so this process should be straightforward. The hardest part is usually waiting for DNS changes to take effect!