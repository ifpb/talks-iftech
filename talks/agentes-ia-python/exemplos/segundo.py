#GERADOR DE EMAILS
nome = input("Nome: ")

assunto = input(
    "Assunto do email: "
)

prompt = f"""
Escreva um email profissional.

Destinatário:
{nome}

Assunto:
{assunto}
"""

resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {
            "role":"user",
            "content": prompt
        }
    ]
)

print(
    resposta.choices[0].message.content
)