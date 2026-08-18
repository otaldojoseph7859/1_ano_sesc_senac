# 🖼️ Inserindo e Estilizando Imagens com HTML e CSS

Projeto educacional desenvolvido para ensinar alunos iniciantes a **inserir imagens em páginas HTML, compreender diferenças entre formatos de arquivo e aplicar estilizações básicas utilizando CSS**.

A atividade foi estruturada para que o aluno não apenas aprenda a utilizar a tag `<img>`, mas também compreenda como escolhas relacionadas a formato, tamanho, proporção e estilização afetam a apresentação visual e o desempenho de uma página web.

---

# 🎯 Sobre o projeto

O `inserindo_imagens_html` foi criado como uma atividade introdutória de **HTML e CSS**, voltada para alunos que já tiveram contato com a estrutura básica de um documento HTML e estão avançando para o uso de recursos visuais.

Neste momento da aprendizagem, o objetivo é ampliar o entendimento sobre como imagens funcionam dentro de uma página.

A atividade trabalha três ideias principais:

* como importar uma imagem utilizando HTML;
* como comparar imagens em formatos diferentes;
* como estilizar imagens utilizando propriedades básicas de CSS.

A intenção é apresentar esses conceitos de forma visual, progressiva e prática.

---

# 💡 Por que este projeto foi criado?

Inserir uma imagem em uma página HTML parece uma tarefa simples, mas envolve vários conceitos importantes.

Ao utilizar uma imagem em um site, o aluno precisa compreender:

* onde o arquivo está armazenado;
* como informar corretamente o caminho da imagem;
* como utilizar o atributo `alt`;
* como controlar largura e altura;
* como evitar deformações;
* como adicionar bordas;
* como aplicar sombras;
* como utilizar filtros;
* como combinar diferentes propriedades CSS;
* como o formato do arquivo influencia seu tamanho.

Por isso, a atividade foi criada para ir além de simplesmente apresentar:

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

O objetivo é fazer com que o aluno compreenda **como utilizar imagens de forma consciente dentro de um projeto web**.

---

# 🧠 Como cheguei a esta abordagem?

A atividade foi organizada seguindo uma progressão de dificuldade.

O aluno começa pelo conceito mais simples:

**Como colocar uma imagem dentro da página?**

Depois, avança para novas perguntas:

* o que acontece quando a mesma imagem é salva em formatos diferentes?
* como alterar o tamanho de uma imagem?
* como criar uma borda?
* como arredondar seus cantos?
* como criar uma imagem circular?
* como adicionar sombra?
* como aplicar transparência?
* como utilizar filtros?
* como impedir que uma imagem seja deformada?
* como combinar várias propriedades?

Essa progressão permite que cada novo conceito seja construído sobre o anterior.

A sequência utilizada é:

**importar → comparar → dimensionar → estilizar → combinar → experimentar**

---

# 🎓 Objetivos de aprendizagem

Ao concluir a atividade, espera-se que o aluno seja capaz de:

* inserir uma imagem em um documento HTML;
* compreender a função da tag `<img>`;
* utilizar corretamente os atributos `src` e `alt`;
* compreender caminhos relativos entre arquivos e pastas;
* relacionar a organização do projeto com o caminho utilizado no `src`;
* conectar um arquivo CSS externo ao HTML;
* utilizar classes CSS;
* controlar largura e altura de imagens;
* preservar a proporção de uma imagem;
* adicionar bordas;
* arredondar cantos;
* criar imagens circulares;
* utilizar `padding`;
* adicionar sombras;
* alterar opacidade;
* aplicar filtros básicos;
* utilizar `object-fit`;
* combinar múltiplas propriedades CSS;
* comparar imagens em diferentes formatos;
* compreender que resolução e tamanho de arquivo são conceitos diferentes;
* perceber que a escolha do formato influencia o desempenho da página;
* desenvolver autonomia na criação de estilos próprios.

---

# 🧩 Metodologias utilizadas

## Aprendizagem pela prática

Os conceitos são apresentados por meio de modificações visuais que o aluno consegue observar imediatamente no navegador.

