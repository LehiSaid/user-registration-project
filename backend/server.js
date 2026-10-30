import express from 'express';
import cors from 'cors';
import { PrismaClient } from "./generated/prisma/client.js";

const app = express()

app.use(express.json()) // para ler o corpo da requisição em formato JSON
app.use(cors())

const prisma = new PrismaClient();

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
  try {
    console.log("BODY RECEBIDO:", req.body)

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name
      }
    })

    res.status(201).json(user)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

app.put('/usuarios/:id', async (req, res) => {

    req.params.id
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })


    res.status(200).json(user)
    })

    app.delete('/usuarios/:id', async (req, res) => {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: 'Usuário deletado com sucesso!'})
    })

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
