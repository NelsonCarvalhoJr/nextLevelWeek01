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