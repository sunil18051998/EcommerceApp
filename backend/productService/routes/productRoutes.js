import express from "express";

const router = express.Router();

// const featuredProducts = [
//     {
//       "id": "PROD001",
//       "name": "Wireless Bluetooth Headphones",
//       "price": 49.99,
//       "description": "Over-ear headphones with noise-canceling and high-quality audio.",
//       "image": "headphones_001.jpg"
//     },
//     {
//       "id": "PROD002",
//       "name": "Smartwatch with Fitness Tracker",
//       "price": 79.99,
//       "description": "Waterproof smartwatch with heart rate monitor and activity tracking.",
//       "image": "smartwatch_002.png"
//     },
//     {
//       "id": "PROD003",
//       "name": "Portable Bluetooth Speaker",
//       "price": 29.99,
//       "description": "Compact and powerful Bluetooth speaker for indoor and outdoor use.",
//       "image": "speaker_003.jpeg"
//     },
//     {
//       "id": "PROD004",
//       "name": "Ergonomic Office Chair",
//       "price": 129.00,
//       "description": "Adjustable office chair with lumbar support for comfortable seating.",
//       "image": "chair_004.gif"
//     },
//     {
//       "id": "PROD005",
//       "name": "15.6-inch Laptop",
//       "price": 599.00,
//       "description": "Powerful laptop with Intel Core i5 processor and 8GB RAM.",
//       "image": "laptop_005.webp"
//     },
//     {
//       "id": "PROD006",
//       "name": "Wireless Mouse",
//       "price": 19.99,
//       "description": "Comfortable and responsive wireless mouse for everyday use.",
//       "image": "mouse_006.bmp"
//     },
//     {
//       "id": "PROD007",
//       "name": "Mechanical Keyboard",
//       "price": 89.00,
//       "description": "High-quality mechanical keyboard for a tactile typing experience.",
//       "image": "keyboard_007.tiff"
//     },
//     {
//       "id": "PROD008",
//       "name": "USB Type-C Cable",
//       "price": 9.99,
//       "description": "Durable and fast-charging USB Type-C cable (1 meter).",
//       "image": "cable_008.ico"
//     },
//     {
//       "id": "PROD009",
//       "name": "Smartphone Tripod",
//       "price": 14.50,
//       "description": "Flexible tripod stand for smartphones with remote shutter.",
//       "image": "tripod_009.svg"
//     },
//     {
//       "id": "PROD010",
//       "name": "Reusable Water Bottle",
//       "price": 12.75,
//       "description": "Insulated stainless steel water bottle (750ml).",
//       "image": "bottle_010.heic"
//     },
//     {
//       "id": "PROD011",
//       "name": "Coffee Maker",
//       "price": 39.50,
//       "description": "Automatic drip coffee maker with programmable timer.",
//       "image": "coffeemaker_011.raw"
//     },
//     {
//       "id": "PROD012",
//       "name": "Toaster Oven",
//       "price": 65.00,
//       "description": "Compact toaster oven with multiple cooking functions.",
//       "image": "toasteroven_012.cr2"
//     },
//     {
//       "id": "PROD013",
//       "name": "Blender",
//       "price": 55.75,
//       "description": "Powerful blender for smoothies and food processing.",
//       "image": "blender_013.avif"
//     },
//     {
//       "id": "PROD014",
//       "name": "Digital Kitchen Scale",
//       "price": 22.99,
//       "description": "Precise digital kitchen scale for accurate measurements.",
//       "image": "scale_014.jp2"
//     },
//     {
//       "id": "PROD015",
//       "name": "Cookware Set (5 pieces)",
//       "price": 149.00,
//       "description": "Non-stick cookware set including pots and pans.",
//       "image": "cookware_015.jxl"
//     },
//     {
//       "id": "PROD016",
//       "name": "Throw Pillow",
//       "price": 18.25,
//       "description": "Soft and decorative throw pillow for home decor.",
//       "image": "pillow_016.hdr"
//     },
//     {
//       "id": "PROD017",
//       "name": "Area Rug",
//       "price": 99.99,
//       "description": "Modern area rug for living room or bedroom.",
//       "image": "rug_017.webp"
//     },
//     {
//       "id": "PROD018",
//       "name": "Table Lamp",
//       "price": 34.50,
//       "description": "Stylish table lamp with adjustable brightness.",
//       "image": "lamp_018.gif"
//     },
//     {
//       "id": "PROD019",
//       "name": "Wall Art Print",
//       "price": 27.00,
//       "description": "Framed abstract wall art print (12x16 inches).",
//       "image": "artwork_019.png"
//     },
//     {
//       "id": "PROD020",
//       "name": "Scented Candle",
//     }
// ];

