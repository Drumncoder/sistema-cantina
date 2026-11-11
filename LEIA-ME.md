# Cantina Escolar – como colocar no ar (com login)

## Ordem certa (siga nesta ordem para nada parar de funcionar)

### A. No Firebase – ativar o login
1. No menu da esquerda: **Segurança > Authentication** (ou "Authentication"). Clique em **Vamos começar**.
2. Na aba **Método de login**, escolha **E-mail/senha**, ative a primeira chave (não a de "link por e-mail") e **Salve**.
3. Aba **Usuários > Adicionar usuário**: crie uma conta para você e uma para cada tio/tia. O e-mail pode ser inventado (ex.: tia.maria@cantina.com), é só o "nome de usuário". Anote as senhas.
4. Aba **Configurações > Ações do usuário**: desmarque a opção que permite as pessoas criarem conta ("Ativar criação (cadastro)") e salve. Assim só quem você cadastrou entra.

### B. No Netlify – enviar a versão nova
1. Extraia o zip. Abra o site no Netlify > **Deploys** > arraste a pasta **cantina-app** inteira.
2. Espere "Published". Se aparecer o botão **Make public**, clique nele.
3. Abra o link: tem que aparecer a tela de **e-mail e senha**. Entre com uma das contas.
4. Confira se os alunos, o cardápio e as vendas aparecem.

### C. No Firebase – trancar o banco (último passo)
1. **Firestore Database > Regras**. Apague tudo, cole o texto abaixo e **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
2. Teste de novo no site: continua funcionando para quem está logado.

## Uso no dia a dia
- Cada aparelho pede e-mail e senha uma vez e fica conectado. O botão **Sair** (no alto da tela) desconecta o aparelho.
- Se um funcionário sair da escola: Firebase > Authentication > Usuários > desative ou apague a conta dele.
- Esqueceu a senha? Em Authentication > Usuários, clique nos três pontinhos da conta e use **Redefinir senha** (com e-mail inventado, peça para eu orientar, ou crie a conta de novo).
- Baixe uma **cópia completa** (aba Resumo) de vez em quando e guarde no Drive.

## Instalar como aplicativo
- **Android (Chrome):** menu ⋮ > **Instalar aplicativo**.
- **iPhone (Safari):** Compartilhar > **Adicionar à Tela de Início**.
- **Computador (Chrome/Edge):** ícone de instalar na barra de endereço.

## Trazer dados de outra versão
Na versão antiga: Resumo > Baixar cópia completa. Na nova: Resumo > Restaurar cópia.

## Uso sem internet (viagem, sem sinal)
- **Antes de viajar:** abra o aplicativo com internet **duas vezes** e entre na conta, para o celular guardar tudo.
- **Sem sinal:** o aplicativo abre normalmente. Vendas, depósitos, correções e cadastros ficam salvos no aparelho. Aparece o aviso amarelo "Sem internet".
- **Quando a internet voltar:** tudo é enviado sozinho. Deixe o aplicativo aberto por um instante até o aviso sumir.
- **Não dá para fazer sem internet:** entrar na conta pela primeira vez, baixar a cópia completa e restaurar cópia.
- Se dois aparelhos trabalharem sem internet ao mesmo tempo, os saldos e as vendas se somam corretamente depois. Só a lista "últimas movimentações" do perfil pode ficar incompleta.
- No iPhone, use o ícone instalado na tela inicial (o Safari comum pode apagar os dados guardados depois de uns dias sem uso).
