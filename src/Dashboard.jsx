import { useEffect } from "react";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { LogOutIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const staticTabs = [
  { value: "news-list", label: "News List" },
  { value: "create-news", label: "Create News" },
];

export default function Dashboard() {
  const { user, loading, error, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.split("/").pop();

  // Dynamically create tabs based on the current route
  const tabs = [...staticTabs];
  if (currentTab === "edit-news") {
    tabs.push({ value: "edit-news", label: "Edit News" });
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.log("Loading timeout reached, redirecting to login");
        navigate("/Admin");
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeoutId);
  }, [loading, navigate]);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/Admin");
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/Admin");
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <Button onClick={() => navigate("/Admin")}>Go to Login</Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Loader2 className="h-8 w-8 animate-spin" />
        <div className="text-lg">Loading your dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between w-full gap-4 border-b px-6">
        <h3 className="uppercase">Alder investment - Dashboard</h3>
        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center border rounded-lg border-[#545454]/30 px-2 py-1 gap-1">
            <Avatar className="h-7 w-7">
              <AvatarFallback>
                {user.username
                  ? user.username.substring(0, 2).toUpperCase()
                  : "T"}
              </AvatarFallback>
            </Avatar>
            <span>{user.email}</span>
          </div>

          <Button
            variant="outline"
            className="shadow-none border-[#545454]/30 px-3 py-1"
            onClick={handleLogout}
          >
            <LogOutIcon />
          </Button>
        </div>
      </header>

      <div className="flex-1">
        <nav className="h-auto gap-2 rounded-none border-b w-full flex items-start justify-start border-border bg-transparent px-6 py-1">
          {tabs.map((tab) => (
            <Link
              key={tab.value}
              to={`/dashboard/${tab.value}`}
              className={cn(
                "relative px-3 py-2 text-sm font-medium after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground rounded-md",
                currentTab === tab.value ||
                  (currentTab.startsWith(tab.value) &&
                    tab.value !== "news-list")
                  ? "bg-accent text-accent-foreground shadow-none after:bg-primary hover:bg-accent hover:text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 px-6 mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
