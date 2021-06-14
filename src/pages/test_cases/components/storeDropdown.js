import React from "react";
import {Select} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';

const StoreDropdown = props => {
    return(
    <div>
    {props.integrationState === "Experian" ? (
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
          <option value={props.alphaStores[0][0].storeName}>{props.alphaStores[0][0].storeName}</option>
          <option value={props.alphaStores[0][3].storeName}>{props.alphaStores[0][3].storeName}</option>
          <option value={props.alphaStores[0][5].storeName}>{props.alphaStores[0][5].storeName}</option>

        </Select>
        </div>
    ) : null}
        {props.integrationState === "TransUnion" ? (
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
          <option value={props.alphaStores[0][0].storeName}>{props.alphaStores[0][0].storeName}</option>
          <option value={props.alphaStores[0][2].storeName}>{props.alphaStores[0][2].storeName}</option>
          <option value={props.alphaStores[0][5].storeName}>{props.alphaStores[0][5].storeName}</option>
        </Select>
        </div>
    ) : null}
        {props.integrationState === "Equifax" ? (
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
          <option value={props.alphaStores[0][0].storeName}>{props.alphaStores[0][0].storeName}</option>
          <option value={props.alphaStores[0][4].storeName}>{props.alphaStores[0][4].storeName}</option>
          <option value={props.alphaStores[0][5].storeName}>{props.alphaStores[0][5].storeName}</option>
        </Select>
        </div>
    ) : null}

    {/* Product Dropdown */}
    {props.alphaStoreState === "Biz Alpha" ? (
      <div>
        <InputLabel htmlFor="biz-alpha-products-native-simple">Store</InputLabel>
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
    </div>
    )}

export default StoreDropdown