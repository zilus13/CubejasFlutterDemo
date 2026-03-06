cube(`configuraciones`, {
  sql_table: `terminales_dt.configuraciones`,
  
  data_source: `default`,
  
  joins: {
    folio: {
      sql: `${CUBE.folioid} = ${folio.folioid}`,
      relationship: `many_to_one`
    }
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
    
    amex: {
      sql: `amex`,
      type: `string`
    },
    
    amexid: {
      sql: `${CUBE}.\`amexId\``,
      type: `string`
    },
    
    appid: {
      sql: `${CUBE}.\`appId\``,
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
    
    configuraciones: {
      sql: `configuraciones`,
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
    
    cvmlimit: {
      sql: `${CUBE}.\`cvmLimit\``,
      type: `string`
    },
    
    delete: {
      sql: `delete`,
      type: `boolean`
    },
    
    folioid: {
      sql: `${CUBE}.\`folioId\``,
      type: `string`,
      primary_key: true
    },
    
    key: {
      sql: `key`,
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
    
    openkeyboard: {
      sql: `${CUBE}.\`openKeyboard\``,
      type: `string`
    },
    
    paymentplan: {
      sql: `${CUBE}.\`paymentPlan\``,
      type: `string`
    },
    
    port: {
      sql: `port`,
      type: `string`
    },
    
    processor: {
      sql: `processor`,
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
    
    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },
    
    templateid: {
      sql: `${CUBE}.\`templateId\``,
      type: `string`
    },
    
    templatename: {
      sql: `${CUBE}.\`templateName\``,
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
    
    tls: {
      sql: `tls`,
      type: `string`
    },
    
    url: {
      sql: `url`,
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
