import React  from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {





  return <>
     <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2024 made by Rawan Attya. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-2">
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
        </div>
     
      </div>
    </footer>

  </>
}