---
layout: default
---

# AWS Managed AI Services

En este documento se verán los servicios de IA gestionados que ofrece AWS, en otras palabras servicios que ofrecen modelos ya entrenados. Generalmente, estos servicios tienen un costo bajo demanda (_pay for what you use_) y redundancia (_Availability zones and regions_).

## Amazon Comprehend

Es un servicio que utiliza modelos de NLP para encontrar insights, relaciones e información dentro de texto. Usualmente es utilizado para obtener el sentimiento en correos, comentarios o agrupar textos por temáticas. Concretamente los tipos de tareas que puedes realizar con alamzon comprehen son las siguientes:

### Custom Classification

Clasifica contenido de acuerdo a temática. Soporta distintos tipos de formato como texto, pdf, word, imágenes, ... Al igual que muchos servicios ofrece tipo de procesamiento en tiempo real o batch (tarea asíncrona pero analiza múltiples documentos a menor costo)

### Named Entity Recognition

Como dice su nombre, es un servicio que extrae componentes predefinidos (predefinidos por AWS) de un texto. Por ejemplo: en la oración "Un perro fue encontrado dormido en la calle Sigma frente al Mewing 123". Este servicio entendería y etiquetaría "perro" como Animal, "Sigma" como una calle y "Mewing 123" como una ubicación/dirección.

### Custom Entity Recognition

Es el mismo servicio anterior con la diferencia que puedes entrenar un modelo propio para capturar los componentes que desees.

## Amazon Translate

Servicio para realizar traducciones precisas.

## Amazon Transcribe

Servicio para trasncribir audio a texto. Utiliza el proceso de Deep Learning, Automatic Speech Recognition (ASR). Además identifica automáticamente el idioma del audio, por lo que es útil para audio multi lengua.

> Como dato importante, automáticamente elimina contenido sensible como PII

Puedes aplicar fine-tuning sobre un modelo para que se especialice en un campo en específico, es muy utilizado cuando el vocabulario/términos de un texto es muy rebuscado (acrónimos, jergas, palabras técnicas ...). Para ello o puedes aplicar "Custom vocabularies" (ideal para acrónimos o nombres de la marca) o "Custom Language Models" (ideal cuando quieres que sea muy especialista en un tema en específico (contexto))

> Ojo que puedes aplicar tanto Custom vocabularies como Custom Language Models para alcanzar la mayor precisión.

Un factor muy importante que ofrece este servicio es la capacidad de entender el tono y el pitch (intensidad de volumen). Esto permite identificar si existe toxicidad y así categorizar segmentos del audio como acoso sexual, hate, abuso, insultos, entre otros.

## Amazon Polly

Realiza lo contrario que el servicio anterior, convierte texto a voz.

Aspectos clave de Amazon Polly:
- Lexicons: define la forma de cómo se debe decir una palabra, por ejemplo el acrónimo Mr debería ser dicho como Mister.
- SSML: es un markup (como el HTML) para indicar cómo se deben pronunciar ciertas palabras/frases. Por ejemplo: Hola, \<break\> cómo estás? para detonar una espera.
- Voice Engine: los motores para producir voz de AWS.\
- Speech Mark: cuando se quiere coordinar una voz con un video, se suele usar esto para indicar cuándo debería iniciar y terminar cada frase/palabra.

## Amazon Rekognition

Servicio que reconoce entidades en imágenes o videos. Con entidades me refiero a objetos, personas, carros, texto, escenas, entre otros. También tiene la capacidad de hacer reconocimiento facial para tareas como face verification, es utilizado para reconocimiento de texto, para detectar detalles/emociones de un rostro, detectar logos. Es un servicio versatil.

También incluye moderación de contenido, en ese sentido, es útil para filtrar imágenes ofensivas, discriminatorias o no deseados.

## Amazon Lex

Servicio de amazon para construir chatbots de manera rápida. En cada sesión/chat con un usuario, Amazon Lex puede entender la necesidad del cliente para invocar el servicio adecuado y resolver el problema. Puede conectarse con Amazon Comprehend, Lambda, Kendra...

## Amazon Personalize

Es un servicio de amazon powered por ML, que te permite realizar recomendaciones a clientes. Concretamente se integra con el servicio S3, para recopilar interacciones de usuarios con productos, servicios o cualquier tipo de interacción para lanzar eventos de recomendación. Ojo que este servicio funciona en días, no en meses. 

Tienes que configurar adecuadamente este servicio para que se adapte a tus necesidades, como proveer recomendaciones populares o recomendaciones similares, recomendación de la siguiente mejor acción, entre otros.

## Amazon Textrack

Servicio de Amazon que utiliza modelos de AI/ML para extraer texto de documentos, imágenes, entre otros.

## Amazon Kendra

Servicio de Amazon de ML que realiza búsqueda de contenido en documentos. Si tienes una pregunta, busca la respuesta dentro de un banco de documentos/fuentes de datos.

> Un factor que lo lleva a otro nivel es que aprende con el feedback de los usuarios, mientras más es usado genera respuestas mas precisas gracias al feedback de los usuarios. (se llama incremental learning)

Además tiene una habilidad para priorizar respuestas, como el contenido más moderno, mas fresco, entre otros.

## Amazon Mechanical Turk

Es un marketplace en el que puedes subir tareas que necesitan ser realizadas por personas. Suele ser utilizado para clasificación de imágenes, recoletar datos o procesamiento. Por ejemplo: podrías agregar una tarea que consiste en etiquetar 10000 imágenes con la recompensa de S/. 0.10 por imágen. Esto será realizar por personas dispuestas a lo largo del mundo.

## Amazon Augmented AI (A2I)

Servicio que permite a personas evaluar la predicción de tus modelos de IA en producción. Todas tus predicciones que no tienen una alta tasa de confiabilidad son enviadas a un pool para ser evaluadas por personas, que pueden ser tus trabajadores, o de AWS o de Mechanical Turk. 

## Amazon Comprehend Medical & Transcribe Medical

Es lo mismo que Comprehend y Transcribe pero están especializados en el contexto de salud y siguen el estándar HIPAA.

## Amazon HealthScribe

Analiza la conversación entre medico y paciente, y genera una transcripción que captura información como roles, diagnóstico, términos médicos, entre otros. Es usualmente usado para documentar las sesiones y permitir al usuario recapitular lo que sucedió en su sesión.

## Amazon Hardware for AI

Puedes desplegar tus modelos en un EC2, dependiendo de tus necesidades puedes elegir el hardware que utilizará. Para ello exiten tipos de EC2 como GPU-based. También puedes elegir procesadores dedicados como AWS Trainium (reduce en un 50% el costo de entrenamiento) y AWS Inferentia (reduce en un 70% el costo de entrenamiento) 
