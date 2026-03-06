cube(`terminal_groups`, {
  sql_table: `terminales_dt.terminal_groups`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    delete: {
      sql: `delete`,
      type: `boolean`
    },
    
    master: {
      sql: `master`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },
    
    terminalbrand: {
      sql: `${CUBE}.\`terminalBrand\``,
      type: `string`
    },
    
    terminals: {
      sql: `terminals`,
      type: `string`
    },
    
    terminalserial: {
      sql: `${CUBE}.\`terminalSerial\``,
      type: `string`
    },
    
    typeevent: {
      sql: `${CUBE}.\`typeEvent\``,
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
