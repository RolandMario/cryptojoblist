import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AccountProvider } from './components/context/AccountContext';
import { RecAccountProvider } from './components/context/RecAccountContext';
import { WalletAddressProvider } from './components/context/WalletAddressContext';
import { SignInProvider } from './components/context/SignInContext';
import reportWebVitals from './reportWebVitals';
import {JobPostProvider} from './components/context/JobPostContext';
import { PostDetailsProvider } from './components/context/PostDetailscontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <WalletAddressProvider>
        <RecAccountProvider>
          <SignInProvider>
            <JobPostProvider>
              <PostDetailsProvider>
                <App />  
              </PostDetailsProvider>
              
            </JobPostProvider>
            
          </SignInProvider>
         
        </RecAccountProvider>
       
      </WalletAddressProvider>
      
    </AccountProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
