cube(`licenses`, {
  sql_table: `terminales_dt.licenses`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    app: {
      sql: `app`,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
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
    
    idmaster: {
      sql: `${CUBE}.\`idMaster\``,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    priority: {
      sql: `priority`,
      type: `string`
    },
    
    renewaltime: {
      sql: `${CUBE}.\`renewalTime\``,
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
    
    terminallimit: {
      sql: `${CUBE}.\`terminalLimit\``,
      type: `string`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    },
    
    updatedatserver: {
      sql: `${CUBE}.\`updatedAtServer\``,
      type: `time`
    },
    
    enddate: {
      sql: `${CUBE}.\`endDate\``,
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
