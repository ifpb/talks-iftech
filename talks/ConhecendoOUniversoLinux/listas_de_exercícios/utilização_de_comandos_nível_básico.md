# Linux Debian Utilização de Comandos - Nível Básico


## Objetivos

---

- Conhecer o ambiente oferecido pela interface Shell do Linux;
- Identificar a diferença entre o prompt da interface Shell de um usuário comum e do usuário root;
- Conhecer e utilizar alguns dos principais comandos indicados para o usuário iniciante no Linux.

## Procedimento prático

---

1. Inicie o sistema operacional Linux Debian.

2. Acesse o sistema, utilizando os parâmetros de logon e senha definidos para o administrador (root) do
sistema.

3. Observe o prompt de comando que aparece na tela. Identifique as informações mostradas nele. Essa é a
interface da Shell do Linux.

    - O prompt para a conta do usuário **root**, isto é, o administrador do sistema, termina com o caractere #.

    ```
    [root@pcdebian:~]#_
    ```

    - O prompt para qualquer conta de usuário comum, isto é, sem poderes administrativos, termina com o caractere $.

    ```
    [usuario@pcdebian:~]$_
    ```

4. É possível obter uma descrição sobre cada comando do Linux. Para tanto, basta conhecer o nome do comando e, no terminal Shell, executar `man nome-do-comando`. Utilizando o **man**, responda qual a funcionalidade do comando **man**. Para sair da exibição do resultado do comando **man**, pressione a tecla **q**.

5. Execute o comando **pwd** e responda qual é o seu diretório atual.

    > Observações:
    >  - O diretório / é conhecido como diretório-raiz do sistema.
    >  - O diretório de trabalho ou diretório home da conta do usuário root é o `/root`.
    >  - O diretório de trabalho ou diretório home da conta de um usuário comum é normalmente o `/home/conta-do-usuário`.

6. Crie os arquivos a seguir usando o comando **touch**. Execute `touch arq1 arq2 arq3`.

7. Execute o comando **ls** e veja o conteúdo do diretório atual.

8. Execute o **man** para o comando **ls** e verifique as suas várias opções. Algumas opções bastante utilizadas são **-a**, **-l**, **-R**.

9. Execute o comando **dir**. Que resultado você obteve? Compare o resultado com aquele obtido na questão 7.

10. Execute o comando **date** e responda qual a data e hora do sistema.

11. Execute o comando **clear** para limpar a tela do seu terminal. Alternativamente, você poderá pressionar.

12. Para visualizar o conteúdo de um arquivo, pode-se utilizar os comandos **cat** ou **more**. A sintaxe geral de cada um deles é `cat nome-do-arquivo` e `more nome-do-arquivo`.
as teclas <kbd>CTRL</kbd>+<kbd>L</kbd> para conseguir o mesmo efeito obtido com **clear**.

    > Observações:
    >   - Ao usar o comando **cat**, caso o arquivo tenha mais linhas que a quantidade suportada pela tela do computador, serão mostradas apenas as últimas linhasque ocuparem o vídeo.
    >   - Ao usar o comando **more**, caso o arquivo tenha mais linhas que a quantidade suportada pelo vídeo do computador, ele será mostrado de forma pausada, isto é, uma página correspondente ao número de linhas do vídeo de cada vez. Para avançar para a próxima página do arquivo, basta que o usuário pressione a tecla <kbd>&nbsp;space&nbsp;</kbd>. Já para avançar para a próxima linha do arquivo, basta que o usuário pressione a tecla <kbd>Enter</kbd>. Para sair da listagem do more, pressione a tecla <kbd>q</kbd>

    Utilize os dois comandos para ver o conteúdo do arquivo `/etc/passwd`. Compare os resultados obtidos.

