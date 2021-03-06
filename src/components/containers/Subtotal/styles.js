import css from 'styled-jsx/css';

export default css`
  .zygoteSubLine {
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.9em;
    margin-top: 20px;
    color: #aaa;
  }
  @media (min-width: 900px) {
    .zygoteSubLine div:first-of-type {
      float: left;
    }
    .zygoteSubLine div:nth-of-type(2) {
      float: right;
    }
  }
`;
