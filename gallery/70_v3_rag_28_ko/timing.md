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
#       "text": "User's home address is 서울 종로구 세종대로 175."
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

# EXAMINER(FDB-v2) 단계: S1 국가유공자부(Department of Veterans Affa | S2 음… 그게 정확한 날짜 맞아? 좀 더 일찍 만들어졌을 수도 있 | S3 흐으으음… 그럼 천구백삼십년은 뭐, 공식적으로 바뀐 날짜인 거 | S4 알겠어. 그럼 천구백십칠년부터 계속 쭉 이어져 왔다는 거네.

     0.00s  user  발화 시작: 국가유공자부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해.
     5.23s  <ret> 발화 (turn1 첫 프레임)
     5.54s  agent 발화 시작: <ret> 국가유공자부는 천구백삼십년 칠월 이십일일에 만들어졌습니다.
     5.70s  user  발화 끝
     7.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: The Department of Veterans Affairs was established on July 21, 1930.
     9.70s  user  발화 시작: 음… 그게 정확한 날짜 맞아? 좀 더 일찍 만들어졌을 수도 있잖아.
     9.71s  agent 발화 끝
    14.15s  <ret> 발화 (turn3 첫 프레임)
    14.22s  agent 발화 시작: <ret> 사실 그 부처의 시작은 천구백십칠년으로 거슬러 올라갑니다. 당시에는 '재향군인국'이라는 이름이었어
    14.38s  user  발화 끝
    15.51s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.99s]: The agency’s origins can be traced back to 1917 with the establishment
    21.14s  user  발화 시작: 흐으으음… 그럼 천구백삼십년은 뭐, 공식적으로 바뀐 날짜인 거네?
    21.21s  agent 발화 끝
    25.19s  <ret> 발화 (turn5 첫 프레임)
    25.26s  agent 발화 시작: <ret> 네, 천구백삼십년에는 재향군인국이 장관급 부서로 승격되면서 공식적으로 현재의 국가유공자부가 된 겁
    25.40s  user  발화 끝
    27.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: The Veteran’s Bureau was elevated to a cabinet-level department in 193
    29.37s  user  발화 시작: 응.
    29.77s  user  발화 끝
    32.52s  user  발화 시작: 알겠어. 그럼 천구백십칠년부터 계속 쭉 이어져 왔다는 거네.
    32.53s  agent 발화 끝
    36.14s  agent 발화 시작: 맞습니다. 천구백십칠년부터 쭉 이어져 오면서 명칭과 역할이 조금씩 바뀌어 왔다고 보시면 됩니다.
    36.35s  user  발화 끝
    42.25s  agent 발화 끝
