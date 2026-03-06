import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("register");
  const [token, setToken] = useState("");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  // Register
  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    });

    const data = await res.json();
    setMessage(data.message);
  };

  // Login
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    const data = await res.json();

    if (data.token) {
      setToken(data.token);
      setPage("dashboard");
    }

    setMessage(data.message);
  };

  // Create Task
  const handleTask = async () => {
    const res = await fetch("http://localhost:5000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setMessage(data.message);

    fetchTasks();
  };

  // Load Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/v1/tasks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setTasks(data);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Secure Task Manager</h1>

      <button onClick={() => setPage("register")}>Register</button>
      <button onClick={() => setPage("login")}>Login</button>

      {/* Register */}
      {page === "register" && (
        <div>
          <h2>Register</h2>

          <input
            placeholder="Name"
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
          />
          <br />

          <input
            placeholder="Email"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <br />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <br />

          <button onClick={handleRegister}>Register</button>
        </div>
      )}

      {/* Login */}
      {page === "login" && (
        <div>
          <h2>Login</h2>

          <input
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <br />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <br />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* Dashboard */}
      {page === "dashboard" && (
        <div>
          <h2>Dashboard</h2>

          <input
            placeholder="Task Title"
            onChange={(e) =>
              setTask({ ...task, title: e.target.value })
            }
          />
          <br />

          <input
            placeholder="Task Description"
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
          />
          <br />

          <button onClick={handleTask}>Create Task</button>
          <button onClick={fetchTasks}>Load Tasks</button>

          <ul>
            {tasks.map((item) => (
              <li key={item._id}>
                {item.title} - {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3>{message}</h3>
    </div>
  );
}

export default App;