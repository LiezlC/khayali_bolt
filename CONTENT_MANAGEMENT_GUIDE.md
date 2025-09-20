# Content Management Guide: ELI5(0)YLIP Style

*Explain Like I'm 5 (or 50) Years Old, Like I'm a Person*

## What This Guide Does

This guide explains **exactly** how to add, edit, and manage content on your portfolio website. No technical jargon, no assumptions about what you know, just clear step-by-step instructions.

## The Big Picture: How Your Website Works

Think of your website like a **digital filing cabinet** with different drawers:
- **Writing Drawer**: Stories, articles, poems, thoughts
- **Visual Drawer**: Pictures, charts, interactive displays  
- **Multimedia Drawer**: Videos, audio files, animations
- **Educational Drawer**: Teaching materials and explainers
- **About Drawer**: Information about you

Each drawer contains **index cards** (your content items) with information about what's inside.

## Where Your Content Lives

### The Simple Truth
Your content information is stored in **lists** inside your website files. These lists are like **digital index cards** that tell the website:
- What content you have
- Where to find it
- How to display it
- What category it belongs to

### The Files You'll Edit
You'll mainly work with these 5 files (think of them as your "index card boxes"):

1. `src/pages/WritingPage.tsx` - For writing content
2. `src/pages/VisualPage.tsx` - For visual/interactive projects  
3. `src/pages/MultimediaPage.tsx` - For videos and audio
4. `src/pages/EducationalPage.tsx` - For teaching materials
5. `src/pages/HomePage.tsx` - For homepage highlights

## How to Add New Content

### Step 1: Choose Your Content Type
Decide which "drawer" your new content belongs in:
- **Writing**: Articles, stories, poems, thoughts
- **Visual**: Charts, infographics, interactive displays
- **Multimedia**: Videos, audio, animations
- **Educational**: Tutorials, explainers, how-to guides

### Step 2: Prepare Your Content File
1. **Create your actual content** (write your article, make your video, etc.)
2. **Save it in the right place**:
   - Writing: Save as `.md` files in `public/content/writing/`
   - Visual projects: Save in `public/projects/`
   - Multimedia: Save in `public/media/`
   - Educational: Save in `public/educational/`

### Step 3: Add Your Content to the Index
This is where you tell the website about your new content.

#### For Writing Content:
1. Open `src/pages/WritingPage.tsx`
2. Find the section that starts with `const writings = [`
3. Add your new content like this:

```javascript
{
  id: 999, // Use the next available number
  title: "Your Article Title",
  excerpt: "A brief description of what this is about...",
  category: "Articles", // Choose: "AI Experiments", "Hounds & Horse Stories", "Poetry", "Articles", "Musings", "ESG & Sustainability"
  date: "2025-01-06", // Today's date in YYYY-MM-DD format
  readTime: "5 min", // How long it takes to read
  tags: ["tag1", "tag2", "tag3"], // Relevant keywords
  type: "article", // Choose: "markdown", "story", "poetry", "article", "musing"
  filename: "your-file-name.md" // The actual file name you saved
},
```

#### For Visual Projects:
1. Open `src/pages/VisualPage.tsx`
2. Find `const visuals = [`
3. Add your project:

```javascript
{
  id: 999,
  title: "Your Project Title",
  description: "What this project shows or does...",
  type: "Interactive", // Choose: "Interactive", "Infographic", "Diagram", "Data Story"
  thumbnail: "https://images.pexels.com/photos/XXXXXX/image.jpeg", // Preview image URL
  date: "2025-01-06",
  technologies: ["HTML", "CSS", "JavaScript"], // What you used to make it
  url: "/projects/your-project-folder",
  featured: false // Set to true if you want it highlighted
},
```

#### For Multimedia Content:
1. Open `src/pages/MultimediaPage.tsx`
2. Find `const multimedia = [`
3. Add your content:

```javascript
{
  id: 999,
  title: "Your Video/Audio Title",
  description: "What this content is about...",
  category: "Hounds & Horse Life", // Choose: "Hounds & Horse Life", "Audio/Podcast", "Voiceover", "Educational", "ESG & Professional"
  type: "Short Video", // Describe the format
  thumbnail: "https://images.pexels.com/photos/XXXXXX/image.jpeg",
  duration: "3:21", // Length in MM:SS format
  date: "2025-01-06",
  url: "/media/your-file-name.mp4",
  featured: false
},
```

