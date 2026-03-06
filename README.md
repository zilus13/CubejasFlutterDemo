# Cube.js + Flutter Dashboard Demo

Este repositorio contiene:
- `docker-compose.yml` para levantar Cube.js.
- `flutter_dashboard/` con una app Flutter para consumir métricas/reportes desde Cube.js.
- Estructura mínima de configuración Cube.js (`keys/`, `model/cubes`, `model/views`).

## 1) Estructura mínima requerida para Cube.js

Sí, necesitas una estructura base para que Cube.js funcione al levantar el contenedor con este repo montado en `/cube/conf`.

```
.
├── docker-compose.yml
├── keys/
│   ├── bq.json              # credencial real (local, no versionar)
│   ├── bq.json.example
│   └── README.md
├── model/
│   ├── cubes/
│   │   └── orders.yml
│   └── views/
│       └── example.view.yml
└── flutter_dashboard/
```

### Qué es obligatorio
- `keys/bq.json` (porque `CUBEJS_DB_BQ_KEY_FILE` apunta a `/cube/conf/keys/bq.json`).
- Al menos un modelo de Cube (`model/cubes/*.yml`) para exponer measures/dimensions.

### Qué no siempre debes crear manualmente
- Carpetas de cache/runtime como `.cubestore`, `cube_tmp`, etc. pueden crearse en ejecución.

## 2) Hallazgos de `docker-compose.yml`

### Host y puerto de Cube.js
- Host local: `localhost`
- Puerto: `4000`
- Endpoint API load: `http://localhost:4000/cubejs-api/v1/load`

### Esquema de autenticación
- Cube usa `CUBEJS_API_SECRET`.
- El cliente Flutter envía JWT en header `Authorization` vía `--dart-define=CUBE_API_TOKEN=...`.

### Variables reutilizables
- `CUBEJS_DEV_MODE`
- `CUBEJS_API_SECRET`
- `CUBEJS_DB_TYPE`
- `CUBEJS_DB_BQ_PROJECT_ID`
- `CUBEJS_DB_BQ_KEY_FILE`
- `CUBEJS_PRE_AGGREGATIONS_EXTERNAL`
- `CUBEJS_PRE_AGGREGATIONS_SCHEMA`
- `CUBEJS_DB_EXPORT_BUCKET`

## 3) Modelo de ejemplo agregado

Se incluyó `model/cubes/orders.yml` con un cube de ejemplo `Orders` (legacy). La app Flutter actual quedó ajustada para consultar `vista_terminales` del modelo JS existente.

También se agregó `model/views/example.view.yml` como vista de reporte base.

## 4) Arquitectura Flutter aplicada

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

## 5) Pasos exactos para ejecutar Cube.js

1. Prepara credenciales BigQuery:
   ```bash
   cp keys/bq.json.example keys/bq.json
   # luego reemplaza con tus credenciales reales
   ```
2. (Opcional) define variables de entorno:
   ```bash
   export CUBEJS_API_SECRET='tu-secreto'
   export CUBEJS_DB_BQ_PROJECT_ID='tu-proyecto'
   export CUBEJS_DB_EXPORT_BUCKET='tu-bucket-staging'
   ```
3. Levanta Cube:
   ```bash
   docker compose up -d
   ```
4. Revisa logs:
   ```bash
   docker compose logs -f cube
   ```

## 6) Pasos exactos para correr Flutter

> Requiere Flutter SDK instalado localmente.

1. Ir al proyecto Flutter:
   ```bash
   cd flutter_dashboard
   ```
2. Instalar dependencias:
   ```bash
   flutter pub get
   ```
3. Generar JWT firmado con `CUBEJS_API_SECRET`.

   > Importante: `CUBEJS_API_SECRET` **no** se envía directamente a Flutter.
   > Primero lo usas para firmar un token JWT y ese resultado es el valor de `CUBE_API_TOKEN`.

   Ejemplo rápido con Node.js:
   ```bash
   export CUBEJS_API_SECRET='tu-secreto'
   node -e "const jwt=require('jsonwebtoken'); console.log(jwt.sign({}, process.env.CUBEJS_API_SECRET, {expiresIn: '1h'}));"
   ```

   Si no tienes `jsonwebtoken` instalado globalmente:
   ```bash
   npm i jsonwebtoken
   ```

4. Ejecutar app (reemplaza `<JWT_DE_CUBE>` por el token generado en el paso anterior):
   ```bash
   flutter run \
     --dart-define=CUBE_API_URL=http://localhost:4000/cubejs-api/v1/load \
     --dart-define=CUBE_API_TOKEN=<JWT_DE_CUBE>
   ```

## 7) Requests de ejemplo usados por la app

### KPIs
```json
{
  "query": {
    "measures": ["vista_terminales.count", "vista_terminales.online", "vista_terminales.offline"]
  }
}
```

### Gráfico
```json
{
  "query": {
    "measures": ["vista_terminales.count"],
    "dimensions": ["vista_terminales.status"],
    "order": {
      "vista_terminales.count": "desc"
    }
  }
}
```

### Reporte
```json
{
  "query": {
    "measures": ["vista_terminales.count"],
    "dimensions": ["vista_terminales.organization", "vista_terminales.owner", "vista_terminales.status"],
    "order": {
      "vista_terminales.count": "desc"
    },
    "limit": 10
  }
}
```

## 8) Supuestos técnicos

- La tabla BigQuery esperada del ejemplo es `analytics.orders`.
- Debes ajustar `sql_table` y campos en `model/cubes/orders.yml` según tu dataset real.
- No se hardcodean credenciales en Flutter; se inyectan por `dart-define`.
