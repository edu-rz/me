---
layout: default
---

# Artificial Intelligence (AI) & Machine Learning (ML)

Es el área para desarrollar sistemas capaces de realizar tareas que requieren inteligencia humana, como entender, razonar, resolver problemas, entre otros. Concretamente tareas como detección de fraude, visión computacional con los autos autónomos o incluso detección de enfermedades. A grandes rasgos, para hacer modelos de IA, se tienen 4 capas: Data (el conjunto de datos), Framework (qué herramientas, frameworks, requisitos y qué se resolverá con el modelo), Model (entrenamiento del modelo) y Application (permitir a los usuarios finales utilizar el modelo).

## Machine Learning

Machine Learning es un tipo de IA para construir modelos que aprenden a partir de tu conjunto de datos. El modelo se ajusta a tus datos, ya sea una tarea de predicción o clasificación.

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTyGSPZyG0KvycE3Fl8FEJbf-sr2CCfL0vQ&s)

## Deep Learning

Área dentro del ML, puede realizar tareas más complejas, entiende patrones de datos más complejos que ML no podría entender. Está inspirado en el funcionamiento del cerebro humano, ya que se compone de unidades lógica llamadas neuronas y sus conexiones con otras. Concretamente, es utilizado para tareas que requiera visión computacional y NLP. Requiere mucho poder de cómputo.

## Generative AI

Es un subconjunto dentro del Deep Learning que se enfoca en la generación de data, como texto, imágenes, resumen de texto, entre otros. Se puede encontrar mayor detalle en este documento: [Generative AI](./generative-ai.md).

### Transformer Model (LLM)

Es la arquitectura de un tipo de LLM que puede procesar una oración completa en vez de palabra por palabra, por lo que puede generar resultados más coherentes.

## Training Data

Etapa más crítica para construir un buen modelo. Debemos tener buena data.

- Labeled data: datos que están etiquetados, para entrenamiento supervisado, el modelo se ajusta para alinearse a la variable objetivo (el target).
- Unlabeled data: datos que no están etiquetados, para entrenamiento no supervisado, el modelo busca un patrón o estructura en datos.

- Structured Data: Formato de estructurado de los datos, usualmente separado por tabs (excel) o comas. O incluso un conjunto de datos de serie de tiempo.

- Unstructured Data: no sigue una estructura fija, como text data como un conjunto de artículos, post, comentarios. O image data, como imágenes de distinto formato o contenido.

## Supervised Learning

Es un tipo de aprendizaje de ML. Los modelos aprenden con datos etiquetados. Son utilizados para tareas de regresión o de clasificación. Usualmente para entrenar el modelo se usa 70% de entrenamiento, 15% de validación y 15% de test.

### Feature Engineering

- Structured Data: como son datos de tipo tabular, consiste en transformar columnas en nuevos datos que capturen nueva información más digerible para el modelo. Por ejemplo, generalmente en vez de tener el año de nacimiento de un cliente, sería mejor transformar la fecha en edad.

Existen distintas técnicas como:

- Feature extraction: crear nuevas variables a partir de una o más para consiguir variables más significativas.
- Feature selection: seleccionar un subconjunto o las variables que son más útiles para predecir la variable objetivo.
- Feature transformation: consiste en transformar variables existentes en otro formato para mejorar la precisión del modelo como OHE, log transformation, ...

- Unstructured Data: como los datos no tienen una estructura en sí y suelen ser texto o imágenes, se aplican técnicas como analisis de sentimientos o embeddings para extraer información relevante.

## Unsupervised Learning

Modelos que aprenden de datos no etiquetados, _identifican patrones y la relación entre los datos_. Usualmente son utilizados para tareas de agrupamiento (clustering), reglas de asociación, detección de anomalías, entre otros.

## Semi-supervised Learning

A partir de un conjunto de datos que tiene una pequeña porción etiquetada y el resto no etiquetada. Se entrena un modelo para que etiquete los datos no etiquetados. Se llama pseudo-labelling. Luego el modelo es reentrenado con el resultado.

## Self-supervised Learning

Es un tipo de aprendizaje para datos no estructurados y sin etiquetar. Donde el modelo se entrena utilizando datos no etiquetados, genera sus propias tareas para aprender _representaciones de datos_. Por ejemplo, en el caso de texto, genera oraciones con palabras faltantes y su tarea sería predecir la palabra faltante. Por otro lado, para imágenes podría reconstruir segmentos de fotografías ocultas. Es utilizado para modelos como GPT.

