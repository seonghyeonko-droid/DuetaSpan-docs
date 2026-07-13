# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Freya",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "home",
#       "text": "User's home address is 47 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-05-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Freya, I'm Nex. It’s lovely to meet you. How are you feel
     4.99s  user  발화 시작: Yeah.
     4.99s  agent 발화 끝
     5.34s  user  발화 시작: Um, a little stressed, actually. Work’s been… a lot.
     5.34s  user  발화 끝
     8.55s  agent 발화 시작: [sigh] I understand. Work can certainly pile on the pressure
     8.55s  user  발화 끝
    14.96s  user  발화 시작: Yeah.
    14.96s  agent 발화 끝
    15.31s  agent 발화 시작: It’s a simple way to reconnect with the present moment, and 
    15.31s  user  발화 끝
    27.07s  user  발화 시작: Uh-huh.
    27.07s  agent 발화 끝
    27.42s  user  발화 시작: That sounds… nice. What time is it in London right now?
    27.42s  user  발화 끝
    31.32s  <ret> 발화 (turn9 첫 프레임)
    31.34s  agent 발화 시작: Yeah.
    31.34s  user  발화 끝
    31.62s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.05s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Europe/London 
    31.69s  agent 발화 시작: <ret> It is currently 3:17 PM in London, Freya. The afternoo
    31.69s  agent 발화 끝
    37.75s  user  발화 시작: Yeah, totally.
    37.75s  agent 발화 끝
    38.46s  user  발화 시작: Right. I remember mentioning I’m gluten-free… do you have th
    38.46s  user  발화 끝
    41.78s  <ret> 발화 (turn12 첫 프레임)
    42.38s  agent 발화 시작: <ret> Yes, I do. I have a note that you follow a gluten-free
    42.38s  user  발화 끝
    43.04s  ⚡SPAN 주입 [d'=1.26s / d_lead=4.63s]: [2026-03-21] User is gluten-free.
    47.01s  agent 발화 끝
