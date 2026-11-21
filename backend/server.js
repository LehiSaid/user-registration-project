import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import { PrismaClient } from "./generated/prisma/index.js";

const app = express()

app.use(express.json()) // para ler o corpo da requisição em formato JSON
app.use(cors())

const prisma = new PrismaClient();

function gerarRespostaDemo(pergunta, estatisticas) {
    const texto = pergunta
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();

    if (
        texto.includes('mais velho') ||
        texto.includes('maior idade') ||
        texto.includes('mais idoso')
    ) {
        if (!estatisticas.usuarioMaisVelho) {
            return 'Ainda não existem usuários cadastrados.';
        }

        return `O usuário mais velho é ${estatisticas.usuarioMaisVelho.name}, com ${estatisticas.usuarioMaisVelho.age} anos.`;
    }

    if (
        texto.includes('mais jovem') ||
        texto.includes('mais novo') ||
        texto.includes('menor idade')
    ) {
        if (!estatisticas.usuarioMaisJovem) {
            return 'Ainda não existem usuários cadastrados.';
        }

        return `O usuário mais jovem é ${estatisticas.usuarioMaisJovem.name}, com ${estatisticas.usuarioMaisJovem.age} anos.`;
    }

    if (texto.includes('media')) {
        return `A média de idade dos usuários cadastrados é ${estatisticas.mediaIdades} anos.`;
    }

    if (
        texto.includes('maior de idade') ||
        texto.includes('maiores de idade') ||
        texto.includes('maiores de 18') ||
        texto.includes('18 anos')
    ) {
        return `Existem ${estatisticas.maioresDeIdade} usuários maiores de idade.`;
    }

    if (
        texto.includes('quantos') ||
        texto.includes('total') ||
        texto.includes('cadastrados')
    ) {
        return `Atualmente existem ${estatisticas.totalUsuarios} usuários cadastrados.`;
    }

    return 'Posso informar o total de usuários, a média de idade, a quantidade de maiores de idade e identificar os usuários mais velho e mais jovem.';
}

const openai = process.env.AI_DEMO_MODE === 'true'
    ? null
    : new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json(users)

    } catch (error) {
        console.error('Erro ao buscar usuários:', error)

        res.status(500).json({
            error: 'Não foi possível buscar os usuários.'
        })
    }
})

app.post('/usuarios', async (req, res) => {
    try {

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
        res.status(500).json({
            error: 'Não foi possível cadastrar o usuário.'
        })
    }
})

app.put('/usuarios/:id', async (req, res) => {
    try {
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

    } catch (error) {
        console.error('Erro ao atualizar usuário:', error)

        res.status(500).json({
            error: 'Não foi possível atualizar o usuário.'
        })
    }
})

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            message: 'Usuário deletado com sucesso!'
        })

    } catch (error) {
        console.error('Erro ao deletar usuário:', error)

        res.status(500).json({
            error: 'Não foi possível deletar o usuário.'
        })
    }
})

app.post('/assistente/usuarios', async (req, res) => {
    try {
        const { pergunta } = req.body;


        // Validar a pergunta recebida
        if (!pergunta || typeof pergunta !== 'string' || !pergunta.trim()) {
            return res.status(400).json({
                error: 'Envie uma pergunta válida.'
            });
        }

        // Buscar nome e idade dos usuários
        const usuarios = await prisma.user.findMany({
            select: {
                name: true,
                age: true
            }
        });

        // Calcular estatísticas
        const totalUsuarios = usuarios.length;

        const somaIdades = usuarios.reduce(
            (total, usuario) => total + usuario.age,
            0
        );

        const mediaIdades = totalUsuarios > 0
            ? (somaIdades / totalUsuarios).toFixed(1)
            : 0;

        const maioresDeIdade = usuarios.filter(
            usuario => usuario.age >= 18
        ).length;

        const usuarioMaisVelho = usuarios.length > 0
            ? usuarios.reduce((maisVelho, usuario) =>
                usuario.age > maisVelho.age ? usuario : maisVelho
            )
            : null;

        const usuarioMaisJovem = usuarios.length > 0
            ? usuarios.reduce((maisJovem, usuario) =>
                usuario.age < maisJovem.age ? usuario : maisJovem
            )
            : null;

        const estatisticas = {
            totalUsuarios,
            mediaIdades,
            maioresDeIdade,
            usuarioMaisVelho,
            usuarioMaisJovem
        };

        if (process.env.AI_DEMO_MODE === 'true') {
            const resposta = gerarRespostaDemo(pergunta, estatisticas);

            return res.status(200).json({
                resposta,
                estatisticas,
                modo: 'demonstracao'
            });
        }

        // Verificar se a OpenAI está configurada
        if (!openai) {
            return res.status(503).json({
                error: 'O assistente com IA não está configurado.'
            });
        }

        // Enviar a pergunta e as estatísticas para a OpenAI
        const resposta = await openai.responses.create({
            model: 'gpt-6.2-sol',
            instructions: `
                Você é um assistente de análise de cadastros.
                Responda em português brasileiro.
                Utilize exclusivamente as estatísticas fornecidas.
                Não invente informações.
                Se os dados não forem suficientes para responder,
                informe isso claramente.
            `,
            input: `
                Estatísticas dos usuários:
                ${JSON.stringify(estatisticas)}

                Pergunta: ${pergunta}
            `,
            max_output_tokens: 300
        });

        res.status(200).json({
            resposta: resposta.output_text,
            estatisticas
        });

    } catch (error) {
        console.error('Erro no assistente:', error);

        res.status(500).json({
            error: 'Não foi possível processar sua pergunta.'
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
