import axios from "axios";
import { useEffect, useState } from "react";
import { UserList } from "./components/UserList";
import { SearchBox } from "./components/SearchBox";
import { SelectingUser } from "./components/SelectingUser";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const usersResp = await axios.get(USERS_URL);
      const todosResp = await axios.get(TODOS_URL);
      const postsResp = await axios.get(POSTS_URL);

      setUsers(usersResp.data.sort((a, b) => a.id - b.id));
      setTodos(todosResp.data);
      setPosts(postsResp.data);
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  const handleMarkCompleted = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
        <UserList
          users={filteredUsers}
          todos={todos}
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
          onAddUser={handleAddUser}
        />
      </div>

      <div style={{ flex: 1, padding: "20px", borderLeft: "1px solid gray" }}>
        {selectedUserId && (
          <div style={{ width: "50%" }}>
            <SelectingUser
              userId={selectedUserId}
              posts={posts}
              todos={todos}
              onMarkCompleted={handleMarkCompleted}
              onAddTodo={handleAddTodo}
              onAddPost={handleAddPost}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
