---
layout: default
---

# AWS SageMaker

Es un servicio de AWS que te apoya durante todo el proceso para crear, entrenar, desplegar y analizar tus modelos de IA/ML.

También ofrece un listado de modelos preconstruidos para todo tipo de tarea como:

- Supervised Learning: linear/regression o knn.
- Unsupervised Learning: PCA, K means, Anomaly Detection.
- Textual algorithms: NLP, summarization.
- Image Processing: classification, generation, ...

Ofrece un feature muy poderoso que te promete ahorrar tiempo y costo, AMT conocido como Automatic Model Tuning, te permite encontrar los hiperparámetros más óptimos para tu modelo.

Para el despliegue de tu modelo y realizar inferencias tienes los siguientes tipos de despliegue:

- Real Time: suele ser el más costoso, respuestas en tiempo real, ideal para aplicaciones móviles/web, chatbots, entre otros.
- Serverless: parecido a real time, suele ser un poco más lento que real time, ya que aws prende recursos cada vez que recibe peticiones (asi que puede sufrir de cold start (la primera petición demora, la siguiente ya no tanto)). Es ideal para proyectos mvp, cuando el tráfico es muy variable e impredecible, protipos.
- Asynchronous: para peticiones que demoran bastante (más de 30s) y no necesitas una respuesta inmediata. AWS pone tu petición en una cola y el resultado lo envía a un S3 que puede invocar una notificación. Suele ser usado para videos, NLP pesado, generación de embeddings masivos.
- Batch: para procesar grandes cantidades de datos, no es necesario realizarlo al instante (es el que más demora). Ideal para predicciones masivas, jobs nocturnos, ETL + ML, entre otros.

Todo esto lo puedes hacer en la plataforma _SageMaker Studio_: colaborar con equipos, crear tus modelos, mantener un registro de sus cambios, datasets, entre otros.

## Data Wrangler

Es una plataforma dentro de SageMaker que te permite ingestar datos y transformarlos y visualizarlos de acuerdo a tus necesidades, los cuales te serán útiles para cargarlos a un modelo de ML.
Ademas puedes integrar esta herramienta como si fuese parte de un pipeline para ingestar datos en tu modelo.

## SageMaker Clarify

Realiza un benchmarking entre tus modelos. Evalúa FM propios y otros tipos de modelos ML. De esta manera, esta herramienta captura muchas características del desempeño de tu modelo como:

- Factor humano: puede capturar sentimientos de las respuestas generadas y su calidad dependiendo de la cuestión. 
- Explicabilidad: Tiene una característica que te permite explicar las decisiones que toma un modelo. 
- Sesgos: Detecta el bias que tiene tu conjunto de datos (clases imbalanceadas), detecta si tu modelo se inclina a una clase más que a otra (sesgo) ...

SageMaker Ground Truth: También te permite realizar reviews humanas aplicando RLHF

## SageMaker Governance

Desde aqui se gestionan todos tus modelos de SageMaker

- SageMaker Cards: explica el detalle del tus modelos, información esencial, para que es usado, riesgos, detalle de entrenamiento, información general.
- SageMaker Model Dashboard: repositorio de todos tus modelos, su estatus, que tan bien van de acuerdo a métricas predefinidas.
- SageMaker Role Manager: define el rol de los usuarios, AI Engineers, data scientists, MLOps, ...
- SageMaker Monitor: Monitorea la calidad de tus modelos en producción (continuamente (cada 1h) o programado (todos los días a las 8pm)). Es útil para identificar comportamientos deficientes como: el modelo ha tenido una predicción del 50%, arreglenme.
- SageMaker Model Registry: Mantiene un registro de todos los modelos que tienes, sus versiones, gestiona aprobaciones (como los PRs de Github), despliega modelos, entre otros.
- SageMaker Pipelines: Automatiza todo un flujo para transformar datos, entrenar modelos y desplegarlos (ML CI/CD). Puedes automatizar de todo: procesamiento, entrenamiento, fine tuning, clarify (evaluar métricas de funcionamiento) ...

## SageMaker Consoles

- SageMaker JumpStart: Ofrece modelos preentrenados de diversas plataformas como HuggingFace, Databricks, Meta, ... que pueden ser subidos a SageMaker de manera fácil y rápida. Hay modelos para clasificación, regresión, identificar fraude, y computer vision. Para utilizar tienes 2 opciones, o bien con ML Hub donde seleccionas, experimentas, configuras y despliegas, o ML Solutions, donde seleccionas, configuras y despliegas.
- SageMaker Canvas: Creas modelos de ML sin necesidad de codificar.
- MLFlow: SageMaker también te da la opción de gestionar todo el ciclo de los modelos de ML utilizando MLFlow.

Además puedes aplicar Network Isolation en tus ML por temas de seguridad. También tienes SageMaker DeepAR para predecir series de tiempo.




