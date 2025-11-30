---
layout: default
---

# Conceptos detrás de Spring Boot con Java

Durante los años 2000, era una tarea tediosa crear una aplicación con Java EE. Debido a que el código era repetitivo y boilerplate, la inyección de dependencias y manejo de transacciones eran rígidos, y tenía una gran complejidad. Por ello, en el 2003, se creó el framework Spring para facilitar el desarrollo de aplicaciones, se implementó la **inversión de control** (el framework se encargaba de crear y gestionar objetos), simplificar la inyección de dependencias y ofrecer un modelo modular.

> Con boilerplate me refiero a código que se repite con poca o ninguna variación. Por ejemplo: lo contenido en etiquetas head en archivos html.

Sin embargo, aquellas mejoras no eran suficientes, debido a que aún, la configuración XML era basta y era difícil arrancar proyectos rápidos. Por ello, en el 2014, nació **Spring Boot** con la siguiente filosofía:

- **Convención sobre configuración**: en lugar de que tú configures todo, Spring Boot lo hace por defecto (autoconfiguración).
- **Starters**: dependencias preconfiguradas listas para usar (spring-boot-starter-web, spring-boot-starter-data-jpa, etc.).
- **Servidor embebido**: ya no necesitas instalar Tomcat/Jetty aparte, Spring Boot lo incluye y arranca con un simple main().
- **Producción lista**: métricas, logging, monitoreo, etc., integrados de fábrica.