13. O comando **cat** pode ser utilizado também para criar arquivos com pouca quantidade de linhas. Para tanto, basta executar `cat > nome-do-arquivo`, pressionar a tecla <kbd>Enter</kbd>, digitar o texto desejado, pressionar <kbd>Enter</kbd> e, por fim, pressionar as teclas <kbd>CTRL</kbd>+<kbd>d</kbd> para salvar o conteúdo no arquivo.

    > Observação:
    >  - Caso você digite `cat > nome-do-arquivo` e o arquivo exista, o seu conteúdo será sobrescrito integralmente. 

    Certifique-se de que você está no diretório home de sua conta de usuário, no caso `/root`. Em seguida, utilize o comando **cat** para criar um arquivo denominado `primeiro`, cujo conteúdo seja: 

    ```
    meu primeiro texto no Linux.ls
    ```

14. Ainda no seu diretório home, utilize o comando **cat** ou o comando **touch** para criar os arquivos solicitados a seguir, cujos conteúdos deverão ser idênticos aos nomes dos arquivos correspondentes.

| Nome do Arquivo | &nbsp;&nbsp;&nbsp;&nbsp; Linha de comando executada &nbsp;&nbsp;&nbsp;&nbsp; |
|-----------------|------------------------------------------------------------------------------|
| a) Programa1.c  |                                                                              |
| b) aventura.txt |                                                                              |
| c) saida        |                                                                              |
| d) sac          |                                                                              |
| e) saci.doc     |                                                                              |
| f) programa1.c  |                                                                              |
| g) a.c          |                                                                              |
| h) b.c          |                                                                              |
| i) crcstatus    |                                                                              |
| j) Pe           |                                                                              |
| k) Teste        |                                                                              |
| l) Zona-dns     |                                                                              |
| m) s.c          |                                                                              |
| n) td.c         |                                                                              |
| o) veto         |                                                                              |

15. Observe e descreva os resultados da execução do comando **ls**, dentro do seu diretório home, para cada uma das situações seguintes:

| Comando + Opção | &nbsp;&nbsp;&nbsp;&nbsp; Resultado (arquivos exibidos) &nbsp;&nbsp;&nbsp;&nbsp; |
|-----------------|---------------------------------------------------------------------------------|
| a) ls *         |                                                                                 |
| b) ls *.c       |                                                                                 |
| c) ls ?.c       |                                                                                 |
| d) ls ??c*      |                                                                                 |
| e) ls ?e        |                                                                                 |
| f) ls -l        |                                                                                 |
| g) ls -a        |                                                                                 |
| h) ls -t        |                                                                                 |
| i) ls -la       |                                                                                 |
| j) ls -lt       |                                                                                 |
| k) ls *e        |                                                                                 |
| l) ls a*        |                                                                                 |

16. Após resolver inteiramente a questão anterior, responda qual a função dos metacaracteres * e ?.

17. Para alterar o diretório atual, deve-se executar o comando **cd**, cuja sintaxe geral é `cd caminho-do-novo-diretório`. O parâmetro `caminho-do-novo-diretório` pode ser:

    - Um nome de caminho relativo, isto é, aquele que depende do diretório atual. Dois componentes que podem aparecer em um nome de caminho relativo merecem destaque: o ponto `.` e o ponto-ponto `..`. O ponto indica o diretório atual e o ponto-ponto indica o diretório que está exatamente um nível acima do diretório atual. O nome de caminho relativo inicia sempre com ponto ou ponto-ponto.
    - Um nome de caminho absoluto, isto é, aquele que independe do diretório atual e sempre inicia com o caractere <kbd>/</kbd>, isto é, a partir do diretório-raiz do sistema.

    > Observações:
    >   - Caso o usuário deseje retornar ao seu diretório home, independente de qual seja o seu diretório atual, basta executar `cd` ou `cd ~`
    >   - Caso o usuário deseje retornar ao diretório onde ele estava antes de mudar para o diretório atual, deve executar `cd -`

    Utilize o comando **cd** para alterar o diretório atual de acordo com os diretórios seguintes. Não esqueça de verificar a cada mudança de diretório, se realmente o comando produziu o efeito esperado.

    > Observações:
    >   - Note, a seguir, que podem existir várias alternativas que produzem o mesmo resultado. Cada uma delas está em uma única linha

