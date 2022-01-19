import React from 'react'
import {
  // FaFacebookSquare,
  // FaDribbbleSquare,
  FaTwitterSquare,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://github.com/adan206">
          <FaGithub className="social-icon facebook-icon"></FaGithub>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/adan-abbi-57391848/">
          <FaLinkedinIn className="social-icon dribble-icon"></FaLinkedinIn>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/abbiadan">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
