import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaHome, FaPiggyBank } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

const SidebarLayout = () => {
  let navigate = useNavigate();

  const { collapsed, collapseSidebar } = useProSidebar();
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <Sidebar breakPoint="sm" transitionDuration={800} backgroundColor="#A3A3A3" rtl={false} style={{ height: '100%' }}>
      <Menu>
        {collapsed ? (
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            icon={<FaAngleDoubleRight />}
          ></MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            suffix={<FaAngleDoubleLeft />}
          >
            <div
              style={{
                padding: '9px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 15,
                letterSpacing: '1px',
              }}
            ></div>
          </MenuItem>
        )}
      </Menu>

      <Menu>
        <MenuItem
          onClick={() => {
            navigate('/app/wallet');
          }}
          icon={<FaHome />}
          active={currentPathName.includes('/wallet')}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/app/transfer');
          }}
          active={currentPathName.includes('/transfer')}
          icon={<FaPiggyBank />}
        >
          Transfer
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarLayout;
