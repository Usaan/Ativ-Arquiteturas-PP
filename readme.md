# To-Do List implementado com 3 Arquiteturas Clássicas

Este projeto é uma atividade simples com o intuito de demonstrar a diferença de implementação em um To-Do List usando três arquiteturas: **MVC**, **MVVM** e **MVP**.

## Compartilhamento de Código

Para facilitar o desenvolvimento e evitar repetição desnecessária, este projeto utiliza pastas compartilhadas entre as três arquiteturas:

### **shared-frontend/**

Contém todo o código de apresentação (views, CSS, assets) que é idêntico nas três arquiteturas.

### **shared-backend/**

Contém o código de acesso a dados que é comum a todas as arquiteturas.

### **O que não é compartilhado?**

Cada arquitetura mantém sua camada intermediária própria, que é justamente o que as diferencia:

- **MVC:** Controllers
- **MVVM:** ViewModels
- **MVP:** Presenters

## Como Executar

```bash
docker-compose up -d
```

Acesso:

- **MVC:** http://localhost:3000
- **MVVM:** http://localhost:3001
- **MVP:** http://localhost:3002
