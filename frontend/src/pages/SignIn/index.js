import React, { useState, useCallback } from 'react';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, Form, Input, Button } from './styles';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return
        }

        const response = await api.get(`/users?email=${email}&password=${password}`);

        console.log(response.data);

        if (response.data) {
            history.push('/orders')
        }
    }, [email, password])

    return (
        <Container>
            <Content>
                <h1>GODELIVERY</h1>
                <Form onSubmit={handleSubmit} >
                    <Input>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="text" placeholder="example@gmail.com" onChange={e => setEmail(e.target.value)}/>
                    </Input>
                    <Input>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="***********" onChange={e => setPassword(e.target.value)}/>
                    </Input>
                    <Button type="submit" >
                        ENTRAR
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

export default SignIn;