export default [
  {
    tabName: 'Facility',
    tabID: 'facility',
    headers: [
      { title: 'FACILITY', key: 'entity_txt' },
      { title: '#', key: 'tppdi' },
      { title: 'WEEK ENDING', key: 'enddate' },
      { title: 'INV PAID', key: 'invpaid' },
      { title: 'INVOICE #', key: 'tranid' },
      { title: 'INV DATE', key: 'trandate' },
      { title: 'INV TOTAL', key: 'total' },
      { title: 'UNPAID AMT', key: 'custrecord_fc_tppdi_di_unpaid_amount' },
      { title: 'UNPAID NOTE', key: 'custrecord_fc_tppdi_di_unpaid_note' },
      { title: 'MSP REF #', key: 'custbody__pi_msp_ref_number' },
      { title: 'AMT DISPUTED', key: 'custrecord_fc_tppdi_di_dispute_amount' },
      { title: 'DISPUTE NOTE', key: 'custrecord_fc_tppdi_di_dispute_note' },
      { title: 'PMT #', key: 'custrecord_fc_tppdi_thirdpartypayment_txt' },
      { title: 'DEDUCT.AMT', key: 'custrecord_fc_tppdi_dp_deduct_amount' },
      { title: 'AMT RECEIVED', key: 'am' },
      { title: 'AMT APPLIED', key: 'amtapplied' }
    ],
  },

  {
    tabName: 'Health System',
    tabID: 'health',
    headers: [
      { title: 'FACILITY', key: 'facility' },
      { title: '#', key: 'sharp' },
      { title: 'WEEK ENDING', key: 'weekending' },
      { title: 'INV PAID', key: 'invpaid' },
      { title: 'INVOICE #', key: 'invoice' },
      { title: 'INV DATE', key: 'invdate' },
      { title: 'INV TOTAL', key: 'invtotal' },
      { title: 'UNPAID AMT', key: 'unpaidamt' },
      { title: 'UNPAID NOTE', key: 'unpaidnote' },
      { title: 'MSP REF #', key: 'mspref' },
      { title: 'AMT DISPUTED', key: 'amtdisputed' },
      { title: 'DISPUTE NOTE', key: 'disputenote' },
      { title: 'PMT #', key: 'pmt' },
      { title: 'DEDUCT.AMT', key: 'deductamt' },
      { title: 'AMT RECEIVED', key: 'amtreceived' },
      { title: 'AMT APPLIED', key: 'amtapplied' }
    ],
  },

  {
    tabName: 'Week Ending',
    tabID: 'weekending',
    headers: [
      { title: 'WEEK ENDING', key: 'weekending' },
      { title: 'FACILITY', key: 'facility' },
      { title: '#', key: 'sharp' },
      { title: 'INV PAID', key: 'invpaid' },
      { title: 'INVOICE #', key: 'invoice' },
      { title: 'INV DATE', key: 'invdate' },
      { title: 'INV TOTAL', key: 'invtotal' },
      { title: 'UNPAID AMT', key: 'unpaidamt' },
      { title: 'UNPAID NOTE', key: 'unpaidnote' },
      { title: 'MSP REF #', key: 'mspref' },
      { title: 'AMT DISPUTED', key: 'amtdisputed' },
      { title: 'DISPUTE NOTE', key: 'disputenote' },
      { title: 'PMT #', key: 'pmt' },
      { title: 'DEDUCT.AMT', key: 'deductamt' },
      { title: 'AMT RECEIVED', key: 'amtreceived' },
      { title: 'AMT APPLIED', key: 'amtapplied' }
    ],
  },

  {
    tabName: 'Client Overpayment',
    tabID: 'overpay',
    headers: [
      { title: 'Overpaid ID', key: 'name' },
      { title: 'Overpaid Invoice', key: 'custrecord_cop_inv' },
      { title: 'Overpaid Facility', key: 'custrecord_cop_fac' },
      { title: 'Overpaid Amount', key: 'custrecord_cop_amt' },
      { title: 'Resolution Type', key: 'custrecord_cop_restype' },
      { title: 'Resolution Refund Amount', key: 'custrecord_cop_res_refamt' },
      { title: 'Resolution Applied Amount', key: 'custrecord_cop_res_appldamt' },
      { title: 'Customer Refund Transaction', key: 'custrecord_cop_af_trans' }
    ],
  },

  {
    tabName: 'Existing Insufficient Funds',
    tabID: 'insfund',
    headers: [
      { title: 'Insufficient Funds Transaction', key: 'transaction' },
      { title: 'Insufficient Funds Check / Payment #', key: 'check' },
      { title: 'Insufficient Funds Amount', key: 'amount' }
    ],
  },

  {
    tabName: 'Existing Applied To Invoice',
    tabID: 'applied',
    headers: [
      { title: 'Appled To Invoice', key: 'custrecord_fc_tppdi_designatedinvoice_txt' },
      { title: 'Applied To Traveler', key: 'custbody__pi_inv_traveler' },
      { title: 'Applied To Week Ending', key: 'trandate' },
      { title: 'Applied to Facility', key: 'custbody__pi_inv_traveler_txt' },
      { title: 'Applied to Amount', key: 'custrecord_fc_tppdi_dp_net_applied' }
    ],
  },
];