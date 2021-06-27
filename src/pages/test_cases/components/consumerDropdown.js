import React from "react";
import {Select, Card, CardContent, Button} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';

const ConsumerDropdown = props => {


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
      requestURL = "https://biz.alpha.mkdecision.com/ccos/submit-credit-application";
      storeID = "MkCreditCards"
      break;
      case "BBOW":
      storeID = "BankersBank"
      requestURL = "https://bankersbank.close.alpha.mkdecision.com/ccos/submit-credit-application"
      break;      
      case "BBOK":
      storeID = "bbok-demo"      
      requestURL = "https://bbok.close.alpha.mkdecision.com/ccos/submit-credit-application"
      break;
      case "TCM":
      storeID = "300265"
      requestURL = "https://tcmbank.close.alpha.mkdecision.com/ccos/submit-credit-application"
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
    
    
    let postmanRequest = {
      "storeId": `${storeID}`,
      "productId": `${product}`,
      "agreementsSigned": [
          "MkAgrElectronicSignatureAgreement",
          "MkAgrCreditApplication",
          "MkAgrCreditCardTermsAndConditions"
      ],
      "balanceTransfers": [],
      "comments": "",
      "customFields": [],
      "parties": [
          {
              "firstName": `${firstName}`,
              "lastName": `${lastName}`,
              "middleName": `${middleName}`,
              "birthDate": `${dob}`,
              "socialSecurityNumber": `${ssn}`,
              "mothersMaidenName": "Stark",
              "residenceStatusEnumId": "RessOwn",
              "housingPayment": 0,
              "occupation": "r",
              "financialAssets": "10000-24999",
              "insiderOfVendor": false,
              "jointCredit": true,
              "contactInformation": [
                  {
                      "postalContactMechPurposeId": "PostalPrimary",
                      "address1": `${address}`,
                      "address2": "",
                      "city": `${city}`,
                      "stateProvinceGeoId": `${state}`,
                      "postalCode": `${zip}`,
                      "usedSince": "2017-01-01"
                  },
                  {
                      "telecomContactMechPurposeId": "PhoneHome",
                      "contactNumber": `${phone}`,
                      "telecomPrimary": true
                  },
                  {
                      "emailContactMechPurposeId": "EmailPrimary",
                      "emailAddress": "anthony.villanueva+MD@mkdecision.com"
                  }           
    
              ],
                  "identifications": [
                  {
                      "idType": "PtidDriverLicense",
                      "idValue": "J123962189451",
                      "issuedBy": "USA_MI",
                      "issueDate": "2018-01-01",
                      "expireDate": "2023-01-01"
                  }],
              "employments": [
                  {
                      "employmentStatusEnumId": "EmpsRetired",
                      "employmentStartDate": "2014-11-01",
                      "monthlyIncome": 2500
                  }
              ],
              "partyType": "PtyPerson",
              "roleTypeId": [
                  "PrimaryApplicant"
              ],
              "clientId": "0"
          }
      ],
      "relationships": []
    }
    let formattedPostmanRequest = JSON.stringify(postmanRequest, null, "\t")
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
            <CardContent id="postmanRequest">{formattedPostmanRequest}</CardContent>
          </Card>
          <br/>
          <Button variant="contained" color="inherit" onClick={copyPostmanRequest}>Copy Request</Button>
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
          <option value={props.products[0][0].productID}>{props.products[0][0].productName}</option>
          <option value={props.products[0][1].productID}>{props.products[0][1].productName}</option>

        </Select>
        </div>
    ) : null}
      {props.alphaStoreState === "BBOW" ? (
      <div>
        <InputLabel htmlFor="bbow-alpha-products-native-simple">Products</InputLabel>
        <Select 
          native
          value={props.productsState} 
          onChange={e => props.setProductsState(e.target.value)}
          inputProps={{
            name: 'bbow-alpha-products',
            id: 'bbow-alpha-products-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.products[1][0].productID}>{props.products[1][0].productName}</option>
          <option value={props.products[1][1].productID}>{props.products[1][1].productName}</option>
          <option value={props.products[1][2].productID}>{props.products[1][2].productName}</option>
        </Select>
        </div>
    ) : null}
            {props.alphaStoreState === "BBOK" ? (
      <div>
        <InputLabel htmlFor="bbok-alpha-products-native-simple">Products</InputLabel>
        <Select 
          native
          value={props.productsState} 
          onChange={e => props.setProductsState(e.target.value)}
          inputProps={{
            name: 'bbok-alpha-products',
            id: 'bbok-alpha-products-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.products[2][0].productID}>{props.products[0][0].productName}</option>
          <option value={props.products[2][1].productID}>{props.products[2][1].productName}</option>
        </Select>
        </div>
    ) : null}
        {props.alphaStoreState === "TCM" ? (
        <div>
        <InputLabel htmlFor="tcm-alpha-products-native-simple">Products</InputLabel>
        <Select 
          native
          value={props.productsState} 
          onChange={e => props.setProductsState(e.target.value)}
          inputProps={{
            name: 'tcm-alpha-products',
            id: 'tcm-alpha-products-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.products[3][0].productID}>{props.products[3][0].productName}</option>
          <option value={props.products[3][1].productID}>{props.products[3][1].productName}</option>
          <option value={props.products[3][2].productID}>{props.products[3][2].productName}</option>
          <option value={props.products[3][3].productID}>{props.products[3][3].productName}</option>
        </Select>
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

export default ConsumerDropdown



