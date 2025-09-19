'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Reply, Heart, MessageSquare } from "lucide-react"

interface Message {
  id: string
  user: {
    name: string
    avatar?: string
    color?: string
  }
  content: string
  timestamp: string
  reactions?: {
    emoji: string
    count: number
    reacted?: boolean
  }[]
  replies?: number
}

interface MessageListProps {
  className?: string
  messages?: Message[]
}

const mockMessages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Alice Johnson',
      color: 'bg-blue-500'
    },
    content: 'Hey everyone! How\'s the project coming along?',
    timestamp: '10:30 AM',
    reactions: [
      { emoji: '👍', count: 3, reacted: true },
      { emoji: '❤️', count: 1 }
    ],
    replies: 2
  },
  {
    id: '2',
    user: {
      name: 'Bob Smith',
      color: 'bg-green-500'
    },
    content: 'Great progress! I just finished the user authentication module. The login flow is now smooth and we have proper error handling.',
    timestamp: '10:32 AM'
  },
  {
    id: '3',
    user: {
      name: 'Carol Davis',
      color: 'bg-purple-500'
    },
    content: 'Awesome work Bob! I\'ve been working on the responsive design. The mobile layout looks much better now.',
    timestamp: '10:35 AM',
    reactions: [
      { emoji: '🎉', count: 2 },
      { emoji: '👏', count: 1 }
    ]
  },
  {
    id: '4',
    user: {
      name: 'David Wilson',
      color: 'bg-orange-500'
    },
    content: 'I love the new design! Can we schedule a quick meeting to discuss the next sprint?',
    timestamp: '10:40 AM'
  },
  {
    id: '5',
    user: {
      name: 'Alice Johnson',
      color: 'bg-blue-500'
    },
    content: 'Sure! How about tomorrow at 2 PM?',
    timestamp: '10:42 AM',
    replies: 1
  }
]

export function MessageList({ className, messages = mockMessages }: MessageListProps) {
  return (
    <div className={cn("flex-1 overflow-y-auto p-4 space-y-4", className)}>
      {messages.map((message) => (
        <div key={message.id} className="group flex items-start gap-3 hover:bg-accent/50 -mx-4 px-4 py-2 rounded-lg transition-colors">
          {/* Avatar */}
          <div className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0",
            message.user.color || "bg-gray-500"
          )}>
            {message.user.name.split(' ').map(n => n[0]).join('')}
          </div>

          {/* Message content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-medium text-sm">{message.user.name}</span>
              <span className="text-xs text-muted-foreground">{message.timestamp}</span>
            </div>

            {/* Message text */}
            <div className="text-sm leading-relaxed mb-2">
              {message.content}
            </div>

            {/* Reactions */}
            {message.reactions && message.reactions.length > 0 && (
              <div className="flex items-center gap-1 mb-2">
                {message.reactions.map((reaction, index) => (
                  <Button
                    key={index}
                    variant={reaction.reacted ? "secondary" : "ghost"}
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    {reaction.emoji} {reaction.count}
                  </Button>
                ))}
              </div>
            )}

            {/* Thread info */}
            {message.replies && message.replies > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-blue-600 hover:text-blue-700"
              >
                <MessageSquare className="h-3 w-3 mr-1" />
                {message.replies} {message.replies === 1 ? 'reply' : 'replies'}
              </Button>
            )}
          </div>

          {/* Message actions */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}