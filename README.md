 # 📝 Task Manager API

A RESTful API built with *Node.js, **Express, and **PostgreSQL* that allows users to register, log in, and manage their tasks. This project includes JWT-based authentication and auto-generated Swagger API documentation.

---

## 🚀 Features

* User registration and login
* JWT authentication middleware
* Create, Read, Update, and Delete (CRUD) tasks
* Protected routes for authenticated users
* Swagger UI for live API documentation

---

## 💠 Technologies Used

* Node.js
* Express.js
* PostgreSQL with Sequelize ORM
* JWT (JSON Web Tokens)
* bcrypt for password hashing
* dotenv for environment variable management
* Swagger (OpenAPI 3.0) for API documentation

---

## 📁 Project Structure


task-manager-api/
├── config/
│   └── db.js             # Database connection config
├── models/
│   ├── Task.js           # Task model
│   └── User.js           # User model
├── routes/
│   ├── authRoutes.js     # Authentication routes
│   └── taskRoutes.js     # Task CRUD routes
├── middleware/
│   └── authMiddleware.js # JWT auth middleware
├── swagger.js            # Swagger configuration
├── .env.example          # Sample environment config
├── README.md             # Project documentation
└── index.js              # Entry point


---

## ⚙ Setup Instructions

1. *Clone the repository*

   bash
   git clone https://github.com/Emmanuel1440 /task-manager-api.git
   cd task-manager-api
   

2. *Install dependencies*

   bash
   npm install
   

3. **Create a ****.env**** file**

   Copy the example file:

   bash
   cp .env.example .env
   

4. **Edit the ****.env**** file** with your database credentials and JWT secret.

5. *Start the development server*

   bash
   npm start
   

6. *View API Docs*

   Visit: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

## 🧪 Sample API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | /api/auth/register | Register a new user      |
| POST   | /api/auth/login    | Log in and receive token |
| GET    | /api/tasks         | Get all tasks (auth)     |
| POST   | /api/tasks         | Create a new task        |
| PUT    | /api/tasks/:id     | Update an existing task  |
| DELETE | /api/tasks/:id     | Delete a task            |

---

## 📄 Sample .env.example

env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager
DB_USER=postgres
DB_PASSWORD=yourpassword
JWT_SECRET=your_jwt_secret_key


---

## 🙌 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

This project is licensed under the MIT License.

Born to Build
