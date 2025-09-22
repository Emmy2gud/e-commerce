import { useState} from "react";
import { Header } from "../../../../components/dashboard/notifications/Header";
import { NotificationItem } from "../../../../components/dashboard/notifications/NotificationItem";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AVATARS = [
  "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
];


const todayNotifications = [
  {
    id: "n1",
    type: "order",
    title: "New order #1243 from Jane Doe",
    body: "2 items · $89.90 · Standard shipping",
    source: "Orders",
    actor: { name: "Jane Doe", avatar: AVATARS[2] },
    date: new Date(Date.now() - 3 * 60 * 1000), 
    unread: true,
    pinned: false,
    tags: ["New"],
  },
  {
    id: "n2",
    type: "message",
    title: "New message from Carlos",
    body: "Hi, can you confirm the estimated delivery date for order #1241?",
    source: "Messages",
    actor: { name: "Carlos Ruiz", avatar: AVATARS[1] },
    date: new Date(Date.now() - 2 * 3600 * 1000), 
    unread: true,
    pinned: false,
    tags: ["Urgent"],
  },
  {
    id: "n3",
    type: "payout",
    title: "Weekly payout processed",
    body: "$1,240.50 sent to your bank account ending in 1023",
    source: "Finance",
    actor: null,
    date: new Date(Date.now() - 8 * 3600 * 1000), 
    unread: false,
    pinned: false,
    tags: ["Weekly"],
  },
];

const yesterdayNotifications = [
  {
    id: "n4",
    type: "dispute",
    title: "Dispute opened for order #1239",
    body: "Customer reports item not as described. Please respond within 48 hours.",
    source: "Support",
    actor: null,
    date: new Date(Date.now() - 22 * 3600 * 1000),
    unread: true,
    pinned: true,
    tags: ["High Priority"],
  },
  {
    id: "n5",
    type: "stock",
    title: "Low stock alert",
    body: "Vintage Hoodie (S, M) has only 3 units remaining. Consider restocking.",
    source: "Inventory",
    actor: null,
    date: new Date(Date.now() - 25 * 3600 * 1000), 
    unread: false,
    pinned: false,
    tags: ["Inventory"],
  },
];

const earlierNotifications = [
  {
    id: "n6",
    type: "review",
    title: "New 5-star review received",
    body: "Ana left a positive review: Great quality and fast shipping!",
    source: "Reviews",
    actor: { name: "Ana", avatar: AVATARS[0] },
    date: new Date(Date.now() - 3 * 86400 * 1000), 
    unread: false,
    pinned: false,
    tags: ["5 Stars"],
  },
  {
    id: "n7",
    type: "promotion",
    title: "Marketing tip",
    body: "Boost your weekend sales by applying a 10% discount to your bestsellers.",
    source: "Marketing",
    actor: null,
    date: new Date(Date.now() - 4 * 86400 * 1000), 
    unread: false,
    pinned: false,
    tags: ["Tips"],
  },
];

