---
layout: default
---

# Amazon Bedrock

Amazon Bedrock es un servicio que te permite **gestionar modelos fundacionales** (FM) de distintos proveedores como Meta, Anthropic o Nova (la familia de FM de Amazon). Puedes interactuar con ellos mediante **consultas a APIs**, sin la necesidad de gestionar la infraestructura ni entrenar modelos desde 0.

![alt text](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsbgg0btljakkzh6dmmuk.png)

Algunas de las características que ofrece Amazon Bedrock son:

- API disponible
- RAG (Retrieval Augmented Generation): técnica que permite aumentar la veracidad de las respuestas de un modelo, mediante la adición de contexto como información relevante (en cristiano: enriquece un prompt con información contenida en fuentes de datos).
- Fine tuning: Adaptar un FM con tus datos, creando una variante personalizada y más especializada.

> Los datos de prueba no serán utilizados para entrenar el modelo.

## 1. Foundation Models (FM)

Los modelos fundacionales son modelos entrenados con una **GRAN cantidad de datos** que pueden adaptarse a muchos tipos de tareas como resumir, generar texto, generar imágenes, entre otros.

Amazon Bedrock ofrece más de 100 FM de distintos proveedores como Anthropic, Meta, ... Cada uno de ellos ofrece distintas capacidades y tienen sus propias limitaciones. Además, te permiten personalizar su respuesta, ajustando parámetros como _temperature_, _top K_ o _top P_. También, te permite crear variantes de FM que sean más efectivos para tareas en específico, siguiendo una de las siguientes técnicas:

1. **Reinforcement Learning**: El modelo aprende a tomar las decisiones más óptimas a partir de una función de valor/recompensa (creada por el usuario). Ejemplo: Ajuste de Tono - la función valida qué tan respetuosa son las respuetas de un modelo.
2. **Fine Tuning**: Adaptar un FM con tus datos, creando una variante personalizada y más especializada.
3. **Distillation**: Reducir el costo/tamaño/procesamiento de un FM, manteniendo su precisión.

> Por lo que, es parte importante, tomarse el tiempo de decidir cuál es el modelo más oportuno para la tarea que necesites, contemplando factores como **costo**, **latencia** y **calidad de respuestas**.

## 2. Fine-tuning

Fine Tuning es el proceso de adaptar un FM utilizando datos propios para mejorar su desempeño en tareas en específico, como generación o resumen de texto, clasificación, entre otros. Para ello, existen dos tipos de Fine Tuning:

1. **Supervised Fine Tuning**: Entrenas el modelo con datos etiquetados, concretamente ingresas el dato de entrada y el resultado esperado.
2. **Reinforcement Fine Tuning**: Entrenas el modelo con datos no etiquetados y una función de valor/recompensa que evaluará la veracidad de la respuesta. Esta función puede ser _objetiva_: una función que evalúa la salida con métricas o _subjetiva_: un modelo que evalúa la salida como el tono/cortesía.

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpdGQGoF010Ck6kXp12k6BE5LzxrBv-yJzQ&s)

> Para adaptar un FM con Fine-Tuning, los datos de entrenamiento tienen que estar alojados en un Bucket S3. El formato de los datos dependerá del modelo seleccionado.

## 3. Distillation

El proceso de Distillation consiste en entrenar un modelo a partir de las salidas de un FM, con el objetivo de reducir costos con un modelo más pequeño, manteniendo la precisión dentro de un rango aceptable.