Quando uma propriedade CSS é alterada, seu efeito pode ser comparado diretamente com o resultado anterior.

Isso ajuda a relacionar:

**código → propriedade → resultado visual**

---

## Aprendizagem Baseada em Problemas

A atividade apresenta pequenos problemas progressivos.

Por exemplo:

> Como diminuir uma imagem?

> Como arredondar seus cantos?

> Como criar um efeito de sombra?

> Como impedir que uma imagem seja deformada?

Cada problema introduz uma nova propriedade ou conceito.

---

## Comparação visual

Grande parte da atividade é baseada em comparação.

O aluno observa imagens:

* maiores e menores;
* com e sem borda;
* com bordas arredondadas;
* circulares;
* com e sem sombra;
* coloridas e em escala de cinza;
* mais ou menos transparentes.

Essa abordagem facilita a compreensão do impacto de cada propriedade CSS.

---

## Investigação

Nem todas as possibilidades de estilização precisam ser apresentadas diretamente.

O aluno pode ser incentivado a modificar valores como:

```css
width
border-radius
opacity
brightness
blur
padding
```

e observar o resultado.

A pergunta deixa de ser apenas:

> "Qual é o valor correto?"

e passa a ser:

> "O que acontece se eu alterar este valor?"

---

## Decomposição de problemas

A estilização de uma imagem pode envolver várias propriedades ao mesmo tempo.

Para facilitar o aprendizado, elas são apresentadas separadamente.

Primeiro:

* tamanho;

depois:

* borda;

depois:

* espaçamento;

depois:

* sombra;

depois:

* filtros;

e somente ao final várias propriedades são combinadas.

Essa decomposição reduz a complexidade inicial e facilita a compreensão.

---

# 📂 Estrutura do projeto

```text
inserindo_imagens_html/
│
├── css/
│   ├── style.css
│   └── correcao.css
│
├── image/
│   ├── catedral_centro_sjp.png
│   │
│   └── atividade/
│       ├── academia_senac.avif
│       ├── academia_senac.jpg
│       ├── academia_senac.png
│       ├── academia_senac.webp
│       ├── aerea_sesc.avif
│       ├── aerea_sesc.jpg
│       ├── aerea_sesc.png
│       ├── aerea_sesc.webp
│       ├── construcao_senac.avif
│       ├── construcao_senac.jpg
│       ├── construcao_senac.png
│       ├── construcao_senac.webp
│       ├── estacionamento_senac.avif
│       ├── estacionamento_senac.jpg
│       ├── estacionamento_senac.png
│       ├── estacionamento_senac.webp
│       ├── fachada_senac.avif
│       ├── fachada_senac.jpg
│       ├── fachada_senac.png
│       └── fachada_senac.webp
│
├── js/
│   └── hi.txt
│
├── index.html
├── correcao.html
└── README.md
```

---

# 🏗️ Organização da arquitetura

Desde os primeiros projetos, os alunos são incentivados a utilizar uma arquitetura básica para aplicações web.

Neste projeto, essa organização inclui pastas separadas para:

* CSS;
* imagens;
* JavaScript.

Mesmo que nem todas as pastas possuam arquivos funcionais neste momento, elas são mantidas propositalmente para reforçar a organização estrutural de um projeto.

O arquivo:

```text
js/hi.txt
```

contém uma mensagem explicando que aquela pasta será utilizada futuramente para os arquivos responsáveis pelas interações e animações do site.

Essa decisão ajuda o aluno a começar a reconhecer uma estrutura de projeto antes mesmo de estudar JavaScript.

---

# 📄 Arquivos principais

## `index.html`

Arquivo utilizado durante a atividade.

Contém a estrutura que será analisada, modificada e desenvolvida pelos alunos.

---

## `correcao.html`

Versão comentada utilizada durante o momento de explicação e correção.

O arquivo contém comentários que explicam:

* a função de cada bloco;
* as tags utilizadas;
* os atributos utilizados;
* o motivo de determinadas decisões.

---

## `style.css`

Arquivo utilizado pelos alunos para experimentar diferentes propriedades CSS.

---

