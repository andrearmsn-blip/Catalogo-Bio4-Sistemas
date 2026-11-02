/**
 * Comparte la liga del catálogo (sin el vendedor referido).
 * En el celular abre el menú de compartir; si no existe, copia la liga.
 */
export type ResultadoCompartir = "compartido" | "copiado" | "error";

export async function compartirLiga(): Promise<ResultadoCompartir> {
  const url = typeof window !== "undefined" ? window.location.href.split("?")[0] : "";
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title: document.title, url });
      return "compartido";
    } catch {
      /* el usuario canceló: seguimos y copiamos */
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return "copiado";
  } catch {
    return "error";
  }
}
