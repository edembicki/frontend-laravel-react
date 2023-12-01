# Projeto criado com Create React App

[Create React App](https://github.com/facebook/create-react-app).

# Tecnologias utilizadas
PHP 8.2+ \
MySQL 8+ \
Laravel 8 \
ReactJS 17.0.2 \
react-bootstrap 2.9.1 \
Axios 1.6.2 \
draft-js 0.11.7 \
react-draft-wysiwyg 1.13.7 \

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

