"use client";
import { useState, useEffect } from "react";

const BG = "radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%), #f9f7f4";

// Shared image column
function Img() {
  return (
    <div style={{ overflow: "hidden", position: "absolute", right: 0, top: 0, bottom: 0, width: "45%" }}>
      <img src="/hero.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "10% center" }} />
    </div>
  );
}

// ── -15: Página en blanco ─────────────────────────────────────────────────
function F_a() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#ffffff" }} />
  );
}

// ── -14: Wireframe — cajas grises ─────────────────────────────────────────
function F_b() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f0f0f0", padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ height: 40, background: "#d4d4d4", borderRadius: 4, width: "30%" }} />
      <div style={{ height: 80, background: "#d4d4d4", borderRadius: 4, width: "60%" }} />
      <div style={{ height: 16, background: "#d4d4d4", borderRadius: 4, width: "45%" }} />
      <div style={{ height: 16, background: "#d4d4d4", borderRadius: 4, width: "38%" }} />
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <div style={{ height: 36, width: 120, background: "#b4b4b4", borderRadius: 4 }} />
        <div style={{ height: 36, width: 100, background: "#d4d4d4", borderRadius: 4 }} />
      </div>
      <div style={{ flex: 1, background: "#d4d4d4", borderRadius: 4, marginTop: 16 }} />
    </div>
  );
}

// ── -13: Solo el email centrado ───────────────────────────────────────────
function F_c() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f7f4" }}>
      <span style={{ fontSize: 18, letterSpacing: "0.08em", color: "#111", fontWeight: 400 }}>hola@datacomun.com</span>
    </div>
  );
}

// ── -12: Fuente serif — exploración tipográfica ───────────────────────────
function F_d() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f9f7f4", gap: 12 }}>
      <h1 style={{ fontSize: 52, fontWeight: 400, color: "#111", fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}>data comun</h1>
      <p style={{ fontSize: 11, color: "#888", fontFamily: "Georgia, serif", fontStyle: "italic" }}>Datos para el bien común</p>
    </div>
  );
}

// ── -11: Monospace — exploración tipográfica ──────────────────────────────
function F_e() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0a0a0a", gap: 8 }}>
      <p style={{ fontFamily: "monospace", fontSize: 11, color: "#555", letterSpacing: "0.1em" }}>// v0.1.0</p>
      <h1 style={{ fontFamily: "monospace", fontSize: 36, fontWeight: 700, color: "#00ff88", letterSpacing: "0.05em" }}>data_comun</h1>
      <p style={{ fontFamily: "monospace", fontSize: 11, color: "#444", letterSpacing: "0.08em" }}>data design firm · mty</p>
    </div>
  );
}

// ── -10: Blank — solo nombre minúsculo gris ───────────────────────────────
function F_1() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
      <span style={{ fontSize: 13, letterSpacing: "0.2em", color: "#aaa", fontWeight: 400 }}>datacomun</span>
    </div>
  );
}

// ── -9: Dark mode attempt ─────────────────────────────────────────────────
function F_2() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a" }}>
      <h1 style={{ fontSize: 40, letterSpacing: "0.2em", color: "#ffffff", fontWeight: 300 }}>data comun</h1>
    </div>
  );
}

// ── -8: "data" / "comun" stacked, enorme ─────────────────────────────────
function F_3() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f9f7f4", gap: 0, lineHeight: 1 }}>
      <span style={{ fontSize: 120, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1 }}>data</span>
      <span style={{ fontSize: 120, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1 }}>comun</span>
    </div>
  );
}

// ── -7: Tagline minimalista ───────────────────────────────────────────────
function F_4() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f9f7f4", gap: 16 }}>
      <h1 style={{ fontSize: 32, letterSpacing: "0.15em", color: "#111", fontWeight: 400 }}>data comun</h1>
      <p style={{ fontSize: 12, letterSpacing: "0.1em", color: "#888", fontWeight: 400 }}>data design · monterrey, mx</p>
    </div>
  );
}

// ── -6: Imagen full bleed + nombre encima ─────────────────────────────────
function F_5() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      <img src="/hero.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.55)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "0 48px 64px" }}>
        <h1 style={{ fontSize: 56, fontWeight: 400, color: "#fff", letterSpacing: "0.1em" }}>data comun</h1>
      </div>
    </div>
  );
}

