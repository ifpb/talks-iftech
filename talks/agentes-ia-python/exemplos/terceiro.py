frase = input(
    "Digite uma frase: "
)

prompt = f"""
Classifique a frase.

Opções:
positivo
negativo
neutro

Frase:
{frase}

Responda apenas com uma palavra.
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