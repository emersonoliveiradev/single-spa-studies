# single-spa-studies

My repository to start studies about microframeworks with Single-Spa

# Configuração básica

## Root

$ npx create-single-spa
$ yarn start

## App react-single

Micro frontend simples
$ npx create-single-spa
single-spa aplication / parcel
$ yarn start -- --port 8500
Acessado a partir da rota definida no registerApplication

## App react-multiple

Micro frontend com sistema de rotas
$ npx create-single-spa
single-spa aplication / parcel
$ yarn start -- --port 8501
Acessado a partir da rota definida no registerApplication

## Parcel react-parcel (Carregar um app dentro de outro)

Micro frontend com
$ npx create-single-spa
single-spa aplication / parcel
$ yarn start -- --port 8502
Acessado a partir da rota definida no registerApplication

## Parcel react-route (Carregado em outro app)

Micro frontend com
$ npx create-single-spa
single-spa aplication / parcel
$ yarn start -- --port 8502
Acessado a partir da rota definida no registerApplication
Componente do react que sabe renderizar outros parcels
Utilizar o import Parcel from 'single-spa-react/parcel'

Cria register em \*-root-config.js
Cria import em index.ejs

## Utility utils (Não é um app, então não será necessário registrar)

$ npx create-single-spa
Utility module

### Aplication

Aplicação em si mesma

### Parcel

Aplicação que chama outra aplicação

### Utility module

utils

# Resumo

Micro frontend principal que é o single-spa e tem uma aplicação route
Que tem o formulário

Envio de eventos entre aplication e parcel

Padrão usado...
organização/projeto/contexto/evento

LazyLoad... code split
Não será apenas 1 arquivo js no pacote final
vai ter um arquivo de entrada que carrega os outros,
dai só vai carregar o que cada rota precisa

### Load de dependências compartilhadas

Em weback externals

# Para publicar

Para cada um
npm run build
server -s dist