const SellerNotification = () => {
  const [todayItems, setTodayItems] = useState(todayNotifications);
  const [yesterdayItems, setYesterdayItems] = useState(yesterdayNotifications);
  const [earlierItems, setEarlierItems] = useState(earlierNotifications);

  const onItemChange = (id, patch, section) => {
    if (section === 'today') {
      setTodayItems(prev => prev.map(n => n.id === id ? { ...n, ...patch } : n));
    } else if (section === 'yesterday') {
      setYesterdayItems(prev => prev.map(n => n.id === id ? { ...n, ...patch } : n));
    } else if (section === 'earlier') {
      setEarlierItems(prev => prev.map(n => n.id === id ? { ...n, ...patch } : n));
    }
  };

  const markAllAsRead = () => {
    setTodayItems(prev => prev.map(n => ({ ...n, unread: false })));
    setYesterdayItems(prev => prev.map(n => ({ ...n, unread: false })));
    setEarlierItems(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const getAllItems = () => [...todayItems, ...yesterdayItems, ...earlierItems];
  const getFilteredItems = (type) => {
    const allItems = getAllItems();
    if (type === 'stock') {
      return allItems.filter(item => item.type === 'stock' || item.type === 'promotion');
    }
    return allItems.filter(item => item.type === type);
  };

  const filterItemsBySection = (items, type) => {
    if (type === 'stock') {
      return items.filter(item => item.type === 'stock' || item.type === 'promotion');
    }
    return items.filter(item => item.type === type);
  };

  const renderNotificationSection = (items, sectionName, sectionType = null) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 px-1">
          {sectionName}
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {items.map((item, index) => (
            <div key={item.id}>
              <NotificationItem
                n={item}
                onOpen={() => onItemChange(item.id, { unread: false }, sectionType)}
                onToggleRead={() => onItemChange(item.id, { unread: !item.unread }, sectionType)}
                onPin={() => onItemChange(item.id, { pinned: !item.pinned }, sectionType)}
              />
              {index < items.length - 1 && (
                <div className="border-t border-slate-100 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAllNotifications = () => {
    const hasNotifications = todayItems.length > 0 || yesterdayItems.length > 0 || earlierItems.length > 0;

    if (!hasNotifications) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 text-slate-400">📭</div>
          </div>
          <h3 className="text-slate-900 font-medium mb-1">No notifications</h3>
          <p className="text-slate-500 text-sm">
            You're all caught up! Check back later for updates.
          </p>
        </div>
      );
    }

    return (
      <div>
        {renderNotificationSection(todayItems, "Today", "today")}
        {renderNotificationSection(yesterdayItems, "Yesterday", "yesterday")}
        {renderNotificationSection(earlierItems, "Earlier", "earlier")}
      </div>
    );
  };

  const renderFilteredNotifications = (type, title) => {
    const todayFiltered = filterItemsBySection(todayItems, type);
    const yesterdayFiltered = filterItemsBySection(yesterdayItems, type);
    const earlierFiltered = filterItemsBySection(earlierItems, type);
    
    const hasNotifications = todayFiltered.length > 0 || yesterdayFiltered.length > 0 || earlierFiltered.length > 0;

    if (!hasNotifications) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 text-slate-400">📭</div>
          </div>
          <h3 className="text-slate-900 font-medium mb-1">No {title.toLowerCase()}</h3>
          <p className="text-slate-500 text-sm">
            You're all caught up! Check back later for updates.
          </p>
        </div>
      );
    }

    return (
      <div>
        {renderNotificationSection(todayFiltered, "Today", "today")}
        {renderNotificationSection(yesterdayFiltered, "Yesterday", "yesterday")}
        {renderNotificationSection(earlierFiltered, "Earlier", "earlier")}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full h-13 grid-cols-6 bg-slate-100 mb-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="order">Orders</TabsTrigger>
            <TabsTrigger value="payout">Payouts</TabsTrigger>
            <TabsTrigger value="dispute">Complaints</TabsTrigger>
            <TabsTrigger value="message">Messages</TabsTrigger>
            <TabsTrigger value="stock">System</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">All Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getAllItems().length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getAllItems().some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderAllNotifications()}
            </div>
          </TabsContent>

          <TabsContent value="order">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">Orders Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getFilteredItems('order').length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getFilteredItems('order').some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderFilteredNotifications('order', 'Orders Notifications')}
            </div>
          </TabsContent>

          <TabsContent value="payout">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">Payouts Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getFilteredItems('payout').length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getFilteredItems('payout').some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderFilteredNotifications('payout', 'Payouts Notifications')}
            </div>
          </TabsContent>

          <TabsContent value="dispute">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">Complaints Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getFilteredItems('dispute').length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getFilteredItems('dispute').some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderFilteredNotifications('dispute', 'Complaints Notifications')}
            </div>
          </TabsContent>

          <TabsContent value="message">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">Messages Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getFilteredItems('message').length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getFilteredItems('message').some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderFilteredNotifications('message', 'Messages Notifications')}
            </div>
          </TabsContent>

          <TabsContent value="stock">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-slate-900">System Notifications</h2>
                  <Badge variant="outline" className="text-sm border-0 bg-violet-600 text-white">
                    {getFilteredItems('stock').length} total
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={!getFilteredItems('stock').some(item => item.unread)}
                  className='border-1 border-violet-600 hover:bg-violet-600 hover:text-white'
                >
                  Mark all read
                </Button>
              </div>
              {renderFilteredNotifications('stock', 'System Notifications')}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};



export default SellerNotification;