## `correcao.css`

Arquivo comentado utilizado como referência durante a correção.

Além de apresentar a solução, ele explica o funcionamento das principais propriedades utilizadas na atividade.

---

# 🖼️ Tag `<img>`

A tag `<img>` é utilizada para inserir imagens em uma página HTML.

Exemplo:

```html
<img
    src="image/catedral_centro_sjp.png"
    alt="Catedral do centro de São José dos Pinhais - PR"
>
```

Diferentemente de muitas tags HTML, `<img>` não possui uma tag de fechamento.

---

# 📍 Atributo `src`

O atributo `src` informa o caminho onde está localizado o arquivo da imagem.

Exemplo:

```html
src="image/catedral_centro_sjp.png"
```

Neste caso:

```text
image/
```

representa a pasta.

E:

```text
catedral_centro_sjp.png
```

representa o arquivo.

Essa parte da atividade também ajuda a reforçar a importância da organização correta das pastas do projeto.

---

# ♿ Atributo `alt`

O atributo `alt` fornece uma descrição textual da imagem.

Exemplo:

```html
alt="Catedral do centro de São José dos Pinhais - PR"
```

Ele é importante principalmente para:

* acessibilidade;
* leitores de tela;
* situações em que a imagem não é carregada corretamente.

O objetivo é fazer com que os alunos entendam desde cedo que uma imagem não deve ser inserida apenas visualmente.

Ela também precisa possuir contexto e descrição.

---

# 🔗 Conectando o CSS

Para aplicar estilos às imagens, o HTML é conectado ao arquivo CSS utilizando:

```html
<link rel="stylesheet" href="css/style.css">
```

A tag `<link>` conecta recursos externos ao documento.

Neste projeto, ela é utilizada para carregar o arquivo responsável pelos estilos da página.

---

# 🏷️ Utilizando classes

As diferentes imagens recebem classes CSS.

Exemplo:

```html
<img
    class="imagem-pequena"
    src="image/atividade/aerea_sesc.avif"
    alt="Vista aérea do SESC de São José dos Pinhais"
>
```

A classe:

```text
imagem-pequena
```

pode ser selecionada no CSS através de:

```css
.imagem-pequena {
    width: 300px;
}
```

Isso permite aplicar estilos diferentes a imagens específicas.

---

# 📏 Alterando o tamanho

A propriedade:

```css
width
```

define a largura da imagem.

Exemplo:

```css
.imagem-pequena {
    width: 300px;
}
```

Neste projeto são apresentados diferentes valores para ajudar o aluno a comparar visualmente o resultado.

---

# 📐 `max-width`

Também utilizamos:

```css
max-width: 100%;
```

Essa propriedade impede que uma imagem ultrapasse a largura máxima disponível dentro do espaço onde está sendo exibida.

Ela também introduz uma noção inicial de adaptação a diferentes tamanhos de tela.

---

# ↕️ `height`

A propriedade:

```css
height
```

controla a altura do elemento.

Quando utilizamos:

```css
height: auto;
```

o navegador calcula automaticamente a altura proporcional à largura da imagem.

Isso ajuda a evitar deformações.

---

# 🖼️ Bordas

A propriedade:

```css
border
```

adiciona uma borda ao elemento.

Exemplo:

```css
border: 3px solid #9700d2;
```

Neste exemplo temos:

* `3px` — espessura;
* `solid` — estilo;
* `#9700d2` — cor.

---

# ⭕ `border-radius`

A propriedade:

```css
border-radius
```

permite arredondar os cantos da imagem.

Exemplo:

```css
border-radius: 20px;
```

Quando utilizamos:

```css
border-radius: 50%;
```

em uma imagem com largura e altura iguais, é possível criar uma imagem circular.

---

# 📦 `padding`

A propriedade:

```css
padding
```

cria um espaço interno entre o conteúdo e sua borda.

Exemplo:

```css
padding: 15px;
```

Ela pode ser utilizada juntamente com:

```css
background-color
```

para tornar esse espaço mais visível.

---

# 🌑 `box-shadow`

A propriedade:

```css
box-shadow
```

