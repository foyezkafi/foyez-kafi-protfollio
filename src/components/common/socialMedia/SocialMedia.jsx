import React from "react";
import {
  faXTwitter ,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faGithub, link: "https://github.com" },
  { icon: faInstagram, link: "https://instagram.com" },
  { icon: faLinkedin, link: "https://linkedin.com" },
  { icon: faXTwitter , link: "https://twitter.com" },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-3">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="text-picto-primary hover:bg-picto-primary p-2 hover:text-white rounded-md transition duration-300"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-xl w-5 h-5"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;