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

### Revisão do bloco
- A estrutura foi conferida contra a seção **Contato** e não interfere nos CTAs, chips de contato ou demais elementos existentes.
- O formulário permanece dentro do escopo do bloco: ainda não valida, monta mensagem nem abre o WhatsApp.
- O uso de `type="button"` no CTA foi mantido para impedir um envio nativo sem tratamento antes dos Blocos 4–6.
- Os controles usam classes responsivas do Tailwind já disponível no projeto, com grade em duas colunas no desktop e uma coluna em telas menores.
- Não foram identificados campos duplicados, IDs conflitantes ou lógica JavaScript desnecessária para esta etapa.
- A área de feedback permanece preparada para a validação futura, sem exibir mensagens artificiais nesta etapa.

### Resultado esperado
Formulário estruturado, semântico e pronto para receber o comportamento e o refinamento visual dos próximos blocos.

**Status: ✅ Concluído, revisado e refinado.**

---

## Bloco 3 — Design e responsividade
**Objetivo:** integrar o formulário ao visual profissional do Dr Clean.

### Tarefas
- [x] Estilizar campos, labels e botão.
- [x] Manter identidade visual atual.
- [x] Garantir boa leitura em celular.
- [x] Garantir boa apresentação em desktop.
- [x] Evitar excesso de elementos visuais.
- [x] Preservar espaçamento e hierarquia da página.

### Implementação
- Adicionadas classes próprias ao formulário para manter o refinamento visual isolado e evitar alterações acidentais em outros componentes.
- Campos receberam estados de hover e foco, contraste adequado e área de toque confortável no mobile.
- Botão recebeu destaque visual compatível com a identidade em teal e largura total no mobile.
- Desktop mantém duas colunas; telas menores passam para uma coluna usando as classes responsivas já presentes.
- O formulário mantém fundo translúcido, bordas discretas e sombra compatíveis com o bloco escuro da seção Contato.
- A preferência de movimento reduzido foi respeitada nas novas transições.
- Nenhuma validação ou integração com WhatsApp foi adicionada neste bloco.
- Na revisão final, foram padronizadas as classes visuais dos labels para que todos os campos usem o mesmo refinamento tipográfico, sem alterar a estrutura ou o comportamento do formulário.

### Resultado esperado
Formulário visualmente integrado, responsivo e preparado para receber a validação e a integração nos próximos blocos.

**Status: ✅ Concluído, revisado e refinado.**

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

### Implementação
- Adicionada validação frontend exclusiva para o formulário de orçamento.
- Campos obrigatórios são verificados antes de prosseguir.
- Nome, tipo de estofado e cidade/bairro exigem conteúdo mínimo de 2 caracteres.
- Quantidade aceita somente número inteiro maior que zero.
- Serviço e período precisam ter uma opção selecionada.
- Observação continua opcional, mas respeita o limite de 500 caracteres.
- Erros são exibidos no status do formulário e o campo inválido recebe foco.
- O campo inválido recebe aria-invalid e referencia a mensagem de status com aria-describedby.
- A validação não abre o WhatsApp e não monta a mensagem, mantendo o escopo do bloco.
- Campos inválidos recebem destaque visual adicional por meio de aria-invalid, mantendo a indicação acessível e consistente com o tema.

### Resultado esperado
Usuário recebe orientação clara e só prossegue com dados mínimos válidos.

---

## Bloco 5 — Montagem da mensagem do WhatsApp
**Objetivo:** transformar os dados do formulário em uma mensagem organizada.

### Estrutura esperada
Saudação + identificação + serviço + tipo de estofado + quantidade + localização + período + observação.

### Tarefas
- [x] Criar função exclusiva para montar a mensagem.
- [x] Usar os dados reais preenchidos.
- [x] Manter texto profissional e objetivo.
- [x] Preparar a mensagem em texto puro; a codificação para URL permanece centralizada em `waUrl()` no Bloco 6.
- [x] Evitar informações vazias ou desnecessárias.

