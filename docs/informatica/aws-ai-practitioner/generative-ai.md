---
layout: default
---

# Generative AI

La IA generativa es un subcampo del deep learning, y al igual que los modelos de este campo. La ig generativa es entrenada con data no etiquetada y su objetivo es generar los mismos datos de entrada. ojo que no es como el resto de modelos que buscan identificar o agrupar datos, sino generar nuevos datos que sean similares a los inputs.

![alt text](https://communities.sas.com/t5/image/serverpage/image-id/93362i9D7F79AA3B09013B/image-dimensions/393x380?v=v2)

## Foundation Model

Es un subtipo de la ia generativa, se trata de modelos que son entrenados con una **gran cantidad de datos** y datos **variados**, lo que le permite realizar varias tareas como resumir texto, escribir texto, generar imágenes, extraer información ... 

> Para realizar foundation models, tienes que ser millonario, ya que el precio de entrenamiento es muy elevado. Igualmente hay foundation models gratis que se pueden utilizar desde casa.

## LLMs

Otro tipo de ia generativa, que es muy buena para recordar información en largos periodos de tiempo, esto se debe al diseño de su arquitectura. Es usado para tareas relacionada con texto.

### Cómo funciona para texto

Los modelos de toda esta sección son no determinísticos, me refiero a que si realizas un prompt, no te va a dar el mismo resultado. A grandes rasgos, a partir de un prompt, el modelo calcula cuál es la próxima palabra más probable.

### Cómo funciona para imágenes

El proceso para generar imágenes se llama *Stable Diffusion*. El proceso general trata de agregar ruido a una imagen, al punto que no se entiende lo que se ve y luego se entrena el modelo para que reconstruya la imagen con ruido al punto que cumpla con el prompt del usuario.

## Conceptos
### Tokenización
Convertir texto en una secuencia de tokens. 

Token: es una unidad de información. Existe tokenización por palabras o de subpalabra (en que la palabra se divide en varios tokens)

![alt text](https://www.ionos.es/digitalguide/fileadmin/_processed_/d/2/csm_tokenizer-openai-ejemplo_027796a55e.webp)

### Context window
Puede tener varios significados dependiendo del contexto, pero en el de la IA Generativa, trata de qué tantos tokens puede un LLM considerar para generar texto. Mientras más grande el context window, habrá más información que la IA podrá tomar en cuenta. 
> Más context window = mayor procesamiento: ten en cuenta al elegir un modelo.

### Embeddings

Es el proceso de convertir en vectores texto, imágenes o audio. A partir de un texto, lo tokenizas y por cada palabra, le asignas un vector n-dimensional.

> Es muy útil capturar similitud entre palabras, por ejemplo felicidad y alegría serán más cercanos que tristeza. En resumen, ayuda a capturar el significado, sentimiento y el rol sintáctico.


