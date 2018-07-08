import React, { Component } from 'react';
import { 
    Text, View, StyleSheet, 
    TouchableNativeFeedback, ScrollView
} from 'react-native';
import axios from 'axios';
import Lister from './Lister';

export default class SearchGL extends Component {
    state = {
        common: null,
        priorityLevels: null,
        currentlySelected: null
    }
    common = {
        "priority - 1": {
          "Finance & Accounting": [
            ["Office expenses", "3020631300"],
            ["IMT (western union)", "8878100600"],
            ["ATM", "4867100030"],
            ["Railway Collection", "8878300010"],
            ["Railway Commission", "8878300020"],
            ["Railway Cancelation Fee", "8878300030"],
            ["Refund of PRS", "8878300040"],
            ["Electricity Expenses", "3020831300"],
            ["Wages", "3020590200"],
            ["Rent, Water Bill", "3020641400"],
            ["Cash conveyance Allowance", "3020580144"],
            ["Office expenses for Generator", "3020821300"],
            ["Dept MMS ordinary services", "3023271300"],
            ["Logistic post", "4867100012"],
            ["LIC", "8320101113"],
            ["Sale of publications", "1800190100"],
            ["Found Excess (UCR)", "1800420100"],
            ["Wages payment to out sider works in place of gds", "3022170196"],
            ["GPF advance & withdrawal", "4800900040"],
            ["children education allow", "3010010138"],
            ["TA bill", "3020621100"],
            ["TA advance Division Office", "4320100504"],
            ["TA bill of Head Office", "3011630178"],
            ["Wages", "3020590200"],
            ["FSC", "3020580114"],
            ["Training TE", "3020361100"],
            ["DTC", "3020371300"],
            ["Business post", "1101030100"],
            ["Work charges", "3050182700"],
            ["CGST", "8844601650"],
            ["SGST", "8844601670"]
          ]
        },
        "priority - 3": {
          "SB Payments": [
            ["RD", "4800100030"],
            ["1 Year TD", "4800100040"],
            ["2 Year TD", "4800100050"],
            ["3 Year TD", "4800100060"],
            ["5 Year TD 1981", "4800100070"],
            ["MIS", "4800100080"],
            ["SCSS", "4800100090"],
            ["NSS 87", "4800100100"],
            ["NSS 92", "4800100110"],
            ["SB", "4800100010"]
          ]
        },
        "priority - 2": {
          "SB Receipts": [
            ["Recurring Deposits (R.D) 1981", "8800100030"],
            ["PO 1 Year TD 1981", "8800100040"],
            ["PO 2 Year TD 1981", "8800100050"],
            ["PO 3 Year TD 1981", "8800100060"],
            ["PO 5 Year TD 1981", "8800100070"],
            ["MIS 1987", "8800100080"],
            ["SCSS 2004", "8800100090"],
            ["(S.B),WFA,BPL", "8800100010"],
            ["Sukanya Samriddhi A/c 2014", "8800100020"],
            ["5 Year NSC", "8800200170"],
            ["6 Year NSC (8th-Issue)", "8800200060"],
            ["10 YEAR NSC 9th ISSUE", "8800200080"],
            ["Kisan vikas patra-2014", "8800200270"],
            ["Public Provident Funds", "8800600010"],
            ["Deduction on A/C of Premature Withdrawals.", "8800800030"],
            ["Account Transfer Fee SCSS", "8800800040"],
            ["PMSBY", "8844601560"],
            ["PMJJY", "8844601530"],
            ["PMJJY DOP TAX", "8844601550"],
            ["APY26", "8844601620"]
          ]
        },
        "priority - 5": {
          "SB Interest Payments": [
            ["POSB Deposits Int", "4800800010"],
            ["1 Year TD Int", "4800800040"],
            ["Two Year TD Int", "4800800050"],
            ["Three Year TD Int", "4800800060"],
            ["Five Year TD Int", "4800800070"],
            ["RD Int", "4800800120"],
            ["NSS 1987 Int", "4800800500"],
            ["MIS", "4800800130"],
            ["NSS 1992 Int", "4800800140"],
            ["SCSS-2004 Int", "4800800150"],
            ["12 Year NSC Int", "4800800180"],
            ["5 Year NSC Int", "4800800200"],
            ["12 Year NDSC Int", "4800800210"],
            ["7 Year NSC IInd Issue Int", "4800800320"],
            ["7 Year NSC IIIrd Issue Int", "4800800330"],
            ["7 Year NSC IVth Issue Int", "4800800340"],
            ["7 Year NSC Vth Issue Int", "4800800350"],
            ["6 Year NSC Vith Issue Int", "4800800360"],
            ["6 Year NSC VIIth Issue Int", "4800800370"],
            ["10 Year NSC 9th Issue Int", "4800800400"],
            ["10 Year SSC Int", "4800800380"],
            ["Kisan Vikas Patra Int", "4800800390"],
            ["6 Year NSC VIIIth Issue Int", "4800800300"],
            ["Indira Vikas Patra Int", "4800800310"],
            ["Int on P.P.F.", "4800800410"]
          ]
        },
        "priority - 4": {
          "SB Certificate Payments": [
            ["12 Yr National SC", "4800200230"],
            ["7 yr National SC-2nd", "4800200260"],
            ["7 Year National SC (7)", "4800200100"],
            ["7 Year National SC (7)", "4800200110"],
            ["7 Year National SC (5)", "4800200120"],
            ["6 Year National SC(6)", "4800200130"],
            ["6 Year National SC(7)", "4800200140"],
            ["5 Year NSC", "4800200170"],
            ["10 YEAR NSC 9th ISSU", "4800200080"],
            ["12 Year National Def", "4800200040"],
            ["Kisan Vikas Patra(old)", "4800200070"],
            ["6 Year NSC (8th-Iss)", "4800200060"],
            ["Indra Vikas Patra", "4800200150"],
            ["10 Yr Social Sec Cer", "4800200200"],
            ["Public Provident Fund", "4800600010"]
          ]
        },
        "priority - 7": {
          "PLI EA Payments": [
            ["PLI (EA) Payment of Death", "4801400700"],
            ["PLI (EA) Payment of Surrender", "4801400710"],
            ["PLI (EA) Payment of Maturity", "4801400720"],
            ["PLI (EA) Payment of Paid-up", "4801400730"],
            ["Payment of Loans to PLI Policy", "4801401200"]
          ]
        },
        "priority - 6": {
          "SB Commission Payment": [
            ["Commission To SAS Agents.", "4800800420"],
            ["Commission To EDBM/SPM", "4800800430"],
            ["Commission To MPKBY Agents", "4800800440"],
            ["Commission To PPF Agents", "4800800450"],
            ["Commission To Pay Roll Saving", "4800800460"],
            ["Comm Paid To Agents for SCSS", "4800800470"],
            ["Commission Paid To Agents for Sale of NSC", "4800800480"]
          ]
        },
        "priority - 9": {
          "PLI & RPLI Receipts": [
            ["Fee for issue of Duplicate Policy/pass books PLI", "2801600770"],
            ["Fee for issue of Duplicate Policy/pass books RPLI", "2801600810"],
            ["PLI medical fee payment", "7801601160"],
            ["RPLI medical fee payment", "7801601190"],
            ["PLI-EA Premium Receipts and Recoveries", "8801400650"],
            ["PLI-EA Prem recd from DoP & deposits at", "8801400651"],
            ["Repayment and recovery of Loans from PLI", "8801401220"],
            ["RPLI-EA Premium Receipts and Recoveries", "8801401060"],
            ["RPLI-EA Prem Receipts and Recoveries_1st year", "8801401061"],
            ["Repayment and recovery of Loans from RPLI", "8801401230"],
            ["PLI service tax", "7801601320"],
            ["RPLI service tax", "7801601370"]
          ]
        },
        "priority - 8": {
          "RPLI EA Payments": [
            ["RPLI (EA) Payment of Death", "4801401070"],
            ["RPLI (EA) Payment of Surrender", "4801401080"],
            ["RPLI (EA) Payment of Maturity", "4801401090"],
            ["RPLI (EA) Payment of Paid-up Val", "4801401100"],
            ["RPLI Payment of Loans to Policy", "4801401210"],
            ["PLI rebates Alwd on Adv Pmnts of", "7801601070"],
            ["RPLI rebates Alwd on Adv Pmnts of", "7801601120"],
            ["Security Deposit", "4844300010"],
            ["Short/ex. Paid Mo", "8844600060"],
            ["I.R.C", "8844600080"],
            ["JT. International Express", "8844601030"]
          ]
        },
        "priority - 10": {
          "Cash": [
            ["DOP Cash", "4867100010"],
            ["POS Cash", "4867100011"]
          ]
        }
      }
    // componentDidMount() {
    //     // axios.get('http://srj-api-2018.herokuapp.com/api/glCodeFinder/common')
    //     //     .then(({ data: common }) => {
    //     //         alert('Hit Here')
    //             const common = this.common;
    //             const priorityLevels = Object.keys(common).sort(
    //                 (a, b) => a.split('-')[1].trim(' ') - b.split('-')[1].trim(' '))
    //             // alert(priorityLevels)
    //             this.setState({ common, priorityLevels });
    //         // }).catch(err => console.log(err));
    // }
    // componentDidMount() {
    //     axios.get('http://srj-api-2018.herokuapp.com/api/glCodeFinder/common')
    //         .then( ( { data: common } ) => {
    //             const priorityLevels = Object.keys(common).sort(
    //                 (a, b) => a.split('-')[1].trim(' ') - b.split('-')[1].trim(' '))
    //             this.setState({ common, priorityLevels });
    //         }
    // }

