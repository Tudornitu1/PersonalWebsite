import React from "react";
import linkedinLogo from "./icons/linkedinLogo.png";
import githubLogo from "./icons/githubLogo.png";
import instagramLogo from "./icons/instagramLogo.png";
import facebookLogo from "./icons/facebookLogo.png";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl text-white font-sans font-bold">@tudornitu</h1>
      <div className="flex justify-between items-center gap-3">
        <a
          href="https://www.linkedin.com/in/tudor-andrei-nitu-11000926b/"
          target="_blank"
        >
          <img src={linkedinLogo} className="w-12 h-12" alt="LinkedIn" />
        </a>
        <a href="https://github.com/tudornitu1" target="_blank">
          <img src={githubLogo} className="w-10 h-10 fill-white" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/tudornitu1/" target="_blank">
          <img src={instagramLogo} className="w-12 h-12" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/tudor.nitu.1" target="_blank">
          <img src={facebookLogo} className="w-10 h-10" alt="Facebook" />
        </a>
      </div>
    </div>
  );
}

export default Header;
