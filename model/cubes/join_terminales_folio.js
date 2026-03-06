cube(`join_terminales_folio`, {
  sql_table: `terminales_dt.\`JoinTerminalesFolio\``,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    afiliacion: {
      sql: `afiliacion`,
      type: `string`
    },
    
    appversion: {
      sql: `${CUBE}.\`appVersion\``,
      type: `string`
    },
    
    batterypercentage: {
      sql: `${CUBE}.\`batteryPercentage\``,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    ciudad: {
      sql: `ciudad`,
      type: `string`
    },
    
    commandid: {
      sql: `${CUBE}.\`commandId\``,
      type: `string`
    },
    
    delete: {
      sql: `delete`,
      type: `boolean`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    firmwareversion: {
      sql: `${CUBE}.\`firmwareVersion\``,
      type: `string`
    },
    
    folio: {
      sql: `folio`,
      type: `string`
    },
    
    foliomaster: {
      sql: `${CUBE}.\`folioMaster\``,
      type: `string`
    },
    
    info: {
      sql: `info`,
      type: `string`
    },
    
    latitud: {
      sql: `latitud`,
      type: `string`
    },
    
    longitud: {
      sql: `longitud`,
      type: `string`
    },
    
    master: {
      sql: `master`,
      type: `string`
    },
    
    medio: {
      sql: `medio`,
      type: `string`
    },
    
    memoryavailable: {
      sql: `${CUBE}.\`memoryAvailable\``,
      type: `string`
    },
    
    memorytotal: {
      sql: `${CUBE}.\`memoryTotal\``,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    organization: {
      sql: `organization`,
      type: `string`
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    parameters: {
      sql: `parameters`,
      type: `string`
    },
    
    parameters2: {
      sql: `parameters2`,
      type: `string`
    },
    
    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },
    
    serial: {
      sql: `serial`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    storageavailable: {
      sql: `${CUBE}.\`storageAvailable\``,
      type: `string`
    },
    
    storagetota: {
      sql: `${CUBE}.\`storageTota\``,
      type: `string`
    },
    
    storagetotal: {
      sql: `${CUBE}.\`storageTotal\``,
      type: `string`
    },
    
    tn: {
      sql: `tn`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    },
    
    updatedatserver: {
      sql: `${CUBE}.\`updatedAtServer\``,
      type: `time`
    },
    
    folioused: {
      sql: `${CUBE}.\`folioUsed\``,
      type: `time`
    },
    
    ultimoreporte: {
      sql: `${CUBE}.\`ultimoReporte\``,
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