    componentDidMount(){
        axios.get('http://srj-api-2018.herokuapp.com/api/glCodeFinder/common')
        .then( res  => {
            alert('got responce')
            console.log(responce);
            const priorityLevels = Object.keys(common)
                    .sort((a, b) => a.split('-')[1].trim(' ') - b.split('-')[1].trim(' '));
            this.setState( { common : res.data, priorityLevels});
        })
        .catch(err => {
            alert('load error');
            const priorityLevels = Object.keys(common)
                    .sort((a, b) => a.split('-')[1].trim(' ') - b.split('-')[1].trim(' '));
            this.setState( { common : this.common, priorityLevels});
        })
        
    }

    renderContent = () => {
        const { common, priorityLevels, currentlySelected } = this.state;
        if (common && priorityLevels) {
            return (
                <ScrollView>
                <View style={styles.wrapper}>
                {
                    priorityLevels.map((priority, mainIdx) => {
                        const title = Object.keys(common[priority]);
                        return (
                            <View  key={mainIdx} style={styles.titleMainContainer}>
                                
                                <TouchableNativeFeedback
                                    onPress={e => {
                                    this.setState(prevState => {
                                            return { currentlySelected: 
                                                (prevState.currentlySelected === mainIdx) ? null : mainIdx }
                                        }
                                    )}}
                                        
                                >
                                    <View style={styles.titleContainer}>
                                        <Text id={mainIdx} style={styles.titleText}>
                                            {title}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                                    <Lister
                                        data={common[priority]}
                                        curItem={currentlySelected}
                                        setNo={mainIdx}
                                       
                                    />
                            </View>);
                    })

                }
                
                </View>
                </ScrollView>);
        }

        return null;

    }


    render() {
        const { container, headertext } = styles;
        return (
            <View style={container}>
                <Text style={headertext}>
                    Common GL Codes
                </Text>
                {this.renderContent()}
            </View>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c313a',
        paddingTop: 32
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 8
    },
    headertext: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    wrapper:{
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    titleMainContainer:{
        marginBottom: 8
    },
    titleText:{
        color: '#1c313a',
        fontSize: 22,
        fontWeight: '400'
        
    },
    titleContainer:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        padding: 10
    }
});