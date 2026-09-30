import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "transparent",
          borderRadius: 7,
          paddingBottom: 6,
          gap: 3,
        }}
      >
        <div
          style={{ width: 6, height: 9, background: "#06b6d4", borderRadius: 2 }}
        />
        <div
          style={{ width: 6, height: 15, background: "#8b5cf6", borderRadius: 2 }}
        />
        <div
          style={{ width: 6, height: 21, background: "#ec4899", borderRadius: 2 }}
        />
      </div>
    ),
    { ...size }
  );
}
