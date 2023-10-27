import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoutesComponents() {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutesComponents;
