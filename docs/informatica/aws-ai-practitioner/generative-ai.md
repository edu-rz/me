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
