import React from 'react';
import "./Header.scss";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    // eslint-disable-next-line no-unused-vars
    const [{cart, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">

            <Link to="/">
                <img className="header_logo" src="https://live.staticflickr.com/65535/51112999687_4ff00a4b37_k.jpg" alt="amazon_logo"/>
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">

                {/* <div className="header_option">
                    <span className="header_optionLineOne"></span>
                    <span className="header_optionLineTwo"></span>
                </div> */}

                <Link to={!user && '/login'}>

                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello { !user ? "Guest" : user.email}</span>
                        <span className="header_optionLineTwo">{ user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                    
                </Link>

                <Link to="/orders">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">&Orders</span>
                    </div>  
                </Link>

                <Link to="/">
                    <div className="header_option">
                        <span className="header_optionLineOne">Our</span>
                        <span className="header_optionLineTwo">Blog</span>
                    </div>
                </Link>


                <Link to="/checkout">
                    <div className="header_optionCart">
                        <ShoppingCartOutlinedIcon />
                        <span className="header_optionLineTwo header_cartCount" >{cart?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