adiciona uma sombra ao elemento.

Exemplo:

```css
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
```

Esse exemplo também permite uma introdução visual ao conceito de:

```css
rgba()
```

que representa uma cor com controle de transparência.

---

# 👻 `opacity`

A propriedade:

```css
opacity
```

controla a transparência do elemento.

Exemplo:

```css
opacity: 0.5;
```

Os valores variam entre:

```text
0
```

e:

```text
1
```

onde:

* `0` representa totalmente transparente;
* `1` representa totalmente visível.

---

# 🎨 `filter`

A propriedade:

```css
filter
```

permite aplicar diferentes efeitos visuais.

Neste projeto são apresentados alguns exemplos.

---

## `grayscale()`

```css
filter: grayscale(100%);
```

Remove as cores da imagem.

---

## `brightness()`

```css
filter: brightness(130%);
```

Altera o brilho.

Valores maiores que `100%` aumentam o brilho, enquanto valores menores reduzem.

---

## `blur()`

```css
filter: blur(3px);
```

Aplica um efeito de desfoque.

---

# ✂️ `object-fit`

A propriedade:

```css
object-fit
```

controla como a imagem deve se comportar quando definimos largura e altura específicas.

Exemplo:

```css
.imagem-cortada {
    width: 500px;
    height: 300px;
    object-fit: cover;
}
```

O valor:

```css
cover
```

faz com que a imagem preencha todo o espaço disponível preservando sua proporção.

Dependendo das dimensões, algumas partes podem ser cortadas.

---

# 📊 Comparando formatos de imagem

Uma das partes principais da atividade é demonstrar que:

> **resolução e tamanho de arquivo não representam a mesma coisa.**

Para isso, utilizamos a mesma fotografia salva em quatro formatos diferentes.

A imagem da academia possui resolução:

```text
1920x1080
```

em todos os arquivos.

Porém, os tamanhos são diferentes:

| Formato | Resolução |   Tamanho |
| ------- | --------: | --------: |
| AVIF    | 1920x1080 | 192.74 KB |
| JPG     | 1920x1080 | 338.29 KB |
| PNG     | 1920x1080 | 866.47 KB |
| WEBP    | 1920x1080 | 247.56 KB |

Apesar de visualmente representarem a mesma imagem e possuírem a mesma resolução, cada arquivo utiliza uma quantidade diferente de armazenamento.

Isso permite introduzir um conceito muito importante para desenvolvimento web:

**o peso dos arquivos influencia a quantidade de dados que o navegador precisa carregar.**

---

# ⚠️ Existe um formato sempre melhor?

Não.

Os dados desta atividade representam os arquivos utilizados especificamente neste projeto.

A escolha do formato depende de fatores como:

* tipo de imagem;
* qualidade necessária;
* compressão;
* transparência;
* compatibilidade;
* contexto de utilização.

O objetivo desta atividade não é ensinar que um formato é sempre superior aos outros.

O objetivo é demonstrar que:

> **a escolha do formato também é uma decisão técnica.**

---

# 🔍 Atividade de investigação

Depois da demonstração principal, os outros grupos de imagens podem ser utilizados para investigação.

Uma proposta de desafio é:

1. escolher um grupo de imagens;
2. identificar a resolução dos quatro arquivos;
3. comparar AVIF, JPG, PNG e WEBP;
4. identificar o menor arquivo;
5. identificar o maior arquivo;
6. calcular a diferença entre eles;
7. analisar visualmente as imagens;
8. explicar qual formato seria escolhido para um site e justificar a decisão.

Os grupos disponíveis incluem:

* academia;
* vista aérea;
* construção;
* estacionamento;
* fachada.

---

# 🎯 Desafio de estilização

Ao final da atividade, o aluno deve escolher uma imagem disponível e criar sua própria classe CSS.

A classe deverá utilizar pelo menos quatro propriedades apresentadas no projeto.

Exemplo:

```css
.minha-imagem {
    width: 500px;
    border: 4px solid purple;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
```

Não existe apenas uma solução correta.

O aluno deverá ser capaz de explicar:

