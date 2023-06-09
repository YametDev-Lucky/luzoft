export default [
  {
    tabName: 'Facility',
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
    desserts: [
      {
        collapsed: false,
        tppdi: '174',
        custrecord_fc_tppdi_designatedinvoice: '8990202',
        custrecord_fc_tppdi_designatedinvoice_txt: 'Invoice #IN32996502',
        custrecord_fc_tppdi_thirdpartypayment: '9582694',
        custrecord_fc_tppdi_thirdpartypayment_txt: 'Third Party Payment #TPP100001',
        custrecord_fc_tppdi_disbursementpayment: '9600587',
        custrecord_fc_tppdi_disbursementpayment_txt: 'Payment #P100200',
        custrecord_fc_tppdi_tpp_disburse_amount: '4159.81',
        custrecord_fc_tppdi_dp_deduct_item: '',
        custrecord_fc_tppdi_dp_deduct_item_txt: '',
        custrecord_fc_tppdi_dp_deduct_amount: '',
        custrecord_fc_tppdi_di_total_appl: '',
        custrecord_fc_tppdi_di_dispute_amount: '',
        custrecord_fc_tppdi_tpp_payor: 'CL01632 Supplemental Healthcare',
        custrecord_fc_tppdi_di_client: '1165',
        custrecord_fc_tppdi_di_client_txt: 'CL01057 Lancaster General Hospital',
        custrecord_fc_tppdi_di_msp: 'Supplemental Healthcare',
        custrecord_fc_tppdi_di_tranid: 'IN32996502',
        custrecord_fc_tppdi_di_invrefnum: '',
        custrecord_fc_tppdi_di_date: '12/29/2021',
        custrecord_fc_tppdi_di_total: '4159.81',
        custrecord_fc_tppdi_di_aracct: '213',
        custrecord_fc_tppdi_di_aracct_txt: '11010 Accounts Receivable : Accounts Receivable Trade',
        custrecord_fc_tppdi_di_unpaid_amount: '.00',
        custrecord_fc_tppdi_di_unpaid_note: '',
        custrecord_fc_tppdi_di_dispute_note: '',
        custrecord_fc_tppdi_dp_tranid: 'P100200',
        custrecord_fc_tppdi_dp_net_applied: '4159.81',
        internalid: '8990202',
        internalid_txt: '8990202',
        total: '4159.81',
        amountpaid: '.00',
        tranid: 'IN32996502',
        entity: '369477',
        entity_txt: 'AC37193 Lancaster General Hospital : OC-000051911',
        trandate: '12/29/2021',
        enddate: '',
        amountremaining: '',
        custbody__pi_msp_ref_number: '',
        custbody__pi_inv_traveler: '3243',
        custbody__pi_inv_traveler_txt: 'Christopher Jaeger A5LU',
        custbody_fc_unpaid_note: ''
      },
    ]
  },
  {
    tabName: 'Health System',
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
    desserts: []
  },
  {
    tabName: 'Week Ending',
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
    desserts: []
  },
  {
    tabName: 'Client Overpayment',
    headers: [
      { title: 'Overpaid Invoice', key: 'invoice' },
      { title: 'Overpaid Traveler', key: 'traveler' },
      { title: 'Overpaid Week Ending', key: 'weekending' },
      { title: 'Overpaid Facility', key: 'facility' },
      { title: 'Overpaid Amount', key: 'amount' },
      { title: 'Resolution Type', key: 'type' },
      { title: 'Resolution Refund Amount', key: 'refund' },
      { title: 'Resolution Applied Amount', key: 'applied' },
      { title: 'Customer Refund Transaction', key: 'customer' }
    ],
    desserts: [
      {
        collapsed: false,
        invoice: '5',
        traveler: '',
        weekending: '',
        facility: 'Alta Bates Medical Center 0 Ashby',
        amount: '56,813.00',
        type: '10',
        refund: '56,813.00',
        applied: '4,551.17',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '32',
        traveler: '',
        weekending: '',
        facility: 'Another Healthcare Facility	',
        amount: '12,515.63',
        type: '',
        refund: '	12,515.63',
        applied: '	12,515.63',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '2',
        traveler: '',
        weekending: '',
        facility: 'I Heart You Facility	',
        amount: '23,561.34',
        type: '10',
        refund: '23,561.34',
        applied: '23,561.34',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '3',
        traveler: '',
        weekending: '',
        facility: 'FlexCare Facility',
        amount: '5,651.52',
        type: '2',
        refund: '5,651.52',
        applied: '5,651.52',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '5',
        traveler: '',
        weekending: '',
        facility: 'FlexyCare Facility',
        amount: '',
        type: '8',
        refund: '6,651.87',
        applied: '6,651.87',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '32',
        traveler: '',
        weekending: '',
        facility: 'Mount Sinai West',
        amount: '43,346.74',
        type: '5',
        refund: '22,346.74',
        applied: '22,346.74',
        customer: '',
        children: [
          {
            invoice: '2',
            traveler: '5',
            weekending: '04/01/2023',
            facility: 'Mount Sinai West',
            amount: '4,271.40',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '2',
            traveler: '5',
            weekending: '04/08/2023',
            facility: 'Mount Sinai West',
            amount: '1,586.40',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '1',
            traveler: '5',
            weekending: '04/20/2023',
            facility: 'Mount Sinai West',
            amount: '5,324.23',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '8',
            traveler: '5',
            weekending: '04/27/2023',
            facility: 'Mount Sinai West',
            amount: '2,346.47',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          }
        ]
      },
      {
        collapsed: false,
        invoice: '5',
        traveler: '',
        weekending: '',
        facility: 'Alta Bates Medical Center 0 Ashby',
        amount: '56,813.00',
        type: '10',
        refund: '56,813.00',
        applied: '4,551.17',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '32',
        traveler: '',
        weekending: '',
        facility: 'Another Healthcare Facility	',
        amount: '12,515.63',
        type: '',
        refund: '	12,515.63',
        applied: '	12,515.63',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '2',
        traveler: '',
        weekending: '',
        facility: 'I Heart You Facility	',
        amount: '23,561.34',
        type: '10',
        refund: '23,561.34',
        applied: '23,561.34',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '3',
        traveler: '',
        weekending: '',
        facility: 'FlexCare Facility',
        amount: '5,651.52',
        type: '2',
        refund: '5,651.52',
        applied: '5,651.52',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '5',
        traveler: '',
        weekending: '',
        facility: 'FlexyCare Facility',
        amount: '',
        type: '8',
        refund: '6,651.87',
        applied: '6,651.87',
        customer: '',
        children: []
      },
      {
        collapsed: false,
        invoice: '32',
        traveler: '',
        weekending: '',
        facility: 'Mount Sinai West',
        amount: '43,346.74',
        type: '5',
        refund: '22,346.74',
        applied: '22,346.74',
        customer: '',
        children: [
          {
            invoice: '2',
            traveler: '5',
            weekending: '04/01/2023',
            facility: 'Mount Sinai West',
            amount: '4,271.40',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '2',
            traveler: '5',
            weekending: '04/08/2023',
            facility: 'Mount Sinai West',
            amount: '1,586.40',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '1',
            traveler: '5',
            weekending: '04/20/2023',
            facility: 'Mount Sinai West',
            amount: '5,324.23',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          },
          {
            invoice: '8',
            traveler: '5',
            weekending: '04/27/2023',
            facility: 'Mount Sinai West',
            amount: '2,346.47',
            type: '',
            refund: '3,330.47',
            applied: '3,337.44',
            customer: ''
          }
        ]
      }
    ]
  },
  {
    tabName: 'Existing Insufficient Funds',
    headers: [
      { title: 'Insufficient Funds Transaction', key: 'transaction' },
      { title: 'Insufficient Funds Check / Payment #', key: 'check' },
      { title: 'Insufficient Funds Amount', key: 'amount' }
    ],
    desserts: []
  },
  // {
  //   tabName: 'Existing Applied To Invoice',
  //   headers: [
  //     { title: 'Appled To Invoice', key: 'invoice' },
  //     { title: 'Applied To Traveler', key: 'traveler' },
  //     { title: 'Applied To Week Ending', key: 'weekending' },
  //     { title: 'Applied to Facility', key: 'facility' },
  //     { title: 'Applied to Amount', key: 'amount' }
  //   ],
  //   desserts: []
  // }
];
