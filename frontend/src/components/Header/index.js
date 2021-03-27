import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

const Header = () => {
    return (
        <Container>
            <Content>
                <nav>
                    <strong>GODELIVERY</strong>
                    <NavLink to="/orders" activeClassName="selected" >
                        ENCOMENDAS
                    </NavLink>
                    <NavLink to="/deliverymans" activeClassName="selected">
                        ENTREGADORES
                    </NavLink>
                    <NavLink to="/recipients" activeClassName="selected">
                        DESTINATÁRIOS
                    </NavLink>
                </nav>
                <aside>
                    <span>Admin</span>
                    <button>sair do sistema</button>
                </aside>
            </Content>
        </Container>
    )
}

export default Header;