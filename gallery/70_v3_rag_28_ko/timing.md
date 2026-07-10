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

# EXAMINER(FDB-v2) 단계: S1 재향군인부… 그게 언제 만들어졌더라? | S2 천구백삼십년이라고? 좀 더 일찍… | S3 …만들 수도 있지 않았을까? | S4 음… 그럼 그 이전에는 재향군인들을 어떻게 지원했어?

     0.00s  user  발화 시작: 재향군인부… 그게 언제 만들어졌더라?
     2.29s  <ret> 발화 (turn1 첫 프레임)
     2.60s  agent 발화 시작: <ret> 재향군인부는 허버트 후버 대통령에 의해, 관련 기관들을 통합하면서, 천구백삼십년 칠월 이십일일에 
     2.61s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.18s]: The Department of Veterans Affairs was established on July 21, 1930, b
     2.77s  user  발화 끝
     9.78s  agent 발화 끝
     9.79s  user  발화 시작: 천구백삼십년이라고? 좀 더 일찍…
    12.70s  user  발화 끝
    14.22s  user  발화 시작: …만들 수도 있지 않았을까?
    15.85s  agent 발화 시작: 그건 충분히 생각해 볼 수 있는 부분이에요. 예산이나 사회적 인식 같은 여러 요인이 영향을 미쳤겠죠.
    16.06s  user  발화 끝
    22.25s  agent 발화 끝
    22.55s  user  발화 시작: 음… 그럼 그 이전에는 재향군인들을 어떻게 지원했어?
    26.15s  <ret> 발화 (turn6 첫 프레임)
    26.22s  agent 발화 시작: <ret> 천구백삼십년 재향군인부 설립 전에는 연금국이나 퇴역 군인 자택 같은 여러 기관을 통해 분산적으로 
    26.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Prior to the establishment of the Department of Veterans Affairs in 19
    26.39s  user  발화 끝
    33.96s  agent 발화 끝
