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

# EXAMINER(FDB-v2) 단계: S1 재향군인부(Department of Veterans Affai | S2 천구백삼십년이라고? 그건 좀 의외인데. 그 전에는 재향군인들을 | S3 음… 그 기관은 지금도 있어? | S4 그렇구나. 알겠어.

     0.00s  user  발화 시작: 재향군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해.
     4.68s  <ret> 발화 (turn1 첫 프레임)
     4.99s  agent 발화 시작: <ret> 재향군인부가 만들어진 건… 천구백삼십년입니다. 예산 관리와 관련된 부서로 시작했다고 들었어요… 천
     5.14s  user  발화 끝
     6.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.29s]: 재향군인부는 1930년에 재향군인부가 되기 위해 재편되기 전에는 미국 보훈부가 1917년에 설립되었습니다.
    13.29s  agent 발화 끝
    13.34s  user  발화 시작: 천구백삼십년이라고? 그건 좀 의외인데. 그 전에는 재향군인들을 누가 챙겼어?
    18.16s  <ret> 발화 (turn3 첫 프레임)
    18.47s  agent 발화 시작: <ret> 그 전에는 여러 기관에서 조금씩 담당했는데, 특히 보훈처가 그 역할을 맡았다고 해요. 재향군인 지
    18.66s  user  발화 끝
    20.08s  ⚡SPAN 주입 [d'=1.92s / d_lead=11.27s]: 재향군인들을 돌보는 것은 원래 전쟁부의 책임이었습니다.
    29.74s  agent 발화 끝
    29.75s  user  발화 시작: 음… 그 기관은 지금도 있어?
    31.81s  <ret> 발화 (turn5 첫 프레임)
    32.04s  agent 발화 시작: <ret> 네, 보훈처는 지금도 재향군인과 그 가족을 위한 여러 사업을 진행하고 있습니다. 재향군인부와 협력
    32.14s  user  발화 끝
    33.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: 보훈처가 그 역할을 맡았다고 해요.
    34.56s  user  발화 시작: 응응.
    35.20s  user  발화 끝
    39.95s  user  발화 시작: 그렇구나. 알겠어.
    40.02s  agent 발화 끝
    41.84s  user  발화 끝
