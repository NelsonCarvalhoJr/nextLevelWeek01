import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

// Para produção
// app.use(cors({
// 	origin: 'www.dominio.com'
// }))
app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)

/**
 * Bibliotecas importadas precisam vir com seus tipos definidos
 * Para isso, será necessário adicionar a biblioteca de definição de tipos (npm i @types/nome_biblioteca -D)
 * 
 * Rota: Endereço completo da requisição
 * Recurso: Qual entidade estamos acessando no sistema
 * 
 * GET: Buscar uma ou mais informações do back-end
 * POST: Criar uma nova informação no back-end
 * PUT: Atualizar uma informação existente no back-end
 * DELETE: Remover uma informação do back-end
 * 
 * POST http://localhost:3333/users = Cria um usuário
 * GET http://localhost:3333/users = Listar usuários
 * GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5
 * 
 * Request Param: Parâmetros que vem na própria rota que identificam um recurso
 * Query Params: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
 * Rquest Body: Parâmetros para criação/atualização de informações
 * 
 * SELECT * FROM users WHERE name = 'Nelson'
 * knex('users').where('name', 'Nelson').select('*')
 * 
 * Migrations = Histórico do banco de dados
 * 
 * Métodos crud: index, show, create, update, delete
 * 
 * Outros padrões: Service Patern, Repository Patern (Data Mapper)
 */