# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Victor",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 17 Pine Court."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-31",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, who wrote “We Belong Together” by Mariah Carey?
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.09s  agent 발화 시작: <ret> It’s wonderful you’re curious about the song’s origins
     3.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: Johntá Austin co-wrote “We Belong Together” with Mariah Carey and Shan
     3.23s  user  발화 끝
    10.41s  agent 발화 끝
    11.79s  user  발화 시작: Oh, really? I thought it was just Mariah.
    14.20s  user  발화 끝
    14.30s  agent 발화 시작: It’s easy to assume it was solely her work—
    16.27s  user  발화 시작: …did he write any other big songs?
    16.89s  agent 발화 끝
    18.02s  <ret> 발화 (turn5 첫 프레임)
    18.22s  agent 발화 시작: <ret> Johntá Austin is a songwriter and record producer—he’s
    18.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) Johntá Austin is an American songwriter and record produ
    18.29s  user  발화 끝
    21.50s  user  발화 시작: Yeah.
    22.13s  user  발화 끝
    25.81s  agent 발화 시작: He's had a really impressive career, contributing to so many
    25.87s  agent 발화 끝
    32.44s  agent 발화 끝
