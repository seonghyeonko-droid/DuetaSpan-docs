# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "혜호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 여러분의 재정 상담사, 리라입니다. 오늘 어떤 도움을 드릴까요?
     3.35s  user  발화 시작: 그래.
     3.79s  user  발화 끝
     6.95s  agent 발화 끝
     7.14s  user  발화 시작: 흐음… 전에 부산에 있는 제 집 주소 얘기했었죠?
    10.33s  <ret> 발화 (turn3 첫 프레임)
    10.48s  agent 발화 시작: <ret> 네, 혜호님. 이천이십육년 삼월 육일에 부산 해운대구 우동 일 이 삼 사가 주소라고 말씀해주셨어요
    10.64s  user  발화 끝
    12.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: [2026-03-06] User's home address is 부산 해운대구 우동 123-4.
    21.23s  agent 발화 끝
    21.75s  user  발화 시작: 아, 그냥 기억이 잘 안 나서요. 차를 사려고 하는데, 혹시 부산에 있는 중고차 매장 좀 찾아볼 수 있을까요
    28.34s  <ret> 발화 (turn5 첫 프레임)
    28.72s  agent 발화 시작: <ret> 부산 해운대구 우동 일 이 삼 사 근처에는 현대자동차 해운대중고차매매단지가 오백팔십팔미터, SK엔
    28.83s  user  발화 끝
    30.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.45s]: (tool result) 부산 해운대구 우동 123-4, 현대자동차 해운대중고차매매단지 (588m), SK엔카 해운대점 (1.
    42.17s  agent 발화 끝
