import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdish" element={<NewDish />} />
            <Route path="/dish-edit/:id" element={<EditDish />} />
            <Route path="/dish-details/:id" element={<DishDetails />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}
