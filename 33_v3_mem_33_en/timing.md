# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Freya",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Freya, I'm Droraen. It's lovely to meet you!
     3.22s  user  발화 시작: Um, well, it's just… I'm feeling a bit lonely lately.
     3.22s  agent 발화 끝
     6.79s  agent 발화 시작: Uh-huh.
     6.79s  user  발화 끝
     7.15s  agent 발화 시작: [curious] That’s completely understandable, Freya. Many peop
     7.15s  agent 발화 끝
    15.72s  user  발화 시작: I miss having someone to go birdwatching with.
    15.72s  agent 발화 끝
    18.17s  <ret> 발화 (turn5 첫 프레임)
    18.58s  agent 발화 시작: <ret> You mentioned you enjoy birdwatching, and it sounds li
    18.58s  user  발화 끝
    18.68s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.58s]: [2026-05-22] User is into birdwatching.
    27.16s  user  발화 시작: Right.
    27.16s  agent 발화 끝
    27.51s  user  발화 시작: That’s a good idea. Are there any groups nearby?
    27.51s  user  발화 끝
    30.20s  <ret> 발화 (turn8 첫 프레임)
    30.73s  agent 발화 시작: <ret> It seems that function doesn’t locate birdwatching gro
    30.73s  user  발화 끝
    30.78s  ⚡SPAN 주입 [d'=0.59s / d_lead=6.07s]: (tool result) No restaurants found matching your request.
    36.80s  agent 발화 끝
