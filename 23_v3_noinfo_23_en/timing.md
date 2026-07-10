# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Zoe",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "home",
#       "text": "User's home address is 131 Cedar Lane."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you happen to know Sarah Miller | S2 Oh, um, that’s a shame. Well, what | S3 That sounds lovely. I think I need | S4 Hmm, the Paradise sounds good. Cou

     0.00s  user  발화 시작: Do you happen to know Sarah Miller's phone number? I met her
     3.58s  <ret> 발화 (turn1 첫 프레임)
     3.98s  agent 발화 시작: <ret> I’ve looked, and unfortunately, I couldn’t find a phon
     3.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.19s]: (no information found)
     4.16s  user  발화 끝
    11.17s  agent 발화 끝
    12.04s  user  발화 시작: Oh, um, that’s a shame. Well, what about the weather in Seou
    17.40s  <ret> 발화 (turn3 첫 프레임)
    17.80s  agent 발화 시작: <ret> On July fourth of last year, Seoul had a pleasant temp
    17.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.52s]: (tool result) The weather in Seoul on July 4, 2025, was 28.5°C with pa
    17.97s  user  발화 끝
    28.33s  agent 발화 끝
    28.46s  user  발화 시작: That sounds lovely. I think I need to book a hotel in Busan 
    32.07s  <ret> 발화 (turn5 첫 프레임)
    32.47s  agent 발화 시작: <ret> I found some hotels in Busan for next week. The Paradi
    32.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.45s]: (tool result) Busan hotels: Paradise Hotel Busan (4.5 stars, $210/nigh
    32.48s  user  발화 끝
    43.74s  user  발화 시작: Hmm, the Paradise sounds good. Could you reserve a room for 
    43.93s  agent 발화 끝
    47.51s  <ret> 발화 (turn7 첫 프레임)
    47.59s  agent 발화 시작: <ret> I’ve booked a room for you at the Paradise Hotel Busan
    47.59s  ⚡SPAN 주입 [d'=1.76s / d_lead=9.37s]: (tool result) Paradise Hotel Busan for 1 night, check-in July 17, 2026
    47.72s  user  발화 끝
    56.96s  agent 발화 끝
