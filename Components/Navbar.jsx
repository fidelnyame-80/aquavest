// components/Navbar.tsx
"use client";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Agrivest</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;