const products = [
    {
        "id": "PROD001",
        "name": "Wireless Bluetooth Headphones",
        "price": 49.99,
        "description": "Over-ear headphones with noise-canceling and high-quality audio. Perfect for music lovers.",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 25
    },
    {
        "id": "PROD002",
        "name": "Smart Watch",
        "price": 199.99,
        "description": "Feature-rich smartwatch with health tracking and notifications.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 15
    },
    {
        "id": "PROD003",
        "name": "Coffee Maker",
        "price": 79.99,
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Kitchen",
        "stock": 30
    },
    {
        "id": "PROD004",
        "name": "Yoga Mat",
        "price": 29.99,
        "description": "High-quality yoga mat with non-slip surface.",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Sports",
        "stock": 45
    },
    {
        "id": "PROD005",
        "name": "Smart Lamp",
        "price": 59.99,
        "description": "Voice-controlled smart lamp with color changing capabilities.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Home",
        "stock": 20
    },
    {
        "id": "PROD001",
        "name": "Wireless Bluetooth Headphones",
        "price": 49.99,
        "description": "Over-ear headphones with noise-canceling and high-quality audio. Perfect for music lovers.",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 25
    },
    {
        "id": "PROD002",
        "name": "Smart Watch",
        "price": 199.99,
        "description": "Feature-rich smartwatch with health tracking and notifications.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 15
    },
    {
        "id": "PROD003",
        "name": "Coffee Maker",
        "price": 79.99,
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Kitchen",
        "stock": 30
    },
    {
        "id": "PROD004",
        "name": "Yoga Mat",
        "price": 29.99,
        "description": "High-quality yoga mat with non-slip surface.",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Sports",
        "stock": 45
    },
    {
        "id": "PROD005",
        "name": "Smart Lamp",
        "price": 59.99,
        "description": "Voice-controlled smart lamp with color changing capabilities.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Home",
        "stock": 20
    },
    {
        "id": "PROD001",
        "name": "Wireless Bluetooth Headphones",
        "price": 49.99,
        "description": "Over-ear headphones with noise-canceling and high-quality audio. Perfect for music lovers.",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 25
    },
    {
        "id": "PROD002",
        "name": "Smart Watch",
        "price": 199.99,
        "description": "Feature-rich smartwatch with health tracking and notifications.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 15
    },
    {
        "id": "PROD003",
        "name": "Coffee Maker",
        "price": 79.99,
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Kitchen",
        "stock": 30
    },
    {
        "id": "PROD004",
        "name": "Yoga Mat",
        "price": 29.99,
        "description": "High-quality yoga mat with non-slip surface.",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Sports",
        "stock": 45
    },
    {
        "id": "PROD005",
        "name": "Smart Lamp",
        "price": 59.99,
        "description": "Voice-controlled smart lamp with color changing capabilities.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Home",
        "stock": 20
    },
    {
        "id": "PROD001",
        "name": "Wireless Bluetooth Headphones",
        "price": 49.99,
        "description": "Over-ear headphones with noise-canceling and high-quality audio. Perfect for music lovers.",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 25
    },
    {
        "id": "PROD002",
        "name": "Smart Watch",
        "price": 199.99,
        "description": "Feature-rich smartwatch with health tracking and notifications.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Electronics",
        "stock": 15
    },
    {
        "id": "PROD003",
        "name": "Coffee Maker",
        "price": 79.99,
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Kitchen",
        "stock": 30
    },
    {
        "id": "PROD004",
        "name": "Yoga Mat",
        "price": 29.99,
        "description": "High-quality yoga mat with non-slip surface.",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Sports",
        "stock": 45
    },
    {
        "id": "PROD005",
        "name": "Smart Lamp",
        "price": 59.99,
        "description": "Voice-controlled smart lamp with color changing capabilities.",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "category": "Home",
        "stock": 20
    }
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    res.json(product);
});

router.get("/featured", (req, res) => {
    res.json(products);
});

export default router;