import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`

export const Message = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;

  background-color: ${({ $type }) =>
    $type === 'success' ? '#d4edda' : '#f8d7da'};

  color: ${({ $type }) =>
    $type === 'success' ? '#155724' : '#721c24'};

  border: 1px solid
    ${({ $type }) =>
    $type === 'success' ? '#c3e6cb' : '#f5c6cb'};
`

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #222b45;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  h3 {
    color: #fff;
    font-size: 18px;
    margin: 0;
  }

  span {
    color: #8ee3a1;
    font-size: 11px;
    background: #183d32;
    padding: 6px 9px;
    border-radius: 20px;
  }
`

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 220px;
  overflow-y: auto;
`

export const ChatMessage = styled.div`
  align-self: ${({ $role }) =>
    $role === 'user' ? 'flex-end' : 'flex-start'};

  background: ${({ $role }) =>
    $role === 'user' ? '#4568dc' : '#35415f'};

  color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  max-width: 85%;
  font-size: 14px;
  line-height: 1.5;
  overflow-wrap: anywhere;
`

export const ChatForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;
    border-radius: 8px;
    border: none;
    padding: 12px;
    outline: none;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 0 16px;
    background: #4568dc;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`