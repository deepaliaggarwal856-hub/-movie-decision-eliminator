# -movie-decision-eliminator
# 🎬 Movie Decision Eliminator

## 📌 Project Overview
Movie Decision Eliminator is a web application designed to help users quickly decide what movie to watch. Instead of endlessly scrolling through options, users can interact with movie suggestions by liking or skipping them. Based on user preferences, the application recommends the best movie to watch.

---

## 🎯 Objective
The goal of this project is to demonstrate the use of JavaScript, API integration, and UI development by building an interactive movie recommendation system.

---

## 🚀 Features

### 🎥 Core Features
- Fetch and display movies dynamically using a public API  
- Show movie posters, titles, and ratings  

### 🔍 Search Functionality
- Users can search movies by name  
- Implemented using JavaScript array methods  

### 🎯 Filtering
- Filter movies based on rating or category  

### 🔄 Sorting
- Sort movies by:
  - Rating  
  - Popularity  

### ❤️ User Interaction
- Like (save) movies  
- Skip movies  
- Store liked movies  

### ⭐ Recommendation System
- Suggest the best movie based on user likes  

---

## 🔌 API Used

### 🎬 OMDb API (Open Movie Database)
This project uses the OMDb API to fetch movie data.

- Provides movie titles, posters, ratings, and details  
- Free and easy to use  

### 🔗 Example API Request:
https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY

---

## 🛠️ Technologies Used
- HTML  
- CSS  
- JavaScript (Vanilla JS)  
- Fetch API  

---

## ⚙️ How It Works

1. The application fetches movie data from the OMDb API  
2. Movies are displayed as cards on the screen  
3. Users can:
   - Like a movie  
   - Skip a movie  
4. Liked movies are stored in memory (or localStorage)  
5. The app analyzes liked movies and suggests the best option  

---

## 📂 Project Structure

movie-decision-eliminator/
│
├── index.html
├── style.css
├── script.js
├── README.md

---

## 📦 Installation & Setup

1. Clone the repository:
   git clone https://github.com/your-username/movie-decision-eliminator.git

2. Navigate to the project folder:
   cd movie-decision-eliminator

3. Get your API key from OMDb:
   http://www.omdbapi.com/apikey.aspx

4. Add API key in script.js:
   const API_KEY = "your_api_key_here";

5. Open index.html in your browser

---

## 📅 Milestone Coverage

### ✅ Milestone 1:
- Project idea selected  
- API selected  
- Repository created  
- README prepared  

### ✅ Milestone 2:
- API integration using fetch  
- Dynamic movie display  

### ✅ Milestone 3:
- Search, filter, and sort using array methods  
- Interactive buttons (like/skip)  

### ✅ Milestone 4:
- Code refactoring  
- Deployment  

---

## ⭐ Bonus Features (Optional)
- Dark mode toggle  
- Save favorites using localStorage  
- Loading spinner  
- Pagination  

---

## 💡 Future Improvements
- Swipe gesture interaction  
- AI-based recommendations  
- Better UI/UX design  

---

## 🙌 Conclusion
This project demonstrates the practical implementation of API integration, JavaScript array methods, and interactive UI design to solve a common problem—choosing what to watc
