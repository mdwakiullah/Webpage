'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface TabItem {
  id: string
  label: string
  count?: number
}

interface TabNavigationProps {
  className?: string
  tabs: TabItem[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

export function TabNavigation({ 
  className, 
  tabs, 
  activeTab, 
  onTabChange 
}: TabNavigationProps) {
  const [currentTab, setCurrentTab] = useState(activeTab || tabs[0]?.id)

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className={cn("border-b bg-background", className)}>
      <div className="flex items-center overflow-x-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={cn(
              "relative rounded-none border-b-2 border-transparent px-6 py-3 font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              currentTab === tab.id && [
                "border-primary text-primary",
                "bg-accent/50"
              ]
            )}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className={cn(
                "ml-2 rounded-full px-2 py-1 text-xs",
                currentTab === tab.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {tab.count}
              </span>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}