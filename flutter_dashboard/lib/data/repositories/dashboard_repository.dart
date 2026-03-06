import '../datasources/cube_api_client.dart';
import '../models/cube_query.dart';
import '../models/dashboard_models.dart';

class DashboardRepository {
  DashboardRepository(this._client);

  final CubeApiClient _client;

  Future<DashboardData> fetchDashboardData() async {
    // Query ejemplo basada en un esquema típico de Cube.js (Orders).
    final kpiResult = await _client.load(
      const CubeQuery(
        measures: ['Orders.count', 'Orders.totalAmount'],
      ),
    );

    final chartResult = await _client.load(
      const CubeQuery(
        measures: ['Orders.count'],
        timeDimensions: [
          {
            'dimension': 'Orders.createdAt',
            'granularity': 'day',
            'dateRange': 'last 30 days',
          }
        ],
        order: {'Orders.createdAt': 'asc'},
      ),
    );

    final reportResult = await _client.load(
      const CubeQuery(
        measures: ['Orders.count', 'Orders.totalAmount'],
        dimensions: ['Orders.status'],
        order: {'Orders.count': 'desc'},
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
        title: 'Total órdenes',
        value: '${row['Orders.count'] ?? '0'}',
      ),
      KpiMetric(
        title: 'Monto total',
        value: '${row['Orders.totalAmount'] ?? '0'}',
      ),
    ];
  }

  List<ChartPoint> _parseChart(List<Map<String, dynamic>> rows) {
    return rows
        .map(
          (row) => ChartPoint(
            label: '${row['Orders.createdAt.day'] ?? row['Orders.createdAt'] ?? '-'}',
            value: double.tryParse('${row['Orders.count'] ?? 0}') ?? 0,
          ),
        )
        .toList();
  }

  List<ReportRow> _parseReport(List<Map<String, dynamic>> rows) {
    return rows
        .map(
          (row) => ReportRow(
            values: {
              'Estado': '${row['Orders.status'] ?? '-'}',
              'Órdenes': '${row['Orders.count'] ?? '0'}',
              'Monto': '${row['Orders.totalAmount'] ?? '0'}',
            },
          ),
        )
        .toList();
  }
}
