# Expense Tracker - Frontend

This is the frontend application for the Expense Tracker project, built using React. It allows users to add, delete, and view their financial transactions in an interactive and user-friendly interface.

## Features
- View transaction history
- Add new transactions (income/expenses)
- Delete transactions
- Real-time UI updates

## Tech Stack
- React
- Vite
- Axios (for API requests)
- Context API & Reducer (for state management)
- CSS (for styling)

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/sivakarthikxo/ExpenseTracker-react-app.git
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file:
   ```plaintext
   VITE_API_URL=<your_backend_url>
   ```
   Replace <your_backend_url> with the backend's deployed URL (e.g., https://expense-tracker-backend-cge7.onrender.com).

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```
   
## Deployment

The frontend is deployed on **Vercel**.  
To deploy:  
- Push changes to GitHub.  
- Connect the repository to Vercel.  
- Add Build and Output settings.  
  Ensure Vercel automatically detects the build command (`npm run build`) and the output directory (`dist`).  
  If not, set:  
  - **Build Command**: `npm run build`  
  - **Output Directory**: `dist`  
- Add environment variables:  
  - `VITE_API_URL` pointing to your backend URL.  
- Click **Deploy** to start the deployment process.


## Backend

For **Expense Tracker - Backend**.  
  
Visit:  
  - https://github.com/sivakarthikxo/ExpenseTracker-backend
  
