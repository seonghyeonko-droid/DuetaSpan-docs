# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "home",
#       "text": "User's home address is 371 Birch Road."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm feeling really stressed about  | S2 That sounds lovely. Play it, pleas | S3 I need to book a massage this week | S4 … actually, can you check if Seren

     0.00s  user  발화 시작: I'm feeling really stressed about work deadlines.
     2.53s  agent 발화 시작: It sounds like you’re carrying a lot right now. Taking a mom
     2.53s  user  발화 끝
    10.12s  user  발화 시작: Could you find me some calming nature sounds?
    10.12s  agent 발화 끝
    12.93s  <ret> 발화 (turn3 첫 프레임)
    13.01s  agent 발화 시작: <ret> I found "Gentle Rain & Forest Ambience" by Nature Soun
    13.01s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.70s]: (tool result) {"artist": "Nature Sounds", "title": "Gentle Rain & Fore
    13.01s  user  발화 끝
    17.71s  user  발화 시작: That sounds lovely. Play it, please.
    17.71s  agent 발화 끝
    19.64s  <ret> 발화 (turn5 첫 프레임)
    19.88s  agent 발화 시작: <ret> It’s playing now at fifty percent volume.
    19.88s  ⚡SPAN 주입 [d'=1.84s / d_lead=2.53s]: (tool result) {"status": "playing", "volume": "50%", "track": "Gentle 
    19.88s  user  발화 끝
    22.41s  user  발화 시작: I need to book a massage this weekend—maybe Saturday?
    22.41s  agent 발화 끝
    25.66s  agent 발화 시작: Booking a massage sounds like a wonderful way to de-stress. 
    25.66s  user  발화 끝
    31.28s  <ret> 발화 (turn8 첫 프레임)
    31.44s  agent 발화 시작: <ret> Serene Spa has openings at ten AM, two PM, or four PM 
    31.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) {"providers": [{"name": "Serene Spa", "availability": 10
    31.44s  agent 발화 끝
    36.86s  user  발화 시작: … actually, can you check if Serene Spa offers hot stone mas
    36.86s  agent 발화 끝
    41.04s  <ret> 발화 (turn10 첫 프레임)
    41.20s  agent 발화 시작: <ret> Let me see if Serene Spa provides hot stone massage op
    41.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: (tool result) {"name": "Serene Spa", "services": Swedish massage, Deep
    41.20s  user  발화 끝
    45.17s  agent 발화 시작: Yes, Serene Spa does offer hot stone massage for one hundred
    45.17s  agent 발화 끝
    52.40s  agent 발화 끝