### Revisão do bloco
- A mensagem utiliza somente dados já validados pelo Bloco 4.
- A observação é adicionada somente quando preenchida.
- Não há abertura do WhatsApp neste bloco, preservando a separação de responsabilidades.
- A codificação da mensagem não foi duplicada: continuará centralizada em `waUrl()` durante a integração.
- O conteúdo permanece curto, profissional e adequado ao atendimento pelo WhatsApp.

### Resultado esperado
Mensagem estruturada e pronta para ser integrada ao WhatsApp.

**Status: ✅ Concluído, revisado e refinado.**

---

## Bloco 6 — Integração com WhatsApp
**Objetivo:** abrir o WhatsApp com a mensagem personalizada.

### Tarefas
- [x] Usar o número configurado no `CONFIG`.
- [x] Abrir o WhatsApp com a mensagem preenchida.
- [x] Manter o botão flutuante existente.
- [x] Evitar duplicação de lógica.
- [x] Impedir múltiplos envios acidentais durante o processamento.

### Implementação
- O envio do formulário reutiliza `CONFIG.whatsappNumber` por meio da função `waUrl()` já existente.
- A mensagem montada no Bloco 5 é codificada pela própria `waUrl()`, evitando duplicação.
- O WhatsApp é aberto em nova aba/janela após a validação dos dados.
- O botão flutuante e os demais CTAs existentes permanecem independentes e preservados.
- Não foi criado backend, armazenamento ou nova integração externa.
- O botão recebe um bloqueio temporário de 1,5 segundo para evitar aberturas repetidas por cliques consecutivos.
- O código verifica se a nova janela foi bloqueada pelo navegador e informa o usuário em vez de afirmar que o WhatsApp foi aberto.

### Resultado esperado
Clique no botão do formulário abre o WhatsApp com todos os dados preenchidos.

**Status: ✅ Concluído, revisado e refinado.**

---


### Revisão do bloco
- A integração reutiliza a infraestrutura de WhatsApp já existente no projeto.
- A abertura ocorre diretamente a partir do clique do usuário, preservando compatibilidade com bloqueadores de pop-up em condições normais.
- O bloqueio temporário evita múltiplas aberturas acidentais sem deixar o botão permanentemente desabilitado.
- O formulário continua responsivo porque a mudança é comportamental e não altera o layout.
- Nenhuma funcionalidade existente foi substituída ou duplicada.

## Bloco 7 — Experiência de uso e conversão
**Objetivo:** tornar o formulário simples e orientado à conversão.

### Tarefas
- [x] Revisar textos dos campos.
- [x] Melhorar CTA.
- [x] Reduzir fricção no preenchimento.
- [x] Destacar que o orçamento é solicitado pelo WhatsApp.
- [x] Manter o formulário objetivo.

### Implementação
- Os rótulos foram simplificados para facilitar a leitura e a decisão em cada campo.
- O texto de apoio explica claramente que o WhatsApp será aberto com a mensagem pronta.
- O CTA passou a ser `Solicitar orçamento pelo WhatsApp`, deixando o próximo passo explícito.
- Os placeholders foram ajustados para orientar o preenchimento sem criar campos adicionais.
- O formulário continua com a mesma quantidade de informações e a mesma estrutura funcional.
- O estado desabilitado do botão agora possui feedback visual durante a abertura do WhatsApp.

### Resultado esperado
Fluxo rápido, claro e profissional para geração de leads.

**Status: ✅ Concluído, revisado e refinado.**

---


### Revisão do bloco
- A copy foi revisada para reduzir dúvidas e deixar o próximo passo explícito.
- O CTA comunica diretamente a ação e o canal de atendimento.
- O formulário mantém quantidade e ordem de informações coerentes com o fluxo definido.
- O campo de observação foi padronizado com a mesma classe de controle dos demais campos, garantindo foco, estados visuais e comportamento responsivo consistentes.
- O botão continua ocupando toda a largura no mobile e mantém dimensionamento adequado no desktop.
- Não foram identificados campos ou textos que exigissem remoção sem alterar o escopo definido.

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
