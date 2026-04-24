import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </div>
  );
}