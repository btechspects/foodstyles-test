# Entity Search Application

This project consists of a Nest.js backend and an Angular frontend designed to handle complex entity search functionalities. The system can identify and combine entities such as cities, brands, dish types, and diets based on input search terms.

## Getting Started with Git

To get started with this project, you'll need to clone it to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/btechspects/foodstyles-test.git
cd foodstyles-test
```

## Backend

The backend is developed using Nest.js and interacts with a PostgreSQL database via TypeORM. It includes efficient search mechanisms and is documented with Swagger for API visualization and interaction.

### Features

- **Advanced Search Capabilities**: Utilizes SQL `LIKE` queries to efficiently fetch and combine entities based on user input.
- **Swagger Integration**: Provides a Swagger UI setup for easy exploration and testing of the API endpoints.
- **Optimized Combination Logic**: Avoids performance bottlenecks by smartly combining entities without unnecessary complexity.

### Backend Setup

1. **Install Dependencies**:
   Navigate to the backend directory and install necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Database Configuration**:
   Configure your PostgreSQL database connection by setting environment variables directly or through a `.env` file in the backend directory:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```

3. **Running the Application**:
   Start the backend server with:
   ```bash
   npm run start
   ```

4. **Accessing Swagger UI**:
   Once the server is running, access the Swagger UI at `http://localhost:3000/api/docs` to interact with the API.

## Frontend

The frontend is built with Angular and styled using Angular Material. It provides a clean and intuitive interface for conducting searches and displaying results.

### Frontend Features

- **Interactive Search Interface**: Users can enter search terms and receive results displayed in an accordion format.
- **Angular Material Design**: Leverages Angular Material for stylish and responsive components.
- **Clear Result Presentation**: Displays entity names and types in a user-friendly format without exposing unnecessary technical details such as IDs.

### Frontend Setup

1. **Install Dependencies**:
   Navigate to the frontend directory and install necessary dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Running the Application**:
   Launch the frontend application with:
   ```bash
   ng serve
   ```

   Visit `http://localhost:4200` in your browser to view the application.

## Development Tools

- **Nest CLI**: Useful for backend development, can be used to generate controllers, services, etc.
- **Angular CLI**: Employed for frontend scaffolding, building, and testing.

### Commands

- **Build Frontend**:
  ```bash
  ng build
  ```

- **Run Frontend Tests**:
  ```bash
  ng test
  ```

- **Run Backend in Development Mode**:
  ```bash
  npm run start:dev
  ```

- **Run Backend Tests**:
  ```bash
  npm run test
  ```
