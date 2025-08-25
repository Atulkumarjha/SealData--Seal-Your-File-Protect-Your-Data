export default function Navbar() {
    return (
        <nav 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: "60px",
            backgroundColor: "#1f2937",
            color: "white",
            padding: "1rem 1.5 rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            zIndex: 50,
        }}>
            <div style={{
                marginLeft: "1rem"
            }}><h1 style={{
                color: "green",
            }}
            >SealData</h1></div>
        </nav>
    )
}