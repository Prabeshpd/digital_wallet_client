import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Wallet from '../Wallet/Wallet';
import SidebarLayout from '../Sidebar/SidebarLayout';
import TopBar from '../Topbar/Topbar';
import Transfer from '../Transfer/Transfer';

function Router() {
  return (
    <ProSidebarProvider>
      <TopBar />
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
        <SidebarLayout />
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}

export default Router;
