# Vibe Instagram - Themable Profile Prototype

A modern Instagram profile clone featuring **themable profiles** - allowing users to switch between different visual aesthetics without archiving posts.

![Profile Preview](/.gemini/antigravity/brain/d3469423-6eb7-4a08-9dba-a72800a1702c/black_avatar_check_1763746344286.png)

## 🎨 Features

- **Themable Profiles**: Switch between different visual themes ("Hurry Up Tomorrow" and "Starboy")
- **Dynamic Photo Grid**: 3-column responsive grid that updates based on selected theme
- **Theme Selector**: Instagram-style chip with animated gradient border shimmer
- **Story Overlay**: Auto-closing story view explaining the prototype concept
- **Modern UI**: Clean, minimal design with smooth animations using Framer Motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to view the app.

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx           # Main layout wrapper
│   ├── ProfileHeader.jsx    # Profile info, stats, and theme chip
│   ├── ProfileTabs.jsx      # Visual-only tabs (Grid, Reels, Tagged)
│   ├── PhotoGrid.jsx        # 3-column photo grid with animations
│   ├── ThemeModal.jsx       # Theme selection modal
│   └── StoryOverlay.jsx     # Fullscreen story view
├── assets/
│   └── Photos/
│       └── Weeknd/
│           ├── Hurry Up Tomorrow/  # 9 images
│           └── Starboy/            # 9 images
├── data.js                  # Profile and theme data
├── App.jsx                  # Main app component
└── index.css                # Global styles + animations
```

## 🎯 Key Concepts

### Themable Profiles
This prototype explores a feature concept where Instagram users (particularly brands and artists) can create multiple "themes" for their profile. Each theme contains:
- A unique set of photos
- A custom label (e.g., "Hurry Up Tomorrow", "Starboy")
- Seamless switching without archiving content

### Current Profile
- **Name**: Abel
- **Username**: @theweeknd
- **Bio**: [theweeknd.com/tour](https://theweeknd.com/tour)
- **Themes**: 2 (Hurry Up Tomorrow, Starboy)
- **Total Posts**: 18 images

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎨 Custom Animations

- **Instagram Gradient Shimmer**: Periodic border animation on theme chip
- **Grid Transitions**: Smooth fade/scale animations when switching themes
- **Story Timer**: 5-second auto-close with progress bar

## 📝 Notes

- This is a **frontend-only prototype** with no backend
- Images are stored locally in `/src/assets/Photos/Weeknd/`
- Profile data is defined in `src/data.js`
- The "Follow" and "Message" buttons are non-functional (UI only)

## 🎭 Design Challenge

Created as part of the **Vibe Design Challenge** by Crescent Creatives - exploring innovative Instagram features for enhanced creative expression.

## 🤖 Built With AI

This entire project was **vibe coded** using [Google Antigravity](https://deepmind.google/technologies/gemini/antigravity/) - an AI-powered coding assistant that helped bring this concept to life through natural conversation and iterative development.

## 📄 License

MIT License - feel free to use this project for learning, inspiration, or as a foundation for your own work.

---

Built with ❤️ using React + Vite + Tailwind CSS
