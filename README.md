# 🚚 Courier & Parcel Management System – Backend (Express + TypeScript + MongoDB)

A robust backend API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)** for managing parcel bookings, delivery assignments, real-time tracking, and reporting for a logistics company.

---

## 🌐 Project Resources

- 🔗 **Live Deployment URL**: [Vercel](https://courier-parcel-management-backend.vercel.app/)
- 🧩 **Visualize Project with ER Diagram**:

  ![ER Diagram](https://raw.githubusercontent.com/Nadim-Nion/courier-parcel-management-backend/refs/heads/main/er-diagram-updated.PNG)

  👉 Click Here: [Draw.io](https://drive.google.com/file/d/1yPV5CkKC-t7z8YNCtKEeud5IFO7sEkNp/view)

---

## 📌 Features

### 🔐 Authentication & Authorization

- Register/Login with **JWT**
- **Role-based access**: `Admin`, `Delivery Agent`, `Customer`

### 📦 Parcel Management

- Customers can book parcel pickups
- Admins can assign delivery agents
- Agents can update parcel statuses: `Picked Up`, `In Transit`, `Delivered`, `Failed`

### 📡 Real-Time Features

- Geolocation tracking via coordinates
- Location history for each parcel
- Status updates with **Socket.IO** (frontend integration)

### 📊 Admin Dashboard & Reporting

- Daily booking metrics
- COD amount calculation
- Failed delivery counts
- Export reports in **CSV** or **PDF**

---

## 🛠️ Tech Stack

| Tech               | Usage                           |
| ------------------ | ------------------------------- |
| Node.js + Express  | API development                 |
| TypeScript         | Strong typing & maintainability |
| MongoDB + Mongoose | NoSQL data modeling             |
| JWT                | Authentication & authorization  |
| Socket.IO          | Real-time status updates        |
| Multer, PDFKit     | File handling, PDF generation   |
| json2csv           | CSV export                      |

---

## 🧩 Project Structure

```bash
src/
├── app.ts # Express app instance
├── server.ts # App entry point
├── config/ # DB config, environment
├── models/ # Mongoose schemas
├── controllers/ # Route logic
├── routes/ # API endpoints
├── services/ # Business logic
├── middlewares/ # Auth, error handling, role checks
├── utils/ # Helper functions (JWT, PDF, CSV)
└── types/ # Custom TypeScript interfaces
```

---

---

## 📚 API Documentation

👉 Import the [Postman Collection](./postman_collection.json) to test endpoints.

### Base URL

http://localhost:5000/api

### Auth

- `POST /auth/register`
- `POST /auth/login`

### Parcels

- `POST /parcels` (Customer)
- `GET /parcels/my` (Customer history)
- `PATCH /parcels/:id/status` (Agent updates status)
- `PATCH /parcels/:id/assign` (Admin assigns agent)

### Admin

- `GET /admin/metrics` (Dashboard data)
- `GET /admin/users`
- `GET /admin/bookings`
- `GET /admin/export?type=csv|pdf`

---

## 📦 Environment Variables

Create a `.env` file in the root:

````env
PORT=5000
MONGO_URI=mongodb://localhost:27017/parcel-system
JWT_SECRET=your_jwt_secret

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/courier-system-backend.git
cd courier-system-backend

# Install dependencies
npm install

# Run in dev mode
npm run dev

# Or build & start production
npm run build
npm run start
````

---

## 📄 License

This project is licensed under the MIT License.
