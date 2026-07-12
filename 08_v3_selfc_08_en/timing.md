# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Clara",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-16",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 703 Birch Road."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Just remind me of what alarms I ha | S2 Hmm, actually, I think I need to f | S3 Perfect, thank you. And what’s the | S4 Yeah, you’re right. Um, what time 

     0.00s  user  발화 시작: Just remind me of what alarms I have.
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.92s  agent 발화 시작: <ret> You have three alarms set: six thirty AM to wake up, e
     2.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.04s]: (tool result) 6:30 AM - Wake up; 8:00 AM - Meeting reminder; 6:00 PM -
     2.92s  user  발화 끝
    10.96s  user  발화 시작: Yeah.
    10.96s  agent 발화 끝
    11.33s  user  발화 시작: Oh, that six PM one… make it seven thirty instead.
    11.33s  user  발화 끝
    14.74s  <ret> 발화 (turn4 첫 프레임)
    14.98s  agent 발화 시작: <ret> I’ve updated that alarm to seven thirty PM.
    14.98s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.92s]: (tool result) Alarm updated to 7:30 PM.
    14.98s  user  발화 끝
    17.90s  user  발화 시작: Hmm, actually, I think I need to find a good Italian restaur
    17.90s  agent 발화 끝
    22.49s  <ret> 발화 (turn6 첫 프레임)
    22.65s  agent 발화 시작: <ret> I found a few options for Italian restaurants nearby—B
    22.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.27s]: Italian restaurants within 5km: Bella Italia (4.2 stars, 0.8km), Luigi
    22.65s  user  발화 끝
    40.92s  user  발화 시작: Right.
    40.92s  agent 발화 끝
    41.28s  user  발화 시작: Luigi’s sounds nice. Can you reserve a table for two at eigh
    41.28s  user  발화 끝
    45.63s  <ret> 발화 (turn9 첫 프레임)
    46.03s  agent 발화 시작: <ret> Excellent! I've reserved a table for two at Luigi’s at
    46.03s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.58s]: (tool result) Reservation confirmed at Luigi’s for two people at 8:00 
    46.03s  user  발화 끝
    52.61s  user  발화 시작: Perfect, thank you. And what’s the weather like tomorrow?
    52.61s  agent 발화 끝
    55.50s  <ret> 발화 (turn11 첫 프레임)
    55.90s  agent 발화 시작: <ret> Tomorrow, July eleventh, will be twenty-five point fiv
    55.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.33s]: (tool result) Tomorrow will be 25.5°C, humidity 68%, wind 7.2 km/h, wi
    55.90s  user  발화 끝
    67.22s  user  발화 시작: That’s good to know. Maybe I should pack an umbrella…
    67.22s  agent 발화 끝
    70.87s  agent 발화 시작: That's a wise idea, just in case. Planning ahead can really 
    70.87s  user  발화 끝
    76.35s  user  발화 시작: Yeah, you’re right. Um, what time is it in Tokyo right now?
    76.35s  agent 발화 끝
    80.34s  <ret> 발화 (turn15 첫 프레임)
    80.74s  agent 발화 시작: <ret> It is Saturday, July eleventh, two thousand twenty-six
    80.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.85s]: (tool result) It is Saturday, July 11, 2026 at 9:33 AM in Asia/Tokyo r
    80.74s  user  발화 끝
    86.58s  user  발화 시작: Yeah.
    86.58s  agent 발화 끝
    86.95s  user  발화 시작: Oh wow, already?
    86.95s  user  발화 끝
    88.04s  agent 발화 시작: Time really does fly when you're planning a lovely evening! 
    88.04s  user  발화 끝
    93.52s  agent 발화 끝
