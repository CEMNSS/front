import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../account/login"
import PersonalDocuments from "../account/registration/personalDocuments"
import Registration from "../account/registration/personalData"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route
                    path="/personalDocuments"
                    element={<PersonalDocuments />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
