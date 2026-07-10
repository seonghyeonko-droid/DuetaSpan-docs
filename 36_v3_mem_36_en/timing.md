# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Noa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Noa, I'm Reon. It's lovely to meet you.
     3.79s  agent 발화 끝
     4.90s  user  발화 시작: Um, welll… I was just thinking about a trip I’m planning.
     8.20s  <ret> 발화 (turn2 첫 프레임)
     8.44s  agent 발화 시작: <ret> I remember you were planning a trip to Lisbon in May, 
     8.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [2026-06-03] User is planning a trip to Lisbon in May.
     8.64s  user  발화 끝
    11.61s  user  발화 시작: Yeah, yeah.
    12.76s  user  발화 끝
    13.30s  agent 발화 끝
    13.44s  user  발화 시작: Yes, that’s right. I’m trying to decide what to do there.
    16.70s  agent 발화 시작: Lisbon is a beautiful city! Perhaps I can help you brainstor
    16.76s  user  발화 끝
    25.32s  agent 발화 끝
    25.34s  user  발화 시작: Could you find some attractions for me?
    27.48s  <ret> 발화 (turn7 첫 프레임)
    27.60s  user  발화 끝
    27.71s  agent 발화 시작: <ret> I found several attractions in Lisbon, including Jerón
    27.71s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.97s]: (tool result) Jerónimos Monastery, Belém Tower, São Jorge Castle, Ocea
    37.68s  agent 발화 끝
