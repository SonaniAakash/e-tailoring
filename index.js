import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import View_customer from './View_customer';
import View_newcustomer from './View_newcustomer';
import View_jodhpuri from './View_jodhpuri';
import View_Kafni from './View_Kafni';
import View_langho from './View_langho';
import View_pants from './View_pants';
import View_shervani from './View_shervani';
import View_shirts from './View_shirts';
import View_suit from './View_suit';
import Add_shirts from './Add_shirts';
import Add_pants from './Add_pants';
import Add_suit from './Add_suit';
import Add_kafni from './Add_kafni';
import Add_langho from './Add_langho';
import Add_jodhpuri from './Add_jodhpuri';
import Add_shervani from './Add_shervani';
import Login_page from './Login_page';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/View_customer' element={<View_customer />} />
                        <Route path='/View_jodhpuri' element={<View_jodhpuri />} />
                        <Route path='/View_Kafni' element={<View_Kafni />} />
                        <Route path='/View_langho' element={<View_langho />} />
                        <Route path='/View_pants' element={<View_pants />} />
                        <Route path='/View_shervani' element={<View_shervani />} />
                        <Route path='/View_shirts' element={<View_shirts />} />
                        <Route path='/View_suit' element={<View_suit />} />
                        <Route path='/View_newcustomer' element={<View_newcustomer />} />
                        <Route path='/Add_shirts' element={<Add_shirts />} />
                        <Route path='/Add_pants' element={<Add_pants />} />
                        <Route path='/Add_suit' element={<Add_suit />} />
                        <Route path='/Add_kafni' element={<Add_kafni />} />
                        <Route path='/Add_langho' element={<Add_langho />} />
                        <Route path='/Add_jodhpuri' element={<Add_jodhpuri />} />
                        <Route path='/Add_shervani' element={<Add_shervani />} />
                        <Route path='/Login_page' element={<Login_page />} />
                        

                 </Routes>
            </BrowserRouter>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);
