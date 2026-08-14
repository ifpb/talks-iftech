# CÉLULA 1 - Instala as bibliotecas necessárias

#!pip install -q openai gspread

#CÉLULA 2 - AUTENTICAÇÃO COM O GOOGLE
from google.colab import auth

auth.authenticate_user()

print("Usuário conectado!")

#CÉLULA 3 - Conexão com o Google Sheets
import gspread
from google.auth import default

creds, _ = default()

gc = gspread.authorize(creds)

print("Sheets conectado!")

#CÉLULA 4 - Conexão com a GROQ
from google.colab import userdata
from openai import OpenAI

client = OpenAI(
    api_key=userdata.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

print("Groq conectada!")

#CÉLULA 5 - TESTE DA IA
resposta = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {
            "role": "user",
            "content": "Diga apenas OK"
        }
    ]
)

print(resposta.choices[0].message.content)

#CÉLULA 6 - ABRIR A PLANILHA
sheet = gc.open_by_url(
    "URL_DA_PLANILHA"
)

entrada = sheet.sheet1

print("Planilha conectada!")

#CÉLULA 7 - LER OS CHAMADOS
dados = entrada.get_all_records()

print(f"{len(dados)} chamados encontrados")

#CÉLULA 8 - CRIAR OU ABRIR ABA PROCESSADOS
try:
    processados = sheet.worksheet("Processados")
except:
    processados = sheet.add_worksheet(
        title="Processados",
        rows=1000,
        cols=20
    )

#CÉULULA 9 - CRIAR CABEÇALHO
if processados.row_count > 0:

    primeira_linha = processados.row_values(1)

    if not primeira_linha:

        processados.append_row([
            "Nome",
            "Telefone",
            "Problema",
            "Categoria",
            "Prioridade"
        ])

#CÉLULA 10  - FUNÇÃO DA IA
import json

def analisar_chamado(problema):

    prompt = f"""
Classifique o chamado.

Categorias:
- software
- infraestrutura
- equipamento

Prioridades:
- baixa
- media
- alta

Responda APENAS JSON válido.

Problema:
{problema}
"""

    resposta = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        response_format={"type": "json_object"},
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return json.loads(
        resposta.choices[0].message.content
    )


#CÉLULA 11 - FUNÇÃO PRINCIPAL DO AGENTE
def processar_novos_chamados():

    dados = entrada.get_all_records()

    for i, chamado in enumerate(dados):

        if chamado.get("Processado") == "SIM":
            continue

        resultado = analisar_chamados(
            chamado["Nome"],
            chamado["Telefone"],
            chamado["Problema"]
        )

        processados.append_row([
            chamado["Nome"],
            chamado["Telefone"],
            chamado["Problema"],
            resultado["categoria"],
            resultado["prioridade"]
        ])

        entrada.update_cell(
            i + 2,
            5,
            "SIM"
        )

        print(f"Processado: {chamado['Nome']}")

        #CÉLULA 12 - EXECUTANDO O AGENTE
processar_novos_chamados()