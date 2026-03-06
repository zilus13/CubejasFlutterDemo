import 'package:flutter/material.dart';

import 'features/dashboard/presentation/dashboard_page.dart';

void main() {
  runApp(const CubeDashboardApp());
}

class CubeDashboardApp extends StatelessWidget {
  const CubeDashboardApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Cube.js Dashboard',
      theme: ThemeData(
        colorSchemeSeed: Colors.indigo,
        useMaterial3: true,
      ),
      home: const DashboardPage(),
    );
  }
}
