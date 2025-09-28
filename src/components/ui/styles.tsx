// ---- Muted, textured UI helpers ----
export function texturedButtonStyle(color: string) {
  return {
    backgroundColor: color,
    backgroundImage: `
      radial-gradient(1px 1px at 25% 20%, rgba(255,255,255,0.08) 0, transparent 1.5px),
      radial-gradient(1px 1px at 65% 70%, rgba(0,0,0,0.06) 0, transparent 1.5px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)
    `,
    filter: "saturate(85%) brightness(97%)",
    boxShadow:
      "inset 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.35)",
  };
}

export function texturedChipStyle(color: string) {
  return {
    backgroundImage: `
      linear-gradient(${color}22, ${color}22),
      radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.14) 0, transparent 1.5px),
      repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)
    `,
    border: "1px solid rgba(255,255,255,0.12)",
    filter: "saturate(85%) brightness(98%)",
  };
}

// Textured underline style — muted color with subtle grain and speckles
export function texturedUnderlineStyle(color: string) {
  return {
    backgroundColor: color,
    backgroundImage: `
      radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.10) 0, transparent 1.5px),
      radial-gradient(1px 1px at 65% 60%, rgba(0,0,0,0.06) 0, transparent 1.5px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)
    `,
    filter: "saturate(85%) brightness(98%)",
  };
}
