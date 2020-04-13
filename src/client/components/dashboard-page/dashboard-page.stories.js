import React from 'react';
import DashboardPage from './dashboard-page.component.js';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import data from './data.json';

export default {
  title: 'Dashboard Page',
  component: DashboardPage,
  decorators: [withKnobs],
};

export const Dashboard = () => {
  const showDashboard = action('open dashboard page');
  const showBatchDetails = action('open batch details page');
  const showAddBatch = action('open add batch page');
  const showLogoutModal = action('open logout modal');
  const userName = text('username', 'Oralia Hallat');
  const logoutModal = boolean('isVisibleLogoutPopup', false);
  const close = action('close popup');
  const logout = action('logout');

  return (
    <DashboardPage
      isVisible={true}
      showDashboardFunc={showDashboard}
      showBatchDetailsFunc={showBatchDetails}
      showAddBatchFunc={showAddBatch}
      showLogoutModal={showLogoutModal}
      userName={userName}
      logoutModal={logoutModal}
      closeAction={close}
      logoutFunc={logout}
      progressBarData={data.progressBar}
      lineChartData={data.lineChart}
    />
  );
};
