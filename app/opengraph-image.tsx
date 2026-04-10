import { ImageResponse } from "next/og";
import { siteAuthor } from "@/app/lib/site-content";

export const alt = `${siteAuthor.name} project showcase`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #fff7ef 0%, #edd6ba 30%, #11243d 74%, #050913 100%)",
        color: "#08111f",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -80,
          top: 40,
          height: 320,
          width: 320,
          borderRadius: 9999,
          background: "rgba(249, 115, 22, 0.24)",
          filter: "blur(18px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -40,
          top: 80,
          height: 260,
          width: 260,
          borderRadius: 9999,
          background: "rgba(56, 189, 248, 0.18)",
          filter: "blur(12px)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "70px 78px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 58,
              width: 58,
              borderRadius: 9999,
              background: "#08111f",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            RF
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(8, 17, 31, 0.62)",
              }}
            >
              {siteAuthor.name}
            </div>
            <div style={{ fontSize: 24, color: "#1f3551" }}>
              Web Developer • Project Author
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: "82%",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#08111f",
            }}
          >
            Standalone launches and coupgroup.com builds.
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "92%",
            }}
          >
            Every featured project is authored by Robert Foley, presented in a
            sleek split between independent domains and Coupgroup properties.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
