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
      className="fixed
    top-0
    left-0
    right-0
    z-50
    bg-white/80
    backdrop-blur-md"
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