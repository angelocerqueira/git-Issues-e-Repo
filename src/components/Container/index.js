import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #222;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 10%);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
