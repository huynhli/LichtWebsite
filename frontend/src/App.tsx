import { Routes, Route, Outlet } from 'react-router-dom'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
>>>>>>> ddc37d6 (bash fixed)
import HomePage from './pages/HomePage.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  // defining default layout
  const Layout = () => {
    return (
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
