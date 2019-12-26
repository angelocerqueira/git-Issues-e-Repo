import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    text-transform: lowercase;
    background: #7159c1;
    padding: 5px 15px;
    color: #fff;
    border-radius: 5px;
    border: solid 1px #7159c1;
    transition: ease-in-out 0.3s;
    align-self: flex-end;

    &:hover {
      /* background: #fff;
      color: #7159c1; */
      transform: scale(1.1);
    }
  }
  img {
    max-width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 30px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 300px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
      margin-right: 15px;
    }

    div {
      flex: 1;
      strong {
        font-size: 16px;
        a {
          color: #eee;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: green;
          color: #fff;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          margin-left: 10px;
          padding: 2px 10px;
        }
      }
      p {
        margin: 5px 0 0 0;
        font-size: 12px;
        color: #777;
        text-transform: uppercase;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  button {
    border: 1px solid #7159c1;
    background: #7159c1;
    color: #fff;
    padding: 3px 10px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  button {
    border: 1px solid #7159c1;
    background: #7159c1;
    color: #fff;
    padding: 3px 10px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover:last-child {
      transform: translateX(5px);
    }
    &:hover:first-child {
      transform: translateX(-5px);
    }
  }
  span {
    color: #fff;
  }
`;
