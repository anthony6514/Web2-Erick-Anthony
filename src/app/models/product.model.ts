
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
      "name": "Laptop Profesional",
      "price": 899.99,
      "category": "Electrónica",
      "description": "Laptop de última generación con procesador de 12 núcleos y 16GB de RAM.",
      "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      "stock": 15
    },
    {
      "id": "d4a2e04b-97dd-4e3d-bd6b-8f08e351e261",
      "name": "Auriculares Inalámbricos",
      "price": 129.99,
      "category": "Audio",
      "description": "Auriculares con cancelación de ruido y batería de 40 horas.",
      "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "stock": 42
    },
    {
      "id": "9cf1567c-f7ea-4de8-9a03-1d55feed233e",
      "name": "Monitor 4K",
      "price": 349.99,
      "category": "Pantallas",
      "description": "Monitor de 27 pulgadas con resolución 4K y panel IPS.",
      "imageUrl": "https://hp.widen.net/content/6ukjdba4wt/png/6ukjdba4wt.png?w=800&h=600&dpi=72&color=ffffff00",
      "stock": 8
    },
    {
      "id": "edcc6d3f-e9ee-45fc-b556-42ed70354ece",
      "name": "Teclado Mecánico",
      "price": 159.99,
      "category": "Periféricos",
      "description": "Teclado mecánico RGB con switches personalizados.",
      "imageUrl": "https://hp.widen.net/content/7gz8jlzkar/png/7gz8jlzkar.png?w=800&h=600&dpi=72&color=ffffff00",
      "stock": 25
    },
    {
      "id": "493ea182-f0da-4446-b313-09c4f468994c",
      "name": "Mouse Inalámbrico",
      "price": 49.99,
      "category": "Periféricos",
      "description": "Mouse con precisión de 16000 DPI y batería recargable.",
      "imageUrl": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
      "stock": 60
    },
    {
      "id": "1d4394b2-34cf-4120-9013-f2c3573ed0c5",
      "name": "Webcam HD",
      "price": 89.99,
      "category": "Video",
      "description": "Webcam 1080p con micrófono integrado para videoconferencias.",
      "imageUrl": "https://tecnit.com.ec/wp-content/uploads/2020/06/CAMARA-WEB-COOAU1080-FULL-HD-1080p-DE-2MP-CON-MICROFONO-INTEGRADO-USB-2.0.webp",
      "stock": 35
    },
    {
      "id": "bc14b37b-3645-416f-a9b2-3dbbcf678ac5",
      "name": "Powerbank 30000mAh",
      "price": 59.99,
      "category": "Accesorios",
      "description": "Cargador portátil con carga rápida para múltiples dispositivos.",
      "imageUrl": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
      "stock": 50
    },
    {
      "id": "98a708e1-326e-496b-a016-4558abb0673c",
      "name": "Cable USB-C",
      "price": 19.99,
      "category": "Cables",
      "description": "Cable USB-C de 2 metros con carga rápida 100W.",
      "imageUrl": "https://www.steren.com.ec/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/20517f371/cable-usb-a-micro-usb-tipo-cordon-de-1-m.jpg",
      "stock": 120
    },
    {
      "id": "76255a18-bfc5-42b5-963c-95c307197af7",
      "name": "Stand para Laptop",
      "price": 39.99,
      "category": "Accesorios",
      "description": "Stand ajustable de aluminio para mejor ergonomía.",
      "imageUrl": "https://promartecuador.vtexassets.com/arquivos/ids/252258-800-600?v=638959651282630000&width=800&height=600&aspect=true",
      "stock": 30
    },
    {
      "id": "d6357f35-14bc-46cd-9b3d-a8df4078c63f",
      "name": "Mochila Antirrobo",
      "price": 79.99,
      "category": "Mochilas",
      "description": "Mochila para laptop con cierre de seguridad y puerto USB.",
      "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "stock": 22
    }
  ],
  "count": 10,
  "total": 10
};