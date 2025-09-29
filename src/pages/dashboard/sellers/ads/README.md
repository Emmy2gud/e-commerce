# Seller Ads Management System

## Overview
A comprehensive advertising management system for sellers to create, manage, and track their advertising campaigns across multiple platforms.

## Components

### 1. AdsDashboard.jsx (Main Entry Point)
- **Purpose**: Central hub for all advertising activities
- **Features**:
  - Overview dashboard with key metrics
  - Tabbed navigation to all ad sections
  - Quick action cards
  - Real-time performance stats

### 2. CreateAd.jsx 
- **Purpose**: Campaign creation interface
- **Features**:
  - Product selection from seller's inventory
  - Multi-platform targeting (Facebook, Instagram)
  - Ad creative customization
  - Budget and duration settings
  - Auto-run toggle for automatic publishing
  - Campaign summary and preview

### 3. ActiveAds.jsx
- **Purpose**: Monitor and manage running campaigns
- **Features**:
  - Real-time campaign performance table
  - Play/pause/stop campaign controls
  - Performance metrics (clicks, impressions, CTR)
  - Search and filter functionality
  - Quick action dropdown menus

### 4. AdHistory.jsx
- **Purpose**: Historical campaign analysis
- **Features**:
  - Complete campaign history table
  - ROI and revenue tracking
  - Sortable columns
  - Export functionality (CSV, PDF)
  - Performance insights and trends

## Key Features

### 🎯 **Product-Focused Workflow**
- Easy product selection with images and prices
- Auto-populated ad content from product data
- Customizable ad creatives

### 🚀 **Auto-Run Functionality**
- **Enabled**: Automatic publishing to selected platforms
- **Disabled**: Generate ad drafts for manual review

### 📊 **Comprehensive Analytics**
- Real-time performance tracking
- ROI calculation and revenue attribution
- Click-through rates and conversion metrics
- Historical performance comparisons

### 📱 **Platform Integration**
- Facebook advertising support
- Instagram advertising support
- Visual platform indicators

### 💰 **Budget Management**
- Daily budget controls
- Total budget calculation
- Spend tracking and alerts
- Cost per click/impression monitoring

## Data Structure

### Campaign Object
```javascript
{
  id: number,
  product: string,
  productImage: string,
  platforms: ['facebook', 'instagram'],
  status: 'running' | 'paused' | 'stopped' | 'completed',
  dailySpend: number,
  totalSpend: number,
  clicks: number,
  impressions: number,
  ctr: number,
  conversions: number,
  revenue: number,
  roi: number,
  startDate: string,
  endDate: string,
  duration: number,
  isActive: boolean
}
```

## Design Patterns

### 🎨 **UI Consistency**
- Follows project's card-based design
- Consistent color scheme (violet primary)
- Responsive grid layouts
- Mobile-optimized tables with horizontal scroll

### 🔧 **Component Reusability**
- Shared UI components from `/components/ui/`
- Consistent badge and status indicators
- Reusable table structures

### 📱 **Mobile Responsiveness**
- `sm:` breakpoint responsive design
- Horizontal scrolling for tables
- Stacked layouts on mobile
- Touch-friendly buttons and controls

## Integration Points

### Backend APIs (To Be Implemented)
- Product inventory retrieval
- Campaign creation and management
- Performance data fetching
- Platform API integrations (Facebook, Instagram)

### Database Schema Requirements
```sql
-- Campaigns table
campaigns (
  id, seller_id, product_id, platforms,
  status, daily_budget, total_budget,
  start_date, end_date, auto_run,
  created_at, updated_at
)

-- Campaign Performance table
campaign_performance (
  id, campaign_id, date, impressions,
  clicks, conversions, spend, revenue
)
```

## Usage Example

```javascript
import { AdsDashboard } from '@/pages/dashboard/sellers/ads';

// In your router/navigation
<Route path="/seller/ads" component={AdsDashboard} />
```

## Future Enhancements

1. **Advanced Targeting**
   - Demographic targeting
   - Interest-based targeting
   - Lookalike audiences

2. **Creative Tools**
   - Built-in image editor
   - Video ad support
   - Template library

3. **Analytics Enhancement**
   - A/B testing capabilities
   - Predictive analytics
   - Competitor analysis

4. **Automation**
   - Smart bidding strategies
   - Auto-optimization rules
   - Performance alerts

## File Structure
```
src/pages/dashboard/sellers/ads/
├── AdsDashboard.jsx     # Main dashboard with overview
├── CreateAd.jsx         # Campaign creation form
├── ActiveAds.jsx        # Active campaign management
├── AdHistory.jsx        # Historical campaign data
├── index.js             # Module exports
└── README.md            # This documentation
```

## Dependencies Used
- React hooks for state management
- Lucide React for icons
- Tailwind CSS for styling
- Radix UI components for accessibility
- Native HTML5 date inputs for calendar functionality

This ads management system provides sellers with a complete solution for managing their advertising campaigns, from creation to performance analysis, all within a modern, responsive interface.