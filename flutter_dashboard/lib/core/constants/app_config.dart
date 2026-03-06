class AppConfig {
  AppConfig._();

  /// Ejemplo: http://localhost:4000/cubejs-api/v1/load
  static const cubeApiUrl = String.fromEnvironment(
    'CUBE_API_URL',
    defaultValue: 'http://localhost:4000/cubejs-api/v1/load',
  );

  /// Debe inyectarse por --dart-define para evitar hardcode de credenciales.
  static const cubeApiToken = String.fromEnvironment('CUBE_API_TOKEN');

  static bool get hasToken => cubeApiToken.trim().isNotEmpty;
}
