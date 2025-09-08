# React Mid Project  

This project was developed as part of a **Full-Stack Development** course.  
The goal: build a React application to manage users, posts, and todos, using data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.  

---

## 🔹 Technologies
- React  
- JavaScript (ES6)  
- HTML, CSS  
- Fetch / Axios for HTTP Requests  

---

## 🔹 Data Sources
The application initializes data from the following API endpoints:  
- [Users](https://jsonplaceholder.typicode.com/users)  
- [Posts](https://jsonplaceholder.typicode.com/posts)  
- [Todos](https://jsonplaceholder.typicode.com/todos)  

---

## 🔹 Main Features
1. **Users Display** – All users are listed by their `id`.  
   - Users with incomplete todos are highlighted with a **red border**.  
   - Users who have completed all todos are highlighted with a **green border**.  

2. **Search** – A search box filters users by **name** or **email**.  

3. **Other Data** – Hovering over the “Other Data” section shows additional information.  
   - Clicking closes the section.  

4. **Update / Delete** – Edit user details with an **Update** button, or delete the user completely with **Delete**.  

5. **Select User** – Clicking a user’s ID highlights the user in orange and displays their posts and todos.  
   - Incomplete todos show a **“Mark Completed”** button.  

6. **Add New Todo** – Clicking **Add** above the todo list switches to a form for adding a new todo.  
   - Cancel returns to the todo list.  

7. **Add New Post** – Clicking **Add** above the posts list switches to a form for creating a new post.  
   - Cancel returns to the posts list.  

8. **Add New User** – Clicking **Add** above the users list opens a form to create a new user.  
   - “Other data” can only be added later when updating the user.  

---

## 🔹 Installation & Run
1. Clone the repository:  
   ```bash
   git clone https://github.com/shuli-h/React-Mid-Project.git
   cd React-Mid-Project

2. Install dependencies:  
   ```bash
   npm install

3. Start the app: 
```bash
npm start
   
   

