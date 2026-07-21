# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Jack",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "skill",
#       "text": "User is quite experienced with freediving."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "trip",
#       "text": "User is planning a trip to Norway in May."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "allergy",
#       "text": "User is allergic to dust mites."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "anniversary",
#       "text": "User's anniversary is March 23."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a room at the Bellagio in Las Vegas for four nights, 
     4.78s  <ret> 발화 (turn1 첫 프레임)
     5.38s  ⚡SPAN 주입 [d'=0.60s / d_lead=13.55s]: (tool result) {"hotel name": "Bellagio", "city": "Las Vegas", "check i
     5.40s  agent 발화 시작: <ret> I’ve reserved a King Suite at the Bellagio in Las Vega
     5.59s  user  발화 끝
    15.77s  user  발화 시작: Right.
    16.17s  user  발화 끝
    18.95s  agent 발화 끝
    19.09s  user  발화 시작: Two thousand eight hundred dollars? That seems…a lot.
    22.93s  user  발화 끝
    22.97s  agent 발화 시작: [surprised] It is a bit pricey, yes. The Bellagio is a luxur
    30.03s  user  발화 시작: Yeah, yeah.
    31.36s  user  발화 끝
    34.85s  agent 발화 끝
    34.92s  user  발화 시작: Maybe. What about something around, say, one thousand five h
    37.95s  agent 발화 시작: Mhm.
    38.39s  agent 발화 끝
    39.04s  <ret> 발화 (turn8 첫 프레임)
    39.18s  user  발화 끝
    39.22s  agent 발화 시작: <ret> I found a Standard Room at the Excalibur for nine hund
    40.29s  ⚡SPAN 주입 [d'=1.25s / d_lead=11.64s]: (tool result) {"hotel name": "Excalibur", "city": "Las Vegas", "check 
    50.85s  agent 발화 끝