## Reinforcement Learning

Es un tipo de aqprendizaje en el que un agente aprende a tomar decisiones en base a una función de recompensa. Su tarea principal es maximizar la ganancia de la función.

## Reinforcement Learning from Human Feedback

Consiste en darle valor a la retroalimentación humana. Incluir el factor de preferencia de los usuarios para que un modelo haga mejores predicciones/generaciones.

## Model Fit, Bias and Variance

### Model Fit

- Underfitting: el modelo es muy simple para la complejidad del dataset, no entiende la relación correctamente.
- Balanced: modelo que rinde bien en datos de entrenatamiento y test.
- Overfitting: modelo sobreajustado, predice bien con los datos de entrenamiento, pero mal con los datos de test.

### Bias

Es la diferencia/error entre la predicción y el valor real

- Low Bias: bueno
- High Bias: malo

Para reducir el bias, bien puedes incluir más características o utilizar un modelo más complejo.

### Variance

Es la variabilidad de datos con respecto a la media.

- High Variance: El modelo es caótico, ante cambios pequeños, hay resultados muy variables. Se suele ver en modelos con overfitting.

- Low Variance: poca variabilidad

Para reducir la varianza se puede hacer feature engineering.

![alt text](https://www.appliedaicourse.com/blog/wp-content/uploads/2024/09/low-variance-and-high-variance-947x1024.webp)

## Evaluation Metrics

### Cuantitative

- Precision (calidad): qué tan confiable es cuando dice “sí” (Minimiza falsos positivos - no marcar spam a correos importantes)
- Recall (cantidad): qué tan completo es encontrando los “sí” (minimiza falsos negativos - casos de detección clínicos)
- F1-Score: Es un balance para precision y recall (útil para dataset no balanceados)
- Accuracy: (usado raramente)

- AUC ROC: evalúa que tan bien un model distingue entre clases (positivo vs negativo)
- AUC = 1.0 = modelo perfecto
- AUC = 0.5 = puro azar (como lanzar una moneda)
- AUC < 0.5 = peor que azar (está confundiendo todo)

> Precision, Recall, and F1-Score are key classification metrics used to evaluate machine learning models, especially with imbalanced datasets

### Cualitative

- MAE (Mean Absolute Error): error promedio absoluto, mide qué tan lejos están las predicciones en promedio
  (no le importa la dirección del error)
- MAPE (Mean Absolute Percentage Error): error porcentual promedio, mide el error en % respecto al valor real
  (útil para entender “cuánto me equivoco en porcentaje”)
- RMSE (Root Mean Squared Error): raíz del error cuadrático medio, penaliza más los errores grandes
  (si te equivocas mucho, castiga fuerte)
- R² (R-squared, coeficiente de determinación): qué tanto explica el modelo, mide qué proporción de la variabilidad de los datos explica el modelo (cerca a 1 es perfección)

> MAE, MAPE, RMSE miden que tan preciso es el modelo, mientras que R2 mide la varianza

## Inferencing

Es cuando un modelo realiza una predicción de un dato no conocido. Puedes hacerlo en tiempo real (mas caro) o en batch (más lento pero más barato).

También se puede hacer inferencias desde cualqueir tipo de dispositivo con el cómputo suficiente, como raspberry pis o celulares (Usa Small language Model). En el caso que se necesite más potencia un servidor (Usa Large language Model). 

## Phases of ML

![alt text](https://media.licdn.com/dms/image/v2/D4D12AQEZOEVpwBMhEA/article-cover_image-shrink_720_1280/B4DZYYeQeNHAAI-/0/1744167307603?e=2147483647&v=beta&t=nf144E0MkfyLN70Xj2XdzNvyzdqblsYBaMKxa9dPJuI)

## Hyperparameters

Los hiperparámetros son paramétros ajustables que permiten modificar el comportamiento del modelo en su etapa de aprendizaje, entre ellos tenemos:
- learning rate: controla qué tan grandes son los pasos al actualizar los pesos
- batch size: cantidad de datos que el modelo usa antes de actualizarse
- number of epochs: número de veces que el modelo recorre todo el dataset
- regularization: técnicas para evitar que el modelo se sobreajuste (l1, l2, dropout)

se pueden aplicar tecnicas como grid search o random search o servicios como SageMaker Automatic Model Tuning (ATM) para hacer hyperparameter tuning
