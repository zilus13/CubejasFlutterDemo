import 'dart:convert';

import 'package:http/http.dart' as http;

import '../../core/network/network_exception.dart';
import '../models/cube_query.dart';

class CubeApiClient {
  CubeApiClient({
    required this.baseUrl,
    required this.apiToken,
    http.Client? httpClient,
  }) : _httpClient = httpClient ?? http.Client();

  final String baseUrl;
  final String apiToken;
  final http.Client _httpClient;

  Future<List<Map<String, dynamic>>> load(CubeQuery query) async {
    if (apiToken.trim().isEmpty) {
      throw const NetworkException(
        'No hay token de Cube.js. Define CUBE_API_TOKEN con --dart-define.',
      );
    }

    final uri = Uri.parse(baseUrl);
    final response = await _httpClient.post(
      uri,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiToken,
      },
      body: jsonEncode({'query': query.toJson()}),
    );

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw NetworkException(
        'Error HTTP ${response.statusCode}: ${response.body}',
      );
    }

    final decoded = jsonDecode(response.body) as Map<String, dynamic>;
    final data = decoded['data'];

    if (data is! List) {
      throw const NetworkException('Respuesta inválida de Cube.js (data no es lista).');
    }

    return data.whereType<Map>().map((item) => Map<String, dynamic>.from(item)).toList();
  }
}
