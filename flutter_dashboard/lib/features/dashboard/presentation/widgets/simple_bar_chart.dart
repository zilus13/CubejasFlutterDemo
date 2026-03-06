import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../../../data/models/dashboard_models.dart';

class SimpleBarChart extends StatelessWidget {
  const SimpleBarChart({required this.points, super.key});

  final List<ChartPoint> points;

  @override
  Widget build(BuildContext context) {
    if (points.isEmpty) {
      return const Center(child: Text('Sin datos para gráfico'));
    }

    final maxValue = points.map((e) => e.value).fold<double>(0, math.max);

    return SizedBox(
      height: 220,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: points.take(12).map((point) {
          final normalized = maxValue == 0 ? 0.0 : point.value / maxValue;
          return Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Container(
                    height: 140 * normalized,
                    decoration: BoxDecoration(
                      color: Colors.indigo,
                      borderRadius: BorderRadius.circular(6),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    point.label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
