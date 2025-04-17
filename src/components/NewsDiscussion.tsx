"use client"

import type React from "react"
import { useState } from "react"

interface Comment {
  id: string
  name: string
  content: string
  date: Date
}

export default function NewsDiscussion() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      content:
        "This article really opened my eyes to the environmental challenges we face. Thanks for the insightful reporting!",
      date: new Date(2023, 3, 15),
    },
    {
      id: "2",
      name: "Michael Chen",
      content:
        "I disagree with some points in this article. The economic impact of these policies needs more consideration.",
      date: new Date(2023, 3, 14),
    },
    {
      id: "3",
      name: "Emma Williams",
      content:
        "Great reporting as always. I'd love to see a follow-up piece on how local communities are responding to these changes.",
      date: new Date(2023, 3, 12),
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() === "" || comment.trim() === "") return

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      content: comment,
      date: new Date(),
    }

    setComments([newComment, ...comments])
    setName("")
    setComment("")
  }

  return (
    <div className=" my-8">
      {/* Comment Form */}
      <div className=" p-2">
        <div className="">
          <h2 className="text-xl font-semibold mb-4 ">Discussion</h2>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2  border border-default-border "
              />
            </div>
            <div>
              <textarea
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-2 border border-default-border min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 w-full justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors flex items-center gap-2"
            >Post Comment</button>

          </form>
        </div>
      </div>

      {/* Comments List */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>

        {comments.length === 0 ? (
          <p className=" text-center py-8">Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-primary rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold flex-shrink-0">
                    {comment.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold ">{comment.name}</h4>
                      <span className="text-xs text-gray-500">
                        {comment.date.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-sm ">{comment.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