| Diretório de destino | Linha de comando executada                                                                                                           |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| a) /root             | `cd /root`                                                                                                                           |
| b) /usr              | `cd /usr`                                                                                                                            |
| c) /usr/bin          | `cd /usr/bin`<br>`cd bin` - caso esteja em /usr<br>`cd ./bin` - caso esteja em /usr                                                  |
| d) /var/log          | `cd /var/log`                                                                                                                        |
| e) /var              | `cd /var`<br>`cd ..` - caso esteja em /var/log                                                                                       |
| f) /var/spool        | `cd /var/spool`<br>`cd spool` - caso esteja em /var<br>`cd ./spool` - caso esteja em /var<br>`cd ../spool` - caso esteja em /var/log |
| g) Home do usuário   | `cd`<br>`cd ~`                                                                                                                       |
| h) Raiz do sistema   | `cd /`                                                                                                                               |

18. Para criar um diretório, deve-se executar o comando **mkdir**, cuja sintaxe geral é `mkdir nome-do-diretório`. Utilizando o comando **mkdir**, crie um diretório chamado **linux**, dentro do seu diretório home.

19. Dentro do seu diretório home, crie a estrutura de diretórios seguinte:

    ```
    diretório home do usuário
      ├── diretorio01
      │   ├── diretorio01_1
      │   └── diretorio01_2
      └── diretorio02
          ├── diretorio02_1
          └── diretorio02_2
              ├── diretorio02_2_1
              ├── diretorio02_2_2
              └── diretorio02_2_3
    ```

20. Com base na estrutura de diretórios criada na questão anterior, e partindo inicialmente do seu diretório home, execute as ações seguintes:

    > Observações:
    >   - Tente usar, quando possível, tanto referências de caminho absoluto como de caminho relativo.
    >   - Para não ter que digitar o nome inteiro de cada diretório, utilize o recurso de autocompletar do BASH, pressionando a tecla <kbd>TAB</kbd>.

| Ação                                                          | Linha de comando executada |
|---------------------------------------------------------------|----------------------------|
| a) Entre em **diretorio01**                                   |                            |
| b) Entre em **diretorio01_1**                                 |                            |
| c) Saia de **diretorio01_1** e entre em **diretorio01_2**     |                            |
| d) Saia de **diretorio01_2** e entre em **diretorio02**       |                            |
| e) Entre em **diretorio02_1**                                 |                            |
| f) Saia de **diretorio02_1** e entre em **diretorio02_2**     |                            |
| g) Entre em **diretorio02_2_1**                               |                            |
| h) Saia de **diretorio02_2_1** e entre em **diretorio02_2_2** |                            |
| i) Saia de **diretorio02_2_2** e entre em **diretorio02_2_3** |                            |
| j) Saia de **diretorio02_2_3** e entre em **diretorio02_2**   |                            |
| k) Saia de **diretorio02_2** e entre em **diretorio01**       |                            |
| l) Saia de **diretorio01** e entre em **diretorio02_2_3**     |                            |
| m) Saia de **diretorio02_2_3** e vá para o seu diretório home |                            |

21. O comando **cp** é utilizado para copiar arquivos ou diretórios. Sua sintaxe geral é exibida a seguir:
`cp opções origem destino`

    > Observações:
    >   - As opções permitem desde a cópia de arquivos até a cópia de diretórios inteiros.
    >   - Origem - Corresponde ao nome de arquivo ou diretório que será copiado. Eventualmente, pode
    ser necessário indicar o caminho absoluto ou relativo até a **origem** desejada.
    >   - Destino - Corresponde ao nome de arquivo no diretório de destino. Se os nomes de origem e destino forem os mesmos, o nome de destino poderá ser omitido. Eventualmente, pode ser necessário indicar o caminho absoluto ou relativo até o **destino** desejado.
    >   - Podem ser usados metacaracteres na composição do (s) nome (s) de arquivo (s) ou diretório (s) de origem e de destino da cópia.

    Utilize o comando **cp** para copiar os arquivos criados nas questões 13 e 14, segundo as orientações definidas na tabela seguinte.

    > Observações:
    >   - Certifique-se de que você realmente está no diretório home de sua conta.
    >   - Não esqueça de verificar, após cada cópia, se a referida operação foi bem-sucedida!

| Ação                                                                                                                        | Linha de comando executada |
|-----------------------------------------------------------------------------------------------------------------------------|----------------------------|
| a) Copie **primeiro** para **diretorio01**                                                                                  |                            |
| b) Copie **programa1.c** para **diretorio01_1**, dando à cópia nome de **prg1.c**                                           |                            |
| c) Copie **a.c** para **diretorio02_2_1**                                                                                   |                            |
| d) Copie **sac** para o diretório atual, dando à cópia o nome **sac2**                                                      |                            |
| e) Copie **sac2** para **diretorio02**                                                                                      |                            |
| f) Copie **saida** para **diretorio01_1**                                                                                   |                            |
| g) Copie o arquivo **saida**, que está em **diretorio01_1**, para **diretorio02_2_3**, dando à cópia o nome de **saida2**   |                            |
| h) Copie **saida2** para o seu diretório home                                                                               |                            |
| i) Entre em **diretorio01_1** e copie o arquivo **saida**, contido nele, para **diretorio02_2**                             |                            |
| j) Ainda em **diretorio01_1**, copie o arquivo **saida** para **diretorio01**                                               |                            |
| k) Copie **diretorio02_2_2** para **diretorio01**                                                                           |                            |
| l) Copie **diretorio01_2** para **diretorio02_2**, dando à cópia o nome **diretorio02_2_4**                                 |                            |
| m) Copie todos os arquivos cujos nomes contenham apenas 1 caractere, existentes no seu diretório home, para **diretorio02** |                            |
| n) Copie todos os arquivos com extensão c, existentes no seu diretório home, para **diretorio01**                           |                            |

22. Construa um diagrama com o estado final da árvore de diretórios e arquivos obtidos após a execução dos comandos da questão anterior.

23. O comando **mv** é utilizado para mover ou renomear arquivos. Sua sintaxe geral é exibida a seguir:

    ```
    mv origem destino
    ```

    > Observações:
    >   - É possível também mover diretórios.
    >   - Origem - Corresponde ao nome de arquivo ou diretório que será movido ou renomeado. Eventualmente, pode ser necessário indicar o caminho absoluto ou relativo até a **origem** desejada.
    >   - Destino - Corresponde ao novo nome que será dado ao arquivo ou diretório no destino. Eventualmente, pode ser necessário indicar o caminho absoluto ou relativo até o **destino** desejado.
    >   - Podem ser usados metacaracteres na composição do (s) nome (s) de arquivo (s) ou diretório (s) de origem e de destino da cópia.

    Utilize o comando mv para mover ou renomear os arquivos criados nas questões 13 e 14, segundo as orientações definidas na tabela seguinte.

    > Observações:
    >   - Certifique-se de que você realmente está no diretório home de sua conta.
    >   - Não esqueça de verificar, após cada cópia, se a referida operação foi bem-sucedida!

| Ação                                                                                                                                                                                 | Linha de comando executada |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| a) Mova o arquivo **Pe** para **diretorio01**                                                                                                                                        |                            |
| b) Renomeie o arquivo **Pe**, que está em **diretorio01**, para **Pe01**                                                                                                             |                            |
| c) No seu diretório home, renomeie o arquivo **Teste** para **Resposta**                                                                                                             |                            |
| d) No seu diretório home, mova o arquivo **crcstatus** para **diretorio02_2_4**, dando ao arquivo o nome crcinicio                                                                   |                            |
| e) Mova **diretorio01_1** para dentro de **diretorio01_2**                                                                                                                           |                            |
| f) Renomeie **diretorio01_1** para **diretorio_01_2_1**                                                                                                                              |                            |
| g) Mova todos os arquivos cujos nomes contenham o caractere **s**, existentes no seu diretório home, para **diretorio01_2**                                                          |                            |
| h) Mova os arquivos **Zona-dns**, **saci.c** e **s.c** para o seu diretório home. Note que, após a execução de mv no item anterior, os arquivos desejados estão em **diretorio01_2** |                            |

