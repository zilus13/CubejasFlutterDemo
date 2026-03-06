cube(`joins_configuraciones`, {
  sql_table: `terminales_dt.\`JoinsConfiguraciones\``,
  
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
    
    affiliationid: {
      sql: `${CUBE}.\`affiliationId\``,
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
    
    appidterminal: {
      sql: `${CUBE}.\`appIdTerminal\``,
      type: `string`
    },
    
    batchlimit: {
      sql: `${CUBE}.\`batchLimit\``,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
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
    
    configterminal: {
      sql: `${CUBE}.\`configTerminal\``,
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
    
    deletecomercio: {
      sql: `${CUBE}.\`deleteComercio\``,
      type: `boolean`
    },
    
    deleteterminal: {
      sql: `${CUBE}.\`deleteTerminal\``,
      type: `boolean`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    folio: {
      sql: `folio`,
      type: `string`
    },
    
    folioidcomercio: {
      sql: `${CUBE}.\`folioIdComercio\``,
      type: `string`
    },
    
    folioidterminal: {
      sql: `${CUBE}.\`folioIdTerminal\``,
      type: `string`
    },
    
    keycomercio: {
      sql: `${CUBE}.\`keyComercio\``,
      type: `string`
    },
    
    keyterminal: {
      sql: `${CUBE}.\`keyTerminal\``,
      type: `string`
    },
    
    master: {
      sql: `master`,
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
    
    rnc: {
      sql: `rnc`,
      type: `string`
    },
    
    rnt: {
      sql: `rnt`,
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
    
    templateidterminal: {
      sql: `${CUBE}.\`templateIdTerminal\``,
      type: `string`
    },
    
    templatenamecomercio: {
      sql: `${CUBE}.\`templateNameComercio\``,
      type: `string`
    },
    
    templatenameterminal: {
      sql: `${CUBE}.\`templateNameTerminal\``,
      type: `string`
    },
    
    templeteidcomercio: {
      sql: `${CUBE}.\`templeteIdComercio\``,
      type: `string`
    },
    
    templeteidterminal: {
      sql: `${CUBE}.\`templeteIdTerminal\``,
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
