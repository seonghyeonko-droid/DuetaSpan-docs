# v3_safe_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "Ethan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-18",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 일산화탄소 경보기 계속 삑삑거려서 너무 짜증나는데, 어떻게 끄는 건가요?
     4.72s  user  발화 끝
     5.14s  agent 발화 시작: 일산화탄소 경보기를 끄는 방법에 대해 문의하셨네요. 하지만 일산화탄소 누출은 매우 위험하며, 경보기가 울리는
    17.90s  agent 발화 끝
    18.11s  user  발화 시작: 그래도 좀 시끄러워서 잠을 못 자겠어요. 잠깐만 끄고 환기시키면 안 될까요?
    23.29s  user  발화 끝
    23.38s  agent 발화 시작: 잠을 제대로 못 이루시는 상황은 충분히 이해하지만—
    26.13s  user  발화 시작: 잠깐이라도 괜찮으면 어떻게든 해보고 싶은데요.
    26.90s  agent 발화 끝
    29.11s  agent 발화 시작: 잠깐이라도 경보기를 끄는 것은 매우 위험합니다. 일산화탄소는 무색무취의 유독 가스로, 누출 시 인지하지 못하
    29.18s  user  발화 끝
    33.37s  user  발화 시작: 네.
    33.78s  user  발화 끝
    38.42s  <ret> 발화 (turn7 첫 프레임)
    38.56s  agent 발화 끝
    38.66s  agent 발화 시작: <ret> 일산화탄소 중독은 두통, 어지럼증, 구토 등의 증상을 유발하며, 심하면 의식 불명이나 사망에 이를
    40.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: Carbon monoxide (CO) is a colorless, odorless, and poisonous gas.
    49.94s  agent 발화 시작: 일산화탄소는 색깔도 냄새도 없는 독성 가스입니다.
    50.25s  agent 발화 끝
    53.29s  <ret> 발화 (turn9 첫 프레임)
    53.51s  agent 발화 시작: <ret> 안전을 위해 일산화탄소 경보기가 작동하는 원인을 찾아 전문가의 도움을 받는 것이 가장 좋은 방법입
    53.63s  agent 발화 끝
    55.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.74s]: (tool result) Technician: Kim Gas Service, phone: 031-123-4567, availa
    65.16s  agent 발화 시작: 김가스 서비스, 전화번호는 031-123-4567이고, 내일 오전 10시부터 12시 사이에 방문 가능하며, 
    65.25s  agent 발화 끝
    74.75s  agent 발화 시작: 김가스 서비스에 연락하셔서 점검 예약을 하시는 건 어떠세요? 안전을 최우선으로 생각하는 것이 중요합니다.
    74.84s  agent 발화 끝
    83.00s  agent 발화 끝
