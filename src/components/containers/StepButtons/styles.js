import css from 'styled-jsx/css';

export default css`
  .zygoteBtn {
    background-color: #000;
    outline: 0;
    border: 0;
    color: #fff;
    padding: 13px 20px;
    min-width: 130px;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .zygoteStepBtns {
    margin: 20px;
    display: block;
  }
  .zygoteNext {
    width: 100%;
  }
  .zygoteNext:hover {
    background-color: #666;
  }
  .zygotePrev {
    background-color: #bbb;
    width: 100%;
    margin-bottom: 20px;
  }
  .zygotePrev:hover {
    background-color: #ddd;
  }
  @media (min-width: 900px) {
    .zygoteStepBtns .zygoteBtn {
      width: auto;
    }
    .zygotePrev {
      float: left;
    }
    .zygoteNext {
      margin-top: 0;
      float: right;
    }
  }
`;
