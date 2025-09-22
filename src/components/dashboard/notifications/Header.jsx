import { cn } from "@/lib/utils"


export const Header = ({ unreadCount, activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', label: 'All', count: null },
    { id: 'order', label: 'Orders', count: null },
    { id: 'payout', label: 'Payouts', count: null },
    { id: 'dispute', label: 'Complaints', count: null },
    { id: 'message', label: 'Messages', count: null },
    { id: 'stock', label: 'System', count: null },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4">


        {/* Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