24. Além das funcionalidades já mencionadas, o comando **cat** permite:

    - Acrescentar texto ao final de um arquivo já existente. Para tanto, basta executar `cat >> nome-do-arquivo`, digitar o novo texto, pressionar <kbd>Enter</kbd> para inserir uma linha em branco e pressionar <kbd>CTRL</kbd>+<kbd>D</kbd>.
    - Concatenar, isto é, unir os conteúdos de vários arquivos. Para tanto, basta executar o comando `cat nome-do-arquivo-entrada-1 nome-do-arquivo-entrada-N > nome-do-arquivo-de-saida`
    Utilize o comando **cat** para realizar as operações solicitadas na tabela a seguir:

    > Observações:
    >   - Certifique-se de que você realmente está no diretório home de sua conta.
    >   - Não esqueça de verificar, após cada operação, se a mesma foi bem-sucedida!

| Ação                                                                                                                                                     | Linha de comando executada |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| a) Acrescente o conteúdo **mais texto para primeiro** ao arquivo denominado **primeiro**, criado na questão 13                                           |                            |
| b) Concatene os arquivos **saci.doc** e **veto**, armazenado o resultado em um novo arquivo denominado **novoarq**                                       |                            |
| c) Concatene os arquivos **saci.doc** e **veto**, acrescentando o novo conteúdo ao arquivo **novoarq**, já existente                                     |                            |
| d) Concatene os arquivos **Zona-dns**, **s.c** e **td.c**, armazenando o resultado em um arquivo denominado **mistura.txt**, dentro de **diretorio01_2** |                            |

25. O comando **rm** é utilizado para remover arquivos ou diretórios. Sua sintaxe geral é `rm opções nome(s)-do(s)-arquivo(s)-ou-diretório(s)`

    > Observações:
    >   - Podem ser usados metacaracteres na composição do(s) nome(s) de arquivo(s) ou diretório(s) a ser(em) removido(s).
    >   - Quando usado sem opções, o comando **rm** permite apenas a remoção de arquivos. Além disso, ele solicitará uma confirmação do usuário para cada arquivo a ser removido. Para evitar tal confirmação, você poderá usar a opção **-f**, que serve para executar a remoção de forma forçada.
    >   - Para remover diretórios, estejam eles vazios ou não, você poderá usar a opção **-r**, que serve para executar a remoção de forma recursiva, isto é, removendo do(s) diretório(s) mais interno(s) ao diretório que será removido até ao próprio. Caso utilize `rm -rf nome-do-diretório`, o diretório e seu conteúdo serão removidos sem solicitar qualquer confirmação do usuário.

    Utilize o comando **rm**, com as opções que julgar convenientes, para executar as ações solicitadas na tabela seguinte:

    > Observações:
    >   - Certifique-se de que você realmente está no diretório home de sua conta.
    >   - Não esqueça de verificar, após cada remoção, se a referida operação foi bem-sucedida!

| Ação                                                        | Linha de comando executada |
|-------------------------------------------------------------|----------------------------|
| a) Remova o arquivo primeiro                                |                            |
| b) Remova todos os arquivos que contenham a extensão **.c** |                            |
| c) Remova todos os arquivos contidos em **diretorio02_2_4** |                            |
| d) Remova **diretorio01**                                   |                            |

26. O comando **rmdir** é utilizado especificamente para remover diretórios. Entretanto, nesse caso, os diretórios a serem removidos deverão estar vazios, ou seja, não deverão conter arquivos ou outros diretórios no seu interior.
Utilize o comando **rmdir** para executar as ações solicitadas na tabela seguinte:

    > Observações:
    >   - Certifique-se de que você realmente está no diretório home de sua conta.
    >   - Não esqueça de verificar, após cada remoção, se a referida operação foi bem-sucedida!

| Ação                          | Linha de comando executada |
|-------------------------------|----------------------------|
| a) Remova **diretorio02_2_4** |                            |
| b) Remova **diretorio02**     |                            |

27. Desligue o computador. Para tanto, execute o comando poweroff. Este comando só pode ser executado pelo usuário root.