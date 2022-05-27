import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../account/login"
import Registration from "../account/registration"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
