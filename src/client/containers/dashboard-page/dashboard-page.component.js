import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './dashboard-page.style.css';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Card from '../../components/card/card.component';
import { CardTitle } from '../../components/card/card-title.component';
import { CropSummary } from '../../components/card/crop-summary-card/crop-summary-card.component';
import LineChartForDashboard from '../../components/line-chart-for-dashboard/line-chart-for-dashboard.component';
import Footer from '../../components/footer/footer.component';
import Logout from '../../components/logout/logout.component';
import UserRoleContext from '../../helpers/UserRoleContext';

const DashboardPage = () => {
  const history = useHistory();
  const [logoutModal, setLogoutModal] = useState(false);
  const userRole = useContext(UserRoleContext);
  return (
    <div className="dashboard">
      <SidebarMenu
        isActive={false}
        isVisible={
          (userRole && userRole === 'admin') || userRole === 'super_admin'
        }
        showDashboard={() => history.push('/dashboard')}
        showBatchDetails={() => history.push('/batch-details')}
        showAddBatch={() => history.push('/add-batch')}
        logout={() => setLogoutModal(true)}
      />
      <Logout userName="Oralia Hallat" openState={logoutModal} />
      <div className="content">
        <header>
          <h1>Batch overview</h1>
        </header>
        <main>
          <ProgressBar
            startDate="2020-03-03"
            currentDate="2020-03-21"
            stages={[
              { name: 'seeding', duration: 3 },
              {
                name: 'propagation',
                duration: 14,
              },
              { name: 'maturity', duration: 28 },
              { name: 'harvest', duration: 4 },
              { name: 'delivery', duration: 3 },
            ]}
          />
          <div className="cards">
            <CropSummary />
            <Card>
              <CardTitle title="Temperature" />
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <CardTitle title="Humidity" />
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <CardTitle title="Water PH" />
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <CardTitle title="Water EC" />
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <CardTitle title="Water Level" />
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
