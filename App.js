import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1``;

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {

  const [pct, setPct] = useState(10);
  const [conta, setConta] = useState(0);

  return (
    <>
      <Title>Calculadora de Gorjeta</Title>

      <p>Quanto deu a conta?</p>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />
      
      <p>Qual a porcentagem de gorjeta?</p>
      <Input type="number" value={pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />
      
      <hr/>

      {conta > 0 &&
        <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta ({pct}%): R$ {(pct/100) * conta}</p>
          <h3>Total: R$ {conta + ((pct/100) * conta)}</h3>
        </>
      }

    </>
  );
}

export default App;