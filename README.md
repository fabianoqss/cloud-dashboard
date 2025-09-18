# Dashboard Unificado de Nuvens

## 📝 Descrição
O **Dashboard Unificado de Nuvens** é uma aplicação web que integra **Google Drive** e **OneDrive** em uma única interface.  
Permite aos usuários listar, enviar e baixar arquivos de ambas as contas, além de coletar métricas de desempenho para análise comparativa.  

O projeto é desenvolvido em **React (frontend)** e **Java + Spring Boot (backend)**, utilizando OAuth 2.0 para autenticação nas nuvens.

---

## 🎯 Funcionalidades Principais

- **Autenticação OAuth** com Google Drive e OneDrive.
- **Listagem unificada de arquivos** das duas nuvens.
- **Upload e download de arquivos** com medição de tempo de execução.
- **Dashboard de estatísticas** com gráficos comparativos (tempo médio de upload/download).
- Estrutura modular para facilitar manutenção e evolução futura.

---

## 🏗️ Estrutura do Projeto


### Frontend
- `src/components/` → Componentes reutilizáveis (tabela, upload, sidebar).  
- `src/pages/` → Telas principais (Login, Dashboard, Estatísticas).  
- `src/services/` → Serviços para integração com backend e APIs externas.  
- `src/hooks/` → Hooks personalizados.  
- `src/context/` → Contexto global para autenticação e estado.  

### Backend
- `src/main/java/.../controller/` → Endpoints REST.  
- `src/main/java/.../service/` → Regras de negócio (upload, download, métricas).  
- `src/main/java/.../model/` → Entidades do banco de dados.  
- `src/main/java/.../repository/` → Acesso ao banco (Spring Data JPA).  
- `src/main/java/.../dto/` → Objetos de transferência de dados entre frontend e backend.

---

## ⚙️ Tecnologias Utilizadas

- **Frontend:** React.JS , React Router,Tailwind CSS,  JavaScript e TypeScript.
- **Backend:** Java, Spring Boot, Spring Data JPA, OAuth 2.0.  
- **Banco de Dados:** PostgreSQL ou MySQL.  
- **Controle de Versão:** Git + GitHub.  

---

## 🚀 Como Executar o Projeto

### 1. Backend

```bash
cd backend
./mvnw spring-boot:run
```
### 2. Frontend

```bash
cd frontend
npm install       # Instala dependências
npm start         # Inicia aplicação React

```
