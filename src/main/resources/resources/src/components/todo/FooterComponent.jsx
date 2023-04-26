import { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

function FooterComponent() {

    const authContext = useContext(AuthContext);

    return (
        <footer className='footer'>
            <div className='container'>
 
            </div>
        </footer>
    );
}

export default FooterComponent;