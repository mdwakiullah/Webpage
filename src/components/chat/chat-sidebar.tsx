'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MessageCircle, Settings, Plus, Search } from "lucide-react"

interface ChatSidebarProps {
  className?: string
  isCollapsed?: boolean
  onToggle?: () => void
}

interface ChatItem {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  isActive?: boolean
  hasUnread?: boolean
}

const mockChats: ChatItem[] = [
  {
    id: '1',
    name: 'General',
    lastMessage: 'Hey everyone! How\'s it going?',
    timestamp: '2m',
    isActive: true,
    hasUnread: false
  },
  {
    id: '2',
    name: 'Project Team',
    lastMessage: 'The new features look great!',
    timestamp: '15m',
    hasUnread: true
  },
  {
    id: '3',
    name: 'Design Discussion',
    lastMessage: 'I love the new color scheme',
    timestamp: '1h',
    hasUnread: false
  },
  {
    id: '4',
    name: 'Random',
    lastMessage: 'Anyone up for lunch?',
    timestamp: '3h',
    hasUnread: true
  }
]

export function ChatSidebar({ className, isCollapsed = false }: ChatSidebarProps) {
  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-background",
      isCollapsed ? "w-16" : "w-80",
      "transition-all duration-300 ease-in-out",
      className
    )}>
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <>
            <h2 className="text-lg font-semibold">Chats</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
        {isCollapsed && (
          <Button variant="ghost" size="icon" className="h-8 w-8 mx-auto">
            <MessageCircle className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {mockChats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center gap-3 p-3 hover:bg-accent cursor-pointer transition-colors",
              chat.isActive && "bg-accent",
              isCollapsed && "justify-center px-2"
            )}
          >
            <div className={cn(
              "h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium",
              "flex-shrink-0"
            )}>
              {chat.name.charAt(0)}
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
              </div>
            )}
            {!isCollapsed && chat.hasUnread && (
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <Button 
          variant="ghost" 
          size={isCollapsed ? "icon" : "default"}
          className={cn("w-full", isCollapsed && "h-10 w-10")}
        >
          <Settings className="h-4 w-4" />
          {!isCollapsed && <span className="ml-2">Settings</span>}
        </Button>
      </div>
    </div>
  )
}