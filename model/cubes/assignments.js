cube(`assignments`, {
  sql_table: `terminales_dt.assignments`,
  
  data_source: `default`,
  
  joins: {
    licenses: {
      sql: `${CUBE.licenseid} = ${licenses.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    delete: {
      sql: `delete`,
      type: `boolean`
    },
    
    licenseid: {
      sql: `${CUBE}.\`licenseId\``,
      type: `string`,
      primary_key: true

    },
    
    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },
    
    serial: {
      sql: `serial`,
      type: `string`
    },
    
    user: {
      sql: `user`,
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
