


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
        "group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer",
        "hover:bg-slate-50 border border-transparent hover:border-slate-200",
        n.unread ? "bg-blue-50/50 border-blue-100" : "bg-white"
      )}
      onClick={onOpen}
    >
  
      <div className={cn(
        "w-2 h-2 rounded-full flex-shrink-0",
        n.unread ? "bg-blue-500" : "bg-transparent"
      )} />
      
      {/* Avatar or Icon */}
      <div className="flex-shrink-0">
        {n.actor?.avatar ? (
          <img
            src={n.actor.avatar}
            alt={n.actor.name}
            className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
          />
        ) : (
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium",
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
        <div className="flex items-center justify-between">
          <h4 className={cn(
            "text-sm font-medium truncate pr-2",
            n.unread ? "text-slate-900" : "text-slate-700"
          )}>
            {n.title}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-slate-500">
              {formatTime(n.date)}
            </span>
            {n.pinned && (
              <div className="w-4 h-4 text-amber-500">📌</div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-slate-600 mt-0.5 truncate">
          {n.body}
        </p>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {n.source}
          </span>
          {n.tags?.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

   
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
};