# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Charlotte",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Charlotte, I’m Bio. It’s lovely to meet you.
     3.32s  user  발화 시작: Right.
     3.32s  agent 발화 끝
     3.69s  user  발화 시작: Hi Bio, that's good to hear. I need to get to a new restaura
     3.69s  user  발화 끝
     9.89s  <ret> 발화 (turn3 첫 프레임)
     9.97s  agent 발화 시작: <ret> I see you have a Golden Retriever named Max. To start,
     9.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.91s]: [2025-06-01] User has a Golden Retriever named Max.
     9.97s  user  발화 끝
    15.87s  user  발화 시작: Oh, right. I live at 300 Page Street, San Francisco, Califor
    15.87s  agent 발화 끝
    19.85s  <ret> 발화 (turn5 첫 프레임)
    19.93s  agent 발화 시작: <ret> Thank you. Let me find directions to El Sol from 300 P
    19.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.80s]: 300 Page Street, San Francisco, California.
    19.93s  user  발화 끝
    24.73s  user  발화 시작: …is there parking near the restaurant? I'm driving.
    24.73s  agent 발화 끝
    27.44s  <ret> 발화 (turn7 첫 프레임)
    27.68s  agent 발화 시작: <ret> There are public parking lots within half a mile, cost
    27.68s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.38s]: (tool result) Parking: Public parking lots available within 0.5 miles;
    27.68s  user  발화 끝
    35.06s  agent 발화 끝