// ── -5: Scaffold inicial en inglés ───────────────────────────────────────
function FA() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", overflow: "auto" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#888", marginBottom: 20 }}>Data Design Firm</p>
        <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 28, maxWidth: 520, color: "#111" }}>
          We turn complex data into clear, compelling stories.
        </h1>
        <div style={{ display: "flex", gap: 12, marginBottom: 64 }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: "#1a1a2e", padding: "8px 18px", borderRadius: 2 }}>View our work</span>
          <span style={{ fontSize: 12, color: "#111", border: "1px solid #e0ddd8", padding: "8px 18px", borderRadius: 2 }}>Get in touch</span>
        </div>
        <div style={{ border: "1px solid #e0ddd8" }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: i < 3 ? "1px solid #e0ddd8" : "none" }}>
              <div>
                <p style={{ fontFamily: "monospace", fontSize: 9, color: "#888", marginBottom: 4 }}>Project 0{i}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>Project title goes here</p>
              </div>
              <span style={{ color: "#888" }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── -4: Nombre minúsculo, solo texto ──────────────────────────────────────
function FB() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f7f4" }}>
      <h1 style={{ fontSize: 22, letterSpacing: "0.3em", color: "#111111", fontWeight: 400 }}>data comun</h1>
    </div>
  );
}

// ── -3: Logo SVG + "data comun" ───────────────────────────────────────────
function FC() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 20, background: "#f9f7f4" }}>
      <img src="/icon.png" alt="" style={{ width: 72, height: 72, objectFit: "contain" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <h1 style={{ fontSize: 48, letterSpacing: "0.18em", color: "#111111", fontWeight: 400 }}>data comun</h1>
    </div>
  );
}

// ── -2: Scatter solo, sin email ───────────────────────────────────────────
function FD() {
  const dots = [[120,180,3],[200,120,4],[340,200,3],[480,150,5],[600,220,3],[720,160,4],[850,130,3],[150,320,4],[300,380,3],[500,300,5],[680,340,3],[100,480,3],[250,520,4],[420,460,3],[600,500,5],[750,420,3],[180,600,4],[380,580,3],[700,560,3],[870,600,4],[60,250,3],[950,200,4],[1020,380,3]];
  const colors = ["#a5b4fc","#6ee7b7","#fca5a5","#fcd34d","#93c5fd"];
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f7f4" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
        {dots.map(([x,y,r],i) => <circle key={i} cx={x} cy={y} r={r} fill={colors[i%colors.length]} />)}
      </svg>
      <h1 style={{ fontSize: 40, letterSpacing: "0.2em", color: "#111", fontWeight: 400, position: "relative" }}>data comun</h1>
    </div>
  );
}

// ── -1: "Visualizamos" sin sección de trabajo ─────────────────────────────
function FE() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", display: "flex", flexDirection: "column" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "28px 40px 0", flexShrink: 0 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "#111" }}>data comun</span>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#888" }}>hola@datacomun.com</span>
      </header>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 80px" }}>
        <h1 style={{ fontSize: 80, fontWeight: 300, color: "#111", lineHeight: 1, letterSpacing: "-0.02em" }}>Visualizamos datos<br />para el bien<br />común.</h1>
        <p style={{ marginTop: 20, fontSize: 13, color: "#888" }}>Diseño de datos para ciudades, organizaciones y territorios.</p>
      </div>
    </div>
  );
}

// ── 01: "data comun" plain centrado ──────────────────────────────────────
function F00() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f7f4" }}>
      <h1 style={{ fontSize: 18, letterSpacing: "0.25em", color: "#111111", fontWeight: 400 }}>data comun</h1>
    </div>
  );
}

// ── 02: Vanta globe ───────────────────────────────────────────────────────
function F00b() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(ellipse at 60% 50%, #1a2744 0%, #0a0a18 60%, #000 100%)" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.12 }}>
        {[160, 240, 320, 400, 480, 560].map((r, i) => (
          <div key={i} style={{ position: "absolute", top: "50%", left: "55%", width: r, height: r, marginLeft: -r/2, marginTop: -r/2, border: "1px solid #4488ff", borderRadius: "50%" }} />
        ))}
      </div>
      <h1 style={{ fontSize: 36, letterSpacing: "0.2em", color: "#fff", fontWeight: 400, position: "relative" }}>data comun</h1>
    </div>
  );
}

// ── 03: Scatter + email footer ────────────────────────────────────────────
function F00c() {
  const dots = [[120,180,3],[200,120,4],[340,200,3],[480,150,5],[600,220,3],[720,160,4],[850,130,3],[150,320,4],[300,380,3],[500,300,5],[680,340,3],[800,280,4],[100,480,3],[250,520,4],[420,460,3],[600,500,5],[750,420,3],[180,600,4],[380,580,3],[550,620,5],[700,560,3]];
  const colors = ["#a5b4fc","#6ee7b7","#fca5a5","#fcd34d","#93c5fd"];
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f7f4" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
        {dots.map(([x,y,r],i) => <circle key={i} cx={x} cy={y} r={r} fill={colors[i%colors.length]} />)}
      </svg>
      <h1 style={{ fontSize: 36, letterSpacing: "0.2em", color: "#111", fontWeight: 400, position: "relative" }}>data comun</h1>
      <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontSize: 12, letterSpacing: "0.12em", color: "rgba(0,0,0,0.35)" }}>hola@datacomun.com</span>
      </div>
    </div>
  );
}

