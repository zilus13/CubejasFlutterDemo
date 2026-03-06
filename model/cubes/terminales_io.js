cube(`terminales_io`, {
  sql_table: `terminales_dt.terminales_io`,

  data_source: `default`,

  joins: {
    folio: {
      relationship: `hasMany`,
      sql: `${CUBE}.serial = ${folio}.serial AND ${CUBE}.master = ${folio}.master`
    }
  },

  dimensions: {
    appversion: {
      sql: `${CUBE}.\`appVersion\``,
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

    ciudad: {
      sql: `ciudad`,
      type: `string`
    },

    commandid: {
      sql: `${CUBE}.\`commandId\``,
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

    firmwareversion: {
      sql: `${CUBE}.\`firmwareVersion\``,
      type: `string`
    },

    info: {
      sql: `info`,
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

    model: {
      sql: `model`,
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

    sequencenr: {
      sql: `${CUBE}.\`sequenceNr\``,
      type: `string`
    },

    serial: {
      sql: `serial`,
      type: `string`,
      primaryKey: true
    },

    status: {
      sql: `status`,
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

    type: {
      sql: `type`,
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
