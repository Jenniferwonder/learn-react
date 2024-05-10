// Using useState
import { PRODUCTS } from './data/productData'
import FilterTable from './components/FilterTable'
// import Header from "./../../../components/Header";
export default function ProductTableApp() {
  return (
    <>
      {/* <Header category={"Think in React"} title={"Product Table"} /> */}
      <h1>Product Table</h1>
      <FilterTable products={PRODUCTS} />
    </>
  )
}

// const PRODUCTS = [
// 	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
// 	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
// 	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
// 	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
// 	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
// 	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];
