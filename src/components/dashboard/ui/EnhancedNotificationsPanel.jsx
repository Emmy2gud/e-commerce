import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  MessageCircle, 
  Star, 
  Package, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  X,
  Settings,
  CheckCheck
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EnhancedNotificationsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      title: 'New Customer Message',
      description: 'Sarah Johnson asked about your Wireless Headphones',
      time: '2 min ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b73ff26b?w=150&h=150&fit=crop',
      priority: 'normal'
    },
    {
      id: 2,
      type: 'review',
      title: 'New 5-Star Review',
      description: 'Mike Chen left a review for Smart Watch Pro',
      time: '15 min ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      priority: 'normal'
    },
    {
      id: 3,
      type: 'order',
      title: 'New Order Received',
      description: 'Order #12858 for $234.50 from Emma Davis',
      time: '1 hour ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      priority: 'high'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Received',
      description: '$1,240.00 deposited to your account',
      time: '3 hours ago',
      read: true,
      priority: 'normal'
    },
    {
      id: 5,
      type: 'alert',
      title: 'Low Stock Alert',
      description: 'Smart Watch Pro is running low (3 items left)',
      time: '5 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 6,
      type: 'analytics',
      title: 'Weekly Sales Report',
      description: 'Your sales increased by 23% this week',
      time: '1 day ago',
      read: true,
      priority: 'normal'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type) => {
    switch (type) {
      case 'message': return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'review': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'order': return <Package className="w-4 h-4 text-green-500" />;
      case 'payment': return <DollarSign className="w-4 h-4 text-emerald-500" />;
      case 'alert': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'analytics': return <TrendingUp className="w-4 h-4 text-purple-500" />;
      default: return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          size="sm" 
          className="relative text-black hover:bg-violet-500 hover:text-white transition-all duration-200"
        >
          <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-violet-600 text-white rounded-full animate-pulse">
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 sm:w-96 p-0 border-0 shadow-xl" align="end">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Bell className="w-5 h-5 mr-2 text-purple-600" />
                Notifications
                {unreadCount > 0 && (
                  <Badge className="ml-2 bg-purple-100 text-purple-800">
                    {unreadCount} new
                  </Badge>
                )}
              </CardTitle>
              <div className="flex items-center space-x-1">
                {unreadCount > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={markAllAsRead}
                    className="text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                  >
                    <CheckCheck className="w-4 h-4 mr-1" />
                    Mark all read
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="p-1">
                  <Settings className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-sm">No notifications</p>
                <p className="text-xs text-gray-400">You're all caught up!</p>
              </div>
            ) : (
              <div className="space-y-0">
                {notifications.map((notification, index) => (
                  <div key={notification.id}>
                    <div 
                      className={`flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer group relative ${
                        !notification.read ? 'bg-blue-50/50 border-l-4 border-l-blue-500' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      {/* Notification Icon or Avatar */}
                      <div className="flex-shrink-0 pt-1">
                        {notification.avatar ? (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback className="text-xs">
                              {notification.title.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            {getIcon(notification.type)}
                          </div>
                        )}
                      </div>
                      
                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium text-gray-900 truncate ${
                              !notification.read ? 'font-semibold' : ''
                            }`}>
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {notification.description}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {notification.time}
                              </div>
                              {notification.priority === 'high' && (
                                <Badge variant="destructive" className="text-xs py-0 px-1.5">
                                  High Priority
                                </Badge>
                              )}
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                          </div>
                          
                          {/* Remove button */}
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                          >
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    {index < notifications.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          
          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-4 border-t border-gray-300 bg-gray-50">
              <Button 
                variant="ghost" 
                className="w-full text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                View All Notifications
              </Button>
            </div>
          )}
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default EnhancedNotificationsPanel;