import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Bio4: tu vida en plenitud",
    descripcion: "Café funcional para quienes buscan sabor gourmet y energía sostenida en su día.",
    logo: "/logo.png",
    primario: "#143454", // azul marino del logo
    secundario: "#e8531c", // naranja del logo
    fondo: "claro",
    whatsappPrincipal: "525543681089",
    ciudad: "Guadalajara, MX",
    enlace: "",
  },
  vendedores: [
    { slug: "elizabeth", nombre: "Elizabeth Estrada", whatsapp: "526181334237" },
    { slug: "aranzazu", nombre: "Aranzazú Burgos", whatsapp: "523331577373" },
    { slug: "patricia", nombre: "Patricia Camarena", whatsapp: "523321685819" },
    { slug: "vero", nombre: "Vero Maldonado", whatsapp: "525560926755" },
  ],
  categorias: ["Café"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",

  // La tarjeta que invita a más descuento, a la distribución y a compartir.
  // Cambia aquí los textos. Los botones con "mensaje" abren WhatsApp (con la
  // vendedora de la liga); el que no lleva mensaje comparte el catálogo.
  aviso: "¡Buen Fin!",
  invitacion: {
    titulo: "Sé parte de Bio4",
    texto: "Hay más formas de aprovechar Kenko Café, para ti y para quienes te rodean.",
    acciones: [
      {
        icono: "lucide:badge-percent",
        titulo: "Consigue más descuento",
        texto: "Pregunta cómo obtener mejores precios en tus compras.",
        boton: "Quiero más descuento",
        mensaje: "{saludo}vi tu catálogo y quiero saber cómo conseguir más descuento en mis compras.",
      },
      {
        icono: "lucide:handshake",
        titulo: "Únete a la distribución",
        texto: "Conoce cómo distribuir los productos de Bio4.",
        boton: "Quiero distribuir",
        mensaje: "{saludo}vi tu catálogo y me interesa unirme a la distribución de Bio4. ¿Me cuentas cómo funciona?",
      },
      {
        icono: "lucide:share-2",
        titulo: "Compártelo con más gente",
        texto: "Manda este catálogo a quien le pueda interesar.",
        boton: "Compartir catálogo",
      },
    ],
  },
};
