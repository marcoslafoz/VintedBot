import sys
import json

def procesar_enlace(vinted_link):
    # Aquí puedes procesar el enlace de Vinted como desees
    resultado = f"Enlace de Vinted procesado: {vinted_link}"
    return json.dumps({"resultado": resultado})  # Devuelve el resultado como JSON válido

if __name__ == "__main__":
    try:
        # Lee la entrada desde stdin
        input_data = sys.stdin.read()
        data = json.loads(input_data)
        vinted_link = data["vintedLink"]
        resultado = procesar_enlace(vinted_link)
        print(resultado)  # Devuelve el resultado como JSON válido
    except Exception as e:
        error_message = {"error": str(e)}
        print(json.dumps(error_message))  # Devuelve un mensaje de error como JSON válido
