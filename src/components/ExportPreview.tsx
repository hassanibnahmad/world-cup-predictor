import type { Group } from "@/data/groups";

interface ExportPreviewProps {
  groups: Group[];
}

const ExportPreview = ({ groups }: ExportPreviewProps) => (
  <div
    id="export-target"
    className="w-[1080px] min-h-[1920px] p-12 mx-auto"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 26%), radial-gradient(circle at top right, rgba(168, 85, 247, 0.16), transparent 24%), radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.14), transparent 26%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.16), transparent 24%), linear-gradient(135deg, #050816 0%, #08101d 35%, #0e1328 70%, #050816 100%)",
      color: "#f1f5f9",
      fontFamily: "Inter, sans-serif",
      position: "absolute",
      left: "-9999px",
      top: 0,
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "14px",
          padding: "14px 18px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(18px)",
          marginBottom: "18px",
        }}
      >
        <img src="/logo.png" alt="FIFA World Cup 2026" style={{ width: "58px", height: "58px", objectFit: "contain" }} />
        <div style={{ textAlign: "left" }}>
          <div style={{ color: "#86efac", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase" }}>
            FIFA World Cup 2026
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #22d3ee, #22c55e, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            World Cup 2026 Predictor
          </div>
        </div>
      </div>
      <p style={{ color: "#94a3b8", fontSize: "18px" }}>Rank the groups and export a poster-style prediction board.</p>
    </div>

    {/* Groups grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {groups.map((group) => (
        <div
          key={group.letter}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            backdropFilter: "blur(18px)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              marginBottom: "12px",
              background: "linear-gradient(135deg, #0ea5e9, #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {group.name}
          </h3>
          {group.teams.map((team, i) => (
            <div
              key={team.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                marginBottom: "6px",
                borderRadius: "14px",
                background: i < 2 ? "rgba(34, 197, 94, 0.08)" : "rgba(148, 163, 184, 0.05)",
                borderLeft: i < 2 ? "3px solid #22c55e" : i === 2 ? "3px solid rgba(14, 165, 233, 0.5)" : "3px solid transparent",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  width: "36px",
                  height: "36px",
                  textAlign: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  background: i < 2 ? "rgba(34, 197, 94, 0.15)" : "rgba(148, 163, 184, 0.1)",
                  color: i < 2 ? "#22c55e" : "#94a3b8",
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: "22px" }}>{team.flag}</span>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>{team.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="text-center mt-12" style={{ color: "#64748b", fontSize: "14px" }}>
      Made with World Cup 2026 Predictor
    </div>
  </div>
);

export default ExportPreview;
