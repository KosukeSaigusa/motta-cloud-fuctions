interface Message {
  messageId: string
  createdAt?: FirebaseFirestore.Timestamp | null
  type: `plain` | `reply` | `images` | `information`
  senderId: string
  body: string
  imageURLS: string[]
  detail?: MessageDetail
}

interface MessageDetail {
  something: string
  another: number
}