import type { Group } from "@/data/groups";

interface ExportPreviewProps {
  groups: Group[];
}

const posLabels = ["1st", "2nd", "3rd", "4th"];

const ExportPreview = ({ groups }: ExportPreviewProps) => (
  <div
    id="export-target"
    className="w-[1080px] min-h-[1920px] p-12 mx-auto"
    style={{
      background: "linear-gradient(135deg, #0f172a 0%, #1a1a2e 30%, #0f172a 60%, #162032 100%)",
      color: "#f1f5f9",
      fontFamily: "Inter, sans-serif",
      position: "absolute",
      left: "-9999px",
      top: 0,
    }}
  >
    {/* Title */}
    <div className="text-center mb-12">
      <h1
        className="text-5xl font-black mb-3"
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #22c55e, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My World Cup 2026 Predictions
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "18px" }}>FIFA World Cup 2026™</p>
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
            background: "rgba(30, 41, 59, 0.8)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid rgba(51, 65, 85, 0.5)",
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
                borderRadius: "10px",
                background: i < 2 ? "rgba(34, 197, 94, 0.08)" : "rgba(148, 163, 184, 0.05)",
                borderLeft: i < 2 ? "3px solid #22c55e" : i === 2 ? "3px solid rgba(14, 165, 233, 0.5)" : "3px solid transparent",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  width: "36px",
                  textAlign: "center",
                  padding: "2px 0",
                  borderRadius: "6px",
                  background: i < 2 ? "rgba(34, 197, 94, 0.15)" : "rgba(148, 163, 184, 0.1)",
                  color: i < 2 ? "#22c55e" : "#94a3b8",
                }}
              >
                {posLabels[i]}
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
