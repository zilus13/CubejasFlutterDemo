cube(`vista_terminales_grupos`, {
  sql_table: `terminales_dt.vista_terminales_grupos`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    groupdeleted: {
      sql: `${CUBE}.\`groupDeleted\``,
      type: `boolean`
    },
    
    groupid: {
      sql: `${CUBE}.\`groupId\``,
      type: `string`
    },
    
    groupmaster: {
      sql: `${CUBE}.\`groupMaster\``,
      type: `string`
    },
    
    groupname: {
      sql: `${CUBE}.\`groupName\``,
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
    
    terminaldelete: {
      sql: `${CUBE}.\`terminalDelete\``,
      type: `boolean`
    },
    
    terminaldescription: {
      sql: `${CUBE}.\`terminalDescription\``,
      type: `string`
    },
    
    terminalmaster: {
      sql: `${CUBE}.\`terminalMaster\``,
      type: `string`
    },
    
    terminalmodel: {
      sql: `${CUBE}.\`terminalModel\``,
      type: `string`
    },
    
    terminalowner: {
      sql: `${CUBE}.\`terminalOwner\``,
      type: `string`
    },
    
    terminalserial: {
      sql: `${CUBE}.\`terminalSerial\``,
      type: `string`
    },
    
    terminalstatus: {
      sql: `${CUBE}.\`terminalStatus\``,
      type: `string`
    },
    
    typeevent: {
      sql: `${CUBE}.\`typeEvent\``,
      type: `string`
    },
    
    groupcreatedat: {
      sql: `${CUBE}.\`groupCreatedAt\``,
      type: `time`
    },
    
    groupupdatedat: {
      sql: `${CUBE}.\`groupUpdatedAt\``,
      type: `time`
    },
    
    groupupdatedatserver: {
      sql: `${CUBE}.\`groupUpdatedAtServer\``,
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
