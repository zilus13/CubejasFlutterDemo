import 'package:flutter/foundation.dart';

import '../../../data/models/dashboard_models.dart';
import '../../../data/repositories/dashboard_repository.dart';

class DashboardController extends ChangeNotifier {
  DashboardController(this._repository);

  final DashboardRepository _repository;

  DashboardData? data;
  String? errorMessage;
  bool isLoading = false;

  Future<void> load() async {
    isLoading = true;
    errorMessage = null;
    notifyListeners();

    try {
      data = await _repository.fetchDashboardData();
    } catch (e) {
      errorMessage = e.toString();
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }
}
