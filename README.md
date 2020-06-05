# Next Level Week 01

Projeto Ecoleta: Projeto de Coleta de Resíduos. Projeto da Next Level Week da Rocket Seat.

## Estrutura do Projeto

| Pasta | Descrição |
| ----------- | ----------- |
| ./server | API REST feita em Express e TypeScript e banco de dados SQLite |
| ./web | Interface web em RectJS e TypeScript |
| ./mobile | Interface mobile em ReactNative e TypeScript |


## Entidades

| Entidades | Atributos |
| ----------- | ----------- |
| points (pontos de coleta) | image, name, email, whatsapp, latitude, longitude, city, uf |
| items (itens para coleta) | image, title |
| point_items (relacionamento points x items) | point_id, item_id |

## Funcionalidades

 * Cadastrar ponto de coleta
 * Listar os itens de coleta
 * Listar pontos (filtro por estado / cidade / itens)
 * Listar ponto de coleta específico

## Iniciando o projeto

Após clonar o projeto, é necessário atualizar as dependências e efetuar as migrações do banco de dados.

Baixar, migrar banco e executar Server (a partir da raiz; precisa ser executado primeiro)

```bash
cd web
npm install
npm run knex:migrate
npm run knex:seed
npm run dev
```

Baixar e executar Web (a partir da raiz)
```bash
cd web
npm install
```

Baixar e executar Mobile (a partir da raiz)
```bash
cd mobile
yarn

## Configurações

Arquivo **./server/src/controllers/ItemController.ts**

```javascript
// Substituir <server_ip_address> pelo endereço IP em que está executando o server (não pode ser localhost para permitir acesso pelo mobile)
const serializedItems = items.map(item => ({
	id: item.id,
	title: item.title,
	image_url: `http://<server_ip_address>:3333/uploads/${item.image}`,
}))
```

Arquivo **./server/src/controllers/PointController.ts**

```javascript
// Substituir <server_ip_address> pelo endereço IP em que está executando o server (não pode ser localhost para permitir acesso pelo mobile)
const serializedPoints = points.map(point => {
	return {
		...point,
		image_url: `http://<server_ip_address>:3333/uploads/${point.image}`,
	}
})

// ...

const serializedPoints = {
	...point,
	image_url: `http://<server_ip_address>:3333/uploads/${point.image}`,
}
```

Arquivo **./mobile/src/services/api.ts**

```javascript
// Substituir <server_ip_address> pelo endereço IP em que está executando o server
const api = axios.create({
	baseURL: 'http://<server_ip_address>:3333'
})
```