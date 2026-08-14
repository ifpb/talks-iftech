#extração de dados
#celula 1
mensagem = """
Meu nome é Pedro.
Meu telefone é 83999999999.
Minha impressora não imprime.
"""
#celula 2
prompt = f"""
Extraia:

- nome
- telefone
- problema

Retorne JSON válido.

Mensagem:

{mensagem}
"""

resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    response_format={
        "type":"json_object"
    },
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