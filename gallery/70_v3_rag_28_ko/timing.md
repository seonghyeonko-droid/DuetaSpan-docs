# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 재향군인부(Department of Veterans Affai | S2 음, 좀 늦게 만들어진 것 같기도… | S3 …한데. 그 전에는 재향군인들을 어떻게 보살폈어? | S4 그렇군요. 그럼 그 이전에는 연방 차원에서 별다른 지원이 없었

     0.00s  user  발화 시작: 재향군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해.
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.67s  agent 발화 시작: <ret> 재향군인부가 만들어진 건… 대통령 허버트 후버의 명령으로 천구백삼십년 칠월 이십일일입니다.
     5.79s  user  발화 끝
     7.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    11.83s  agent 발화 끝
    11.85s  user  발화 시작: 음, 좀 늦게 만들어진 것 같기도…
    14.77s  user  발화 끝
    16.24s  user  발화 시작: …한데. 그 전에는 재향군인들을 어떻게 보살폈어?
    19.26s  <ret> 발화 (turn4 첫 프레임)
    19.33s  agent 발화 시작: <ret> 그 이전에는 재향군인들을 돌보는 게… 주로 민간 단체랑 주 정부에서 맡았다고 해요.
    19.78s  user  발화 끝
    20.62s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.00s]: [source: History.com] Prior to 1930, care for veterans in the United S
    24.33s  agent 발화 끝
    24.62s  user  발화 시작: 그렇군요. 그럼 그 이전에는 연방 차원에서 별다른 지원이 없었다는 거네?
    28.87s  agent 발화 시작: 네, 그전에는 연방 정부 차원의… 특별한 지원 체계가 없었습니다.
    28.97s  user  발화 끝
    33.08s  agent 발화 끝
