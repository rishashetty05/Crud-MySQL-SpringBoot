
import { AppBar , Toolbar, Typography, styled } from '@mui/material';

//adding navigation link to NavBar
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #111111;
`
//const Tabs = styled(Typography)`
const Tabs = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : inherit;
    text-decoration : none
`

const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/" >Code for Interview</Tabs>
                <Tabs to="/all">All Users</Tabs>
                <Tabs to="/add">Add User</Tabs>
            </Toolbar>
        </Header>
        
    )
}

export default Navbar;