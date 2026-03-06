import 'package:flutter/material.dart';

import '../../../../data/models/dashboard_models.dart';

class ReportTable extends StatelessWidget {
  const ReportTable({required this.rows, super.key});

  final List<ReportRow> rows;

  @override
  Widget build(BuildContext context) {
    if (rows.isEmpty) {
      return const Center(child: Text('Sin datos para reporte'));
    }

    final columns = rows.first.values.keys.toList(growable: false);

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: DataTable(
        columns: columns.map((column) => DataColumn(label: Text(column))).toList(),
        rows: rows
            .map(
              (row) => DataRow(
                cells: columns
                    .map((column) => DataCell(Text(row.values[column] ?? '-')))
                    .toList(),
              ),
            )
            .toList(),
      ),
    );
  }
}
