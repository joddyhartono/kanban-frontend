import { Routes, Route } from "react-router";
import Board from "./pages/Board";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
    </Routes>
  );
};

export default AppRoutes;
