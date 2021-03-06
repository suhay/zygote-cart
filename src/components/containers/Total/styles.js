import css from 'styled-jsx/css';

export default css`
  .zygoteTotalLine {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 0;
  }
  @media (min-width: 900px) {
    .zygoteTotalLine div:first-of-type {
      float: left;
    }
    .zygoteTotalLine div:nth-of-type(2) {
      float: right;
    }
  }
`;
