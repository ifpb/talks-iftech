#detector de fake news
noticia = input("Digite uma notícia: ")

prompt = f"""
Analise a notícia abaixo.

Responda apenas:

Parece confiável

ou

Parece duvidosa

Depois explique em uma frase.

Notícia:
{noticia}
"""

resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {
            "role": "user",
            "content": prompt
        }
    ]
)

print(
    resposta.choices[0].message.content
)