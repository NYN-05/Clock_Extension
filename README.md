# Modern Chrome New Tab Extension

A sleek, modern Chrome extension that replaces your new tab page with a **futuristic digital clock**, a **Google search bar**, **live weather updates**, and **personalized greetings**. The UI features **glassmorphism effects, a neon glow clock, and a dynamic gradient background** for an elegant and immersive experience.

---

## ✨ Features
- 🕒 **Digital Clock** with animated neon glow
- 🔎 **Google Search Bar** at the top with a modern glassmorphic design
- ☀️ **Dynamic Greeting** based on time of day (Morning, Afternoon, Evening, Night)
- 🌦️ **Live Weather Updates** (uses OpenWeather API)
- 🎨 **Sleek UI** with animated gradient background & smooth effects
- 🌙 **Dark Mode Toggle** (Press 'D' to switch)

---

## 📂 File Structure
```
📦 new-tab-extension
 ┣ 📂 icons          # Extension icons
 ┣ 📂 images         # Background assets (if any)
 ┣ 📜 manifest.json  # Chrome extension config
 ┣ 📜 newtab.html    # Custom new tab page
 ┣ 📜 newtab.js      # JavaScript logic (clock, search, weather, dark mode)
 ┣ 📜 styles.css     # Styling with animations and glassmorphism
 ┣ 📜 README.md      # Documentation
```

---

## 🔧 Installation Guide
### **1️⃣ Download the Project**
Clone or download the repository:
```sh
git clone https://github.com/yourusername/new-tab-extension.git
```

### **2️⃣ Load the Extension in Chrome**
1. Open **Google Chrome** and go to `chrome://extensions/`.
2. Enable **Developer Mode** (top-right corner).
3. Click **Load Unpacked** and select the project folder.
4. The extension is now installed! Open a new tab to see it in action. 🚀

---

## 🌦️ Weather API Setup
This extension fetches **real-time weather** using OpenWeather API.
1. Create a free account at [OpenWeather](https://openweathermap.org/api).
2. Get your API key.
3. Replace `YOUR_API_KEY` in `newtab.js`:
   ```js
   let apiKey = "YOUR_API_KEY";
   ```
4. Save and reload the extension.

---

## 🎨 Customization
- Change **background gradient** in `styles.css`:
  ```css
  background: linear-gradient(-45deg, #141E30, #243B55, #0F2027, #1C2A3E);
  ```
- Adjust **clock color & glow effect** in `styles.css`:
  ```css
  #clock {
      color: #00ccff;
      text-shadow: 0px 0px 30px rgba(0, 204, 255, 1);
  }
  ```
- Modify **shortcuts & search engine** in `newtab.js`.

---

## 🛠️ Future Enhancements
- 🔗 **Quick Access Shortcuts** (User-defined links)
- 🗓️ **To-Do List Widget**
- 📅 **Calendar & Upcoming Events**
- 🎵 **Music Widget Integration**

---

## 📜 License
This project is **open-source** under the [MIT License](LICENSE).

🚀 **Enjoy your modern, stylish Chrome new tab!**

