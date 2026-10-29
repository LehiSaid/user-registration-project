import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles";
import Trash from "../../assets/trash.svg";

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])


    async function deleteUsers(id) {
        const confirmed = window.confirm(
            'Tem certeza de que deseja excluir este usuário?'
        )

        if (!confirmed) {
            return
        }

        try {
            await api.delete(`/usuarios/${id}`)

            const updatedUsers = users.filter((user) => user.id !== id)

            setUsers(updatedUsers)
        } catch (error) {
            console.error('Erro ao excluir usuário:', error)

            window.alert('Não foi possível excluir o usuário. Tente novamente.')
        }
    }

    function editUser(user) {
        navigate(`/?id=${user.id}`)
    }

    return (
        <Container>

            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>

                {users.map((user) => (

                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://ui-avatars.com/api/?name=${user.name}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <div>
                            <button onClick={() => editUser(user)}>
                                Editar
                            </button>

                            <TrashIcon
                                src={Trash}
                                alt="Excluir"
                                onClick={() => deleteUsers(user.id)}
                            />
                        </div>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate("/")}>
                Voltar
            </Button>
        </Container>
    )
}

export default ListUsers