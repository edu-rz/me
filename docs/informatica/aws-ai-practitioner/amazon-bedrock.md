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

## 5. RAG and Knowledge Base

RAG o por sus siglas Retrieval Augmented Generation es una técnica que enriquece un prompt con fuentes de datos externas para aumentar la veracidad de las salidas de un FM y reducir las alucinaciones.

Para enriquecer los prompts y generar una mejor repuesta se debe tener una fuente de datos, usualmente llamada _Kwowledge Base_. Generalmente con información recopilada de Confluence, SharePoint, Websites, ... En esta se subirán documentos/información que utilizará el modelo. Para ello, el contenido será particionados en _chunks_ y luego transformados en _embeddings_ para almacenarlos en una base de _datos vectorial_. A continuación un ejemplo del flujo completo:

![alt text](https://arrobasystem.com/cdn/shop/articles/rag-retrieval-augmented-generation-revolucionando-la-generacion-de-contenidos-con-inteligencia-artificial_960x502_crop_center.jpg?v=1736795434960w)

> AWS ofrece varios servicios para almacenar los _datos vectoriales_ como S3 Vectors, OpenSearch Service. También externos como MongoDB o Pinecone.

## 6. Guardrails

Guardrails es una característica del servicio de Amazon Bedrock, que te permite crear políticas para filtrar la entrada y salida de los FM. Concretamente se enfoca en filtrar el contenido inapropiado, racista o incluso restricciones fuera del alcance del modelo. Por ejemplo, podrías evitar que usuarios realicen preguntas relacionadas a cocina a un chatbot dedicado a brindar apoyo para explicar temas financieros.

## 7. Agents

Los Agentes son bots que pueden realizar multitareas, su importancia reside en que pueden tomar decisiones para cumplir con la solicitud del usuario de la mejor manera. Concretamente, tienen acceso a APIs que le permiten conectarse a una plataforma o una aplicación. Además de las instrucciones dadas por el usuario, fuentes de información (Knowdledge bases) e incluso funciones Lambda que pueda ejecutar.

Concretamente, con cada dato de entrada recibido, el agente definirá un plan de actividades para cumplir con la solicitud. Donde analizará sus _Knowdledge bases_ y definirá qué API o función Lambda invocará en cada paso. Para luego realizar las invocaciones y generar la respuesta final para el usuario.

> Amazon también ofrece la característica Tracing para permitir el debug e identificar que hace el agente en cada paso.

## 8. Logging

Amazon te permite guardar logs/métricas en alguno de los siguientes servicios: Amazon Cloudwatch o S3. Te permite almacenar, texto, imágenes o incluso embeddings. Específicamente en CloudWatch, te permite agregar alertas para saber cuándo de supera un umbral.

## 9. Pricing

Amazon Bedrock ofrece distintos modelos de facturación según el patrón de uso:

- On-Demand:
  Pagas por consumo, basado en la cantidad de tokens de entrada y salida, así como el uso de modelos de embeddings o generación de imágenes. Es ideal para cargas variables o impredecibles.

- Batch Inference:
  Permite procesar grandes volúmenes de datos de forma asíncrona a menor costo por unidad. El ahorro depende del modelo y no es un porcentaje fijo.

- Provisioned Throughput:
  Reservas capacidad dedicada (tokens por segundo). Es recomendable para aplicaciones con tráfico predecible y requisitos de baja latencia.

### 9.1. Costos asociados a técnicas

- Prompt Engineering:
  No tiene costo adicional como técnica, pero cada ejecución del prompt genera consumo de tokens, por lo tanto sí implica costo.

- RAG:
  Incluye costos por generación de embeddings, almacenamiento en bases vectoriales y consultas de recuperación, además del costo de inferencia del modelo.

- Fine-Tuning:
  - Instruction Fine-Tuning: menor costo relativo, orientado a mejorar el seguimiento de instrucciones.
  - Domain Adaptation Fine-Tuning: mayor costo, ya que requiere datasets más grandes y entrenamiento más intensivo.

> Parámetros como temperatura, top-k o top-p no tienen costo directo, pero pueden afectar indirectamente el costo al influir en la longitud de las respuestas generadas.

## 10. Amazon Nova

Es la alternativa de Amazon ante el ecosistema de OpenAI y Anthropic. Tiene diversos modelos para todo tipo de tarea, y se estructura de la siguiente manera:

### 10.1. Understanding

- Nova Premier: multimodal más complejo y es usualmente utilizado para **distillation**.
- Nova Pro: multimodal más balanceado presición/velocidad/costo para todo tipo de tarea.
- Nova Lite (2): multimodal (video, imágen y texto) a buena velocidad y bajo costo.
- Nova Micro: solo genera texto, es el más rápido y tiene la latencia más baja.
- Nova Omni (2): multimodal aún más complejo.
- Nova Multimodal Embedding (2): realiza embedding para RAG y aplicaciones de búsqueda.

### 10.2. Creative

- Nova Canvas: state of art para la generación de imágenes.
- Nova Reel: state of art para la generación de videos.

### 10.3. Speech

- Nova Sonic (2): Modelo conversacional que puede hablar en varios idiomas.
