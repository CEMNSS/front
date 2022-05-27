import { BrowserRouter, Route, Routes } from "react-router-dom"

import Registration from "../account/registration"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
