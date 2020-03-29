//for i in range(1): print("\'var[%d]\'," % i)
// Use this to rename the integer keys intially read from the PLC to match what is actually in the PLC 
DB421KEYS = [
    'V_FPNR',
    'V_SCANNER',
    'VISU_SCANNER',
    'LADDR',
    'E_SC_SYS',
    'E_STO_SC',
    'E_ZAEH_RESET',
    'E_EIN_NO_VISU',
    'A_STO_SC',
    'A_GOODREAD',
    'A_NOREAD',
    'DPRD_STAT_IN',
    'DPRD_STAT',
    'DPWR_STAT',
    'ERROR_TELE',
    'ERROR_EXT_T',
    'ERROR_DH',
    'ERROR_EXT_DH',
    'ANZ_TELEGR',
    'len_fp',
    'len_scanner',
    'len_platz',
    'len_visu_scanner',
    'len_ta_data',
    'sick_timeout',
    'sc_stg_fpnr',
    'sc_stg_scanner',
    'sc_stg_zeitstempel',
    'fpnr',
    'scanner',
    'status',
    'err_info',
    'laddr_data',
    'tele_typ',
    'x_noread',
    'x_bc_lang',
    'x_recv_ndr',
    'x_recv_error',
    'x_anz_goodread',
    'x_anz_noread',
    'x_sc_rdy',
    'ctrl_in_ext_e_1',
    'ctrl_in_ext_e_2',
    'ctrl_in_sensor_1',
    'ctrl_in_sensor_2',
    'ctrl_in_res_d12',
    'ctrl_in_res_d13',
    'ctrl_in_res_d14',
    'ctrl_in_toggle',
    'ctrl_in_sc_rdy',
    'ctrl_in_sys_rdy',
    'ctrl_in_goodread',
    'ctrl_in_noread',
    'ctrl_in_ext_a_1',
    'ctrl_in_ext_a_2',
    'ctrl_in_result_1',
    'ctrl_in_result_2',
    'ctrl_out_res_d8',
    'ctrl_out_res_d9',
    'ctrl_out_res_d10',
    'ctrl_out_res_d11',
    'ctrl_out_fokus_b0',
    'ctrl_out_fokus_b1',
    'ctrl_out_fokus_b2',
    'ctrl_out_fokus_b3',
    'ctrl_out_sc_trig',
    'ctrl_out_sleep',
    'ctrl_out_teach_1',
    'ctrl_out_teach_2',
    'ctrl_out_ext_1',
    'ctrl_out_ext_2',
    'ctrl_out_result_1',
    'ctrl_out_result_2',
    'letzte_lesung[1]',
    'letzte_lesung[2]',
    'letzte_lesung[3]',
    'letzte_lesung[4]',
    'letzte_lesung[5]',
    'letzte_lesung[6]',
    'letzte_lesung[7]',
    'letzte_lesung[8]',
    'letzte_lesung[9]',
    'letzte_lesung[10]',
    'letzte_lesung[11]',
    'letzte_lesung[12]',
    'letzte_lesung[13]',
    'letzte_lesung[14]',
    'letzte_lesung[15]',
    'letzte_lesung[16]',
    'letzte_lesung[17]',
    'letzte_lesung[18]',
    'letzte_lesung[19]',
    'letzte_lesung[20]',
    'letzte_lesung[21]',
    'letzte_lesung[22]',
    'letzte_lesung[23]',
    'letzte_lesung[24]',
    'letzte_lesung[25]',
    'letzte_lesung[26]',
    'letzte_lesung[27]',
    'letzte_lesung[28]',
    'letzte_lesung[29]',
    'letzte_lesung[30]',
    'letzte_lesung[31]',
    'letzte_lesung[32]',
    'letzte_lesung[33]',
    'letzte_lesung[34]',
    'letzte_lesung[35]',
    'letzte_lesung[36]',
    'letzte_lesung[37]',
    'letzte_lesung[38]',
    'letzte_lesung[39]',
    'letzte_lesung[40]',
    'I_SIM_SC_E_PN',
    'I_SIM_SC_VISU_SCANNER',
    'I_SIM_SC_A_RECV_440_NDR',
    'I_SIM_SC_A_TELE_STAT',
    'I_SIM_SC_A_BC_LANG',
    'I_SIM_SC_A_NOREAD',
    'I_SIM_SC_STATUS',
    'I_SIM_SC_LEN_TELE',
    'I_SIM_SC_ERROR_CODE',
    'I_SIM_SC_ERROR_EXT',
    'I_SIM_SC_SC_STG',
    'I_SIM_SC_SC_PN',
    'I_SIM_SC_PUFFER',
    'I_SIM_SC_LETZTE_LESUNG',
    'I_SIM_SC_len_visu_scanner',
    'I_SIM_SC_anz_startz',
    'I_SIM_SC_anz_endez',
    'I_SIM_SC_startzeichen[1]',
    'I_SIM_SC_startzeichen[2]',
    'I_SIM_SC_startzeichen[3]',
    'I_SIM_SC_startzeichen[4]',
    'I_SIM_SC_startzeichen[5]',
    'I_SIM_SC_endezeichen[1]',
    'I_SIM_SC_endezeichen[2]',
    'I_SIM_SC_endezeichen[3]',
    'I_SIM_SC_endezeichen[4]',
    'I_SIM_SC_endezeichen[5]',
    'I_SIM_SC_bc_len',
    'I_SIM_SC_sick_scanner',
    'I_SIM_SC_leuze_scanner',
    'I_SIM_SC_sick_timeout',
    'I_SIM_SC_sick_trennzeichen',
    'I_SIM_SC_sick_separator',
    'I_SIM_SC_sick_block',
    'I_SIM_SC_leuze_start_zeichen',
    'I_SIM_SC_leuze_warn_zeichen',
    'I_SIM_SC_leuze_fehler_zeichen',
    'I_SIM_SC_leuze_separator',
    'I_SIM_SC_data_length',
    'I_SIM_SC_start_sc',
    'I_SIM_SC_end_sc',
    'I_SIM_SC_can_adr',
    'I_SIM_SC_x_init',
    'init',
    'puf_recv[1]',
    'puf_recv[2]',
    'puf_recv[3]',
    'puf_recv[4]',
    'puf_recv[5]',
    'puf_recv[6]',
    'puf_recv[7]',
    'puf_recv[8]',
    'puf_recv[9]',
    'puf_recv[10]',
    'puf_recv[11]',
    'puf_recv[12]',
    'puf_recv[13]',
    'puf_recv[14]',
    'puf_recv[15]',
    'puf_recv[16]',
    'puf_recv[17]',
    'puf_recv[18]',
    'puf_recv[19]',
    'puf_recv[20]',
    'puf_recv[21]',
    'puf_recv[22]',
    'puf_recv[23]',
    'puf_recv[24]',
    'puf_recv[25]',
    'puf_recv[26]',
    'puf_recv[27]',
    'puf_recv[28]',
    'puf_recv[29]',
    'puf_recv[30]',
    'puf_recv[31]',
    'puf_recv[32]',
    'recv_heartbeat',
    'recv_plc_error',
    'recv_max_len',
    'recv_len_tele',
    'recv_len_data',
    'puf_send[1]',
    'puf_send[2]',
    'puf_send[3]',
    'puf_send[4]',
    'puf_send[5]',
    'puf_send[6]',
    'puf_send[7]',
    'puf_send[8]',
    'puf_send[9]',
    'puf_send[10]',
    'puf_send[11]',
    'puf_send[12]',
    'puf_send[13]',
    'puf_send[14]',
    'puf_send[15]',
    'puf_send[16]',
    'send_max_len',
    'send_len_tele',
    'send_len_data'
]

module.exports = DB421KEYS;
