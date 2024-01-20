import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import ErrorBoundary from './ErrorBoundary';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Webhook from './components/Webhook';




function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/home" element={
          <ErrorBoundary>
            <HomeScreen />
          </ErrorBoundary>
        } />
        <Route path="/profile" element={
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        } />
        <Route path="/shop" element={
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        } />
      </Routes>
      <PostList/>
      <Example1/>
      <Example2/>
      <Example3/>
      <Webhook/>
    </BrowserRouter>
    </>
 
  );
}

export default App;