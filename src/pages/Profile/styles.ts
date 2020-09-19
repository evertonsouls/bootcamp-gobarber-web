import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: stretch;

  > header {
    background: #28262e;

    div {
      max-width: 1120px;
      height: 144px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: -176px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      margin-bottom: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  height: 186px;
  position: relative;
  margin-bottom: 32px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    border-radius: 50%;
    background: #ff9000;
    cursor: pointer;

    transition: background-color 0.2;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
