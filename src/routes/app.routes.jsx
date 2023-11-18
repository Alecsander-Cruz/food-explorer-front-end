import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdish" element={<NewDish />} />
            <Route path="/dish-details/:id" element={<DishDetails />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}
