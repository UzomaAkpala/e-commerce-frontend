import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// publicly available messages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponents from "./components/ProtectedRoutesComponents";

// protected user pages:
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

//protected admin pages:
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChartsPage from "./pages/admin/AdminChartsPage";
import AdminCreateNewProductPage from "./pages/admin/AdminCreateNewProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not found" />
        </Route>

        <Route element={<ProtectedRoutesComponents admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes: */}

        <Route element={<ProtectedRoutesComponents admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/charts" element={<AdminChartsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateNewProductPage />}
          />
          <Route
            path="/admin/edit-products"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />

          <Route path="/admin/order" element={<AdminOrdersPage />} />

          <Route path="/admin/products" element={<AdminProductsPage />} />

          <Route path="/admin/users-page" element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
