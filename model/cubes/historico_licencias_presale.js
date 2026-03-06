cube(`historico_licencias_presale`, {
  sql_table: `terminales_dt.historico_licencias_presale`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    aplicacion: {
      sql: `${CUBE}.\`Aplicacion\``,
      type: `string`
    },
    
    descripcion_licencia: {
      sql: `${CUBE}.\`Descripcion_Licencia\``,
      type: `string`
    },
    
    estado_licencia: {
      sql: `${CUBE}.\`Estado_Licencia\``,
      type: `string`
    },
    
    serial_terminal: {
      sql: `${CUBE}.\`Serial_Terminal\``,
      type: `string`
    },
    
    usuario: {
      sql: `${CUBE}.\`Usuario\``,
      type: `string`
    },
    
    fecha_asignacion: {
      sql: `${CUBE}.\`Fecha_Asignacion\``,
      type: `time`
    },
    
    ultima_vez_visto: {
      sql: `${CUBE}.\`Ultima_Vez_Visto\``,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
