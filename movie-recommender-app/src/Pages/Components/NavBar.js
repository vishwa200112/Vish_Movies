// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/Logo2.png";

const NavBar = ({ isHome }) => {
    const gitRepoLink =
        "https://www.google.com/search?q=Movie+review+websites+list&sca_esv=0ee23696230f4fd0&sca_upv=1&sxsrf=ADLYWIJ22PQAD4DtAzpAgmo5U1JPklHstQ%3A1726341942540&ei=NuPlZo7cILPf1e8Ph7bVuAI&ved=0ahUKEwiOz_vxlMOIAxWzb_UHHQdbFScQ4dUDCA8&uact=5&oq=Movie+review+websites+list&gs_lp=Egxnd3Mtd2l6LXNlcnAiGk1vdmllIHJldmlldyB3ZWJzaXRlcyBsaXN0MgYQABgWGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBEirjQFQkhZYkIwBcAR4AZABAZgB_AWgAZgkqgEMMC4yMi4zLjEuNi0xuAEDyAEA-AEBmAIeoAKhIKgCFMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIQEC4YgAQYxwEYJxiKBRivAcICChAjGIAEGCcYigXCAhAQLhiABBjRAxhDGMcBGIoFwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMYgwEYigXCAh0QLhiABBjHARiKBRivARiXBRjcBBjeBBjgBNgBAcICBxAjGCcY6gLCAg0QLhjRAxjHARgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICExAuGIAEGEMYtAIYigUY6gLYAQHCAgoQABiABBhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICBRAAGIAEwgIKEAAYgAQYFBiHAsICCxAAGIAEGJECGIoFmAMWiAYBkAYKugYGCAEQARgUkgcINC4yMi4zLjGgB6vOAQ&sclient=gws-wiz-serp";
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="" />
            </Link>

            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a
                    href={gitRepoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="header-btn1 bouncy"
                >
                    <i className=""></i> Top Review Sites
                </a>
            )}
        </div>
    );
};

export default NavBar;
