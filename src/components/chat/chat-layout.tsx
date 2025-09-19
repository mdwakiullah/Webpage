'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChatSidebar } from "./chat-sidebar"
import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"
import { TabNavigation } from "./tab-navigation"
import { Menu, X } from "lucide-react"

interface ChatLayoutProps {
  className?: string
}

const tabs = [
  { id: 'all', label: 'All', count: 24 },
  { id: 'mentions', label: 'Mentions', count: 3 },
  { id: 'threads', label: 'Threads', count: 7 },
  { id: 'drafts', label: 'Drafts', count: 1 }
]

export function ChatLayout({ className }: ChatLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [isStarred, setIsStarred] = useState(false)

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message)
    // Here you would implement the actual message sending logic
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen)
  }

  return (
    <div className={cn("flex h-screen bg-background", className)}>
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto",
        "lg:translate-x-0 transition-transform duration-300 ease-in-out",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <ChatSidebar 
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
      </div>

      {/* Main chat area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile header with menu button */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileSidebar}
          >
            {mobileSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <h1 className="font-semibold">Chat</h1>
          <div className="w-10" /> {/* Spacer for balance */}
        </div>

        {/* Desktop sidebar toggle button */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between p-2 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-8 w-8"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Chat header */}
        <ChatHeader
          channelName="General"
          memberCount={124}
          isStarred={isStarred}
          onToggleStar={() => setIsStarred(!isStarred)}
          onToggleNotifications={() => console.log('Toggle notifications')}
        />

        {/* Tab navigation */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Message list */}
        <MessageList className="flex-1" />

        {/* Message input */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}