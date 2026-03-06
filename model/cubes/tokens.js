cube(`tokens`, {
  sql_table: `terminales_dt.tokens`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    app: {
      sql: `app`,
      type: `string`
    },
    
    appid: {
      sql: `${CUBE}.\`appId\``,
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
    
    master: {
      sql: `master`,
      type: `string`
    },
    
    model: {
      sql: `model`,
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
    
    token: {
      sql: `token`,
      type: `string`
    },
    
    version: {
      sql: `version`,
      type: `string`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    },
    
    updatedatserver: {
      sql: `${CUBE}.\`updatedAtServer\``,
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
