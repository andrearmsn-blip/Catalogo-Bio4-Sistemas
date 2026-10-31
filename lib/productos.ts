import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md):
 *   paraQuien  → el trabajo que resuelve (Christensen, HBR 2005)
 *   beneficio  → resultado, no característica (StoryBrand)
 *   caracteristicas → SOLO 3 que importan (Iyengar, las mermeladas)
 *   precioAntes → ancla (Ariely) · facilidades → quita el miedo al gasto
 *   bono       → la oferta apilada (Hormozi)
 *   escasez    → honesta, por tiempo o unidades (Cialdini)
 *   prueba     → prueba social (Cialdini)
 *  Deja máximo 3-6 por categoría y marca uno como destacado.
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "cafe-kenko-hogar",
    nombre: "Kenko Café hogar",
    categoria: "Café",
    imagen: "/productos/kenko-hogar-hombre.jpg",
    paraQuien: "Para quien disfruta tomarlo en casa, aprovechando sus beneficios en cualquier momento del día.",
    beneficio: "Una taza gourmet para tu rutina diaria, más enfoque y menos estrés.",
    caracteristicas: ["Con Ganoderma lucidum", "210 g", "Para 60 tazas"],
    precio: "$830",
    precioAntes: "$922",
    facilidades: "Sale a $14 la taza",
    bono: "Envío gratis.",
    destacado: true,
  },
  {
    slug: "cafe-kenko-sobres",
    nombre: "Kenko Café sobres",
    categoria: "Café",
    imagen: "/productos/kenko-sobres-bolso.jpg",
    paraQuien: "Para quienes quieren llevar su café favorito a todas partes.",
    beneficio: "Tus reuniones más productivas en casa, oficina o de viaje.",
    caracteristicas: ["Con Ganoderma lucidum", "25 sobres individuales", "La mejor opción para tu comodidad"],
    precio: "$680",
    precioAntes: "$757",
    bono: "Envío gratis.",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
