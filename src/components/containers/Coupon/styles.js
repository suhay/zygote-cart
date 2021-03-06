import css from 'styled-jsx/css';

export default css`
  .zygoteCouponLine {
    width: 100%;
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.9em;
    margin: 0;
    color: #aaa;
  }
  .zygoteCouponLine label {
    margin-bottom: 5px;
    display: none;
    cursor: pointer;
  }
  .zygoteCouponLine.zygoteShow label {
    display: inline-block;
  }
  .zygoteCouponLine input {
    width: 100%;
    height: 40px;
    font-size: 1em;
    outline: none;
    text-align: center;
    margin: 0;
    border: 0;
    cursor: pointer;
    background: transparent;
    padding: 0;
    display: inline-block;
  }
  .zygoteCouponLine input:focus {
    border: 1px solid #000;
    outline: none;
    cursor: text;
  }
  span {
    cursor: pointer;
  }
  @media (min-width: 900px) {
    .zygoteCouponLine > div {
      float: right;
    }
    .zygoteCouponLine label {
      margin-bottom: 0;
      margin-right: 10px;
    }
    .zygoteCouponLine input {
      width: 125px;
      text-align: right;
    }
    .zygoteCouponLine.zygoteShow input {
      text-align: center;
    }
  }
`;
