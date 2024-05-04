import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/navbar';
import {NavigationBarProps} from './Components/Models/navigationsProps';
import {StreamView} from './Components/streamView';
import { DonationContainer } from './Components/donationContainer';
import { ItemProps } from './Components/Models/itemProps';
function App() {
  var items: ItemProps[] = [
    {
      itemName: 'Item 1',
      itemPrice: 10
    },
    {
      itemName: 'Item 2',
      itemPrice: 20
    },
    {
      itemName: 'Item 3',
      itemPrice: 30
    },
    {
      itemName: 'Item 4',
      itemPrice: 40
    },
    {
      itemName: 'Item 5',
      itemPrice: 50
    },
    {
      itemName: 'Item 6',
      itemPrice: 60
    },
    {
      itemName: 'Item 7',
      itemPrice: 70
    },
    {
      itemName: 'Item 8',
      itemPrice: 80
    },
    {
      itemName: 'Item 9',
      itemPrice: 90
    },
    {
      itemName: 'Item 10',
      itemPrice: 100
    }
  ]
  return (
  <div className=''>
  <NavigationBar username='StreamMe' isSignedIn= {false} />
  <StreamView hasPaid={false} hasLoggedIn={false} />
  <DonationContainer hasLoggedIn={true} items={items} />
  </div>
  );
}

export default App;
