import styled from 'styled-components';

export const FeedbackWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const FeedBaclList = styled.li``;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;

  color: #008080;
  text-shadow: 1px 1px 1px #d1c4c4;

  font-size: 20px;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 10px;
  border-color: black;
  box-shadow: rgba(216, 225, 215, 0.24) 0px 3px 8px;
  &:hover {
    transform: scale(1.1); /* Збільшуємо на 10% при наведенні */
  }
`;
