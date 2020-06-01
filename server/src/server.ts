import express from 'express'

const app = express()
app.get('/users', (request, response) => {
	console.log('listagem de usuarios')
	response.json([
		{
			'user': 'Nelson',
		},
		{
			'user': 'João',
		},
		{
			'user': 'Maria',
		},
	])
})

app.listen(3333)

// Bibliotecas importadas precisam vir com seus tipos definidos
// Para isso, será necessário adicionar a biblioteca de definição de tipos (npm i @types/nome_biblioteca -D)