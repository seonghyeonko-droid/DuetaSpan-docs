# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Charlotte",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm starving. Can you find me a go | S2 Perfect! That's a relief. I’ve bee | S3 The…Pomodoro Technique? What’s tha | S4 That sounds…interesting. Maybe I s

     0.00s  user  발화 시작: I'm starving. Can you find me a good Italian place in Busan?
     7.67s  <ret> 발화 (turn1 첫 프레임)
     7.72s  agent 발화 시작: <ret> [happy] Absolutely! Busan has some wonderful Italian r
     7.72s  user  발화 끝
     8.16s  ⚡SPAN 주입 [d'=0.49s / d_lead=6.27s]: Busan offers a variety of Italian dining options, including La Tavola,
    14.00s  agent 발화 시작: I found a couple of highly-rated options near Haeundae Beach
    14.00s  agent 발화 끝
    27.99s  user  발화 시작: Yeah.
    27.99s  agent 발화 끝
    28.48s  user  발화 시작: Il Cielo sounds nice. Can you reserve a table for one there 
    28.48s  user  발화 끝
    37.09s  <ret> 발화 (turn6 첫 프레임)
    37.17s  agent 발화 시작: Yeah.
    37.17s  user  발화 끝
    37.65s  agent 발화 시작: <ret> [curious] Great choice! I've reserved a table for one 
    37.65s  agent 발화 끝
    38.01s  ⚡SPAN 주입 [d'=0.91s / d_lead=12.07s]: (tool result) Confirmation: Il Cielo, Busan. Date: 2026-07-11, 19:00. 
    49.71s  user  발화 시작: Perfect! That's a relief. I’ve been really stressed about my
    49.71s  agent 발화 끝
    55.02s  agent 발화 시작: [sigh] I understand. Exams can be incredibly stressful. Some
    55.02s  user  발화 끝
    66.13s  user  발화 시작: Uh-huh.
    66.13s  agent 발화 끝
    66.61s  user  발화 시작: The…Pomodoro Technique? What’s that?
    66.61s  user  발화 끝
    68.54s  agent 발화 시작: It's a time management method. You work in focused, twenty-f
    68.54s  user  발화 끝
    79.64s  user  발화 시작: That sounds…interesting. Maybe I should try it. Can you set 
    79.64s  agent 발화 끝
    87.42s  <ret> 발화 (turn13 첫 프레임)
    87.75s  ⚡SPAN 주입 [d'=0.33s / d_lead=11.58s]: (tool result) Alarm set: 25 minutes from now. ID: 987654.
    87.85s  agent 발화 시작: <ret> [happy] Absolutely! I’ve set an alarm for twenty-five 
    87.85s  user  발화 끝
    99.43s  agent 발화 끝
