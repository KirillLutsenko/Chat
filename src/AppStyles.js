import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 5px;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #39dbaa;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  color: #39dbaa;
  transition: color 0.2s ease, background 0.3s ease;

  &:hover {
    background: #39dbaa;
    color: #fff;
  }
`;

//App styled components

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

//LoginForm styled components

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  padding: 5px;
  width: 120px;
  height: 30px;
  font-size: 12px;
  outline: none;
  border: 2px solid #39dbaa;
  border-radius: 5px;
`;

export const LoginButton = styled(Button)`
  width: 120px;
`;

//QueryMethods

export const QueryMethodsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const GetMethod = styled(Button)`
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 12px;
`
export const PostMethod = styled(GetMethod)``

//Chat styled components

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessagesArea = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 300px;
  background: rgb(57, 219, 170, 0.4);
  border-radius: 5px;
  overflow: auto;

  &::-webkit-scrollbar { width: 5px;}
  &::-webkit-scrollbar-button {  background-color: #04c98a; border-radius: 5px; }
  &::-webkit-scrollbar-track-piece { background-color: #c6c6c6;}
  &::-webkit-scrollbar-thumb { height: 30px; background-color: #04c98a; border-radius: 5px;}
`;

//CheckboxBlock styled components

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 400px;
`;

export const Online = styled.p`
  color: #04c98a;
`;

export const Offline = styled(Online)`
  color: #c6c6c6;
`;

export const Checkbox = styled.input`
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background: rgb(57, 219, 170, 0.4);
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;

  &:checked {
    background: #c6c6c6;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #04c98a;
    transform: scale(1.05);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
  }

  &:checked:before {
    right: 20px;
  }
`;

export const CheckboxField = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background: rgb(57, 219, 170, 0.4);
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;
`

export const CheckboxSlider= styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #04c98a;
  transform: scale(1.05);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`

//MessagesList styled components

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const MyMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const OtherMessages = styled(MyMessages)`
  align-items: flex-start;
`;

export const UserName = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgb(61, 55, 55, 0.6)
`;

export const MessageText = styled.pre`
  padding: 5px 15px;
  margin-bottom: 2px;
  font-style: italic;
  border-radius: 5px;
  background: #fff;
  word-break: break-all;
  color: rgb(61, 55, 55)
`;


export const DispatchTime = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
  font-size: 9px;
  color: rgb(61, 55, 55, 0.6)
`;

//SendForm styled components

export const SendFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  width: 400px;
  border: 1px solid #39dbaa;
  border-radius: 5px;
  resize: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: #c6c6c6;
  }
`;

export const SendButton = styled(Button)`
  margin-top: 5px;

  &:disabled {
    color: #c6c6c6;
    border-color: #c6c6c6;
  }
`;

