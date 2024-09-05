import './App.css';
import { Button, Flex, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Login from './Services/Login';
import { getUserNameFromToken } from './Auth/DecodeJWT';

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit() {
    const loginResponse = await Login(userName, password);

    if (loginResponse?.error_description) {
      alert(loginResponse.error_description)      
    }
    else {
      const userName = getUserNameFromToken(loginResponse.access_token)
      alert('Welcome ' + userName)
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <Input className="Field" placeholder="Ingrese su usuario" prefix={<UserOutlined />} onChange={(e) => setUserName(e.target.value)} value={userName} />

        <Input.Password className="Field" placeholder="Ingrese su contraseña" onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />

        <Flex gap="small" wrap>
          <Button type="primary" onClick={onSubmit}>Iniciar Sesión</Button>
        </Flex>

      </header>
    </div>
  );
}

export default App;
