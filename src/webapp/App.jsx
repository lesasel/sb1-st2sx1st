import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import WheelPage from './pages/WheelPage';
import TasksPage from './pages/TasksPage';
import WalletPage from './pages/WalletPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="wheel" element={<WheelPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}