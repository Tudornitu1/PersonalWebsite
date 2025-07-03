import React from "react";
import linkedinLogo from "./icons/linkedinLogo.png";
import githubLogo from "./icons/githubLogo.png";
import instagramLogo from "./icons/instagramLogo.png";
import facebookLogo from "./icons/facebookLogo.png";

function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-white tourney-t">
        @tudornitu
      </h1>
      <div className="flex justify-between items-center gap-2 sm:gap-3">
        <a
          href="https://www.linkedin.com/in/tudor-andrei-nitu-11000926b/"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={linkedinLogo}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/tudornitu1"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={githubLogo}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-white"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.instagram.com/tudornitu1/"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={instagramLogo}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/tudor.nitu.1"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={facebookLogo}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
