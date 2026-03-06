import 'package:flutter/material.dart';

import '../../../core/constants/app_config.dart';
import '../../../data/datasources/cube_api_client.dart';
import '../../../data/repositories/dashboard_repository.dart';
import '../application/dashboard_controller.dart';
import 'widgets/kpi_card.dart';
import 'widgets/report_table.dart';
import 'widgets/simple_bar_chart.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({super.key});

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  late final DashboardController _controller;

  @override
  void initState() {
    super.initState();
    final client = CubeApiClient(
      baseUrl: AppConfig.cubeApiUrl,
      apiToken: AppConfig.cubeApiToken,
    );
    _controller = DashboardController(DashboardRepository(client));
    _controller.load();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cube.js Terminales Dashboard'),
        actions: [
          IconButton(
            onPressed: _controller.load,
            icon: const Icon(Icons.refresh),
          ),
        ],
      ),
      body: AnimatedBuilder(
        animation: _controller,
        builder: (context, _) {
          if (_controller.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (_controller.errorMessage != null) {
            return Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Text(
                  _controller.errorMessage!,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.red),
                ),
              ),
            );
          }

          final data = _controller.data;
          if (data == null || data.isEmpty) {
            return const Center(child: Text('No hay datos disponibles.'));
          }

          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Wrap(
                spacing: 12,
                runSpacing: 12,
                children: data.kpis
                    .map(
                      (kpi) => SizedBox(
                        width: 220,
                        child: KpiCard(title: kpi.title, value: kpi.value),
                      ),
                    )
                    .toList(),
              ),
              const SizedBox(height: 20),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Terminales por estado', style: Theme.of(context).textTheme.titleMedium),
                      const SizedBox(height: 12),
                      SimpleBarChart(points: data.chartPoints),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 20),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Top organizaciones por terminales', style: Theme.of(context).textTheme.titleMedium),
                      const SizedBox(height: 12),
                      ReportTable(rows: data.reportRows),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
