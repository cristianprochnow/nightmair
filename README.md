# NightmAir

NightmAir é um jogo com jogabilidade 2D, todo construído com base na técnica de Pixel Art, simulando um dos jogos clássicos.

🔗 [Demo][demo-url]

🔗 [Brand][figma-url]

🔗 [Website][website-url]

# Sobre

A história se baseia em um cientista que acaba por fazer parte de um acidente de avião, caindo em um local totalmente desconhecido. Ao acordar se depara com aquele que é o início de um grande **pesadelo**.

## Nome

Ao escolher o nome, queríamos algo fácil de lembrar, mas que ao mesmo tempo fizesse referência à mensagem que o jogo queria passar. Sendo assim, em quase que um trocadilho, brincamos um pouco com o vocabulário, combinando duas palavras-chaves principais desse *game*.

1. Nightmare = "Pesadelo"
2. Air = "Ar"

> Nightmair

# Getting Started

O formato do arquivo de exportação do jogo é `JSON`. Então, o arquivo `game.json` na raiz do projeto contém o que há no jogo até então.

E na pasta `assets` está o conteúdo exportado bruto na hora de exportar o arquivo `JSON`. Ou seja, na raiz de `assets` está os arquivos que o próprio GDevelop exportou no momento do "Salvar como...". Já, na pasta `images` e `sounds` estão os arquivos colocados manualmente, para ficar separadinho e organizado.

> Quando for adicionar algum arquivo de imagem ou de som, coloque nessas duas pastas explicitadas acima.

## Executando o projeto

Entre na aplicação do [GDevelop](https://gdevelop.io/download) e clique no item **Abrir...**.

![image-open]

E, após importar todo o conteúdo do arquivo e realizar as modificações que deseja, clique em **Salvar como...** e então salve o arquivo.

A extensão do arquivo é `.json`, então garanta com que o arquivo exportado esteja nesse formato para salvar corretamente.

![image-save]

# Como contribuir

O processo de contribuição é feito por meio do salvamento local do arquivo do GDevelop, colocando logo em seguida no GitHub em uma nova *branch* para que possa ser analisado.

A própria interface do GitHub já proporciona todas as ferramentas necessárias, então não precisaremos usar a linha de comando.

## Passo a passo

### Fork
Caso ainda não tenha realizado esse processo, a primeira etapa para contribuição é essa.

Sendo assim, acesse o repositório do projeto, no caso, o repositório base que contém a origem autêntica de recursos.

![image-1]

Com isso, clique no botão `Fork`, no topo da tela, e então vá ao repositório cópia que será criado no seu perfil do GitHub.

![image-2]

### Preparar ambiente

Após isso, basta então clicar no botão de `Code` e então escolher a melhor forma para baixar o código do projeto.

![image-3]

## Desenvolvimento

Antes de tudo, sempre garanta com que o código de seu `fork` esteja em dia. Sempre quando houver alguma mudança no repositório base, o GitHub mostrará uma sessão acima da parte do código avisando sobre tal situação.

Com isso, basta então realizar o passo a passo esclarecido ao clicar no botão de sincronização, proporcionado pela interface e atualizar seu repositório cópia com o código mais recente.

### Mudanças no Arquivo

O ciclo se baseia em baixar a última versão que está presente na branch `main`. Com essa versão, você realiza as modificações no arquivo `.json` relacionado ao conteúdo salvo do *game*.

### Envio das Mudanças

Após realizar as mudanças nesse arquivo, então crie uma nova `branch` para realizar o envio do arquivo.

![image-4]

Clique no *link* e então uma tela que listará as `branchs` do projeto. Após isso, crie uma nova `branch` e então após salvar os dados, a tela voltará para a tela base do repositório, mas com a nova `branch`já selecionada, mostrando o código que foi colocada naquela nova `branch`.

![image-5]

E então, após isso, envie o arquivo com a mudança que foi feita, para que ele conste na nova `branch`que foi criada.

![image-6]

Após isso, arraste o arquivo modificado para a área de envio de arquivo; insira uma descrição do que foi feito no commit; envie as mudanças para a `branch` que foi criada.

![image-7]

E por último, realize o `pull request`, clicando no botão para abrir `pull  request` que aparecerá na seção acima da parte do código, quando o GitHub detectar que isso é possível.

**Alternativa**

Há também a possibilidade mais prática de simplesmente clicar em enviar o arquivo sem ter criado `branch`alguma, clicar em enviar o arquivo, arrastar os arquivos necessários para a área de envio, e na hora de enviar o commit, selecionar segunda opção.

![image-8]

Com essa segunda opção, as etapas serão puladas e após o envio do arquivo já será oferecida a interface de abertura de `pull request`.

### E está feito 🎉

E então, ao abrir o `pull request`, seu trabalho está feito, pois basta esperar para que o código seja aprovado pelo moderador e seu código seja colocado na `branch main`do repositório base também.

Após ocorrer essa inclusão ou qualquer outra, a mensagem para sincronizar seu código do repositório cópia será mostrada, para cê sempre deixar o código do seu `fork` em dia.

[image-1]: ./.github/1.jpg
[image-2]: ./.github/2.jpg
[image-3]: ./.github/3.jpg
[image-4]: ./.github/4.jpg
[image-5]: ./.github/5.jpg
[image-6]: ./.github/6.jpg
[image-7]: ./.github/7.jpg
[image-8]: ./.github/8.jpg
[image-save]: ./.github/save.png
[image-open]: ./.github/open.png
[website-url]: https://nightmair-page.vercel.app/
[demo-url]: https://gd.games/instant-builds/15c3d749-ff44-4a27-9e5b-67e38545d0a5
[figma-url]: https://www.figma.com/file/TMPn232AGlSGbJN63VDGS4/Nightmair?type=design&node-id=0%3A1&mode=design&t=OgOcSbXPKhSy47e4-1
