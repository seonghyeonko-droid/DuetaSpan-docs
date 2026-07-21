# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "서형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "sibling",
#       "text": "User has a younger sibling named Minjun."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 전 인도 해리잔 세바크 상을 누가 설립했나요?
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.08s  agent 발화 시작: <ret> 전 인도 해리잔 세바크 상은, 마하트마 간디가 천구백삼십이년에 불가촉천민의 지위 향상을 위해 설립
     3.22s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=1.09s / d_lead=6.85s]: Mahatma Gandhi founded the All India Harijan Sevak Sangh in 1932 to wo
     9.94s  agent 발화 끝