// ── 04: "Visualizamos datos" editorial ────────────────────────────────────
function F00d() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", display: "flex", flexDirection: "column" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "28px 40px 0", flexShrink: 0 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "#111" }}>data comun</span>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#888" }}>hola@datacomun.com</span>
      </header>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 64px" }}>
        <h1 style={{ fontSize: 72, fontWeight: 300, color: "#111", lineHeight: 1, letterSpacing: "-0.02em" }}>Visualizamos datos<br />para el bien<br />común.</h1>
        <p style={{ marginTop: 20, fontSize: 12, color: "#888", letterSpacing: "0.05em" }}>Diseño de datos para ciudades, organizaciones y territorios.</p>
      </div>
    </div>
  );
}

// ── 05: Editorial + proyecto card ─────────────────────────────────────────
function F00e() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "18px 40px 0", flexShrink: 0 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "#111" }}>data comun</span>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#888" }}>hola@datacomun.com</span>
      </header>
      <div style={{ padding: "12px 40px 8px", flexShrink: 0 }}>
        <h1 style={{ fontSize: 44, fontWeight: 300, color: "#111", lineHeight: 1, letterSpacing: "-0.02em" }}>Visualizamos datos<br />para el bien común.</h1>
      </div>
      <div style={{ borderTop: "1px solid #e0ddd8", margin: "8px 40px 0", paddingTop: 12, flex: 1, overflow: "hidden" }}>
        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: "#888", textTransform: "uppercase" }}>Trabajo reciente</span>
        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[{ n: "01", t: "Observatorio del Aire", img: "/observatorio-del-aire.png" }, { n: "02", t: "Aire Claro", img: "/aire-claro.png" }].map(p => (
            <div key={p.n} style={{ background: "#fff", border: "1px solid #e0ddd8", borderRadius: 10, overflow: "hidden" }}>
              <img src={p.img} alt="" style={{ width: "100%", height: 72, objectFit: "cover", objectPosition: "top" }} />
              <div style={{ padding: "8px 10px" }}>
                <span style={{ fontSize: 7, color: "#888" }}>{p.n}</span>
                <p style={{ fontSize: 11, color: "#111", marginTop: 2 }}>{p.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 06: Two-col, white bg, full nav, copy centered ────────────────────────
function F01() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
        <nav style={{ display: "flex", gap: 32 }}>
          {["Proyectos", "Nosotros", "Contacto"].map(t => <span key={t} style={{ fontSize: 13, color: t === "Contacto" ? "#111" : "#888", fontWeight: t === "Contacto" ? 500 : 400 }}>{t}</span>)}
        </nav>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 40px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 46, fontWeight: 600, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Plataformas de datos para organizaciones con impacto social</h1>
          <p style={{ marginTop: 16, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles y de gobierno en México.</p>
          <span style={{ marginTop: 20, display: "inline-block", fontSize: 13, fontWeight: 500, color: "#0f172a" }}>Ver proyectos →</span>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 02: Nav → logo only ───────────────────────────────────────────────────
function F02() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f4", display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 40px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 46, fontWeight: 600, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Plataformas de datos para organizaciones con impacto social</h1>
          <p style={{ marginTop: 16, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles y de gobierno en México.</p>
          <span style={{ marginTop: 20, display: "inline-block", fontSize: 13, fontWeight: 500, color: "#0f172a" }}>Ver proyectos →</span>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 03: Gradient bg ───────────────────────────────────────────────────────
function F03() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 40px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 46, fontWeight: 600, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Plataformas de datos para organizaciones con impacto social</h1>
          <p style={{ marginTop: 16, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles y de gobierno en México.</p>
          <span style={{ marginTop: 20, display: "inline-block", fontSize: 13, fontWeight: 500, color: "#0f172a" }}>Ver proyectos →</span>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 04: Copy moves to bottom ──────────────────────────────────────────────
function F04() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 46, fontWeight: 600, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Plataformas de datos para organizaciones con impacto social</h1>
          <p style={{ marginTop: 16, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles y de gobierno en México.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 05: Title grows ───────────────────────────────────────────────────────
function F05() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 54, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos para organizaciones con impacto social</h1>
          <p style={{ marginTop: 16, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 06: Copy rewritten ────────────────────────────────────────────────────
function F06() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 54, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 16, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Diseñamos plataformas, mapas y dashboards para organizaciones civiles.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 07: Title grows more ──────────────────────────────────────────────────
function F07() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 08: Subtitle refined ──────────────────────────────────────────────────
function F08() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 09: Logo → purple ─────────────────────────────────────────────────────
function F09() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#8b5cf6" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 10: Logo → pink ───────────────────────────────────────────────────────
function F10() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#ec4899" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 11: "¿Trabajamos juntos?" aparece ─────────────────────────────────────
function F11() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#ec4899" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 36 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 12: Email aparece, sin border ─────────────────────────────────────────
function F12() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#ec4899" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 36 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a" }}>hola@datacomun.com →</span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 13: Email + border cyan ───────────────────────────────────────────────
function F13() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 36 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #06b6d4", paddingBottom: 3, display: "inline-flex", alignItems: "center", gap: 10 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 14: Border → purple ───────────────────────────────────────────────────
function F14() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#8b5cf6" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 36 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #8b5cf6", paddingBottom: 3, display: "inline-flex", alignItems: "center", gap: 10 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 15: Border → pink ─────────────────────────────────────────────────────
function F15() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#ec4899" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 48px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 18, fontSize: 15, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 36 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #ec4899", paddingBottom: 3, display: "inline-flex", alignItems: "center", gap: 10 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 16: Title crece a 64px ────────────────────────────────────────────────
function F16() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "28px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#ec4899" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 56px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 64, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 20, fontSize: 16, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #ec4899", paddingBottom: 3, display: "inline-flex", alignItems: "center", gap: 10 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 17: Title 7xl ─────────────────────────────────────────────────────────
function F17() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "28px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 56px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 72, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 20, fontSize: 16, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #06b6d4", paddingBottom: 3, display: "inline-flex", alignItems: "center", gap: 10 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 18: Title back to 64px — padding ajustado ─────────────────────────────
function F18() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "28px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>data<span style={{ color: "#06b6d4" }}>comun</span></span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 64px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 64, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 20, fontSize: 16, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 48 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 18, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #06b6d4", paddingBottom: 4, display: "inline-flex", alignItems: "center", gap: 12 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 19: Logo empieza a ciclar (cyan → purple mid-animation) ───────────────
function F19() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "28px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>
          data<span className="logo-comun">comun</span>
        </span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 64px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 64, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 20, fontSize: 16, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 48 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span style={{ fontSize: 18, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid #06b6d4", paddingBottom: 4, display: "inline-flex", alignItems: "center", gap: 12 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── 20: Final — border también cicla ──────────────────────────────────────
function F20() {
  return (
    <div style={{ width: "100%", height: "100%", background: BG, display: "flex", flexDirection: "column", position: "relative" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "28px 40px", flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>
          data<span className="logo-comun">comun</span>
        </span>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 40px 64px", width: "55%" }}>
        <div>
          <h1 style={{ fontSize: 64, fontWeight: 600, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Plataformas de datos diseñadas para organizaciones de impacto</h1>
          <p style={{ marginTop: 20, fontSize: 16, color: "#475569", lineHeight: 1.6 }}>Mapas, dashboards y plataformas para ONGs y gobierno en México. Desarrollo ágil, entrega en semanas.</p>
          <div style={{ marginTop: 48 }}>
            <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>¿Trabajamos juntos?</p>
            <span className="cta-border" style={{ fontSize: 18, fontWeight: 500, color: "#0f172a", borderBottom: "2px solid", paddingBottom: 4, display: "inline-flex", alignItems: "center", gap: 12 }}>hola@datacomun.com <span>→</span></span>
          </div>
        </div>
      </div>
      <Img />
    </div>
  );
}

// ── Config ────────────────────────────────────────────────────────────────

// Grupo 1 — exploración del nombre (solo "data comun")
// Grupo 2 — layout y contenido
const FRAMES = [
  // nombre
  F_a, F_b, F_c, F_d, F_e, F_1, F_2, F_3, F_4, FB, FC, F00b, FD, F00, F00c,
  // contenido
  FE, FA, F00d, F01, F02, F03, F06, F09, F11, F13, F15,
];
const HOLD = 500;

// ── Page ──────────────────────────────────────────────────────────────────

export default function StoryPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= FRAMES.length - 1) return;
    const t = setTimeout(() => setIndex((i) => i + 1), HOLD);
    return () => clearTimeout(t);
  }, [index]);

  const Mock = FRAMES[index];

  return (
    <div className="w-screen flex flex-col overflow-hidden" style={{ height: "100dvh" }}>
      <div className="flex-1 min-h-0">
        <Mock />
      </div>
    </div>
  );
}
