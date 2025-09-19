'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Hash, Users, MoreVertical, Star, Bell } from "lucide-react"

interface ChatHeaderProps {
  className?: string
  channelName?: string
  memberCount?: number
  isStarred?: boolean
  onToggleStar?: () => void
  onToggleNotifications?: () => void
}

export function ChatHeader({ 
  className,
  channelName = "General",
  memberCount = 124,
  isStarred = false,
  onToggleStar,
  onToggleNotifications
}: ChatHeaderProps) {
  return (
    <div className={cn(
      "flex h-16 items-center justify-between border-b bg-background px-4",
      className
    )}>
      {/* Left side - Channel info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Hash className="h-5 w-5 text-muted-foreground" />
          <h1 className="text-lg font-semibold">{channelName}</h1>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span className="text-sm">{memberCount}</span>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onToggleStar}
        >
          <Star 
            className={cn(
              "h-4 w-4",
              isStarred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
            )} 
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onToggleNotifications}
        >
          <Bell className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}