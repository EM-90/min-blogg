import React from "react";

function Navbar() {
  return (
    <nav className="  bg-gray-300 w-full flex justify-center">
      <section className="flex justify-between p-6 bg-gray-200 w-2/3">
        <div>UU-Laben</div>
        <ul className=" flex gap-12">
          <li className=" decoration-0">
            <a href="#">Hjem</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Kontakt</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Om</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Artikler</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Guider</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
