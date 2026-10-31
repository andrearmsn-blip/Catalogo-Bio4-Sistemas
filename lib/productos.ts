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
  {
    slug: "cafe-kenko-frasco",
    nombre: "Kenko Café frasco",
    categoria: "Café",
    imagen: "/productos/kenko-frasco-estudio.jpg",
    paraQuien: "Para quien busca hacer un regalo especial, elegante y diferente.",
    beneficio: "Regala momentos para disfrutar. Un detalle que se agradece todos los días.",
    caracteristicas: ["Con Ganoderma lucidum", "135 g", "38 tazas"],
    precio: "$770",
    precioAntes: "$857",
    bono: "Envío gratis.",
  },
  {
    slug: "cafe-kenko-de-olla",
    nombre: "Kenko Café de olla",
    categoria: "Café",
    imagen: "/productos/kenko-olla-estudio.jpg",
    paraQuien: "Para quien disfruta los sabores tradicionales de México y busca una bebida que evoque la calidez del hogar.",
    beneficio: "Déjate envolver por el aroma y el sabor clásico del café y la canela.",
    caracteristicas: ["Café, canela y azúcar mascabado", "Con Ganoderma lucidum", "20 sobres individuales"],
    precio: "$768",
    precioAntes: "$853",
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
