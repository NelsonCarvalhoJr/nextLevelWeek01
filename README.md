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

Arquivo **./mobile/src/services/api.ts**

```javascript
// Substituir <server_ip_address> pelo endereço IP em que está executando o server
const api = axios.create({
	baseURL: 'http://<server_ip_address>:3333'
})
```