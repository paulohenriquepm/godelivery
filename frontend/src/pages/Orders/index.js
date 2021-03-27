import React, { useEffect, useState } from 'react';
import { MdSearch, MdMoreHoriz } from 'react-icons/md';

import Header from '../../components/Header';

import api from '../../services/api';

import { 
    Container,     
    Content, 
    ContentHeader, 
    SearchInput, 
    Button, 
    Table,
} from './styles';

const Orders = () => {
    const [loading, setLoading] = useState(false);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function loadOrders() {
            const response = await api.get('/orders');

            if (response.data) {
                setOrders(response.data);
            }

            setLoading(false);
        }

        loadOrders();
    }, [])

    return (
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <h1>Gerenciando encomendas</h1>
                    <div>
                        <SearchInput>
                            <input placeholder="Pesquise uma encomenda" />
                            <MdSearch />
                        </SearchInput>
                        <Button>
                            CADASTRAR
                        </Button>
                    </div>
                </ContentHeader>
                <Table>
                    <thead>
                        <tr>
                            <th className="id" />
                            <th className="recipient">Destinatário</th>
                            <th className="deliveryman">Entregador</th>
                            <th className="city">Cidade</th>
                            <th className="state">Estado</th>
                            <th className="status">Status</th>
                            <th className="actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && (
                            orders.map(order => (
                                <tr>
                                    <td className="id">#{order.id}</td>
                                    <td className="recipient">{order.recipient}</td>
                                    <td className="deliveryman">{order.deliveryman}</td>
                                    <td className="city">{order.city}</td>
                                    <td className="state">{order.state}</td>
                                    <td className={`status ${order.status}`}>
                                        <div>{order.status_label}</div>
                                    </td>
                                    <td className="actions" ><MdMoreHoriz /></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Content>
        </Container>
    )
}

export default Orders;