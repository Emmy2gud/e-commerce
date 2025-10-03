import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MessageCircle,
  Star,
  Zap,
  Clock,
  Reply,
  Send,
  Filter,
  Search,
  MoreHorizontal,
  CheckCircle,
  RefreshCw,
  Package,
  TrendingUp,
  Users,
  Plus,
  Edit,
  Eye,
  X,
} from "lucide-react";

const CustomerInteractionHub = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [searchFilter, setSearchFilter] = useState("");
  const [currentMessagePage, setCurrentMessagePage] = useState(1);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [replyText, setReplyText] = useState("");
  const itemsPerPage = 3; // Show 3 items per page for better UX

  // Mock data for customer messages
  const customerMessages = [
    {
      id: 1,
      customer: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b73ff26b?w=150&h=150&fit=crop",
        verified: true,
      },
      subject: "Question about Wireless Headphones",
      message:
        "Hi! I'm interested in your wireless headphones. Can you tell me about the battery life and if they work with iPhone?",
      time: "5 min ago",
      status: "unread",
      priority: "normal",
      productId: "WH-001",
    },
    {
      id: 2,
      customer: {
        name: "Mike Chen",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        verified: false,
      },
      subject: "Order #12847 - Shipping Issue",
      message:
        "My order was supposed to arrive yesterday but I haven't received it yet. Can you help me track it?",
      time: "2 hours ago",
      status: "replied",
      priority: "high",
      orderId: "12847",
    },
    {
      id: 3,
      customer: {
        name: "Emma Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        verified: true,
      },
      subject: "Custom Order Inquiry",
      message:
        "I love your leather bags! Do you do custom colors? I'm looking for something in burgundy.",
      time: "1 day ago",
      status: "unread",
      priority: "normal",
      productId: "LB-045",
    },
  ];

  // Mock data for reviews
  const customerReviews = [
    {
      id: 1,
      customer: {
        name: "John Smith",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      rating: 5,
      review:
        "Amazing quality! The headphones arrived quickly and sound incredible. Highly recommend!",
      product: "Wireless Bluetooth Headphones",
      time: "3 hours ago",
      responded: false,
      helpful: 12,
    },
    {
      id: 2,
      customer: {
        name: "Lisa Wang",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      },
      rating: 4,
      review:
        "Great product overall. Only minor issue was the packaging could be better, but the item itself is perfect.",
      product: "Smart Watch Pro",
      time: "1 day ago",
      responded: true,
      helpful: 8,
    },
    {
      id: 3,
      customer: {
        name: "David Kim",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      },
      rating: 3,
      review:
        "Product is okay but took longer to ship than expected. Quality is decent for the price.",
      product: "Phone Case Premium",
      time: "2 days ago",
      responded: false,
      helpful: 3,
    },
  ];

  // Mock data for quick actions
  const quickActions = [
    {
      id: 1,
      title: "Add New Product",
      description: "Create a new product listing",
      icon: Plus,
      color: "bg-green-500",
      action: "add_product",
    },
    {
      id: 2,
      title: "Update Inventory",
      description: "Manage stock levels for existing products",
      icon: Package,
      color: "bg-blue-500",
      action: "update_inventory",
    },
    {
      id: 3,
      title: "Edit Store Profile",
      description: "Update store information and settings",
      icon: Edit,
      color: "bg-purple-500",
      action: "edit_profile",
    },
    {
      id: 4,
      title: "View Analytics",
      description: "Check detailed sales and performance reports",
      icon: TrendingUp,
      color: "bg-orange-500",
      action: "view_analytics",
    },
    {
      id: 5,
      title: "Customer Orders",
      description: "Manage pending and recent orders",
      icon: Eye,
      color: "bg-indigo-500",
      action: "manage_orders",
    },
    {
      id: 6,
      title: "Promote Products",
      description: "Create marketing campaigns for your items",
      icon: Star,
      color: "bg-yellow-500",
      action: "promote_products",
    },
  ];

  // Pagination logic
  const totalMessagePages = Math.ceil(customerMessages.length / itemsPerPage);
  const totalReviewPages = Math.ceil(customerReviews.length / itemsPerPage);

  const getCurrentMessages = () => {
    const startIndex = (currentMessagePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return customerMessages.slice(startIndex, endIndex);
  };

  const getCurrentReviews = () => {
    const startIndex = (currentReviewPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return customerReviews.slice(startIndex, endIndex);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800";
      case "replied":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "normal":
        return "text-gray-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  // Modal handlers
  const handleReplyClick = (item, type) => {
    setSelectedItem({ ...item, type });
    setIsReplyModalOpen(true);
  };

  const handleModalClose = () => {
    setIsReplyModalOpen(false);
    setSelectedItem(null);
    setReplyText("");
  };

  const handleSendReply = () => {
   
    console.log(`Sending reply to ${selectedItem?.type}:`, {
      itemId: selectedItem?.id,
      replyText,
      customerName: selectedItem?.customer?.name || selectedItem?.customer,
    });

    // Close modal and reset
    handleModalClose();

    // Show success message (you could use a toast here)
    alert("Reply sent successfully!");
  };

  return (
    <Card className="w-full  border-0 bg-gray-50">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Users className="w-5 h-5 mr-2 text-purple-600 shrink-0" />
            <span className="truncate">Customer Interaction Hub</span>
          </CardTitle>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10 w-full sm:w-48 h-8 text-sm"
              />
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <Filter className="w-4 h-4 mr-1 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white" />
              <span className="text-sm">Filter</span>
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-white h-auto min-h-[3rem] overflow-x-auto">
            <TabsTrigger
              value="messages"
              className="flex items-center justify-center space-x-1 px-2 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">Messages</span>
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-800 text-xs px-1 py-0 ml-1"
              >
                {
                  customerMessages.filter((msg) => msg.status === "unread")
                    .length
                }
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex items-center justify-center space-x-1 px-2 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">Reviews</span>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 text-xs px-1 py-0 ml-1"
              >
                {customerReviews.filter((review) => !review.responded).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="actions"
              className="flex items-center justify-center space-x-1 px-2 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">Actions</span>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 text-xs px-1 py-0 ml-1"
              >
                {quickActions.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <div className="space-y-3">
              {getCurrentMessages().map((message) => (
                <div
                  key={message.id}
                  className="p-3 sm:p-4 border-0 rounded-lg hover:bg-white transition-colors overflow-hidden"
                >
                  <div className=" sm:flex items-start justify-between gap-2 overflow-hidden">
                    <div className=" items-start space-x-2 sm:space-x-3 flex-1 min-w-0 overflow-hidden">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                        <AvatarImage src={message.customer.avatar} />
                        <AvatarFallback className="text-xs">
                          {message.customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0 overflow-hidden">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 overflow-hidden">
                          <span className="font-medium text-sm sm:text-base text-gray-900 truncate max-w-[120px] sm:max-w-[200px]">
                            {message.customer.name}
                          </span>
                          {message.customer.verified && (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800 text-xs px-1 py-0 shrink-0"
                            >
                              <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                              <span className="hidden sm:inline">Verified</span>
                              <span className="sm:hidden">✓</span>
                            </Badge>
                          )}
                          <Badge
                            className={`${getStatusColor(
                              message.status
                            )} text-xs px-1 py-0 shrink-0`}
                          >
                            {message.status}
                          </Badge>
                        </div>

                        <div className="flex-1 overflow-hidden ">
                          <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-1 sm:mb-2 break-words">
                            {message.subject}
                          </h4>

                          <p className="text-xs sm:text-sm text-gray-600 mb-2 break-words whitespace-pre-line w-full">
                            {message.message}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs text-gray-500 overflow-hidden">
                          <div className="flex items-center shrink-0">
                            <Clock className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            <span className="truncate">{message.time}</span>
                          </div>
                          {message.productId && (
                            <div className="flex items-center shrink-0">
                              <Package className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                              <span className="hidden sm:inline truncate">
                                Product: {message.productId}
                              </span>
                              <span className="sm:hidden truncate">
                                {message.productId}
                              </span>
                            </div>
                          )}
                          <span
                            className={`font-medium ${getPriorityColor(
                              message.priority
                            )} hidden sm:inline shrink-0`}
                          >
                            {message.priority} priority
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-1 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-2 sm:px-4 w-full sm:w-auto mt-2 sm:mt-0"
                        onClick={() => handleReplyClick(message, "message")}
                      >
                        <Reply className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="text-xs sm:text-sm">Reply</span>
                      </Button>
                      {/* <Button
                        variant="ghost"
                        size="sm"
                        className="px-1 sm:px-2 w-full sm:w-auto"
                      >
                        <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Messages Pagination */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-300 gap-2">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {(currentMessagePage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(
                  currentMessagePage * itemsPerPage,
                  customerMessages.length
                )}{" "}
                of {customerMessages.length} messages
              </p>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentMessagePage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentMessagePage === 1}
                  className="px-2 sm:px-3 text-xs sm:text-sm"
                >
                  Previous
                </Button>
                <span className="text-xs sm:text-sm text-gray-600 px-2">
                  {currentMessagePage}/{totalMessagePages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentMessagePage((prev) =>
                      Math.min(prev + 1, totalMessagePages)
                    )
                  }
                  disabled={currentMessagePage === totalMessagePages}
                  className="px-2 sm:px-3 text-xs sm:text-sm"
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-4">
            <div className="space-y-3">
              {getCurrentReviews().map((review) => (
                <div
                  key={review.id}
                  className="p-3 sm:p-4 bg-gray-50 hover:bg-white border-0 rounded-lg hover:transition-colors overflow-hidden"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3 overflow-hidden">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                      <AvatarImage src={review.customer.avatar} />
                      <AvatarFallback className="text-xs">
                        {review.customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-2">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 min-w-0">
                          <span className="font-medium text-sm sm:text-base text-gray-900 truncate max-w-[120px] sm:max-w-[200px]">
                            {review.customer.name}
                          </span>
                          <div className="flex items-center shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {review.time}
                          </span>
                        </div>

                        <Badge
                          className={`${
                            review.responded
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          } text-xs px-2 py-1 shrink-0`}
                        >
                          {review.responded ? "Responded" : "Needs Response"}
                        </Badge>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 mb-2 break-words overflow-hidden">
                        {review.review}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500 min-w-0">
                          <span className="truncate">
                            Product: {review.product}
                          </span>
                          <span className="shrink-0">
                            {review.helpful} found helpful
                          </span>
                        </div>

                        {!review.responded && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReplyClick(review, "review")}
                            className="px-2 sm:px-4 w-full sm:w-auto shrink-0 bg-violet-600 text-white"
                          >
                            <Reply className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="text-xs sm:text-sm">Respond</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews Pagination */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-300 gap-2">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {(currentReviewPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(
                  currentReviewPage * itemsPerPage,
                  customerReviews.length
                )}{" "}
                of {customerReviews.length} reviews
              </p>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentReviewPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentReviewPage === 1}
                  className="px-2 sm:px-3 text-xs sm:text-sm "
                >
                  Previous
                </Button>
                <span className="text-xs sm:text-sm text-gray-600 px-2">
                  {currentReviewPage}/{totalReviewPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentReviewPage((prev) =>
                      Math.min(prev + 1, totalReviewPages)
                    )
                  }
                  disabled={currentReviewPage === totalReviewPages}
                  className="px-2 sm:px-3 text-xs sm:text-sm"
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Quick Actions Tab */}
          <TabsContent value="actions" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {quickActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <div
                    key={action.id}
                    className="p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group overflow-hidden"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm sm:text-base text-gray-900 mb-1 truncate">
                          {action.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 break-words">
                          {action.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs sm:text-sm"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg border border-blue-100 overflow-hidden">
              <h4 className="font-medium text-sm sm:text-base text-gray-900 mb-2 flex items-center">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600 shrink-0" />
                <span className="truncate">Pro Tip</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 break-words">
                Complete these actions regularly to maintain a healthy store
                performance and keep customers engaged.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-300">
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg border-0 shadow-lg">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">
              {customerMessages.filter((msg) => msg.status === "unread").length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 truncate">
              Unread Messages
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg border-0 shadow-lg">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {customerReviews.filter((review) => !review.responded).length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 truncate">
              Pending Reviews
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg border-0 shadow-lg">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">
              {quickActions.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 truncate">
              Available Actions
            </div>
          </div>
        </div>
      </CardContent>

      {/* Reply Modal */}
      <Dialog open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
        <DialogContent className="sm:max-w-[500px] max-w-[95vw] bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {selectedItem?.type === "message" ? (
                <MessageCircle className="w-5 h-5 text-violet-600" />
              ) : (
                <Star className="w-5 h-5 text-yellow-500" />
              )}
              <span>
                Reply to{" "}
                {selectedItem?.customer?.name || selectedItem?.customer}
              </span>
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              {selectedItem?.type === "message"
                ? `Replying to message: "${selectedItem?.subject}"`
                : `Responding to review about: "${selectedItem?.product}"`}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Original content preview */}
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-violet-600">
              <p className="text-sm text-gray-700 font-medium mb-1">
                {selectedItem?.type === "message"
                  ? "Original Message:"
                  : "Original Review:"}
              </p>
              <p className="text-sm text-gray-600">
                {selectedItem?.message || selectedItem?.review}
              </p>
              {selectedItem?.rating && (
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < selectedItem.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">
                    ({selectedItem.rating}/5)
                  </span>
                </div>
              )}
            </div>

            {/* Reply textarea */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Your Reply
              </label>
              <Textarea
                placeholder={`Write your ${
                  selectedItem?.type === "message" ? "reply" : "response"
                } here...`}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[120px] resize-none border-gray-300"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleModalClose}
              className="w-full sm:w-auto border-violet-600 text-violet-600"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleSendReply}
              disabled={!replyText.trim()}
              className="w-full sm:w-auto text-white bg-violet-600 hover:bg-violet-700"
            >
              <Send className="w-4 h-4 mr-2" />
              Send {selectedItem?.type === "message" ? "Reply" : "Response"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CustomerInteractionHub;
