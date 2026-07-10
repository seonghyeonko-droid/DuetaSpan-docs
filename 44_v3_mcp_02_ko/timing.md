# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "수아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 실버 티어 구독 플랜을 만들어줘…
     2.31s  user  발화 끝
     3.35s  user  발화 시작: …세개월마다 결제하는 걸로.
     5.18s  <ret> 발화 (turn2 첫 프레임)
     5.57s  agent 발화 시작: <ret> 실버 티어 구독 플랜을 만들었어요. 세개월마다 결제되고요, ID는 팔 칠 삼 구 이입니다. 혹시 
     5.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) Subscription plan created: Silver Tier, billed every 3 m
     5.66s  user  발화 끝
     8.93s  user  발화 시작: 어어.
     9.75s  user  발화 끝
    15.24s  user  발화 시작: 음… 그럼 골드 티어는 얼마야?
    15.31s  agent 발화 끝
    17.48s  agent 발화 시작: 골드 티어는 매달 구만 구천 원이고, 실버 티어보다 더 많은 혜택이 있어요. 어떤 점이 궁금하신가요?
    17.50s  user  발화 끝
    24.43s  agent 발화 끝
