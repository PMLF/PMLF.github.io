import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Pedro Fonseca — Front End Developer & Sports Illustrator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.4em",
            textTransform: "uppercase" as const,
            color: "#f59e0b",
            marginBottom: 32,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 16,
          }}
        >
          PEDRO
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#f59e0b",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 48,
          }}
        >
          FONSECA
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            lineHeight: 1.6,
          }}
        >
          Front End Developer &bull; Sports Illustrator &bull; Teacher
        </div>
      </div>
    ),
    { ...size },
  );
}
