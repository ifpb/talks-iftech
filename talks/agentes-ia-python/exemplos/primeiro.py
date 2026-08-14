#CONHECENDO A IA
pergunta = input(
    "Digite sua pergunta: "
)

resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {
            "role": "user",
            "content": pergunta
        }
    ]
)

print(
    resposta.choices[0].message.content
)