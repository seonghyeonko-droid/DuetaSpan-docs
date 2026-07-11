# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Ava",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "home",
#       "text": "User's home address is 618 Birch Road."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Click today’s date in the calendar iframe.
     2.23s  <ret> 발화 (turn1 첫 프레임)
     2.46s  agent 발화 시작: <ret> Wonderful, I’ve clicked today’s date for you in the ca
     2.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.85s]: (tool result) {"status": "success", "message": "Clicked today's date i
     2.58s  user  발화 끝
     5.56s  user  발화 시작: …can you find me some relaxing music for sleep now?
     6.31s  agent 발화 끝
     8.12s  <ret> 발화 (turn3 첫 프레임)
     8.28s  agent 발화 시작: <ret> I found “Weightless Part 1” by Weightless, it’s eight 
     8.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: {"artist": "Weightless", "title": "Weightless Part 1", "album": "Weigh
     8.47s  user  발화 끝
    16.18s  user  발화 시작: Play it, please.
    16.34s  agent 발화 끝
    17.29s  <ret> 발화 (turn5 첫 프레임)
    17.61s  agent 발화 시작: <ret> “Weightless Part 1” is now playing. Sweet dreams!
    17.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.11s]: (tool result) {"status": "playing", "message": "Now playing Weightless
    17.70s  user  발화 끝
    21.72s  agent 발화 끝
