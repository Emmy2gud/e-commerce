


const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};


export const NotificationItem = ({
  n,
  onOpen,
  onToggleRead,
  onPin,
}) => {
  const formatTime = (date) => {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d`;
  return date.toLocaleDateString();
};
  return (
    <div
      className={cn(
        "group relative flex items-start gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl transition-all duration-200 cursor-pointer",
        "hover:bg-slate-50 border border-transparent hover:border-slate-200",
        n.unread ? "bg-blue-50/50 border-blue-100" : "bg-white"
      )}
      onClick={onOpen}
    >
  
      <div className={cn(
        "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 mt-2 sm:mt-1",
        n.unread ? "bg-blue-500" : "bg-transparent"
      )} />
      
      {/* Avatar or Icon */}
      <div className="flex-shrink-0">
        {n.actor?.avatar ? (
          <img
            src={n.actor.avatar}
            alt={n.actor.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-white shadow-sm"
          />
        ) : (
          <div className={cn(
            "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium",
            n.type === 'order' && "bg-emerald-500",
            n.type === 'message' && "bg-blue-500",
            n.type === 'payout' && "bg-violet-500",
            n.type === 'dispute' && "bg-rose-500",
            n.type === 'stock' && "bg-amber-500",
            n.type === 'review' && "bg-pink-500",
            n.type === 'promotion' && "bg-cyan-500"
          )}>
            {n.type === 'order' && '🛒'}
            {n.type === 'message' && '💬'}
            {n.type === 'payout' && '💰'}
            {n.type === 'dispute' && '⚠️'}
            {n.type === 'stock' && '📦'}
            {n.type === 'review' && '⭐'}
            {n.type === 'promotion' && '✨'}
          </div>
        )}
      </div>

    
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
          <h4 className={cn(
            "text-sm font-medium overflow-hidden sm:truncate pr-0 sm:pr-2",
            "line-clamp-2 sm:line-clamp-1",
            n.unread ? "text-slate-900" : "text-slate-700"
          )}>
            {n.title}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0 self-start">
            <span className="text-xs text-slate-500 whitespace-nowrap">
              {formatTime(n.date)}
            </span>
            {n.pinned && (
              <div className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500">📌</div>
            )}
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-600 mt-1 overflow-hidden line-clamp-2 sm:line-clamp-1">
          {n.body}
        </p>
        
        <div className="flex items-center gap-1 sm:gap-2 mt-2 flex-wrap">
          <span className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
            {n.source}
          </span>
          {n.tags?.map((tag) => (
            <span key={tag} className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>

   
      <div className="hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onToggleRead}
          className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
          title={n.unread ? "Mark as read" : "Mark as unread"}
        >
          {n.unread ? '📧' : '📬'}
        </button>
        <button
          onClick={onPin}
          className={cn(
            "p-1.5 rounded-lg hover:bg-slate-200 transition-colors",
            n.pinned ? "text-amber-600" : "text-slate-500 hover:text-slate-700"
          )}
          title={n.pinned ? "Unpin" : "Pin"}
        >
          📌
        </button>
        <button
          className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
          title="Archive"
        >
          📁
        </button>
      </div>
      
      {/* Mobile action buttons */}
      <div className="sm:hidden flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onToggleRead}
          className="p-1 rounded text-xs text-slate-500 hover:text-slate-700 transition-colors"
          title={n.unread ? "Mark as read" : "Mark as unread"}
        >
          {n.unread ? '📧' : '📬'}
        </button>
        <button
          onClick={onPin}
          className={cn(
            "p-1 rounded text-xs transition-colors",
            n.pinned ? "text-amber-600" : "text-slate-500 hover:text-slate-700"
          )}
          title={n.pinned ? "Unpin" : "Pin"}
        >
          📌
        </button>
      </div>
    </div>
  );
};