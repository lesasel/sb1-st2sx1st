import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 pb-20">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}