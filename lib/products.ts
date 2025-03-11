export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isSale?: boolean
  isTopSeller?: boolean
}

// Sample product data
export const products: Product[] = [
  {
    id: "1",
    name: "Classic White ",
    description: "Essential cotton t-shirt in classic white",
    price: 19.99,
    image: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035",
    category: "mens-clothing",
    isTopSeller: true,
  },
  {
    id: "2",
    name: "Floral Summer Dress",
    description: "Light and breezy floral print dress",
    price: 49.99,
    originalPrice: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "womens-clothing",
    isSale: true,
  },
  {
    id: "3",
    name: "Kids Dinosaur Hoodie",
    description: "Fun dinosaur print hoodie for kids",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "kids-wear",
    isTopSeller: true,
  },
  {
    id: "4",
    name: "Family Pack - Basic Tees",
    description: "Set of 4 basic t-shirts for the whole family",
    price: 59.99,
    originalPrice: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "combo",
    isSale: true,
  },
  {
    id: "5",
    name: "Premium Zip Hoodie",
    description: "Comfortable zip-up hoodie in premium cotton",
    price: 44.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "hoodies",
    isTopSeller: true,
  },
]

// Helper functions to get filtered products
export function getTopSellers() {
  return products.filter((product) => product.isTopSeller)
}

export function getSaleProducts() {
  return products.filter((product) => product.isSale)
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

