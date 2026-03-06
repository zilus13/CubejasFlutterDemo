# Cube.js + Flutter Dashboard Demo

Este repositorio contiene:
- `docker-compose.yml` para levantar Cube.js.
- `flutter_dashboard/` con una app Flutter para consumir métricas/reportes desde Cube.js.

## 1) Inspección del repositorio y hallazgos Cube.js

Archivo detectado:
- `docker-compose.yml`

### Host y puerto de Cube.js
- Host local: `localhost`
- Puerto: `4000`
- Endpoint base API load: `http://localhost:4000/cubejs-api/v1/load`

### Esquema de autenticación
- Se define `CUBEJS_API_SECRET` (`dev-secret-cambialo`) en `docker-compose.yml`.
- Para consumir el API de Cube.js, la app Flutter espera un JWT en `Authorization` usando `--dart-define=CUBE_API_TOKEN=...`.

> Nota: Cube.js valida JWT firmado con el secreto configurado en `CUBEJS_API_SECRET`.

### Cubes/measures/dimensions/queries disponibles
- En este repo no hay esquema (`schema/*.js`) ni modelos de Cube.js versionados.
- Por eso la app usa queries de ejemplo válidas para un cube típico `Orders`:
  - Measures: `Orders.count`, `Orders.totalAmount`
  - Dimensions: `Orders.status`
  - Time dimension: `Orders.createdAt` (granularity `day`)

### Variables de entorno reutilizables
Desde `docker-compose.yml`:
- `CUBEJS_DEV_MODE`
- `CUBEJS_API_SECRET`
- `CUBEJS_DB_TYPE`
- `CUBEJS_DB_BQ_PROJECT_ID`
- `CUBEJS_DB_BQ_KEY_FILE`
- `CUBEJS_PRE_AGGREGATIONS_EXTERNAL`
- `CUBEJS_PRE_AGGREGATIONS_SCHEMA`
- `CUBEJS_DB_EXPORT_BUCKET`

## 2) Arquitectura Flutter aplicada

Estructura en `flutter_dashboard/lib`:
- `core/`
  - `constants/app_config.dart`: centraliza URL y token por `dart-define`.
  - `network/network_exception.dart`: errores de red controlados.
- `data/`
  - `datasources/cube_api_client.dart`: cliente HTTP desacoplado de UI.
  - `models/`: modelos de query y dashboard.
  - `repositories/dashboard_repository.dart`: orquesta queries y mapeos de respuesta.
- `features/dashboard/`
  - `application/dashboard_controller.dart`: estado (loading/error/data).
  - `presentation/`: pantalla + widgets (KPIs, gráfico de barras, tabla de reporte).

## 3) Pasos para ejecutar Cube.js (Docker Compose)

1. Desde la raíz del repo:
   ```bash
   docker compose up -d
   ```
2. Verifica logs:
   ```bash
   docker compose logs -f cube
   ```
3. Endpoint esperado:
   - `http://localhost:4000`
   - API load: `http://localhost:4000/cubejs-api/v1/load`

## 4) Pasos para correr la app Flutter

> Requiere Flutter SDK instalado localmente.

1. Ir al proyecto Flutter:
   ```bash
   cd flutter_dashboard
   ```
2. Instalar dependencias:
   ```bash
   flutter pub get
   ```
3. Generar JWT válido firmado con `CUBEJS_API_SECRET`.
4. Ejecutar app:
   ```bash
   flutter run \
     --dart-define=CUBE_API_URL=http://localhost:4000/cubejs-api/v1/load \
     --dart-define=CUBE_API_TOKEN=<JWT_DE_CUBE>
   ```

## 5) Requests de ejemplo usados por la app

### KPIs
```json
{
  "query": {
    "measures": ["Orders.count", "Orders.totalAmount"]
  }
}
```

### Gráfico
```json
{
  "query": {
    "measures": ["Orders.count"],
    "timeDimensions": [
      {
        "dimension": "Orders.createdAt",
        "granularity": "day",
        "dateRange": "last 30 days"
      }
    ],
    "order": {
      "Orders.createdAt": "asc"
    }
  }
}
```

### Reporte
```json
{
  "query": {
    "measures": ["Orders.count", "Orders.totalAmount"],
    "dimensions": ["Orders.status"],
    "order": {
      "Orders.count": "desc"
    },
    "limit": 10
  }
}
```

## 6) Supuestos técnicos

- Se asume que existe (o se creará) un cube `Orders` en la instancia de Cube.js.
- No se hardcodean credenciales dentro del código Flutter.
- El token JWT se inyecta por variables de entorno (`dart-define`).
