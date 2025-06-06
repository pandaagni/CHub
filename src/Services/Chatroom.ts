/**
POST   /register
POST   /login
GET    /users/{userId}                              → Get user details
GET    /users/{userId}/chatrooms                    → Get all chatrooms for a user
GET    /users/{userId}/messages/unread/count        → Get unread messages for a user
GET    /chatrooms/{chatroomId}/messages             → Get all messages in a chatroom
POST   /chatrooms/{chatroomId}/messages             → Send a message to a chatroom
POST   /chatrooms                                   → Create a new chatroom (userId in body)
DELETE /chatrooms/{chatroomId}                      → Delete a chatroom
*/
