class CubeQuery {
  const CubeQuery({
    required this.measures,
    this.dimensions = const [],
    this.timeDimensions = const [],
    this.order = const {},
    this.limit,
  });

  final List<String> measures;
  final List<String> dimensions;
  final List<Map<String, dynamic>> timeDimensions;
  final Map<String, String> order;
  final int? limit;

  Map<String, dynamic> toJson() {
    return {
      'measures': measures,
      'dimensions': dimensions,
      'timeDimensions': timeDimensions,
      'order': order,
      if (limit != null) 'limit': limit,
    };
  }
}
