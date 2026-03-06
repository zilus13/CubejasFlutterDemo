class KpiMetric {
  const KpiMetric({
    required this.title,
    required this.value,
  });

  final String title;
  final String value;
}

class ChartPoint {
  const ChartPoint({
    required this.label,
    required this.value,
  });

  final String label;
  final double value;
}

class ReportRow {
  const ReportRow({required this.values});

  final Map<String, String> values;
}

class DashboardData {
  const DashboardData({
    required this.kpis,
    required this.chartPoints,
    required this.reportRows,
  });

  final List<KpiMetric> kpis;
  final List<ChartPoint> chartPoints;
  final List<ReportRow> reportRows;

  bool get isEmpty => kpis.isEmpty && chartPoints.isEmpty && reportRows.isEmpty;
}
