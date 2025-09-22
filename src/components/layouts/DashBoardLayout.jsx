import React from 'react';

import { Outlet, Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '../../components/AppSidebar';
import {
  TrendingUp,
  TrendingDown,
  Store,
  Users,
  ShoppingCart,
  DollarSign,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '../../components/DashboardHeader';
import RevenueChart from '../../components/RevenueChart';
import RecentActivities from '../../components/RecentActivities';
import TopProducts from '../../components/topProducts';
import TotalSales from '../../components/TotalSales';
import { RadialChart } from '../../components/RadialChart';
import { LineChart } from '../../components/LineChart';
import { Header } from '../dashboard/Header';
import {
  ChevronDown,
  GalleryVerticalEnd,
  MessageSquareWarning,
} from 'lucide-react';
import {
  Home,
  ShoppingBag,
  Settings,
  Package,
  BarChart3,
  Heart,
  Search,
} from 'lucide-react';
import { Breadcrumbs } from '../dashboard/navbread/Breadcrumbs';
const adminNav = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: <Home />,
    items: [],
  },
  {
    title: 'Products',
    url: '#',
    icon: <Package />,
    items: [
      { title: 'View All Products', url: 'admin/products' },
      { title: 'Add Categories', url: 'admin/categories/add' },
      { title: 'All Categories', url: 'admin/categories' },
    ],
  },
  {
    title: 'Stores',
    url: '#',
    icon: <ShoppingBag />,
    items: [
      { title: 'All Stores', url: 'admin/stores' },
      { title: 'Store Requests', url: 'admin/stores/requests' },
    ],
  },
  {
    title: 'Finance',
    url: '#',
    icon: <DollarSign />,
    items: [
      { title: 'Transactions', url: 'admin/transactions' },
      { title: 'Payouts', url: 'admin/payouts' },
      { title: 'Earnings (Platform)', url: 'admin/earnings' },
    ],
  },
  {
    title: 'Users',
    url: '#',
    icon: <Users />,
    items: [{ title: 'All Users', url: 'admin/users' }],
  },

  {
    title: 'Settings',
    url: '#',
    icon: <Settings />,
    items: [{ title: 'Settings', url: 'admin/settings' },
             {title: 'Notification', url: 'admin/settings/notification' }
    ],
  },
  {
    title: 'Complaints',
    url: 'admin/complaints',
    icon: <MessageSquareWarning />,
    items: [],
  },
];

const sellerNav = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <Home />,
    items: [],
  },
  {
    title: 'Products',
    url: '#',
    icon: <Package />,
    items: [
      { title: 'Add Product', url: 'products/add' },
      { title: 'View Products', url: 'products/view' },
      { title: 'Product Reviews', url: 'products/reviews' },
      { title: 'Inventory', url: 'products/inventory' },
    ],
  },
  {
    title: 'Orders',
    url: '#',
    icon: <ShoppingBag />,
    items: [{ title: 'All Orders', url: '/orders' }],
  },
  {
    title: 'Store Profile',
    url: '/store',
    icon: <ShoppingCart />,
    items: [{ title: 'Create Store', url: 'admin/stores/profile' }],
  },
  {
    title: 'Sales',
    url: '#',
    icon: <DollarSign />,
    items: [
      { title: 'Transaction History', url: 'sales/transactions' },
      { title: 'Payouts', url: 'sales/payouts' },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icon: <Settings />,
    items: [
      { title: 'Account Settings', url: 'settings/account' },
      { title: 'Notifications', url: 'settings/notifications' },
    ],
  }
];

class DashBoardLayout extends React.Component {
  render() {
    const role = 'admin';
    const currentNav = role === 'seller' ? adminNav : sellerNav;
    return (
      <SidebarProvider>
        <AppSidebar adminNav={adminNav} sellerNav={sellerNav} />
        <SidebarInset className="flex flex-col w-full">
          <div className="flex flex-col min-h-screen">
            <header className="flex h-14 lg:h-16 items-center gap-2 px-4 lg:px-6 border-b border-gray-200">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex-1">
                <Header />
              </div>
            </header>
            <main className="flex-1 bg-white">
              <div className="px-2 sm:px-0">
                <Breadcrumbs nav={currentNav} />
              </div>
              <div className="px-2 sm:px-0">
                <Outlet />
              </div>
            </main>
          </div>
        </SidebarInset>
        <ScrollToTop variant="rocket" />
      </SidebarProvider>
    );
  }
}

export default DashBoardLayout;
