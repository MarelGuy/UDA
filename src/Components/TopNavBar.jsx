import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function TopNavBar() {
    const routes = [
        { name: "Storia", path: "/storia" },
        { name: "Diritto", path: "/diritto" },
        { name: "Inglese", path: "/inglese" },
        { name: "Informatica", path: "/informatica" },
        { name: "Sistemi e reti", path: "/sistemi-e-reti" },
        { name: "Telecomunicazioni", path: "/telecomunicazioni" },
        { name: "TPSIT", path: "/tpsit" },
        { name: "Religione", path: "/religione" },
        { name: "Crediti", path: "/crediti" },
    ];

    return (
        <Navbar
            container
            expand="md"
            light
        >
            <NavbarBrand href="/storia">
                UDA
            </NavbarBrand>
            <Nav className="ms-auto" navbar tabs>
                {routes.map(route => (
                    <NavItem key={route.name}>
                        {window.location.pathname === route.path
                            ? <NavLink active href={route.path}>
                                {route.name}
                            </NavLink>
                            : <NavLink href={route.path}>
                                {route.name}
                            </NavLink>
                        }

                    </NavItem>
                ))}
            </Nav>
        </Navbar>
    )
}

export default TopNavBar
