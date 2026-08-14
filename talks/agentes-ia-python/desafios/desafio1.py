#celula pronta
from google.colab import userdata
from openai import OpenAI

client = OpenAI(
    api_key=userdata.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

#gerador de nomes e um slogan para uma empresa
area = input("Qual a área da empresa? ")

prompt = f"""
Crie 5 nomes criativos para uma empresa do segmento abaixo.

Segmento:
{area}

Para cada nome, crie também um slogan.

Formato:

1. Nome
Slogan: ...

2. Nome
Slogan: ...
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