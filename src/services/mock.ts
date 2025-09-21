// filepath: src/services/mock.ts
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Cria o mock
const mock = new MockAdapter(axios, { delayResponse: 500 });

// Mock do registro
mock.onPost("/api/v1/auth/register").reply(201, {
  message: "Usuário registrado com sucesso",
});

// Mock do login
mock.onPost("/api/v1/auth/login").reply(201, {
  token: "fake-token",
  id: "1",
  role: "investor",
});

// Mock escolha de perfil
mock.onPost("/api/v1/auth/choose-role").reply(201, {
  message: "Perfil escolhido com sucesso",
});

// Mock criação de perfil investidor
mock.onPost("/api/v1/investors").reply(201, {
  message: "Perfil investidor criado",
});

// Mock criação de perfil assessor
mock.onPost("/api/v1/advisors").reply(201, {
  message: "Perfil assessor criado",
});

// Mock listagem de assessores
mock.onGet(/\/api\/v1\/advisors.*/).reply(201, {
  content: [
    { id: 1, name: "Assessor 1", email: "assessor1@email.com" },
    { id: 2, name: "Assessor 2", email: "assessor2@email.com" },
  ],
});

// Mock listagem de investidores
mock.onGet("/api/v1/investors").reply(201, [
  { id: 1, name: "Investidor 1", email: "investidor1@email.com" },
  { id: 2, name: "Investidor 2", email: "investidor2@email.com" },
]);

// Mock edição de perfil
mock.onPut(/\/api\/v1\/(investors|advisors)\/\d+/).reply(201, {
  message: "Perfil atualizado",
});

// Mock deleção de conta
mock.onDelete(/\/api\/v1\/(investors|advisors)\/\d+/).reply(201, {
  message: "Conta deletada",
});

export default mock;