#### For Educational Content:
1. Open `src/pages/EducationalPage.tsx`
2. Find `const educational = [`
3. Add your guide:

```javascript
{
  id: 999,
  title: "Your Educational Title",
  description: "What you're teaching and why it's useful...",
  category: "AI Basics", // Choose: "AI Basics", "Animal Care", "Finance", "Data Literacy", "Agriculture"
  format: "Interactive Guide", // How you're presenting it
  difficulty: "Beginner", // Choose: "Beginner", "Intermediate", "Advanced"
  readTime: "8 min",
  date: "2025-01-06",
  tags: ["tag1", "tag2"],
  url: "/educational/your-guide-name",
  featured: false
},
```

### Step 4: Save and Check
1. **Save the file** you just edited
2. **Refresh your website** to see the changes
3. **Check that everything looks right**

## How to Edit Existing Content

### To Change Content Information:
1. Find the content in the appropriate file (WritingPage.tsx, VisualPage.tsx, etc.)
2. Look for the item with the title you want to change
3. Edit the information between the quotes
4. Save the file

### To Update the Actual Content:
1. Find your content file (in public/content/, public/projects/, etc.)
2. Edit the file directly
3. Save it
4. The changes appear immediately on your website

## How to Remove Content

### Option 1: Hide It (Recommended)
Add `hidden: true` to the content item. It won't show on the website but you keep the information.

### Option 2: Delete It Completely
1. Remove the entire content block from the list
2. Delete the actual content file from your public folder
3. Save the changes

## Understanding Categories and Tags

### Categories
Think of categories as **big folders**. Each piece of content belongs to one category:
- **Writing**: "AI Experiments", "Hounds & Horse Stories", "Poetry", "Articles", "Musings", "ESG & Sustainability"
- **Visual**: "Interactive", "Infographic", "Diagram", "Data Story"
- **Multimedia**: "Hounds & Horse Life", "Audio/Podcast", "Voiceover", "Educational", "ESG & Professional"
- **Educational**: "AI Basics", "Animal Care", "Finance", "Data Literacy", "Agriculture"

### Tags
Tags are like **sticky notes** - you can put multiple tags on one piece of content to help people find it. Use words that describe what the content is about.

## Getting Images for Your Content

### For Thumbnails and Preview Images:
1. **Use Pexels** (free stock photos): Go to pexels.com
2. **Search** for images related to your content
3. **Copy the image URL** (right-click → "Copy image address")
4. **Paste the URL** in the thumbnail field

### For Your Own Images:
1. **Save your image** in the appropriate public folder
2. **Use the path** like `/images/your-image.jpg` in the thumbnail field

## Making Content "Featured"

Set `featured: true` on any content item to make it appear in the special "Featured" sections on each page. Use this for your best or most recent work.

## Common Mistakes to Avoid

1. **Forgetting commas**: Each content item needs a comma after the closing `}`
2. **Wrong quotes**: Use regular quotes `"` not smart quotes `""`
3. **Missing IDs**: Each item needs a unique ID number
4. **Wrong file paths**: Make sure your URLs match where you actually saved files
5. **Broken image links**: Test your thumbnail URLs to make sure they work

## Getting Help

### If Something Breaks:
1. **Check for typos** in the file you just edited
2. **Look for missing commas** or quotes
3. **Undo your last change** and try again
4. **Copy the error message** if you see one

### If You're Stuck:
1. **Look at existing examples** in the same file
2. **Copy the format** of something that works
3. **Make small changes** one at a time
4. **Test after each change**

## Quick Reference: File Locations

```
Your Website Structure:
├── src/pages/           ← Edit these to add content to lists
│   ├── WritingPage.tsx
│   ├── VisualPage.tsx
│   ├── MultimediaPage.tsx
│   ├── EducationalPage.tsx
│   └── HomePage.tsx
└── public/              ← Put your actual content files here
    ├── content/writing/ ← .md files for articles, stories
    ├── projects/        ← HTML files, interactive displays
    ├── media/          ← Videos, audio files
    └── educational/    ← Tutorial files, guides
```

## Remember: You've Got This!

This system is designed to be **simple and forgiving**. You can't really break anything permanently, and every change you make is immediately visible. Start with small edits, get comfortable with the process, then add bigger content as you go.

The most important thing: **your content is what matters**. The website is just a way to show it off beautifully.