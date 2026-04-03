import type { Group } from "@/data/groups";

interface ExportPreviewProps {
  groups: Group[];
}

const getLocalFlagUrl = (countryCode: string) =>
  `/flags/${countryCode.toLowerCase()}.png`;

const getFlagsApiUrl = (countryCode: string) =>
  `https://flagsapi.com/${countryCode}/flat/64.png`;

const getExportFallbackUrl = (countryCode: string) =>
  `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

const ExportPreview = ({ groups }: ExportPreviewProps) => (
  <div
    id="export-target"
    className="w-[1080px] min-h-[1920px] p-10 mx-auto"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(56, 189, 248, 0.22), transparent 30%), radial-gradient(circle at top right, rgba(99, 102, 241, 0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.14), transparent 28%), linear-gradient(145deg, #071126 0%, #0b1832 38%, #0d1d3f 72%, #071126 100%)",
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
        marginBottom: "34px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "16px",
          padding: "14px 22px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(18px)",
          marginBottom: "14px",
        }}
      >
        <img src="/logo1.png" alt="FIFA World Cup 2026" style={{ width: "62px", height: "62px", objectFit: "contain" }} />
        <div style={{ textAlign: "left" }}>
          <div style={{ color: "#86efac", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase" }}>
            FIFA World Cup 2026
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 800,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            World Cup 2026 Predictor
          </div>
        </div>
      </div>
      <p style={{ color: "#cbd5e1", fontSize: "18px", marginBottom: "6px" }}>My full group-stage ranking board.</p>
      <p style={{ color: "#93c5fd", fontSize: "14px", letterSpacing: "0.03em" }}>
        Quick guide: ranks 1 and 2 are automatic qualifiers.
      </p>
    </div>

    {/* Groups grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      {groups.map((group) => (
        <div
          key={group.letter}
          style={{
            background: "rgba(10, 20, 42, 0.84)",
            borderRadius: "20px",
            padding: "14px",
            border: "1px solid rgba(148, 163, 184, 0.22)",
            boxShadow: "0 20px 48px rgba(2, 6, 23, 0.45)",
            backdropFilter: "blur(18px)",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "800",
              marginBottom: "10px",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {group.name}
          </h3>
          <p style={{ color: "#93c5fd", fontSize: "11px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Click order applied
          </p>
          {group.teams.map((team, i) => (
            <div
              key={team.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                marginBottom: "6px",
                borderRadius: "12px",
                background: i < 2 ? "rgba(20, 83, 45, 0.48)" : "rgba(30, 41, 59, 0.7)",
                borderLeft: i < 2 ? "3px solid #22c55e" : i === 2 ? "3px solid #38bdf8" : "3px solid rgba(148, 163, 184, 0.35)",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  width: "32px",
                  height: "32px",
                  textAlign: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  background: i < 2 ? "rgba(34, 197, 94, 0.24)" : "rgba(51, 65, 85, 0.8)",
                  color: i < 2 ? "#4ade80" : "#cbd5e1",
                }}
              >
                {i + 1}
              </span>
              <img
                src={getLocalFlagUrl(team.countryCode)}
                alt={`${team.name} flag`}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.src = getFlagsApiUrl(team.countryCode);
                  event.currentTarget.onerror = () => {
                    event.currentTarget.src = getExportFallbackUrl(team.countryCode);
                    event.currentTarget.onerror = null;
                  };
                }}
                style={{
                  width: "32px",
                  height: "22px",
                  objectFit: "cover",
                  
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#e2e8f0" }}>{team.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="text-center mt-12" style={{ color: "#94a3b8", fontSize: "14px" }}>
      Built with World Cup 2026 Predictor by IBNAHMAD Hassan | Share your board with friends
    </div>
  </div>
);

export default ExportPreview;
