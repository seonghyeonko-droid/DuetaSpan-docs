# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Anna",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "home",
#       "text": "User's home address is 849 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need a full-page screenshot of t | S2 Great, thanks. Um, what’s the weat | S3 That sounds pretty pleasant. | S4 I was thinking of maybe starting a

     0.00s  user  발화 시작: I need a full-page screenshot of the current webpage, saved 
     4.89s  <ret> 발화 (turn1 첫 프레임)
     5.11s  agent 발화 시작: <ret> Okay, I’ve grabbed a full-page screenshot and saved it
     5.13s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.09s]: (tool result) {"status": "success", "content": "base64 encoded image d
     5.14s  user  발화 끝
    10.20s  user  발화 시작: Great, thanks. Um, what’s the weather like in Seoul right no
    10.20s  agent 발화 끝
    13.39s  <ret> 발화 (turn3 첫 프레임)
    13.78s  agent 발화 시작: <ret> It’s currently 23.0 degrees Celsius in Seoul, with sev
    13.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    14.04s  user  발화 끝
    22.26s  agent 발화 끝
    22.45s  user  발화 시작: That sounds pretty pleasant.
    24.13s  agent 발화 시작: It really does! A nice day for getting things done, wouldn't
    24.20s  user  발화 끝
    26.63s  user  발화 시작: Uh-huh.
    27.17s  user  발화 끝
    27.87s  user  발화 시작: I was thinking of maybe starting a small savings plan.
    27.97s  agent 발화 끝
    31.34s  user  발화 끝
    31.45s  agent 발화 시작: That’s wonderful to hear! Starting a savings plan is a reall
    37.79s  agent 발화 끝