* quais propriedades utilizou;
* quais valores escolheu;
* qual resultado pretendia alcançar.

---

# 🔄 Fluxo da atividade

Uma possibilidade de execução é:

### 1. Revisão da estrutura

Relembrar rapidamente a organização básica de um projeto HTML e CSS.

### 2. Inserção da primeira imagem

Apresentar a tag `<img>` e os atributos `src` e `alt`.

### 3. Organização de caminhos

Relacionar o valor de `src` com a arquitetura de pastas.

### 4. Comparação de formatos

Mostrar a mesma imagem em AVIF, JPG, PNG e WEBP.

### 5. Discussão sobre tamanho

Comparar resolução e tamanho dos arquivos.

### 6. Introdução às classes

Criar classes CSS para aplicar estilos específicos.

### 7. Estilizações progressivas

Trabalhar tamanho, borda, arredondamento, sombra, opacidade e filtros.

### 8. `object-fit`

Demonstrar como controlar imagens dentro de dimensões específicas.

### 9. Combinação

Reunir diferentes propriedades em uma única classe.

### 10. Desafio

Solicitar que o aluno crie uma estilização própria.

### 11. Correção

Utilizar `correcao.html` e `correcao.css` para revisar o conteúdo e comparar diferentes soluções.

---

# 📈 Competências desenvolvidas

Além dos conceitos técnicos, a atividade busca desenvolver:

* organização;
* atenção aos detalhes;
* interpretação de caminhos de arquivos;
* capacidade de comparação;
* análise visual;
* resolução de problemas;
* experimentação;
* autonomia;
* tomada de decisão;
* pesquisa;
* justificativa técnica.

---

# 👨‍🏫 Papel do professor

Durante a atividade, o professor atua como facilitador do processo de investigação.

Em vez de simplesmente dizer:

> "Use `border-radius: 50%`."

é possível perguntar:

> "O que precisaríamos alterar para que essa imagem fique completamente circular?"

Da mesma forma, na comparação de formatos:

> "Se as quatro imagens têm a mesma resolução, por que os arquivos possuem tamanhos diferentes?"

Essas perguntas ajudam o aluno a construir relações entre código, resultado e decisão técnica.

---

# 🌱 Resultado esperado

Ao final da atividade, espera-se que o aluno não pense apenas:

> "Sei colocar uma imagem no HTML."

O resultado esperado é mais amplo:

> "Sei inserir uma imagem, organizar seu caminho, descrevê-la corretamente, controlar sua apresentação com CSS e começar a tomar decisões sobre como utilizá-la em um projeto web."

Essa diferença representa a evolução de uma execução puramente mecânica para uma compreensão mais consciente do desenvolvimento.

---

# 🚀 Possíveis evoluções

Este projeto pode ser utilizado posteriormente como base para novos conteúdos, como:

* imagens responsivas;
* unidades relativas;
* Flexbox;
* Grid;
* galerias de imagens;
* cards;
* backgrounds;
* pseudo-classes;
* efeitos com `hover`;
* animações;
* otimização de imagens;
* carregamento de imagens;
* acessibilidade;
* responsividade.

Esses conceitos não são aprofundados nesta atividade porque o objetivo é manter o foco nos fundamentos.

---

# 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* Navegador Web
* Visual Studio Code ou outro editor de código
* Git e GitHub, quando utilizados durante a disciplina

---

# 📚 Projeto educacional

Este repositório faz parte de uma coleção de atividades desenvolvidas para o ensino progressivo de **Desenvolvimento Web**.

A proposta da coleção é introduzir conceitos técnicos através de:

* prática;
* investigação;
* comparação;
* resolução de problemas;
* experimentação;
* construção gradual de autonomia.

O objetivo não é apenas ensinar quais propriedades existem.

É ajudar os alunos a compreenderem **como cada decisão técnica modifica o resultado de um projeto**.

---

## 👨‍💻 Autor

**Chrystopher Ferreira**
Professor de Tecnologia da Informação e Desenvolvedor de Software

> Tecnologia como ferramenta para desenvolver pessoas, resolver problemas e gerar resultados.
