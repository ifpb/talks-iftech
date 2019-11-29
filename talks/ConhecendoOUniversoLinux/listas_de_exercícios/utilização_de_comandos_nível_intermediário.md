# Linux Debian Utilização de Comandos - Nível Intermediário

## Objetivos

---

- Conhecer o ambiente oferecido pela Shell do Linux;
- Utilizar alguns comandos do Linux em nível de usuário e administrador, acessíveis via o terminal Shell do sistema operacional.

## Procedimento prático

---

1. Inicie o computador.

2. Faça login com a conta **root**.

3. No seu diretório home, no caso ```/root```, crie 3 arquivos vazios - **trabalho1.c**, **trabalho2.c**, **trabalho3.c** - e mais 3 arquivos, também vazios - **core**, **core1** e **core2**. Você pode executar a linha de comando ```touch trabalho{1..3}.c``` para criar os três arquivos ou ```touch trabalho1.c trabalho2.c trabalho3.c```.

4. Descreva os resultados obtidos com a execução do comando **find** (utilizado para localizar arquivos/diretórios) nas situações seguintes, considerando os arquivos criados na questão 3:<br>
a) find /root -name trabalho1.c<br>
b) find . -name '*.c' -ls<br>
c) find / -name '*.c' -print<br>
d) find /root -name 'core*'<br>
e) find / -name '*.c' > res_pesquisa

5. O comando **echo** é usado para exibir uma mensagem, conteúdo de uma variável ou mesmo o resultado da execução de um comando. No prompt de comando, execute o comando **echo** de acordo com cada uma das situações seguintes, anotando o resultado em cada caso:<br>
a) echo saída<br>
b) echo bom dia<br>
c) echo 'bom dia'<br>
d) echo \`ls\`<br>
e) echo 'ls'<br>
f) echo $HOME<br>
g) numero=1 ; echo $numero<br>
h) echo'texto1'>arquivo_saida1 ; cat arquivo_saida1

6. O comando **sort** é usado para ordenar linhas de arquivos de texto. Para testar tal funcionalidade, crie um arquivo chamado **arquivo_sort_entrada** com as seguintes frases em cada linha:

    ```
    O Linux é um bom sistema operacional
    O KDE é uma interface gráfica amigável
    o Fedora é uma distribuição Linux baseada no Red Hat
    ```

    Execute o comando ```sort < arquivo_sort_entrada > arquivo_sort_saida``` e responda:<br>
    a) Qual o resultado gerado em **arquivo_sort_saida**?<br>
    b) Qual o objetivo de usar o caractere < no comando em questão?<br>
    c) Qual o objetivo de usar o caractere > no comando em questão?

7. O que faz o comando grep?

8. Crie um programa em linguagem C conforme modelo no quadro a seguir e salve-o em um arquivo denominado **programa.c**. Para tanto, execute o editor nano seguido pelo nome do arquivo que será criado.

    ```
        #include <stdio.h>
        #include <conio.h>
        int main( void)
            {
                printf( "Isto é um teste\n" );
                getch();
                return 0;
            }
    ```

    Execute o comando **grep** para cada uma das situações seguintes:<br>
    a) grep -n main programa.c<br>
    b) grep -n include programa.c<br>
    c) grep -c include programa.c<br>
    d) grep main*

9. Compare os comandos **grep** e **find** quanto à finalidade de cada um deles.

10. Com um único comando mkdir, crie dentro do seu diretório home, os seguintes diretórios: **temp/temp1/temp2**. Para tanto, execute ```mkdir -p /temp/temp1/temp2```

11. O que fazem os comandos **ls** e **wc**? Quais os resultados gerados pelo uso dos comandos **ls** e **wc** em cada uma das situações seguintes, dentro do seu diretório home?<br>
a) wc -l programa.c<br>
b) ls | wc -l<br>
c) ls | wc -c<br>
d) ls | wc -w

12. O que faz e qual a sintaxe de uso para o comando **chmod**?

13. Utilizando o comando **chmod**, execute as ações solicitadas a seguir:<br>
a) No seu diretório home, crie um diretório chamado **chmod_teste_dir**.<br>
b) Dentro do seu diretório home, crie um arquivo chamado **chmod_teste_arq**.<br>
c) Altere as permissões de **chmod_teste_arq** para **leitura**, **escrita** e **execução** apenas pelo dono do arquivo. Os demais usuários não deverão ter acesso ao arquivo.<br>
d) Faça uma cópia de **chmod_teste_arq** para o diretório de **chmod_teste_dir**, dando ao novo arquivo o nome **chmod_teste_arq_copia**.<br>
e) Com um único comando **chmod**, altere as permissões do diretório **chmod_teste_dir** e todos os arquivos contidos nele para 742. O que significa esse conjunto de permissões em termos de acesso?<br>
f) Dentro do seu diretório home, crie um arquivo chamado **chmod_teste_arq_novo**. Com um único comando **chmod** retire a permissão de **escrita** para todos os usuários, inclusive o dono.

    > Sugestão:
    >   - Use a opção **a**

14. O que faz e qual a sintaxe de uso para o comando **chown**?

15. O que faz e qual a sintaxe de uso para o comando **chgrp**?

16. Crie um arquivo chamado **teste_donoegrupo.txt** e verifique os atributos desse arquivo. Observe que o dono e o grupo do arquivo é root. Usando os comandos das questões 14 e 15, altere o dono e o grupo do arquivo para **suporte**. Para tanto, execute:

    ```
    chown suporte teste_donoegrupo.txt
    chgrp suporte teste_donoegrpo.txt
    ```

    Alternativamente, você pode executar apenas ```chown suporte:suporte teste_donoegrupo.txt```
