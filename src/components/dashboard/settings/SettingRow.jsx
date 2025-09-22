export const SettingRow = ({ label, hint, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b-gray-300">
    <div className="sm:w-64">
      <div className="text-sm font-medium text-slate-700">{label}</div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
    </div>
    <div className="flex-1">{children}</div>
  </div>
);
