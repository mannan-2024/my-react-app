import Nav from "./Nav";
import myLogo from "../assets/logo-text.png";
import SignIn from "./SignIn";


function Header()
{
    return(
        <div className="flex content-center justify-between max-w-4xl mx-auto my-3">
            <img  src={myLogo} alt="" />
            <Nav></Nav>
            <SignIn></SignIn>
        </div>
    )
}

export default Header;