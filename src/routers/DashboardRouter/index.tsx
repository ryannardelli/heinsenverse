import { Route, Routes } from "react-router";
import { Dashboard } from "../../pages/Dashboard";

export function DashboardRouter() {
  return (
      <Routes>
        {/* rotas para usuário comum */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-posts" />
        <Route path="/create-post" />
        <Route path="/profile" />
        <Route path="/notifications" />

        {/* rotas para admin */}
        <Route path="/dashboard/admin" />
        <Route path="/dashboard/admin/posts" />
        <Route path="/dashboard/admin/post/:id" />
        <Route path="/dashboard/admin/users" />
        <Route path="/dashboard/admin/comments" />
        <Route path="/dashboard/admin/analytics" />
      </Routes>
  );
}
