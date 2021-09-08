# Controle de vendas

Descrição para executar o projeto e utilizar a sua API.


### Instalação


Abra o projeto e execute (Caso o Yarn já esteja instalado):
```
yarn install
```
Esse comando vai baixar as dependências do projeto projeto.

Para executar a aplicação:
```
yarn dev:server
```

### Requisitos da plataforma:

* Só pode ser acessível pelos vendedores a partir de um login e senha
    * Para ter acesso aos endpoints é necessário autenticação por token .
    * Para obter o token é necessario enviar uma requisição post para o endpoint http://localhost:2222/session/ com email e password no body. Exemplo:
    ```
    {
    "email": "joanlopes30@gmail.com",
	"password":"123456"
    } 
    
    ```
e necessário copiar o token retornado pela requisição, e adicionar a um Bearer token para autentificar;

    * O projeto em questão é executado com um banco de dados sqlite3 já com alguns dados cadastrados e o usuário a cima já esta cadastrado para testes. 
* Deve listar os pedidos e os produtos
    * Para listar os produtos enviar requisição com o método GET para o endpoint http://localhost:2222/lot/. Não esquecer do token no cabeçalho para autenticação e permissão.
    * Para listar os pedidos enviar requisição com o método GET para o endpoint http://localhost:2222/product/. Não esquecer do token no cabeçalho para autenticação e permissão.
* Necessário poder ver e editar os detalhes dos pedidos e dos produtos:
    * Para vê detalhes de um pedido enviar requisição GET para http://localhost:2222/demand/pk/. A palavra chave "pk" deve ser substituida pelo ID do produto desejado.
    
        Para alterar um campo deve-se enviar uma requisição do tipo PATCH para http://localhost:2222/pedidos/pk/. No body deve conter o novo valor do campo, exemplo:
            
            ```
       {
        "personId":12345638911,
        "salesmanId":14,
        "productId":2,
        "value":12223.32
       }
            ```
   
    * Para detalhes dos produtos é só seguir os mesmos passos realizado para pedidos. Endpoint http://localhost:2222/produtos/pk/
* Possibilidade de gerar um relatório detalhado de pedidos, que possa ser ordenado por valor, ou data de compra. O relatório precisa ser paginado.
    * Exemplo de endpoint com  para o relatório: http://localhost:8000/demand/byvalue/page .
    
    

        



## Executado com

* [Sqlite3] 
* [typescript]
* [Node]
* [Express}
* [typeorm]


