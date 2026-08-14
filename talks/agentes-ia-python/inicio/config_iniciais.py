#usando a biblioteca da openai
#!pip install -q openai

#Criar a chave na Groq e explicar como funciona
#configurar a chave no Google colab

#nunca colocamos senhas diretamente no código 

#primeira parte, homologação
from google.colab import userdata
from openai import OpenAI

client = OpenAI(
    api_key=userdata.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

print("IA conectada!")


#testando a conexão
resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {
            "role": "user",
            "content": "Diga apenas OK"
        }
    ]
)

print(
    resposta.choices[0].message.content
)