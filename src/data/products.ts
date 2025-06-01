import { Product, WoodType, Finish, Collection } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Horizon Dining Table",
    shortDescription: "Elegantly designed oak dining table with natural finish",
    description: "The Horizon Dining Table exemplifies the beauty of solid oak with its natural finish that highlights the wood's unique grain patterns. Each table is meticulously crafted by our artisans to create a centerpiece that brings warmth and character to your dining space.",
    price: 1899,
    images: [
      "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6186505/pexels-photo-6186505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Oak,
    finish: Finish.Natural,
    collection: Collection.Modern,
    dimensions: {
      width: 180,
      depth: 90,
      height: 76
    },
    weight: 85,
    inStock: true,
    featured: true,
    story: "Our Horizon Dining Table was inspired by the natural beauty of rolling countryside landscapes. Each piece begins with sustainably sourced oak, carefully selected for its distinctive grain patterns. Our master craftsman, Thomas, has perfected the art of bringing out the wood's natural character through traditional hand-finishing techniques passed down through generations.",
    craftingVideo: "https://www.youtube.com/embed/JQ3rRRmUCQQ",
    reviews: [
      {
        id: 1,
        userId: 101,
        userName: "Sarah Johnson",
        rating: 5,
        comment: "This table is absolutely stunning! The craftsmanship is impeccable, and it has become the centerpiece of our dining room.",
        date: "2024-03-15"
      },
      {
        id: 2,
        userId: 102,
        userName: "Michael Rodriguez",
        rating: 4,
        comment: "Beautiful table with excellent construction. Delivery took a bit longer than expected, but worth the wait.",
        date: "2024-02-28"
      }
    ]
  },
  {
    id: 2,
    name: "Serenity Bookshelf",
    shortDescription: "Rustic walnut bookshelf with adjustable shelves",
    description: "The Serenity Bookshelf combines functionality with the timeless beauty of walnut. Featuring adjustable shelves and a distressed finish, this piece adapts to your storage needs while adding rustic charm to any space.",
    price: 1299,
    images: [
      "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2228583/pexels-photo-2228583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Walnut,
    finish: Finish.Distressed,
    collection: Collection.Rustic,
    dimensions: {
      width: 120,
      depth: 40,
      height: 180
    },
    weight: 65,
    inStock: true,
    featured: true,
    story: "The Serenity Bookshelf was born from our desire to create furniture that tells a story. Each shelf is crafted from walnut trees that have lived for over 80 years. Our craftspeople use traditional distressing techniques to give each piece a sense of history and character, ensuring that no two bookshelves are exactly alike.",
    reviews: [
      {
        id: 3,
        userId: 103,
        userName: "Emily Chen",
        rating: 5,
        comment: "Absolutely beautiful bookshelf! The wood grain is stunning and the craftsmanship is top-notch.",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 3,
    name: "Tranquility Coffee Table",
    shortDescription: "Minimalist cherry coffee table with sleek lines",
    description: "Our Tranquility Coffee Table embodies minimalist design with its clean lines and glossy cherry finish. The floating shelf adds functionality without compromising the table's elegant silhouette.",
    price: 899,
    images: [
      "https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Cherry,
    finish: Finish.Glossy,
    collection: Collection.Minimalist,
    dimensions: {
      width: 120,
      depth: 60,
      height: 45
    },
    weight: 30,
    inStock: true,
    featured: false,
    story: "The Tranquility Coffee Table represents our philosophy that true beauty lies in simplicity. Inspired by Japanese minimalism, each table is designed to bring a sense of calm to your living space. The glossy finish is achieved through a 15-step hand-polishing process that brings out the rich, warm tones of the cherry wood.",
    craftingVideo: "https://www.youtube.com/embed/OHk1_aT5sU0",
    reviews: [
      {
        id: 4,
        userId: 104,
        userName: "David Wilson",
        rating: 4,
        comment: "Beautiful coffee table that complements our living room perfectly. The glossy finish really makes the cherry wood pop!",
        date: "2024-02-20"
      }
    ]
  },
  {
    id: 4,
    name: "Heritage Bed Frame",
    shortDescription: "Classic mahogany bed frame with hand-carved details",
    description: "The Heritage Bed Frame showcases the beauty of mahogany with traditional hand-carved details. This classic piece becomes the focal point of any bedroom, offering both luxury and lasting comfort.",
    price: 2499,
    images: [
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Mahogany,
    finish: Finish.Oiled,
    collection: Collection.Classic,
    dimensions: {
      width: 160,
      depth: 210,
      height: 120
    },
    weight: 95,
    inStock: false,
    featured: true,
    story: "The Heritage Bed Frame is a tribute to the artistry of traditional furniture making. Each bed frame takes over 120 hours to complete, with our master carvers spending days perfecting the intricate details by hand. The mahogany is sourced from responsible forestry programs and finished with natural oils that enhance its rich color and protect it for generations to come.",
    reviews: [
      {
        id: 5,
        userId: 105,
        userName: "Jennifer Taylor",
        rating: 5,
        comment: "This bed frame is absolutely magnificent! The hand-carved details are stunning, and the quality is unmatched. Worth every penny!",
        date: "2024-01-15"
      }
    ]
  },
  {
    id: 5,
    name: "Workshop Desk",
    shortDescription: "Industrial pine desk with steel accents",
    description: "The Workshop Desk blends the warmth of pine with industrial steel elements. Perfect for home offices, this desk offers ample workspace and practical storage solutions with its built-in drawers.",
    price: 1199,
    images: [
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4050422/pexels-photo-4050422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4061396/pexels-photo-4061396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Pine,
    finish: Finish.Matte,
    collection: Collection.Industrial,
    dimensions: {
      width: 140,
      depth: 70,
      height: 75
    },
    weight: 55,
    inStock: true,
    featured: false,
    story: "The Workshop Desk was designed in collaboration with professional craftspeople who understand the need for a functional yet inspiring workspace. The pine top is reclaimed from century-old barns, preserving the authentic patina and character marks. The steel frame is handcrafted by our metalworker, Eliza, who welds each joint with precision and care.",
    craftingVideo: "https://www.youtube.com/embed/YfHT5TQmEZE",
    reviews: [
      {
        id: 6,
        userId: 106,
        userName: "Robert Chang",
        rating: 5,
        comment: "Exactly what I needed for my home office. Sturdy, spacious, and the industrial design is perfect!",
        date: "2024-03-05"
      },
      {
        id: 7,
        userId: 107,
        userName: "Olivia Martinez",
        rating: 4,
        comment: "Great desk with plenty of workspace. Assembly was straightforward, and the quality is excellent.",
        date: "2024-02-12"
      }
    ]
  },
  {
    id: 6,
    name: "Homestead Dining Chair",
    shortDescription: "Farmhouse birch dining chair with comfortable upholstery",
    description: "The Homestead Dining Chair combines the classic farmhouse aesthetic with modern comfort. Crafted from solid birch with a painted finish, each chair features premium upholstery that invites lingering conversations around the dinner table.",
    price: 399,
    images: [
      "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5910762/pexels-photo-5910762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6186545/pexels-photo-6186545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    woodType: WoodType.Birch,
    finish: Finish.Painted,
    collection: Collection.Farmhouse,
    dimensions: {
      width: 45,
      depth: 50,
      height: 90
    },
    weight: 8,
    inStock: true,
    featured: false,
    story: "The Homestead Dining Chair draws inspiration from the gathering spaces of traditional farmhouses, where comfort and durability were essential. Each chair is built using time-honored joinery techniques that ensure it will withstand daily use for generations. The upholstery fabric is woven by a local textile artist using sustainable fibers, creating a connection between your home and the skilled hands that crafted each element.",
    reviews: [
      {
        id: 8,
        userId: 108,
        userName: "Thomas Miller",
        rating: 5,
        comment: "These chairs are not only beautiful but incredibly comfortable. We purchased six for our dining room and couldn't be happier.",
        date: "2024-03-18"
      }
    ]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCollection = (collection: Collection): Product[] => {
  return products.filter(product => product.collection === collection);
};

export const getProductsByWoodType = (woodType: WoodType): Product[] => {
  return products.filter(product => product.woodType === woodType);
};

export const getProductsByFinish = (finish: Finish): Product[] => {
  return products.filter(product => product.finish === finish);
};