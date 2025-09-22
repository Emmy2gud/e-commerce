import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

function findBreadcrumbTrail(nav, pathname, trail = []){
  if (!nav || !Array.isArray(nav)) return null;
  
  for (const item of nav) {
    const newTrail = [...trail, item];
    
    if (item.url && item.url !== "#") {
      const itemUrl = item.url.startsWith('/') ? item.url : `/${item.url}`;
      
      if (itemUrl === pathname) {
        return newTrail;
      }
      
      if (!item.url.startsWith('/') && pathname.endsWith(`/${item.url}`)) {
        return newTrail;
      }
    }

if (item.items) {
  const found = findBreadcrumbTrail(item.items, pathname, newTrail);
  if (found) return found;
}

  }
  return null;
}

export function Breadcrumbs({ nav }) {
  const location = useLocation(); 
  const trail = findBreadcrumbTrail(nav, location.pathname);

  if (!trail || !Array.isArray(trail)) {
    return null;
  }

  return (
    <div className="px-3 sm:px-6 py-2 sm:py-3">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center space-x-1 text-sm sm:text-base">
          {trail.map((item, i) => (
            <div key={item.url || i} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link 
                    to={item.url || "#"}
                    className={`flex items-center gap-1 px-1 sm:px-2 py-1 rounded-lg transition-all duration-200 ${
                      i === 0 
                        ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50' 
                        : i === trail.length - 1 
                          ? 'text-purple-600 font-normal bg-purple-100 pointer-events-none' 
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {i === 0 && <Home size={14} className="w-4 h-4 sm:w-5 sm:h-5"/>}
                    <span className="text-xs sm:text-sm">{item.title}</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
              {i < trail.length - 1 && (
                <BreadcrumbSeparator className="mx-1">
                  <ChevronRight size={14} className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                </BreadcrumbSeparator>
              )}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}