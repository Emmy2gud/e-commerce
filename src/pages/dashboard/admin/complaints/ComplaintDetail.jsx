import React, { useState } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Clock, 
  AlertCircle, 
  Send,
  MessageSquare,
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const ComplaintDetail = () => {
  const [replyMessage, setReplyMessage] = useState("");
  const [replySubject, setReplySubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const complaintData = {
    id: "#45542",
    title: "Order Not Delivered",
    description: "I placed an order 5 days ago and it still hasn't arrived. The tracking shows it was delivered but I never received it. This is very frustrating as I needed the items for an important event. I've tried contacting customer service multiple times but haven't received any helpful response.",
    status: "Pending",
    priority: "High",
    category: "Delivery Issue",
    createdAt: "Sep 15, 2023 at 2:30 PM",
    updatedAt: "Sep 16, 2023 at 10:15 AM",
    customer: {
      name: "Olivia Garcia",
      email: "olivia.garcia@email.com",
      phone: "+1 (555) 123-4567",
      avatar: "/placeholder-avatar.jpg"
    },
    orderDetails: {
      orderId: "#ORD-12345",
      orderDate: "Sep 10, 2023",
      totalAmount: "$127.50",
      items: 3
    },
    timeline: [
      {
        date: "Sep 15, 2023 at 2:30 PM",
        action: "Complaint submitted",
        description: "Customer reported delivery issue"
      },
      {
        date: "Sep 15, 2023 at 3:45 PM",
        action: "Admin viewed complaint",
        description: "system-generated when admin opens it"
      },
      {
        date: "Sep 16, 2023 at 10:15 AM",
        action: "Admin replied",
        description: "Admin has already to User based on the compliants"
      },
      {
        date: "Sep 16, 2023 at 10:15 AM",
        action: "Complaint Resolved",
        description: "Complaint resolved."
      }
    ]
  };



  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    setIsSubmitting(true);
    
  
    await new Promise(resolve => setTimeout(resolve, 1500));
    

    console.log("Reply submitted:", {
      complaintId: complaintData.id,
      subject: replySubject,
      message: replyMessage
    });
    
    setReplyMessage("");
    setReplySubject("");
    setIsSubmitting(false);
    

    alert("Reply sent successfully!");
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'in progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'closed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
   
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="sm" className="hover:bg-violet-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Complaints
          </Button>
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complaint {complaintData.id}
            </h1>
            <p className="text-gray-600 text-lg">{complaintData.title}</p>
          </div>
          
          <div className="flex gap-3">
            <Badge className={getPriorityColor(complaintData.priority)}>
              <AlertTriangle className="h-3 w-3 mr-1" />
              {complaintData.priority} Priority
            </Badge>
            <Badge className={getStatusColor(complaintData.status)}>
              {complaintData.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-6">
   
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-violet-600" />
                Complaint Details
              </CardTitle>
              <CardDescription>Full description of the customer's issue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                  <Badge variant="outline" className="border-violet-200 text-violet-700">
                    {complaintData.category}
                  </Badge>
                </div>
                
                <div className="">
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <p className="text-gray-700 leading-relaxed ">{complaintData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Created: {complaintData.createdAt}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Updated: {complaintData.updatedAt}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

   
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-violet-600" />
                Activity Timeline
              </CardTitle>
              <CardDescription>Track the progress of this complaint</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complaintData.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-violet-600' : 'bg-gray-300'}`} />
                      {index < complaintData.timeline.length - 1 && (
                        <div className="w-px h-8 bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{item.action}</h4>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reply Form */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-violet-600" />
                Reply to Customer
              </CardTitle>
              <CardDescription>Send a response to resolve this complaint</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReplySubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Subject
                  </label>
                  <Input
                    placeholder="Re: Order Not Delivered - Resolution Update"
                    value={replySubject}
                    onChange={(e) => setReplySubject(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Dear Olivia,&#10;&#10;Thank you for bringing this to our attention. We have investigated your delivery concern and..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    rows={6}
                    className="border-gray-300 resize-none"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-gray-300"
                  >
                    Save Draft
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !replyMessage.trim()}
                    className="bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Reply
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Information */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-violet-600" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{complaintData.customer.name}</h4>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{complaintData.customer.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{complaintData.customer.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Information */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-violet-600" />
                Related Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Order ID</span>
                  <span className="text-sm font-medium text-gray-900">{complaintData.orderDetails.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Order Date</span>
                  <span className="text-sm font-medium text-gray-900">{complaintData.orderDetails.orderDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Amount</span>
                  <span className="text-sm font-medium text-gray-900">{complaintData.orderDetails.totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Items</span>
                  <span className="text-sm font-medium text-gray-900">{complaintData.orderDetails.items} items</span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4 border-violet-200 text-violet-700 hover:bg-violet-50">
                  View Full Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-violet-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-green-200 text-green-700 hover:bg-green-50"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark as Resolved
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Clock className="h-4 w-4 mr-2" />
                 Resolve Complaint
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-red-200 text-red-700 hover:bg-red-50"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Close Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetail;