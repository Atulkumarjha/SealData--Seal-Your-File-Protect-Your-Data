export default function Navbar() {
  return (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#001A00",
        color: "white",
        padding: "1rem 1.5 rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0), 0 2px 4px -1px rgba(0,0,0,0.0)",
        zIndex: 50,
        border: 'dotted 2px darkgreen ',
        margin: '10px auto',
      }}>
    <nav
      
    >
      <div
        style={{
          marginLeft: "1.5rem",
        }}
      >
        <h1>
          <span style={{
            color:"rgba(144, 238, 144, 1)"
          }}>Seal</span>
          <span>Data</span>
        </h1>
      </div>
    </nav>
    </div>
  );
}
