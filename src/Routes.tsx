import {
  ActiveFlow,
  DataMonitor,
  Factor,
  Calculator,
  CarbonCal,
  Prediction,
  Offset,
  User,
  Admin,
  Api,
  Flow,
  UpdateInfo,
  UserApi,
  Organization,
  ManageUsers,
  ManageOrg,
  ManageTeam,
  Billing,
  RoleApi,
  UserCalls,
  BillingAccount,
  Payment,
  CloudCarbon,
  Dashboard,
  Assets,
  ScopeOneDetails,
  ScopeTwoDetails,
  Onboarding,
} from './Pages';
const routes = [
  {
    route: '/dashboard',
    component: <Dashboard />,
  },
  {
    route: '/ingestion/activeflow',
    component: <ActiveFlow />,
  },
  {
    route: '/ingestion/flow',
    component: <Flow />,
  },
  {
    route: '/measure/asset',
    component: <Assets />,
  },
  {
    route: '/asset',
    component: <ScopeTwoDetails />,
  },
  {
    route: '/asset/one',
    component: <ScopeOneDetails />,
  },
  {
    route: '/measure/scope',
    component: <DataMonitor />,
  },
  {
    route: '/measure/cloud',
    component: <CloudCarbon />,
  },

  {
    route: '/emission/factors',
    component: <Factor />,
  },
  {
    route: '/emission/calculator',
    component: <Calculator />,
  },
  {
    route: '/reduction/cal',
    component: <CarbonCal />,
  },
  {
    route: '/models/prediction_model',
    component: <Prediction />,
  },
  {
    route: '/offset',
    component: <Offset />,
  },
  {
    route: '/user',
    component: <User />,
  },
  {
    route: '/admin',
    component: <Admin />,
  },
  {
    route: '/api',
    component: <Api />,
  },

  {
    route: '/user/update',
    component: <UpdateInfo />,
  },
  {
    route: '/user/api',
    component: <UserApi />,
  },
  {
    route: '/user/org',
    component: <Organization />,
  },
  {
    route: '/admin/users',
    component: <ManageUsers />,
  },
  {
    route: '/admin/org',
    component: <ManageOrg />,
  },
  {
    route: '/admin/team',
    component: <ManageTeam />,
  },
  {
    route: '/admin/billing',
    component: <Billing />,
  },
  {
    route: '/admin/api',
    component: <RoleApi />,
  },
  {
    route: '/admin/calls',
    component: <UserCalls />,
  },
  {
    route: '/admin/billing/account',
    component: <BillingAccount />,
  },
  {
    route: '/admin/billing/payment',
    component: <Payment />,
  },
  {
    route: '/onboarding',
    component: <Onboarding />,
  },
];
export default routes;
