Variáveis de ambiente para executar o teste:
AUTH_SECRET=HJDSHUDFSBHFBHSDDSDSAas21
tokenJWT =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5MjA4ZTBlLWI2MDItNDg1Mi05YzU4LTI5NGM4MjdkNGNkYSIsImlhdCI6MTcyMDU4NDk0MH0.mlVjZc7-R7iFXfHeqKBtxZBcbTJNR_EAiQP4QoHU7so 

Projeto possui 4 rotas ativas:
//show -> quando id for incluso, retorna somente um item, sem id retorna todos os itens
//insert
//delete
//update

//Feito a geração de id e a autenticação das rotas, iria criar um rota de admin para gerar o token, por conta do tempo acabei gerando um token padrão que pode ser incluido no header para efetuar as solicitações
//também faltou incluir o retorno de mensagem correto quando o token está inválido ou não possui token.

