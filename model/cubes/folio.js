cube(`folio`, {
  sql_table: `terminales_dt.folio`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    affiliationid: {
      sql: `${CUBE}.\`affiliationId\``,
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
    
    configurations: {
      sql: `configurations`,
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
    
    folioid: {
      sql: `${CUBE}.\`folioId\``,
      type: `string`,
      primary_key: true
    },
    
    master: {
      sql: `master`,
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
    
    templateid: {
      sql: `${CUBE}.\`templateId\``,
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
    
    folioused: {
      sql: `${CUBE}.\`folioUsed\``,
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
