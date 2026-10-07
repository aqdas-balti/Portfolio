import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// LinkedIn/WhatsApp par link share karne par yahi preview image dikhti hai.
export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#eeedf7",
          backgroundColor: "#07060e",
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(139,92,246,0.45), transparent 45%), radial-gradient(circle at 90% 85%, rgba(34,211,238,0.35), transparent 45%), radial-gradient(circle at 70% 10%, rgba(236,72,153,0.25), transparent 40%)",
        }}
      >
        <div style={{ fontSize: 30, color: "#b69cff", letterSpacing: 1 }}>~/aqdas-ali</div>
        <div style={{ fontSize: 110, fontWeight: 700, marginTop: 16, letterSpacing: -3 }}>{profile.name}</div>
        <div style={{ fontSize: 46, color: "#c4c2d6", marginTop: 4 }}>{profile.role}</div>
        <div style={{ display: "flex", marginTop: 52 }}>
          {["NestJS", "React", "Django", "Docker", "SaaS"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 26,
                padding: "10px 24px",
                marginRight: 16,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
