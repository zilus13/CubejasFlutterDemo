cube(`afiliaciones`, {
  sql_table: `terminales_dt.afiliaciones`,
  
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
    
    businessid: {
      sql: `${CUBE}.\`businessId\``,
      type: `string`
    },
    
    configurations: {
      sql: `configurations`,
      type: `string`
    },
    
    contactemail: {
      sql: `${CUBE}.\`contactEmail\``,
      type: `string`
    },
    
    contactname: {
      sql: `${CUBE}.\`contactName\``,
      type: `string`
    },
    
    contactphone: {
      sql: `${CUBE}.\`contactPhone\``,
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
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },
    
    taxnumber: {
      sql: `${CUBE}.\`taxNumber\``,
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
