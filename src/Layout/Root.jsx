import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;