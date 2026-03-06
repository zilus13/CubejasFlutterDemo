cube(`vista_terminales_config_full`, {
  sql_table: `terminales_dt.vista_terminales_config_full`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    address1_comercio: {
      sql: `address1_comercio`,
      type: `string`
    },
    
    address2_comercio: {
      sql: `address2_comercio`,
      type: `string`
    },
    
    afiliacion: {
      sql: `afiliacion`,
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
    
    appversion: {
      sql: `${CUBE}.\`appVersion\``,
      type: `string`
    },
    
    batchlimit: {
      sql: `${CUBE}.\`batchLimit\``,
      type: `string`
    },
    
    batterypercentage: {
      sql: `${CUBE}.\`batteryPercentage\``,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    brand_comercio: {
      sql: `brand_comercio`,
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
    
    ciudad: {
      sql: `ciudad`,
      type: `string`
    },
    
    comboref: {
      sql: `${CUBE}.\`comboRef\``,
      type: `string`
    },
    
    commandid: {
      sql: `${CUBE}.\`commandId\``,
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
    
    delete: {
      sql: `delete`,
      type: `boolean`
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
    
    description_comercio: {
      sql: `description_comercio`,
      type: `string`
    },
    
    firmwareversion: {
      sql: `${CUBE}.\`firmwareVersion\``,
      type: `string`
    },
    
    folio: {
      sql: `folio`,
      type: `string`
    },
    
    folio_comercio: {
      sql: `folio_comercio`,
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
    
    foliomaster: {
      sql: `${CUBE}.\`folioMaster\``,
      type: `string`
    },
    
    info: {
      sql: `info`,
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
    
    latitud: {
      sql: `latitud`,
      type: `string`
    },
    
    longitud: {
      sql: `longitud`,
      type: `string`
    },
    
    master: {
      sql: `master`,
      type: `string`
    },
    
    master_comercio: {
      sql: `master_comercio`,
      type: `string`
    },
    
    medio: {
      sql: `medio`,
      type: `string`
    },
    
    memoryavailable: {
      sql: `${CUBE}.\`memoryAvailable\``,
      type: `string`
    },
    
    memorytotal: {
      sql: `${CUBE}.\`memoryTotal\``,
      type: `string`
    },
    
    merchandid: {
      sql: `${CUBE}.\`merchandId\``,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    name_comercio: {
      sql: `name_comercio`,
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
    
    organization: {
      sql: `organization`,
      type: `string`
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    parameters: {
      sql: `parameters`,
      type: `string`
    },
    
    parameters2: {
      sql: `parameters2`,
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
    
    rnc_config: {
      sql: `rnc_config`,
      type: `string`
    },
    
    rnt: {
      sql: `rnt`,
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
    
    serial_comercio: {
      sql: `serial_comercio`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    status_comercio: {
      sql: `status_comercio`,
      type: `string`
    },
    
    storageavailable: {
      sql: `${CUBE}.\`storageAvailable\``,
      type: `string`
    },
    
    storagetota: {
      sql: `${CUBE}.\`storageTota\``,
      type: `string`
    },
    
    storagetotal: {
      sql: `${CUBE}.\`storageTotal\``,
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
    
    terminalid_comercio: {
      sql: `${CUBE}.\`terminalId_comercio\``,
      type: `string`
    },
    
    tip_comercio: {
      sql: `tip_comercio`,
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
    
    tn: {
      sql: `tn`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    void_comercio: {
      sql: `void_comercio`,
      type: `string`
    },
    
    waiter: {
      sql: `waiter`,
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
    
    updatedatcomercio: {
      sql: `${CUBE}.\`updatedAtComercio\``,
      type: `time`
    },
    
    updatedatserver: {
      sql: `${CUBE}.\`updatedAtServer\``,
      type: `time`
    },
    
    updatedatterminal: {
      sql: `${CUBE}.\`updatedAtTerminal\``,
      type: `time`
    },
    
    folioused: {
      sql: `${CUBE}.\`folioUsed\``,
      type: `time`
    },
    
    ultimoreporte: {
      sql: `${CUBE}.\`ultimoReporte\``,
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
