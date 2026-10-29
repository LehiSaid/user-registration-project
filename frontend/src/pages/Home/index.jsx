import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel, 
  Message,
} from './styles'


import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const [message, setMessage] = useState({
    text: '',
    type: ''
  })
  const query = new URLSearchParams(window.location.search)
  const userId = query.get('id')

  useEffect(() => {
    async function getUser() {
      if (!userId) return

      try {
        const { data } = await api.get(`/usuarios`)

        const user = data.find((user) => user.id === userId)

        if (user) {
          inputName.current.value = user.name
          inputAge.current.value = user.age
          inputEmail.current.value = user.email
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
      }
    }

    getUser()
  }, [userId])

  const navigate = useNavigate()

  async function registerNewUser() {
    const name = inputName.current.value.trim()
    const age = Number(inputAge.current.value)
    const email = inputEmail.current.value.trim()

    // Validar o nome
    if (!name) {
      setMessage({
        text: 'Por favor, informe o nome do usuário.',
        type: 'error'
      })
      inputName.current.focus()
      return
    }

    // Validar a idade
    if (
      !inputAge.current.value ||
      !Number.isInteger(age) ||
      age <= 0
    ) {
      setMessage({
        text: 'Informe uma idade válida, maior que zero.',
        type: 'error'
      })
      inputAge.current.focus()
      return
    }

    // Validar o e-mail
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!emailIsValid) {
      setMessage({
        text: 'Por favor, informe um e-mail válido.',
        type: 'error'
      })
      inputEmail.current.focus()
      return
    }

    const user = {
      name,
      age,
      email
    }

    try {
      if (userId) {
        await api.put(`/usuarios/${userId}`, user)

        setMessage({
          text: 'Usuário atualizado com sucesso!',
          type: 'success'
        })
      } else {
        await api.post('/usuarios', user)

        setMessage({
          text: 'Usuário cadastrado com sucesso!',
          type: 'success'
        })
      }

      // A mensagem será exibida antes de navegar.
      setTimeout(() => {
        navigate('/lista-de-usuarios')
      }, 1500)

    } catch (error) {
      console.error('Erro ao salvar usuário:', error)

      setMessage({
        text: error.response?.data?.message ||
          'Não foi possível salvar o usuário. Tente novamente.',
        type: 'error'
      })
    }
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title> {userId ? 'Editar Usuário' : 'Cadastrar Usuário'}</Title>

        {message.text && (
          <Message $type={message.type} role="status" aria-live="polite">
            {message.text}
          </Message>
        )}

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>



        <Button type="button" onClick={registerNewUser} theme="primary">
          {userId ? 'Salvar Alterações' : 'Cadastrar Usuário'}
        </Button>

      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>

    </Container >
  )
}

export default Home