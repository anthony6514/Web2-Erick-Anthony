
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  stock: number;
}


export interface ApiResponse {
  success: boolean;
  data: Product[];
  count: number;
  total: number;
}


export const MOCK_API_PRODUCTS: ApiResponse = {
  "success": true,
  "data": [
    {
      "id": "dcc0642f-c09c-413e-bb0d-c210ecdfa35b",
      "name": "Chaqueta Impermeable",
      "price": 59.99,
      "category": "Ropa",
      "description": "Chaqueta resistente al agua y viento, ideal para aventuras al aire libre.",
      "imageUrl": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      "stock": 25
    },
    {
      "id": "d4a2e04b-97dd-4e3d-bd6b-8f08e351e261",
      "name": "Zapatillas Urbanas",
      "price": 79.99,
      "category": "Calzado",
      "description": "Comodidad y estilo para tu día a día con suela antideslizante.",
      "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "stock": 42
    },
    {
      "id": "9cf1567c-f7ea-4de8-9a03-1d55feed233e",
      "name": "Lámpara de Diseño",
      "price": 45.00,
      "category": "Hogar",
      "description": "Lámpara moderna de escritorio con luz LED regulable.",
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71Xa0fzUiGL._AC_UL375_SR375,375_.jpg",
      "stock": 12
    },
    {
      "id": "edcc6d3f-e9ee-45fc-b556-42ed70354ece",
      "name": "Cafetera Express",
      "price": 120.00,
      "category": "Electrohogar",
      "description": "Prepara el mejor café en casa con presión de 15 bares.",
      "imageUrl": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
      "stock": 8
    },
    {
      "id": "493ea182-f0da-4446-b313-09c4f468994c",
      "name": "Reloj de Pulsera",
      "price": 150.00,
      "category": "Accesorios",
      "description": "Reloj de acero inoxidable resistente al agua y diseño clásico.",
      "imageUrl": "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
      "stock": 15
    },
    {
      "id": "1d4394b2-34cf-4120-9013-f2c3573ed0c5",
      "name": "Skateboard Pro",
      "price": 89.99,
      "category": "Deportes",
      "description": "Tabla de madera de arce con ruedas de alta resistencia.",
      "imageUrl": "https://i5.walmartimages.com/seo/31-Complete-Skateboard-Kids-7-Layer-Canadian-Maple-Double-Kick-Deck-Skateboards-Grunge-geometric-pattern-girls-boys-fashion-textile-Boys-Skate-Board_2b6b84b2-c566-44e2-87b2-bd225c940e95.3c372854970c0e9b3fbf0e1284d7d8c3.jpeg",
      "stock": 10
    },
    {
      "id": "bc14b37b-3645-416f-a9b2-3dbbcf678ac5",
      "name": "Cámara Vintage",
      "price": 299.00,
      "category": "Fotografía",
      "description": "Cámara analógica restaurada para coleccionistas y amantes de lo retro.",
      "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      "stock": 5
    },
    {
      "id": "98a708e1-326e-496b-a016-4558abb0673c",
      "name": "Perfume Signature",
      "price": 85.00,
      "category": "Belleza",
      "description": "Fragancia exclusiva con notas amaderadas y cítricas.",
      "imageUrl": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      "stock": 30
    },
    {
      "id": "76255a18-bfc5-42b5-963c-95c307197af7",
      "name": "Set de Herramientas",
      "price": 49.99,
      "category": "Ferretería",
      "description": "Maletín con 100 piezas esenciales para el hogar.",
      "imageUrl": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500",
      "stock": 20
    },
    {
      "id": "d6357f35-14bc-46cd-9b3d-a8df4078c63f",
      "name": "Mochila Viajera",
      "price": 65.00,
      "category": "Accesorios",
      "description": "Amplia capacidad y compartimentos para todas tus pertenencias.",
      "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "stock": 60
    }
  ],
  "count": 10,
  "total": 10
};