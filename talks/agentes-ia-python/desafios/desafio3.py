#o agente recrutador a IA decide se contraria ou não a pessoa
curriculo = """
Desenvolvedor Java

Conhecimentos:
Spring Boot
PostgreSQL
Docker

Experiência:
3 anos
"""

prompt = f"""
Você é um recrutador.

Analise o currículo.

A vaga exige:

- Java
- Spring Boot

Retorne apenas JSON.

Exemplo:

{{
  "aprovado": true,
  "motivo": "Possui experiência compatível"
}}

Currículo:

{curriculo}
"""

resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    response_format={
        "type": "json_object"
    },
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