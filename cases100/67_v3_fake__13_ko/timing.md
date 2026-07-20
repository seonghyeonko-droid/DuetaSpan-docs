# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "하람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-08",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "savings",
#       "text": "User is saving for a wedding."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-05-20",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 심파시 포 더 데블 베이스는 누가 쳤어?
     2.15s  <ret> 발화 (turn1 첫 프레임)
     2.27s  agent 발화 시작: <ret> [happy] 키스 리처즈가 베이스를 연주했어요. 롤링 스톤즈의 노래죠.
     2.44s  user  발화 끝
     3.13s  ⚡SPAN 주입 [d'=0.98s / d_lead=4.03s]: Keith Richards.
     5.75s  <ret> 발화 (turn2 첫 프레임)
     6.25s  agent 발화 시작: <ret> 요즘 날씨도 많이 추워졌네요.
     6.30s  agent 발화 끝
     6.57s  ⚡SPAN 주입(IRRELEVANT) [d'=0.82s / d_lead=1.93s]: The average high temperature in Fairbanks, Alaska in January is -11.1°
     7.96s  user  발화 시작: 아, 그래. 그 기타리스트도 유명하잖아.
     8.18s  agent 발화 끝
    10.28s  agent 발화 시작: 네, 키스 리처즈는 롤링 스톤즈에서 기타도 정말 잘 치시죠.
    10.39s  user  발화 끝
    14.21s  agent 발화 끝
