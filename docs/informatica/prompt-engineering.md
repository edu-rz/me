---
layout: default
---

# Prompt Engineering

Al igual que el internet y los dispositivos móviles, la inteligencia artificial y los modelos de lenguaje natural han emergido para quedarse. Herramientas accesibles para todo el mundo como ChatGPT, Gemini, Claude, Copilot, entre otras, sirven para todo tipo de tareas. Su uso apropiado puede ser un gran factor diferencial, ya que podrás sacarle el mejor provecho. Por ello, en este documento, sintetizaré los puntos más importantes.

## Los 5 principios de Prompting

No es lo mismo escribir "Dame 5 películas para verlas ahora" que "Hazme un listado de 5 películas clásicas del género de drama y comedia. Que sean populares, dirigidas para jóvenes y que pueda verla en pareja. Realiza una tabla con su puntaje total y en las categorías significado, actuación y producción.". Usar correctamente el contexto es muy útil para conseguir resultados más acertados. Para realizar un buen prompt, hay que tener en cuenta estos principios:

### Dar dirección

Dar dirección a un prompt significa guiar al modelo a un rol, tono o estilo que debe adoptar al generar la respuesta. Incluir una breve línea que defina la dirección deseada genera resultados más coherentes y precisos. Por ejemplo, no es lo mismo decir "Quiero cinco nombres para un libro del género comedia" que decir "Para un libro de comedia quiero cinco nombres simples, fáciles de recordar y creativos al estilo de Steve Jobs". El segundo prompt orienta mejor al modelo para conseguir el resultado deseado.

### Especificar el formato

Especificar y limitar la estructura de la respuesta. Por ejemplo:

- Lista separada por comas o lista enumerada
- En formato JSON/YAML

### Dar ejemplos

Debes ser cuidadoso al agregar ejemplos ya que si todos siguen un patrón muy específico, puede limitar la creatividad. Por ejemplo:

- Si en nuestro prompt escribimos: "Quiero 5 nombres de marca para una empresa dedicada a X. Nombres como Ipad, Iphone, Ishop". Lo más probable es que todas las respuestas del modelo empiecen por I.
- Al crear imágenes se puede usar otra como referencia pero se debería ajustar el porcentaje de similitud para obtener resultados deseados y no sean tan sesgados por la imagen de referencia.

### Evaluar Calidad

Esta no es una táctica que se aplica directamente a los prompts, sino es una idea que se tiene que tener presente para generar mejores. No todos los modelos son iguales asi que hay que ajustar el prompt, usualmente para validar la confiabilidad, se pide que el modelo responda 10 o 20 veces al mismo prompt y habrá veces en que devuelve exactamente lo que queremos y otras que no, por ejemplo, incluye el enunciado que colocamos (algo que no queremos). Por ello, si es que el modelo tiene siempre las mismas respuestas, estamos en buen camino, o sino, deberíamos ajustar el prompt.

> CFG Scale: Classifier Free Guidance, es un valor numérico que controla en que escala la generación de una imagen sigue el prompt que le diste. (mientras más grande el número, más sigue el prompt)

### Dividir la tarea

Dividir una tarea compleja en simples pasos. Por ejemplo, primero se puede solicitar un listado de nombres y luego pedir rankearlos de acuerdo a métricas.

## Características y modos de ChatGPT

### CHATGPT MODES

- SEARCH: usa cualquier tipo de referencia
- DEEP RESEARCH: principalmente usa referencias académicas y asegura que toda la información sea verídica
- DATA ANALYSIS: dados datos en cualquier formato, chatgpt puede analizar el contenido y crear insights
- INTERACTIVE TABLES: al analizar data, se puede referencier celdas o columnas del chat
- IMAGE GENERATION
- AGENT MODE: puede abrir el navegador y conectarse a aplicaciones para ejecutar tareas (agendar una reunión, enviar un correo, -).
- TASKS: permite crear tareas que se ejecutaran con una frecuencia determinada (diariamente a las 12:00 AM crear un post en X)
- CANVAS: comprende mejor el contexto que el modo básico, permite ediciones en un segmento en específico y ofrece sugerencias en el editor.
- COMPUTER VISION: analizar imágenes y realizar tareas como identificar elementos, escribir código a partir de una imagen, puede entender una secuencia de imágenes, extraer texto de una imagen, tiene sentido de belleza
- STUDY & LEARN: apoya en el estudio, realizando preguntas para asegurar que entiendes el contenido
- CUSTOM GPT's: permite crear GPT's personalizados, utilizar propios de la comunidad e incluso permite acceder al modelo para realizar requests y utilizarlo en otros aplicativos.

## TÉCNICAS

- ROLE PROMPTING: Asignar al modelo un rol o persona para tener resultados más precisos (actúa como un chef, novelista, poeta, -
- OUTPUT FORMATS: Desde texto o archivos puedes generar una salida con cualquier otro tipo de formato, csv's, Excel, power point,
- LEAST TO MOST: En un inicio pedir un esqueleto (en realidad es un esquema, puros titulos y subtitulos) de lo que se desea y en cada prompt profundizar en cada punto.
- Explicar un tema como si yo tuviera 5 años.
- Análisis de sentimientos
- Utilizar brackets (), [] o <> para delimitar una tarea o acción.
- ... "Lets think step by step" muestra una secuencia lógica de cómo gpt llega al resultado final.
- Ask for context: "Before generating, ask me for information if its neccesary"
- Pre Warming chats: Antes de pedir lo deseado, preguntar por tips para realizar bien lo que quiero, y así el chat tendrá un buen contexto antes de crear.
- 
