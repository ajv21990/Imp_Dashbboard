import React from "react";
import {Select, Card, CardContent, Button} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';

const DepositDropdown = props => {


  function getPostmanRequest(store,name,product) {
    //Declaring copy JSON request function
    function copyPostmanRequest(){
      /* Get the text field */
      var copyText = document.getElementById("postmanURLRequest").innerText.toString();
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', copyText);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    
      /* Alert the copied text */
      alert("URL copied to clipboard");
    }

    function copyFundingRequest(){
      /* Get the text field */
      var copyText = document.getElementById("fundRequest").innerText.toString();
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', copyText);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    
      /* Alert the copied text */
      alert("Object copied to clipboard");
    }
    

    function copyPostmanURL(){
      /* Get the text field */
      var copyText = document.getElementById("postmanRequest").innerText.toString();
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', copyText);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    
      /* Alert the copied text */
      alert("Object copied to clipboard");
    }

    let firstName = ''
    let middleName = ''
    let lastName = ''
    
    //Assigning personal information based on test case
    let address = ""
    let ssn = ''
    let city = ''
    let state = ''
    let zip = ''
    let dob = ''
    let phone = ''
    
    let requestURL = ""
    let storeID = ""
    switch(store){
      case "Biz Alpha":
      requestURL = "https://store.alpha.mkdecision.com/ccos/submit-credit-application";
      storeID = "store"
      break;
      case "Demo":
      storeID = "MkCreditCardsDemo"  
      requestURL = "https://demo.close.mkdecision.com/ccos/submit-credit-application"
      break; 

    }
    switch (name){
      case "SANDRA BUSTAMENTE":
      address = "3320 MIDDLE BELLVILLE RD";
      city = 'LEXINGTON';
      state = 'USA_OH';
      zip = '44904';
      dob = '1969-01-26';
      ssn = '666696264';
      phone = '4197563447';
      firstName = "SANDRA";
      middleName = '';
      lastName = 'BUSTAMENTE';
      break;
      case "DONALD MADERA":
      address = "4212 ALABAMA AVE";
      city = 'KENNER';
      state = 'USA_LA';
      zip = '70065';
      dob = '1916-01-21';
      ssn = '666523068';
      phone = '5044662001';
      firstName = "DONALD";
      middleName = '';
      lastName = 'MADERA';
      break;
      case "ALAN HARGIS":
      address = "2274 FARNWORTH ST";
      city = 'CAMARILLO';
      state = 'USA_CA';
      zip = '93010';
      dob = '1946-01-02';
      ssn = '666541587';
      phone = '5554448441';
      firstName = "ALAN";
      middleName = '';
      lastName = 'HARGIS';
      break;
      case "MARIA STEPHENS":
      address = "111 E SCHIRMER ST";
      city = 'SAINT LOUIS';
      state = 'USA_MO';
      zip = '63111';
      dob = '1935-03-20';
      ssn = '666550773';
      phone = '2815477898';
      firstName = "MARIA";
      middleName = '';
      lastName = 'STEPHENS';
      break;
      case "DAVID BUI":
      address = "6441 KEATS AVE S";
      city = 'COTTAGE GROVE';
      state = 'USA_MO';
      zip = '63111';
      dob = '1935-03-20';
      ssn = '666550773';
      phone = '2815477898';
      firstName = "DAVID";
      middleName = '';
      lastName = 'BUI';
      break;
      case "MINERVA TURNER":
      address = "10385 S SUMMIT PEAK PL";
      city = 'TUCSON';
      state = 'USA_AZ';
      zip = '85706';
      dob = '1956-07-07';
      ssn = '666030873';
      phone = '5208078680';
      firstName = "MINERVA";
      middleName = '';
      lastName = 'TURNER';
      break;
      case "FLORENCIA ERIKA":
      address = "PO BOX 327";
      city = 'SIERRA BLANCA';
      state = 'USA_TX';
      zip = '79851';
      dob = '1964-1208';
      ssn = '666345030';
      phone = '9153691679';
      firstName = "FLORENCIA";
      middleName = '';
      lastName = 'ERIKA';
      break;
      case "DALTON VAN LEER":
      address = "6088 S 2075 E";
      city = 'SALT LAKE CITY';
      state = 'USA_UT';
      zip = '84121';
      dob = '1972-05-27';
      ssn = '666231354';
      phone = '8018085292';
      firstName = "DALTON";
      middleName = '';
      lastName = 'VAN LEER';
      break;
      case "DHINU DURRELL":
      address = "4101 DRIPPING SPRINGS RD";
      city = 'GLASGOW';
      state = 'USA_KY';
      zip = '42141';
      dob = '1962-04-21';
      ssn = '666415182';
      phone = '2707833151';
      firstName = "DHINU";
      middleName = '';
      lastName = 'DURRELL';
      break;
      case "JOHNETTA S GUALTNEY":
      address = "4757 W PK";
      city = 'PLANO';
      state = 'USA_TX';
      zip = '75093';
      dob = '1990-08-08';
      ssn = '666348518';
      phone = '7148894502';
      firstName = "JOHNETTA";
      middleName = 'S';
      lastName = 'GUALTNEY';
      break;
      case "BILLY C ALLEN":
        address = "2508 SEEDLING GROVE CT";
        city = 'VIRGINIA BEACH';
        state = 'USA_VA';
        zip = '23456';
        dob = '1978-03-20';
        ssn = '666221475';
        phone = '3632621457';
        firstName = "BILLY";
        middleName = 'C';
        lastName = 'ALLEN';
        break;
      default:
      address = "";
      city = '';
      state = '';
      zip = '';
      dob = '';
      ssn = '';
      phone = '';
      firstName = "";
      middleName = '';
      lastName = '';
    }
    
    
    let submitRequest = 
      {
        "storeId": `${storeID}`,
        "productId": `${product}`,
        "agreementsSigned": [
            "MkAgrElectronicSignatureAgreement",
            "MkAgrAccountTermsAndConditions",
            "MkAgrCreditApplication",
            "MkAgrFundsAvailability",
            "MkAgrOverdraftPreference",
            "MkAgrPrivacyPolicy"
        ],
        "comments": "",
        "customFields": [],
        "parties": [
            {
              "firstName": `${firstName}`,
              "lastName": `${lastName}`,
              "middleName": `${middleName}`,
              "birthDate": `${dob}`,
              "socialSecurityNumber": `${ssn}`,
                "mothersMaidenName": "Miles",
                "contactInformation": [
                    {
                        "postalContactMechPurposeId": "PostalPrimary",
                        "address1": `${address}`,
                        "address2": "",
                        "city": `${city}`,
                        "stateProvinceGeoId": `${state}`,
                        "postalCode": `${zip}`,
                        "postalCode": "92618"
                    },
                    {
                        "telecomContactMechPurposeId": "PhoneMobile",
                        "contactNumber": `${phone}`,
                        "telecomPrimary": true
                    },
                    {
                        "emailContactMechPurposeId": "EmailPrimary",
                        "emailAddress": "anthony.villanueva@mkdecision.com"
                    }
                ],
                "partyContentIds": [],
                "accountOpeningQuestions": [
                    {
                        "value": "$3,001 - $10,000",
                        "layoutSequenceNum": "1",
                        "fieldName": "avgBalance"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "2",
                        "fieldName": "depositOrWithdraw"
                    },
                    {
                        "value": "$1,001 - $3,000",
                        "layoutSequenceNum": "3",
                        "fieldName": "depositAmountMonthly"
                    },
                    {
                        "value": "$1,001 - $3,000",
                        "layoutSequenceNum": "4",
                        "fieldName": "cashWithdrawMonthly"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "5",
                        "fieldName": "receiveElectronicTransactions"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "6",
                        "fieldName": "receiveInternationalElectronicTransactions"
                    },
                    {
                        "value": "USA",
                        "layoutSequenceNum": "7",
                        "fieldName": "countryElectronicTransaction"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "8",
                        "fieldName": "wireTransactions"
                    },
                    {
                        "value": "$3,001 - $5,000",
                        "layoutSequenceNum": "9",
                        "fieldName": "avgWireTransferAmt"
                    },
                    {
                        "value": "0",
                        "layoutSequenceNum": "10",
                        "fieldName": "wireTransferSendMonthly"
                    },
                    {
                        "value": "0",
                        "layoutSequenceNum": "11",
                        "fieldName": "wireTransferReceiveMonthly"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "12",
                        "fieldName": "sendOrReceiveIntWireTransfers"
                    },
                    {
                        "value": "USA",
                        "layoutSequenceNum": "13",
                        "fieldName": "countryWireTransfers"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "14",
                        "fieldName": "foreignGovOfficial"
                    }
                ],
                "backUpWithholdingQuestions": [
                    {
                        "fieldName": "subjectToBackupWithholding",
                        "value": "N",
                        "layoutSequenceNum": 1
                    },
                    {
                        "fieldName": "aboveIsAccurateAndTrue",
                        "value": "Y",
                        "layoutSequenceNum": 2
                    },
                    {
                        "fieldName": "doesNotRequireConsent",
                        "value": "Y",
                        "layoutSequenceNum": 3
                    }
                ],
                "citizenships": [
                    "USA"
                ],
                "identifications": [
                    {
                        "idType": "PtidDriverLicense",
                        "idValue": "53443534",
                        "issuedBy": "USA_AK",
                        "issueDate": "2000-12-02",
                        "expireDate": "2222-12-22",
                        "idologyScanIds": []
                    }
                ],
                "employments": [
                    {
                        "employmentStatusEnumId": "EmpsFullTime",
                        "employmentStartDate": "2021-06-01",
                        "monthlyIncome": 4500,
                        "employerName": "Mikes",
                        "title": "Farmer"
                    }
                ],
                "partyType": "PtyPerson",
                "roleTypeId": [
                    "PrimaryApplicant"
                ],
                "clientId": "0",
                "additionalProducts": [
                    "102244",
                    "debit-card",
                    "checkbook"
                ]
            },
            {
                "firstName": "TEST",
                "lastName": "JOINT APP",
                "birthDate": "1990-07-08",
                "socialSecurityNumber": "666345342",
                "mothersMaidenName": "Joe",
                "contactInformation": [
                    {
                        "postalContactMechPurposeId": "PostalPrimary",
                        "address1": "234 WAYU ST",
                        "address2": "",
                        "city": "Suffolk",
                        "stateProvinceGeoId": "USA_VA",
                        "postalCode": "23432"
                    },
                    {
                        "telecomContactMechPurposeId": "PhoneMobile",
                        "contactNumber": "6435342543",
                        "telecomPrimary": true
                    },
                    {
                        "emailContactMechPurposeId": "EmailPrimary",
                        "emailAddress": "anthony.villanueva+JA@mkdecision.com"
                    }
                ],
                "partyContentIds": [],
                "accountOpeningQuestions": [
                    {
                        "value": "$0 - $3,000",
                        "layoutSequenceNum": "1",
                        "fieldName": "avgBalance"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "2",
                        "fieldName": "depositOrWithdraw"
                    },
                    {
                        "value": "$5,001 - $10,000",
                        "layoutSequenceNum": "3",
                        "fieldName": "depositAmountMonthly"
                    },
                    {
                        "value": "$0 - $1,000",
                        "layoutSequenceNum": "4",
                        "fieldName": "cashWithdrawMonthly"
                    },
                    {
                        "value": "N",
                        "layoutSequenceNum": "5",
                        "fieldName": "receiveElectronicTransactions"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "6",
                        "fieldName": "receiveInternationalElectronicTransactions"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "7",
                        "fieldName": "countryElectronicTransaction"
                    },
                    {
                        "value": "N",
                        "layoutSequenceNum": "8",
                        "fieldName": "wireTransactions"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "9",
                        "fieldName": "avgWireTransferAmt"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "10",
                        "fieldName": "wireTransferSendMonthly"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "11",
                        "fieldName": "wireTransferReceiveMonthly"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "12",
                        "fieldName": "sendOrReceiveIntWireTransfers"
                    },
                    {
                        "value": "",
                        "layoutSequenceNum": "13",
                        "fieldName": "countryWireTransfers"
                    },
                    {
                        "value": "Y",
                        "layoutSequenceNum": "14",
                        "fieldName": "foreignGovOfficial"
                    }
                ],
                "backUpWithholdingQuestions": [
                    {
                        "fieldName": "subjectToBackupWithholding",
                        "value": "N",
                        "layoutSequenceNum": 1
                    },
                    {
                        "fieldName": "aboveIsAccurateAndTrue",
                        "value": "Y",
                        "layoutSequenceNum": 2
                    },
                    {
                        "fieldName": "doesNotRequireConsent",
                        "value": "Y",
                        "layoutSequenceNum": 3
                    }
                ],
                "citizenships": [
                    "ARG"
                ],
                "identifications": [
                    {
                        "idType": "PtidDriverLicense",
                        "idValue": "4323432",
                        "issuedBy": "USA_DE",
                        "issueDate": "2000-07-07",
                        "expireDate": "2222-12-22",
                        "idologyScanIds": []
                    }
                ],
                "employments": [
                    {
                        "employmentStatusEnumId": "EmpsSelf",
                        "employmentStartDate": "2021-06-01",
                        "monthlyIncome": 4450,
                        "industryType": "Agriculture"
                    }
                ],
                "partyType": "PtyPerson",
                "roleTypeId": [
                    "JointApplicant"
                ],
                "clientId": "1",
                "additionalProducts": [
                    "102244",
                    "debit-card",
                    "checkbook"
                ]
            },
            {
                "firstName": "TEST",
                "lastName": "BEN",
                "relationToPrimaryApplicant": "PrtSpouse",
                "birthDate": "1990-07-08",
                "socialSecurityNumber": "666648465",
                "sequenceNum": 1,
                "contactInformation": [],
                "partyContentIds": [],
                "partyType": "PtyPerson",
                "roleTypeId": [
                    "Beneficiary"
                ],
                "clientId": "2"
            }
        ],
        "relationships": [],
        "facilityId": "101530"
    }
    let fundRequest = 
    {
      "orderId": " ",
      "transferAmount": 500,
      "transferAccountType": "BatChecking",
      "transferRoutingNumber": "234234333",
      "transferInstitution": "TEST BANK",
      "transferAccountNumber": "3232432432"
    }

    let formattedSubmitRequest = JSON.stringify(submitRequest, null, "\t")
    let formattedFundRequest = JSON.stringify(fundRequest, null, "\t")

    return (
      <div>
        {!(product === '')?
        <div>
          <Card>
                <CardContent id="postmanURLRequest">{requestURL}</CardContent>
          </Card>
          <br/>
          <Button variant="contained" color="inherit" onClick={copyPostmanURL}>Copy URL</Button>
          <br/>
          <br/>
          <Card>
            <CardContent id="postmanRequest">{formattedSubmitRequest}</CardContent>
          </Card>
          <br/>
          <Button variant="contained" color="inherit" onClick={copyPostmanRequest}>Copy Request</Button>
          <br/>
          <br/>
          <Card>
            <CardContent id="fundRequest">{formattedFundRequest}</CardContent>
          </Card>
          <br/>
          <Button variant="contained" color="inherit" onClick={copyFundingRequest}>Copy Funding Request</Button>
          <br/>
          </div>:null}
      </div>
    )
    }

    return(
    <div>
    {props.integrationState === "Experian"  && !(props.testProfilesState === '') ? (
      <div>
        <InputLabel htmlFor="store-native-simple">Store</InputLabel>
        <Select 
          native
          value={props.alphaStoreState} 
          onChange={e => props.setAlphaStoreState(e.target.value)}
          inputProps={{
            name: 'exp-stores',
            id: 'exp-stores-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.alphaStores[0]}>{props.alphaStores[0]}</option>
          <option value={props.alphaStores[3]}>{props.alphaStores[3]}</option>
          <option value={props.alphaStores[4]}>{props.alphaStores[4]}</option>

        </Select>
        </div>
    ) : null}
        {props.integrationState === "TransUnion"  && !(props.testProfilesState === '') ? (
      <div>
        <InputLabel htmlFor="tu-stores-native-simple">Store</InputLabel>
        <Select 
          native
          value={props.alphaStoreState} 
          onChange={e => props.setAlphaStoreState(e.target.value)}
          inputProps={{
            name: 'tu-stores',
            id: 'tu-stores-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.alphaStores[0]}>{props.alphaStores[0]}</option>
          <option value={props.alphaStores[2]}>{props.alphaStores[2]}</option>
          <option value={props.alphaStores[4]}>{props.alphaStores[4]}</option>
        </Select>
        </div>
    ) : null}
        {props.integrationState === "Equifax"  && !(props.testProfilesState === '') ? (
      <div>
        <InputLabel htmlFor="eq-stores-native-simple">Store</InputLabel>
        <Select 
          native
          value={props.alphaStoreState} 
          onChange={e => props.setAlphaStoreState(e.target.value)}
          inputProps={{
            name: 'eq-stores',
            id: 'eq-stores-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.alphaStores[0]}>{props.alphaStores[0]}</option>
          <option value={props.alphaStores[4]}>{props.alphaStores[4]}</option>
        </Select>
        </div>
    ) : null}
<br/>
    {/* Product Dropdown */}
    {props.alphaStoreState === "Biz Alpha" ? (
      <div>
        <InputLabel htmlFor="biz-alpha-products-native-simple">Products</InputLabel>
        <Select 
          native
          value={props.productsState} 
          onChange={e => props.setProductsState(e.target.value)}
          inputProps={{
            name: 'biz-alpha-products',
            id: 'biz-alpha-products-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.products[0][6].productID}>{props.products[0][0].productName}</option>
          <option value={props.products[0][7].productID}>{props.products[0][7].productName}</option>
          <option value={props.products[0][8].productID}>{props.products[0][8].productName}</option>
          <option value={props.products[0][9].productID}>{props.products[0][9].productName}</option>
          <option value={props.products[0][10].productID}>{props.products[0][10].productName}</option>
          <option value={props.products[0][11].productID}>{props.products[0][11].productName}</option>
          <option value={props.products[0][12].productID}>{props.products[0][12].productName}</option>
          <option value={props.products[0][13].productID}>{props.products[0][13].productName}</option>
        </Select>
        </div>
    ) : null}
      {props.alphaStoreState === "BBOW" ? (
      <div>
          <p style={{color:'red'}}>N/A for BBOW</p>
        </div>
    ) : null}
            {props.alphaStoreState === "BBOK" ? (
      <div>
          <p style={{color:'red'}}>N/A for BBOK</p>
        </div>
    ) : null}
        {props.alphaStoreState === "TCM" ? (
        <div>
          <p style={{color:'red'}}>N/A for TCM</p>
        </div>
    ) : null}
      {props.alphaStoreState === "Demo" ? (
      <div>
        <InputLabel htmlFor="demo-alpha-products-native-simple">Products</InputLabel>
        <Select 
          native
          value={props.productsState} 
          onChange={e => props.setProductsState(e.target.value)}
          inputProps={{
            name: 'demo-alpha-products',
            id: 'demo-alpha-products-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.products[4][0].productID}>{props.products[4][0].productName}</option>
          <option value={props.products[4][1].productID}>{props.products[4][1].productName}</option>
        </Select>
        </div>
    ) : null}
    <br/>
    {getPostmanRequest(props.alphaStoreState, props.testProfilesState,props.productsState )}
    </div>
    )}

export default DepositDropdown



