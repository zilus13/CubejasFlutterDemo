cube(`configuraciones_comercio`, {
  sql_table: `terminales_dt.\`configuracionesComercio\``,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    address1: {
      sql: `address1`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    amexid: {
      sql: `${CUBE}.\`amexId\``,
      type: `string`
    },
    
    appidcomercio: {
      sql: `${CUBE}.\`appIdComercio\``,
      type: `string`
    },
    
    batchlimit: {
      sql: `${CUBE}.\`batchLimit\``,
      type: `string`
    },
    
    business: {
      sql: `business`,
      type: `string`
    },
    
    cashback: {
      sql: `cashback`,
      type: `string`
    },
    
    cashregister: {
      sql: `${CUBE}.\`cashRegister\``,
      type: `string`
    },
    
    comboref: {
      sql: `${CUBE}.\`comboRef\``,
      type: `string`
    },
    
    configcomercio: {
      sql: `${CUBE}.\`configComercio\``,
      type: `string`
    },
    
    currencycode: {
      sql: `${CUBE}.\`currencyCode\``,
      type: `string`
    },
    
    currencysymbol: {
      sql: `${CUBE}.\`currencySymbol\``,
      type: `string`
    },
    
    deletecomercio: {
      sql: `${CUBE}.\`deleteComercio\``,
      type: `boolean`
    },
    
    folioidcomercio: {
      sql: `${CUBE}.\`folioIdComercio\``,
      type: `string`
    },
    
    keycomercio: {
      sql: `${CUBE}.\`keyComercio\``,
      type: `string`
    },
    
    merchandid: {
      sql: `${CUBE}.\`merchandId\``,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    noshow: {
      sql: `${CUBE}.\`noShow\``,
      type: `string`
    },
    
    numofshifts: {
      sql: `${CUBE}.\`numOfShifts\``,
      type: `string`
    },
    
    processor: {
      sql: `processor`,
      type: `string`
    },
    
    reauth: {
      sql: `${CUBE}.\`reAuth\``,
      type: `string`
    },
    
    ref1: {
      sql: `ref1`,
      type: `string`
    },
    
    ref2: {
      sql: `ref2`,
      type: `string`
    },
    
    ref3: {
      sql: `ref3`,
      type: `string`
    },
    
    refund: {
      sql: `refund`,
      type: `string`
    },
    
    templatenamecomercio: {
      sql: `${CUBE}.\`templateNameComercio\``,
      type: `string`
    },
    
    templeteidcomercio: {
      sql: `${CUBE}.\`templeteIdComercio\``,
      type: `string`
    },
    
    terminalid: {
      sql: `${CUBE}.\`terminalId\``,
      type: `string`
    },
    
    tip: {
      sql: `tip`,
      type: `string`
    },
    
    tiplimit1: {
      sql: `${CUBE}.\`tipLimit1\``,
      type: `string`
    },
    
    tiplimit2: {
      sql: `${CUBE}.\`tipLimit2\``,
      type: `string`
    },
    
    void: {
      sql: `void`,
      type: `string`
    },
    
    waiter: {
      sql: `waiter`,
      type: `string`
    },
    
    updatedatcomercio: {
      sql: `${CUBE}.\`updatedAtComercio\``,
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
