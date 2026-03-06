cube(`ultimo_registros_configuracion_terminal`, {
  sql_table: `terminales_dt.\`ultimoRegistrosConfiguracionTerminal\``,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    appidterminal: {
      sql: `${CUBE}.\`appIdTerminal\``,
      type: `string`
    },
    
    configterminal: {
      sql: `${CUBE}.\`configTerminal\``,
      type: `string`
    },
    
    cvmlimit: {
      sql: `${CUBE}.\`cvmLimit\``,
      type: `string`
    },
    
    deleteterminal: {
      sql: `${CUBE}.\`deleteTerminal\``,
      type: `boolean`
    },
    
    folioidterminal: {
      sql: `${CUBE}.\`folioIdTerminal\``,
      type: `string`
    },
    
    keyterminal: {
      sql: `${CUBE}.\`keyTerminal\``,
      type: `string`
    },
    
    openkeyboard: {
      sql: `${CUBE}.\`openKeyboard\``,
      type: `string`
    },
    
    paymentplan: {
      sql: `${CUBE}.\`paymentPlan\``,
      type: `string`
    },
    
    pwdadjust: {
      sql: `${CUBE}.\`pwdAdjust\``,
      type: `string`
    },
    
    pwdadmin: {
      sql: `${CUBE}.\`pwdAdmin\``,
      type: `string`
    },
    
    pwdkeyboard: {
      sql: `${CUBE}.\`pwdKeyboard\``,
      type: `string`
    },
    
    pwdmaster: {
      sql: `${CUBE}.\`pwdMaster\``,
      type: `string`
    },
    
    pwdrefund: {
      sql: `${CUBE}.\`pwdRefund\``,
      type: `string`
    },
    
    pwdvoid: {
      sql: `${CUBE}.\`pwdVoid\``,
      type: `string`
    },
    
    qps: {
      sql: `qps`,
      type: `string`
    },
    
    qpslabel: {
      sql: `${CUBE}.\`qpsLabel\``,
      type: `string`
    },
    
    qpslimit: {
      sql: `${CUBE}.\`qpsLimit\``,
      type: `string`
    },
    
    rnt: {
      sql: `rnt`,
      type: `string`
    },
    
    templateidterminal: {
      sql: `${CUBE}.\`templateIdTerminal\``,
      type: `string`
    },
    
    templatenameterminal: {
      sql: `${CUBE}.\`templateNameTerminal\``,
      type: `string`
    },
    
    templeteidterminal: {
      sql: `${CUBE}.\`templeteIdTerminal\``,
      type: `string`
    },
    
    updatedatterminal: {
      sql: `${CUBE}.\`updatedAtTerminal\``,
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
