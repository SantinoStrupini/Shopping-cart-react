import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../styles/NavBarComponent.css'



export const NavbarComponent = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">Ecommerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className="nav-link" aria-current="page" href="#">Products</NavLink>

                        </div>
                        <div className="navbar-nav">
                            <NavLink to='/cart' className="nav-link" aria-current="page" href="#">Cart</NavLink>

                        </div>

                    </div>
                    <NavLink className='cart-icon' to='cart'>
                        <Badge badgeContent={shoppingList.length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>

                </div>
            </nav>
        </>
    )
}
