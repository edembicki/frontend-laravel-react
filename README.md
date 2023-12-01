# Projeto criado com Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Inicialização Backend

Acesse o diretório Backend
### `cd Backend`

No diretório Backend, você deve executar:

Execute a criação do banco de dados padrão:
### `php artisan mysql:createdb laravel`

Depois disso, realiza a migração das tabelas necessarias:
### `php artisan migrate`

Inicie o app no modo desenvolvimento:
### `php artisan serve`

Você pode verificar o app rodando com SWAGGER em:\
Abra [http://localhost:8000/](http://localhost:8000/) no seu navegador.


## Inicialização Frontend

Acesse o diretório Frontend
### `cd Frontend`

No diretório Frontend, você deve executar:
### `npm install --legacy-peer-deps`

Inicie o app no modo desenvolvimento:
### `npm run start`

Você pode verificar o app rodando em:\
Abra [http://localhost:3000/](http://localhost:3000/) no seu navegador.

