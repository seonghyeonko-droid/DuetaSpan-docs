# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "은현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 방갈로스가 마지막으로 플레이오프에 진출한 게 언제였죠? | S2 아, 그렇군요. | S3 …근데, 그 이천십오년 이후로는 한 번도 못 나갔나요? | S4 기대해 봐야겠네요.

     0.00s  user  발화 시작: 방갈로스가 마지막으로 플레이오프에 진출한 게 언제였죠?
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> 방갈로스가 마지막으로 플레이오프에 진출한 건 이천십오년이었어요. 에이 에프 씨 북부에서 십이승 사
     3.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.60s]: The Cincinnati Bengals last made the playoffs in 2015, winning the AFC
     3.22s  user  발화 끝
    11.82s  user  발화 시작: 와.
    11.82s  agent 발화 끝
    12.36s  user  발화 시작: 아, 그렇군요.
    12.36s  user  발화 끝
    13.35s  <ret> 발화 (turn4 첫 프레임)
    13.43s  agent 발화 시작: <ret> 팀의 성적을 꾸준히 살펴보시는군요. 혹시 다른 팀의 플레이오프 진출 기록도 궁금하신가요?
    13.43s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.91s]: The average temperature in Reykjavik, Iceland in July is 13.1°C, with 
    13.43s  user  발화 끝
    19.34s  agent 발화 시작: 혹시 최근에 관심 있는 스포츠가 있으신가요 —
    19.34s  agent 발화 끝
    23.10s  user  발화 시작: …근데, 그 이천십오년 이후로는 한 번도 못 나갔나요?
    23.10s  agent 발화 끝
    27.40s  agent 발화 시작: 네, 이천십오년 이후로는 플레이오프에 진출하지 못했답니다. 오랜 기다림이었죠.
    27.40s  user  발화 끝
    31.70s  agent 발화 시작: 하지만 최근에 다시 좋은 성적을 내고 있어서 다음 시즌에는 꼭 진출할 수 있을 거예요.
    31.70s  agent 발화 끝
    39.22s  user  발화 시작: 기대해 봐야겠네요.
    39.22s  agent 발화 끝
    40.29s  user  발화 끝
