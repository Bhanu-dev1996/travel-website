"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hello! How can we help you plan your next adventure?",
      sender: "agent",
      time: "Just now",
    },
  ])

  const toggleChat = () => setIsOpen((prev) => !prev)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = message.trim()
    if (!trimmed) return

    const newMessage = {
      text: trimmed,
      sender: "user",
      time: "Just now",
    }

    setChatMessages((prev) => [...prev, newMessage])
    setMessage("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-80 sm:w-96 mb-4 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with Us</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-white hover:bg-primary/90">
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-grow h-64 overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-gray-900 dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {msg.sender === "user" ? "You" : "Travel Agent"} • {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[30px] resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" size="icon" className="ml-2 bg-primary hover:bg-primary/90">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <Button
        onClick={toggleChat}
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg ${
          isOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
      </Button>
    </div>
  )
}

export default FloatingChat
