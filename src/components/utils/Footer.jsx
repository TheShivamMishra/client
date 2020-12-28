import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      Copyright © {year} All Right Reserved.
      <div>
        Icons by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect, 
        </a>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
      </div>
    </footer>
  );
}

export default Footer;
