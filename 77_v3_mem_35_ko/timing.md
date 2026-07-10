# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "하형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 안녕하세요. 여행 계획 좀 세우고 싶은데 도와주실 수 있 | S2 그때는 좀 힘들었는데, 이번엔 편안하게 쉬고 싶어요. | S3 좋아요. 근데 혹시 비행기 티켓은 미리 예약해야 할까요? | S4 …아, 근데 혹시 경유 횟수가 적은 항공편으로 찾아볼 수 있을

     0.00s  agent 발화 시작: 안녕하세요, 하형님. 저는 여러분의 재정 가이드, 클렌입니다.
     4.63s  user  발화 시작: 어, 안녕하세요. 여행 계획 좀 세우고 싶은데 도와주실 수 있나요?
     4.81s  agent 발화 끝
     9.12s  user  발화 끝
     9.15s  <ret> 발화 (turn2 첫 프레임)
     9.29s  agent 발화 시작: <ret> 혹시 뉴질랜드 여행 계획 말씀하시는 건가요?
     9.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: [2025-12-04] User is planning a trip to New Zealand in October.
    12.53s  agent 발화 시작: 네, 작년에 뉴질랜드 여행 계획을 세우셨다고 말씀하셨던 걸 기억합니다. 십월에 가실 예정이셨죠.
    12.71s  agent 발화 끝
    16.24s  user  발화 시작: 맞아.
    16.87s  user  발화 끝
    19.95s  agent 발화 시작: 혹시 그때와 비슷한 여행 스타일을 원하시나요, 아니면 다른 스타일을 생각하고 계신가요?
    19.99s  agent 발화 끝
    21.77s  user  발화 시작: 음.
    22.27s  user  발화 끝
    25.59s  user  발화 시작: 그때는 좀 힘들었는데, 이번엔 편안하게 쉬고 싶어요.
    25.59s  agent 발화 끝
    29.57s  agent 발화 시작: 편안한 휴식을 원하시는군요. 그럼 뉴질랜드에서 조용하고 아름다운 곳을 찾아볼까요?
    29.61s  user  발화 끝
    32.74s  user  발화 시작: 어어.
    33.42s  user  발화 끝
    36.06s  agent 발화 끝
    36.33s  user  발화 시작: 좋아요. 근데 혹시 비행기 티켓은 미리 예약해야 할까요?
    40.79s  <ret> 발화 (turn11 첫 프레임)
    41.02s  agent 발화 시작: <ret> 십월 일일 오클랜드행 편도 항공권은 천이백오십 달러부터 시작합니다—
    41.03s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.32s]: (tool result) Flights_4 SearchOnewayFlight is returning Auckland, New 
    41.14s  user  발화 끝
    45.54s  user  발화 시작: …아, 근데 혹시 경유 횟수가 적은 항공편으로 찾아볼 수 있을까요?
    46.34s  agent 발화 끝
    49.89s  <ret> 발화 (turn13 첫 프레임)
    50.12s  agent 발화 시작: <ret> 십월 일일 오클랜드행, 경유 한 번하는 항공권은 천오백 달러부터 있습니다. 좀 더 편안한 여행이 
    50.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: (tool result) Flights_4 SearchOnewayFlight is returning Auckland, New 
    50.35s  user  발화 끝
    59.34s  agent 발화 끝
