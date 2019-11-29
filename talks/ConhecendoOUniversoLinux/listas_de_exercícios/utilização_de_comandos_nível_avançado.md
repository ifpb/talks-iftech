# Linux Debian Utilização de Comandos - Nível Avançado

## Objetivos

---

- Conhecer o ambiente oferecido pela Shell do Linux;
- Utilizar alguns comandos do Linux em nível de administrador, acessíveis via terminal Shell do sistema operacional.

## Procedimento Prático

---

1. Inicie o Linux.

2. Faça login com a conta **root**.

3. Crie uma conta de usuário denominada **admin**. Para tanto, execute o comando ```adduser admin```.

4. Defina a sua senha para o usuário admin como **admin**. Para tanto, execute o comando ```passwd admin```.

5. Execute o comando ```logout``` para sair da conta **root** e, em seguida, faça o login no sistema com a conta **admin**.

6. Execute o comando ```uname -a``` e observe qual a versão do kernel do sistema.

7. Execute o comando ```lsb_release -a``` e observe qual a distribuição Linux instalada e sua versão.

8. Faça logout na conta **admin** e, em seguida, logon na conta **root**.

9. Execute o comando ```ip addr``` e verifique se as configurações da interface de rede foram alteradas.

10. No debian, os softwares são encontrados na forma de pacotes. Esses pacotes são arquivos com a extensão **.deb**. Eles podem ser "baixados" de servidores que atuam como repositórios de pacotes. No debian, é possível verificar/configurar uma lista de repositórios editando o arquivo **/etc/apt/sources.list**.
Um exemplo de repositório configurado nesse arquivo é mostrado na linha seguinte:
```deb http://ftp.br.debian.org/debian stretch main```

11. Utilizando o comando **more**, visualize o conteúdo do arquivo **sources.list**.

12. Antes de instalar qualquer pacote no sistema, é importante atualizar a lista de pacotes disponíveis nos repositórios indicados em **sources.list**. Isso permite que sejam instalados os pacotes mais recentes disponíveis para o debian. Para atualizar a lista de pacotes, execute o comando ```apt update```.

13. Instale o compilador **gcc**. Para tanto, execute o comando ```apt install gcc```.

14. Crie o arquivo **meu_programa.c** com o conteúdo seguinte:

    ```
        #include <stdio.h>

        int main()
        {
            printf("Meu programa em C);
        }
    ```

15. Compile **meu_programa.c**. Para tanto, execute ```gcc meu_programa.c -o meu_programa```.

16. Execute meu_programa. Para tanto, digite ```./meu_programa``` e pressione <kbd>Enter</kbd>.

17. Execute o comando ```ip address``` e observe as configurações da interface de rede **enp0s3**.

    > Alternativamente é possível executar o comando ```ip addr``` ou apenas ```ip a```.

18. Para definir configurações de rede estáticas para uma interface de rede, edite o arquivo **/etc/network/interfaces** e realize as configurações seguintes para a interface **enp0s3**.

    ```
        allow-hotplug enp0s3
        iface enp0s3 inet static
            address 192.168.0.1
            netmask 255.255.255.0
            gateway 192.168.0.254
    ```

    Salve o arquivo e saia do editor. Por fim, reinicie o serviço de rede com o comando ```service networking restart```

19. Desligue o computador. Como root, execute o comando ```halt```.