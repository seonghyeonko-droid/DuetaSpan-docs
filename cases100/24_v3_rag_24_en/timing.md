# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Avery",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "60s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "trip",
#       "text": "User is planning a trip to Georgia in June."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "anniversary",
#       "text": "User's anniversary is May 8."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-04-25",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-01-03",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Eleli, I’m having a really hard time with my sister right
     3.73s  user  발화 끝
     3.75s  agent 발화 시작: Hi there! It sounds like things are tough. I’m here to liste
    10.32s  agent 발화 끝
    10.73s  user  발화 시작: She keeps borrowing money and never paying it back.
    13.42s  <ret> 발화 (turn3 첫 프레임)
    13.44s  user  발화 끝
    13.50s  agent 발화 시작: <ret> That’s a really common struggle with family… Setting f
    14.11s  ⚡SPAN 주입 [d'=0.69s / d_lead=2.95s]: Setting financial boundaries with family can be difficult, but it’s es
    23.63s  agent 발화 끝
    24.42s  user  발화 시작: I feel awful even bringing it up, but I’m stressed about my 
    28.18s  agent 발화 시작: [sigh] It’s completely understandable to feel awful. It’s ok
    28.21s  user  발화 끝
    34.87s  agent 발화 끝
