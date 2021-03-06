import css from 'styled-jsx/css';

export default css`
  .zygoteShipLine {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.9em;
    margin: 0;
    color: #aaa;
  }
  @media (min-width: 900px) {
    .zygoteShipLine div:first-of-type {
      float: left;
    }
    .zygoteShipLine div:nth-of-type(2) {
      float: right;
    }
  }
`;
