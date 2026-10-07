# Plano de Implementação — Formulário de Orçamento via WhatsApp

## Objetivo
Implementar no site Dr Clean um formulário profissional para o visitante solicitar orçamento pelo WhatsApp, gerando uma mensagem personalizada com os dados preenchidos.

## Regras do projeto
- [x] Alterar somente a branch `manutencao`.
- [x] Manter HTML5, CSS3 e JavaScript puro.
- [x] Não criar backend, banco de dados ou API.
- [x] Usar o número de WhatsApp já configurado no `script.js`.
- [x] Preservar o layout, identidade visual e funcionalidades existentes.
- [x] Implementar um bloco por vez.
- [x] Após cada bloco: revisar, testar e refinar antes de avançar.

---

## Bloco 1 — Auditoria e definição do fluxo
**Objetivo:** analisar a estrutura atual e definir onde o formulário será inserido.

### Tarefas
- [x] Revisar `index.html`, `styles.css` e `script.js`.
- [x] Identificar a melhor seção para o formulário.
- [x] Verificar como o WhatsApp já é acionado.
- [x] Definir fluxo de preenchimento → validação → geração da mensagem → WhatsApp.
- [x] Garantir que não haverá conflito com funcionalidades existentes.

### Resultado da auditoria
- **Estrutura atual:** o site usa HTML5, CSS3 e JavaScript puro. Parte relevante do conteúdo é montada dinamicamente pelo `script.js` por meio de funções de renderização e montagem dos elementos.
- **WhatsApp existente:** a função `waUrl(message)` centraliza a geração do link `wa.me`. Os CTAs existentes utilizam atributos `data-wa-message` ou `data-wa-service`, tratados por delegação de eventos no documento.
- **Número utilizado:** o formulário deverá reutilizar `CONFIG.whatsappNumber`, sem criar um segundo número ou uma nova configuração.
- **Local recomendado:** inserir o formulário dentro da seção **Contato**, antes do bloco atual de CTA e informações de contato, mantendo a nova conversão próxima dos pontos de contato existentes. O formulário não será colocado no hero para preservar a hierarquia e evitar excesso de elementos na primeira dobra.
- **Fluxo definido:** preenchimento → validação no frontend → montagem de mensagem personalizada → abertura do WhatsApp em nova aba/janela.
- **Integração:** a nova lógica deverá reutilizar `waUrl()` e evitar duplicação da lógica de criação do link.
- **Compatibilidade:** o botão flutuante, CTAs existentes, links de serviços, menu, FAQ, slider antes/depois e demais funcionalidades devem permanecer inalterados.
- **Frontend apenas:** nenhum dado será armazenado no site e nenhuma API, backend ou banco de dados será adicionado.
- **Escopo do bloco:** esta etapa é exclusivamente de auditoria e planejamento. Nenhum formulário ou comportamento novo foi implementado no código do site.
- **Próxima etapa:** o Bloco 2 criará somente a estrutura HTML sem implementar ainda a montagem da mensagem ou a integração final com o WhatsApp.

### Resultado esperado
Fluxo definido, compatível com a arquitetura atual e pronto para implementação.

**Status: ✅ Concluído, revisado e refinado.**

---

## Bloco 2 — Estrutura HTML do formulário
**Objetivo:** criar a estrutura sem alterar o comportamento existente.

### Campos
- Nome
- Serviço desejado
- Tipo de estofado
- Quantidade
- Cidade/bairro
- Melhor período para atendimento
- Observação opcional

### Tarefas
- [x] Criar formulário semântico.
- [x] Usar labels associados aos campos.
- [x] Definir campos obrigatórios.
- [x] Criar botão de ação com CTA claro.
- [x] Adicionar área de feedback preparada para a próxima etapa.

### Implementação
- Formulário inserido na seção **Contato**, sem alterar os CTAs existentes.
- Campos estruturados: nome, serviço, tipo de estofado, quantidade, cidade/bairro, período e observação opcional.
- Labels estão associados aos respectivos controles por `for`/id.
- Campos obrigatórios usam `required` e `aria-required`.
- Quantidade aceita somente valores inteiros a partir de 1.
- Observação possui limite de 500 caracteres.
- Botão usa `type="button"` nesta etapa para evitar submissão/recarregamento antes da implementação da lógica nos próximos blocos.
- Área `aria-live` foi preparada para mensagens de estado.
- Nenhuma regra de CSS específica ou lógica de WhatsApp foi adicionada neste bloco.

### Resultado esperado
Formulário estruturado, semântico e pronto para receber o comportamento e o refinamento visual dos próximos blocos.

**Status: 🟡 Implementado e aguardando revisão.**

---

## Bloco 3 — Design e responsividade
**Objetivo:** integrar o formulário ao visual profissional do Dr Clean.

