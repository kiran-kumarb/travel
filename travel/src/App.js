import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Destinations from './components/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import LoginPage from './components/Login';
import SignUp from './components/Register';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
// import TravelBooking from './pages/TravelBooking';
// import Summary from './pages/Summary';
import Payment from './pages/Payment';
// import Profile from './pages/Profile';
import BookingForm from './components/BookingForm';
import ViewBookings from './components/ViewBookings';  // Import the ViewBookings component
// import ReviewForm from './components/ReviewForm';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !token) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/summary" element={<Summary />} /> */}
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} /> */}
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/signup" element={token ? <SignUp setToken={setToken} /> : <Navigate to="/login" />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/book/:id" element={<BookingForm />} />
        {/* <Route path="/recent" element={<ViewBookings />} /> */}
        <Route path="/bookings" element={<ViewBookings />} />
        {/* <Route path="/reviewform" element={<ReviewForm />} /> */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
