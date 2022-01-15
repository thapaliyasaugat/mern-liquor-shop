import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AdminAdd from "./pages/adminAdd/AdminAdd";
import AdminOrder from "./pages/adminOrder/AdminOrder";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = user?.isAdmin
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/cart" component={Cart} />

        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/login-register" component={!user ? Login : Home} /> :
        <Route path="/checkout" component={user ? Checkout : Login} /> :
        <Route path="/orders" component={user ? Orders : Login} /> :
        <Route path="/admin/orders" component={admin ? AdminOrder : Login} /> :
        <Route path="/admin/add-product" component={admin ? AdminAdd : Login} /> :

      </Switch>
      <ToastContainer position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
      />
    </BrowserRouter>

  );
};

export default App;