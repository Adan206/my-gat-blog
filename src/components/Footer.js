import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy; {new Date().getFullYear()}, Blog by Adan Abbi</p>
      </div>
    </footer>
  )
}

export default Footer
