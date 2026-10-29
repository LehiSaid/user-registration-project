import styled from 'styled-components'


export const Container = styled.div`
background-color: #181f36;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
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
