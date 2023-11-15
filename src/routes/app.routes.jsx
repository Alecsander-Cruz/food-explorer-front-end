import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish-details/:id" element={<DishDetails />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}
