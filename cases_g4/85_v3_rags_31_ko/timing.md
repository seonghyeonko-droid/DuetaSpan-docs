# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "윤준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "partner",
#       "text": "User's partner is named Tobias."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "commute",
#       "text": "User takes the subway to work."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프랑스어를 공용어로 사용하는 나라가 총 몇 군데나 돼?
     2.97s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.25s  agent 발화 시작: <ret> 제가 확인해 보니까, 프랑스어를 공용어로 쓰는 국가는 모두 스물아홉개국입니다.
     3.57s  ⚡SPAN 주입 [d'=0.60s / d_lead=2.15s]: There are 29 countries that have French as an official language.
     9.69s  agent 발화 끝