### Tarefas
- [ ] Estilizar campos, labels e botão.
- [ ] Manter identidade visual atual.
- [ ] Garantir boa leitura em celular.
- [ ] Garantir boa apresentação em desktop.
- [ ] Evitar excesso de elementos visuais.
- [ ] Preservar espaçamento e hierarquia da página.

### Resultado esperado
Formulário visualmente integrado e responsivo.

---

## Bloco 4 — Validação dos dados
**Objetivo:** impedir envio incompleto ou inválido.

### Tarefas
- [ ] Validar campos obrigatórios.
- [ ] Validar nome.
- [ ] Validar seleção dos serviços.
- [ ] Validar quantidade.
- [ ] Validar cidade/bairro.
- [ ] Informar erros de forma clara.
- [ ] Impedir envio quando houver dados inválidos.

### Resultado esperado
Usuário recebe orientação clara e só prossegue com dados mínimos válidos.

---

## Bloco 5 — Montagem da mensagem do WhatsApp
**Objetivo:** transformar os dados do formulário em uma mensagem organizada.

### Estrutura esperada
Saudação + identificação + serviço + tipo de estofado + quantidade + localização + período + observação.

### Tarefas
- [ ] Criar função exclusiva para montar a mensagem.
- [ ] Usar os dados reais preenchidos.
- [ ] Manter texto profissional e objetivo.
- [ ] Codificar corretamente a mensagem para URL.
- [ ] Evitar informações vazias ou desnecessárias.

### Resultado esperado
Mensagem pronta para ser enviada pelo WhatsApp.

---

## Bloco 6 — Integração com WhatsApp
**Objetivo:** abrir o WhatsApp com a mensagem personalizada.

### Tarefas
- [ ] Usar o número configurado no `CONFIG`.
- [ ] Abrir o WhatsApp com a mensagem preenchida.
- [ ] Manter o botão flutuante existente.
- [ ] Evitar duplicação de lógica.
- [ ] Impedir múltiplos envios acidentais durante o processamento.

### Resultado esperado
Clique no botão do formulário abre o WhatsApp com todos os dados preenchidos.

---

## Bloco 7 — Experiência de uso e conversão
**Objetivo:** tornar o formulário simples e orientado à conversão.

### Tarefas
- [ ] Revisar textos dos campos.
- [ ] Melhorar CTA.
- [ ] Reduzir fricção no preenchimento.
- [ ] Destacar que o orçamento é solicitado pelo WhatsApp.
- [ ] Manter o formulário objetivo.

### Resultado esperado
Fluxo rápido, claro e profissional para geração de leads.

---

## Bloco 8 — Acessibilidade e segurança do frontend
**Objetivo:** garantir qualidade técnica.

### Tarefas
- [ ] Revisar labels e foco por teclado.
- [ ] Garantir mensagens de erro acessíveis.
- [ ] Respeitar reduced motion.
- [ ] Evitar inserir conteúdo HTML não confiável a partir dos campos.
- [ ] Não expor dados sensíveis.
- [ ] Revisar possíveis erros no console.

### Resultado esperado
Formulário acessível, seguro dentro do escopo frontend e sem erros desnecessários.

---

## Bloco 9 — Testes completos
**Objetivo:** validar o fluxo em diferentes cenários.

### Testes
- [ ] Envio com todos os campos válidos.
- [ ] Campos obrigatórios vazios.
- [ ] Dados inválidos.
- [ ] Observação vazia.
- [ ] Mensagem longa.
- [ ] Celular.
- [ ] Desktop.
- [ ] Navegação por teclado.
- [ ] Botão flutuante do WhatsApp.
- [ ] Console sem erros relacionados à implementação.

### Resultado esperado
Fluxo funcionando de ponta a ponta.

---

## Bloco 10 — Auditoria final e refinamento
**Objetivo:** fazer o raio-X final antes de considerar a implementação concluída.

### Tarefas
- [ ] Revisar HTML, CSS e JavaScript.
- [ ] Procurar código duplicado ou desnecessário.
- [ ] Confirmar que funcionalidades anteriores continuam funcionando.
- [ ] Confirmar responsividade.
- [ ] Confirmar acessibilidade.
- [ ] Confirmar integração com WhatsApp.
- [ ] Corrigir falhas encontradas.
- [ ] Fazer commit descritivo na branch `manutencao`.

### Resultado esperado
Formulário pronto para uso em produção, sem alterar a `main`.

---

## Regra de revisão após cada bloco

> Veja se está tudo certo e refine. Revise todo o bloco implementado, verifique se está correto, funcional, responsivo e coerente com o projeto. Identifique erros, falhas, código desnecessário ou pontos que possam ser melhorados. Corrija e refine o que for necessário, sem alterar funcionalidades já definidas ou fugir do escopo do projeto. Ao finalizar, confirme o que foi revisado e se o bloco está pronto para seguir para a próxima etapa.
