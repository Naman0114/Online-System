import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Examrundash from './Components/Examrundash';
import OTPverification from './Components/OTPverification';
import QuesBank from './Components/QuesBank';
import Test from './Components/Test';
import UserLogin from './Components/UserLogin';
import Web3Provider from "./contexts/web3Provider";
import Admin from './Pages/Admin';
import AdminPage from './Pages/AdminPage';
import FrontPage from './Pages/FrontPage';
import Mainpage from './Pages/Mainpage';
import Registerstudent from './Pages/Registerstudent';
import Result from './Pages/Result';
import ResultPage from './Pages/ResultPage';
import SignUp from './Pages/SignUp';
import TRYCODE from './Pages/TRYCODE';
import User from './Pages/User';

function App() {
  return (

    <Web3Provider> {/* ✅ Wrap entire app inside Web3Provider */}

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FrontPage />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Users' element={<User />} />
            <Route path='/usersignup' element={<UserLogin />} />
            <Route path='/userloginsucc' element={<Mainpage />} />
            <Route path='/exam' element={<Mainpage />} />
            <Route path='/Adminpage' element={<AdminPage />} />
            <Route path='/q' element={<QuesBank />} />
            <Route path='/giveexam' element={<Examrundash />} />
            <Route path='/test' element={<Test />} />
            <Route path='/Result' element={<Result />} />
            <Route path='/Register' element={<Registerstudent />} />
            <Route path='/otpss' element={<OTPverification />} />
            <Route path='/user' element={<SignUp />} />
            <Route path='/try' element={<TRYCODE />} />
            <Route path="/allresult" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>

    </Web3Provider>
  );
}

export default App;