![alt text](https://assets.zilliz.com/Knowledge_Distillation_of_Large_Language_Models_20241122_101853_562807feda.png)

> Tradeoff: sacrificas accuracy pero ahorras costo de rendimiento.

## 4. FM Evaluation

Para evaluar el rendimiento y calidad de respuestas de un FM, Amazon ofrece las siguientes técnicas y métricas de evaluación:

### 4.1. Técnicas de Evaluación

#### 4.1.1. Automatic Evaluations

La técnica de **Evaluación Automática** consiste en utilizar una función de valor o un FM para evaluar el grado de similitud entre la salida del modelo y la respuesta esperada. Con el fin de evaluar numéricamente el rendimiento del modelo.

#### 4.1.2. Human Evaluations

La técnica de **Evaluación Humana** consiste en recurrir a uno o varios evaluadores para que juzguen la calidad y precisión de la salida del modelo. Esto permite validar métricas subjetivas como el tono, importancia, alineamiento a ciertas políticas, entre otros.

### 4.2. Métricas de Evaluación

#### 4.2.1. Métricas Intrínsecas de Evaluación

Métricas que nos permiten evaluar internamente el funcionamiento del modelo

##### 4.2.1.1. ROUGE (Recall)

- La métrica ROUGE es usado frecuentemente para evaluar la calidad de resúmenes.
- Es útil para medir qué tanto contenido se recupera luego de realizar el resumen.
- No es útil para entender el significado del resumen. Concretamente trata sinónimos como si fuesen palabras distintas.
- Hay dos tipos de ROUGE:

**Rouge N**: compara la cantidad de n-gramas entre la referencia y lo generado

| Referencia              | Generado     | Bigramas Comunes   | Resultado |
| ----------------------- | ------------ | ------------------ | --------- |
| el gato está en la casa | el gato está | el gato, gato está | ALTO      |

**Rouge L**: calcula la subsecuencia de palabras más larga entre la referencia y lo generado.

| Referencia                    | Generado             | Subsecuencia Común   | Resultado |
| ----------------------------- | -------------------- | -------------------- | --------- |
| el gato negro está en la casa | el gato está en casa | el gato está en casa | ALTO      |

##### 4.2.1.2. BLEU (Precision)
- La métrica BLEU se utiliza frecuentemente para medir la calidad de traducciones.
- Es útil para medir la calidad de un texto traducido al compararlo con una o más traducciones humanas de referencia.
- No es útil para entender el significado. Además penaliza las traducciones con sinónimos y la brevedad.

##### 4.2.1.3. BERTScore
- La métrica BERTScore es utilizado para analizar la similitud semántica entre textos. 
- Suele ser una métrica con alto costo de calcular y más lento que los otros tipos de métricas

##### 4.2.1.4. Perplexity
- La métrica Perplexity mide qué tan bien un modelo predice una secuencia de texto; valores más bajos indican mejor desempeño.

> En casos prácticos no se suele utilizar una métrica, sino varias.

#### 4.2.2. Métricas de evaluación (Extrínsecas)

Métricas que nos permiten evaluar extrinsicamente al modelo.

| Métrica                  | Significado                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| User Satisfaction        | Satisfacción del usuario                                                    |
| Average revenue per user | Promedio de dinero que suele gastar un usuario en un año (en mis productos) |
| Cross Domain Performance | Habilidad del modelo para realizar tareas de distintos ámbitos.             |
| Conversion Rate          | El porcentaje de usuarios que me visitan y se convierten en clientes.       |
| Efficiency               | Evaluar uso de cómputo, disco, recursos en general.                         |

## RAG and Knowledge Base

RAG o por sus siglas Retrieval Augmented Generation.

Cuando quieras que tu modelo utilice información en específica que es de tu propiedad (llamada knowledge base) se utiliza esta técnica. Trata de tener una base de información en un formato en específico que el modelo utilizará como base para generar sus respuestas.

El flujo inicia cuando el usuario crea un prompt, a lo que un modelo recepciona e inyecta/augmenta más información (texto) que es recogida del knowledge base teniendo como resultado un prompt completo. Para lo que otro modelo recepciona y genera el mensaje de respuesta.

![alt text](https://arrobasystem.com/cdn/shop/articles/rag-retrieval-augmented-generation-revolucionando-la-generacion-de-contenidos-con-inteligencia-artificial_960x502_crop_center.jpg?v=1736795434960w)

El formato específico para aplicar RAG son los **Vector Database**, y para transformar la data se suele almacenarla en S3, luego se transforma en chunks (particiones) y luego se generarán embedding con algun modelo permitido (Amazon Titan, ...) para almacenarlo en un servicio de almacenamiento de vectores, tienes S3 Vectors, MongoDB, ...

Fuente de datos para alimentar tu **Vector Database** son S3, Confluence, SharePoint, Salesforce, Websites ...

## Guardrails

Se encarga de controlar y filtrar los request que se realizan al modelo fundacional. Usualmente es usado para filtrar contenido dañino, irrespetuoso, que no está en el alcance del modelo o data muy sensible como tarjetas de crédito ...

Ejemplo: Al chatbot de mercado libre le preguntas que puedes cocinar hoy, y te dice: eso no se, no fastidies xd.

## Agents

Es un bot que puede realizar una o varia tareas, con el poder de tomar decisiones para cumplir con la solicitud del usuario.

Se le dará un contexto de su función (sus instrucciones), Knowdledge base, acceso a APIs y funciones Lambda que el bot podrá ejecutar. Pero él será el encargado de decidir cuándo utilizar cada uno.

De manera general, la fomra en que funciona un agente, es que habrá un modelo de Bedrock que definirá sus pasos a realizar para cumplir con la tarea general. En cada paso decidira si invocar api/lambda o un knowdledge base y toda esa infomración pasarsela a otro Bedrock model para que genere la respuesta final para el usuario.

> Para hacer debug, los agentes tienen una funcionalidad de tracing para identificar lo que hace en cada paso.

## Logging

Para guardar logs/métricas, Amazon Bedrock se puede integrar con Amazon Cloudwatch y S3. Ya sea para almacenar, texto, imágenes o incluso embeddings.

CloudWatch te permite agregar alertas cuando se sobrepase un umbral.

## Pricing

Hay 3 tipos de pago:

- On Demand: Paga solo por lo que usas, cantidad de input/output tokens (ya sea en texto, creando embeddings o imágenes)
- Batch: Reduce 50% de costos cuando quieres realizar múltiples predicciones en una solicitud.
- Provisioned Throughput: Reserva de un modelo, deseable cuando sabes cuantos tokens utilizarás por minuto.

Costo de técnicas:

- Prompt Engineering: gratis
- $ RAG: Gastos para convertir texto en embeddings y también provisionar un Vector Database.
- $$ Instruction-based Fine-Tuning: entrenas un modelo para que sea mejor siguiendo instrucciones. (computación normal)
- $$$ Domain Adaptation Fine-Tuning: entrenas un modelo para que sea más especializado en un tema. (computación intensiva)

> Configuración de temperatura, top K o top P, no impacta en el precio.

## Amazon Nova

Es la alternativa de Amazon ante el ecosistema de ChatGPT y ClaudeAI. Tiene diversos modelos para todo tipo de tarea, y se estructura de la siguiente manera:

1. Understanding:

- Nova Premier: multimodal más complejo y es usualmente utilizado para **distillation**.
- Nova Pro: multimodal más balanceado presición/velocidad/costo para todo tipo de tarea.
- Nova Lite (2): multimodal (video, imágen y texto) a buena velocidad y bajo costo.
- Nova Micro: solo genera texto, es el más rápido y tiene la latencia más baja.
- Nova Omni (2): multimodal aún más complejo.
- Nova Multimodal Embedding (2): realiza embedding para RAG y aplicaciones de búsqueda.

2. Creative:

- Nova Canvas: state of art para la generación de imágenes.
- Nova Reel: state of art para la generación de videos.

3. Speech:

- Nova Sonic (2): Modelo conversacional que puede hablar en varios idiomas.
