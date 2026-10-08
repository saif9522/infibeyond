# Infibeyond – General Merchandise Store (React)

React 18 + Vite + React Router. Same design, products and features as the HTML version,
now split into reusable components.

## Run it
```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```
To publish, upload the **contents of `dist/`** to your web host (infibeyond.com).
A ready-built `dist/` is included. It must be served by a web server; opening
`dist/index.html` straight from your computer will not work (browsers block it).

## Folder structure
```
public/images/              product photos (lowercase-with-hyphens.webp)
src/
  main.jsx                  entry point
  App.jsx                   providers + routes
  styles/global.css         all styles and the 3 themes
  data/products.js          product catalog, photo list, departments
  context/
    CartContext.jsx         cart, totals, add / update / clear
    ThemeContext.jsx        theme picker (teal, night, lime) + light/dark
    ToastContext.jsx        "Added to cart" messages
  hooks/
    useLocalStorage.js      remember state between visits
    useShopFilters.js       search / filters / sort stored in the URL
    useCountdown.js         Halloween countdown
  utils/
    format.js               money, discount %, stock status
    filterProducts.js       search, filter and sort logic
    productArt.js           fallback drawings for products without a photo
    storage.js              safe localStorage helpers
  pages/
    HomePage  ShopPage  ProductPage  CartPage  CheckoutPage  OrderSuccessPage  NotFoundPage
  components/
    layout/   Layout Header TopBar SearchBar ThemePicker CartButton DepartmentNav MoreMenu Footer ScrollToTop
    home/     HeroCarousel PromoTile Perks DepartmentGrid HalloweenCountdown ProductTabs
              BrandWall Newsletter SectionHeader
    shop/     ShopHero FiltersSidebar PriceRangeFilter ShopToolbar ActiveFilters
    product/  ProductCard HomeProductCard ProductGrid ProductImage PriceTag StockStatus
              ProductGallery ProductSpecs BuyBox ProductStage
    cart/     CartLine OrderSummary CheckoutField
    common/   Icon Logo Pill QuantitySelector EmptyState
```

## Pages (URLs)
`#/` home · `#/shop` all products · `#/shop?dept=Automotive+Care&q=stp&sort=price-asc` filtered views
· `#/product/gm010` product details · `#/cart` · `#/checkout` · `#/order-success`

## Editing products
- Prices and stock: edit `src/data/products.js` (`price`, `compareAt` for the original price, `stock`).
- New photo: put `product-name.webp` in `public/images/`, then add
  `"Product Name": "product-name.webp"` to `IMAGES` in `src/data/products.js`.

Toy Halloween Pumpkin, Bowl TTST010 and Pure Eye 6CT still use a drawing instead of a photo.

## Orders
Checkout saves orders in the visitor's browser and shows a confirmation.
To receive orders yourself, connect checkout to an email service or backend.
