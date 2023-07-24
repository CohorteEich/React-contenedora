import React from "react";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="index.html">Inicio</a>
          <a href="nosotros.html">Nosotros</a>
          <a href="blog.html">Blog</a>
          <a href="tienda.html">Tienda</a>
        </nav>
      </header>
      <main>
        <h2>Nombre Página</h2>
      </main>
      <footer>
        <div>
          <nav>
            <a href="index.html">Inicio</a>
            <a href="nosotros.html">Nosotros</a>
            <a href="blog.html">Blog</a>
            <a href="tienda.html">Tienda</a>
          </nav>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;