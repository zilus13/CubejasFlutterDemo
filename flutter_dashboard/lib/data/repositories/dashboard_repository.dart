import '../datasources/cube_api_client.dart';
import '../models/cube_query.dart';
import '../models/dashboard_models.dart';

class DashboardRepository {
  DashboardRepository(this._client);

  final CubeApiClient _client;

  Future<DashboardData> fetchDashboardData() async {
    // Queries adaptadas al cubo real `vista_terminales`.
    final kpiResult = await _client.load(
      const CubeQuery(
        measures: [
          'vista_terminales.count',
          'vista_terminales.online',
          'vista_terminales.offline',
        ],
      ),
    );

    final chartResult = await _client.load(
      const CubeQuery(
        measures: ['vista_terminales.count'],
        dimensions: ['vista_terminales.status'],
        order: {'vista_terminales.count': 'desc'},
      ),
    );

    final reportResult = await _client.load(
      const CubeQuery(
        measures: ['vista_terminales.count'],
        dimensions: [
          'vista_terminales.organization',
          'vista_terminales.owner',
          'vista_terminales.status',
        ],
        order: {'vista_terminales.count': 'desc'},
        limit: 10,
      ),
    );

    return DashboardData(
      kpis: _parseKpis(kpiResult),
      chartPoints: _parseChart(chartResult),
      reportRows: _parseReport(reportResult),
    );
  }

  List<KpiMetric> _parseKpis(List<Map<String, dynamic>> rows) {
    if (rows.isEmpty) return const [];
    final row = rows.first;

    return [
      KpiMetric(
        title: 'Terminales totales',
        value: '${row['vista_terminales.count'] ?? '0'}',
      ),
      KpiMetric(
        title: 'Terminales online',
        value: '${row['vista_terminales.online'] ?? '0'}',
      ),
      KpiMetric(
        title: 'Terminales offline',
        value: '${row['vista_terminales.offline'] ?? '0'}',
      ),
    ];
  }

  List<ChartPoint> _parseChart(List<Map<String, dynamic>> rows) {
    return rows
        .map(
          (row) => ChartPoint(
            label: '${row['vista_terminales.status'] ?? '-'}',
            value: double.tryParse('${row['vista_terminales.count'] ?? 0}') ?? 0,
          ),
        )
        .toList();
  }

  List<ReportRow> _parseReport(List<Map<String, dynamic>> rows) {
    return rows
        .map(
          (row) => ReportRow(
            values: {
              'Organización': '${row['vista_terminales.organization'] ?? '-'}',
              'Propietario': '${row['vista_terminales.owner'] ?? '-'}',
              'Estado': '${row['vista_terminales.status'] ?? '-'}',
              'Terminales': '${row['vista_terminales.count'] ?? '0'}',
            },
          ),
        )
        .toList();
  }
}
