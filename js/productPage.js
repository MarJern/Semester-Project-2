import createMenu from "./components/createMenu.js";
import { productDetails } from "./components/productsdetailpage/productDetails.js";
import { productName, breadcrumbName, setTitle, setMeta } from "./components/productsdetailpage/productName.js";

createMenu();
breadcrumbName();
productName();
productDetails();
setTitle();
setMeta();