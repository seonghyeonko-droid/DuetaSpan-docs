# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 포드 스포츠 트랙은 언제 단종됐어?
     2.26s  <ret> 발화 (turn1 첫 프레임)
     2.42s  agent 발화 시작: <ret> 포드에서 스포츠 트랙 생산을 중단한 건… 이천십년이라고 합니다. 혹시 다른 차종도 알아보고 계신가
     2.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: Ford discontinued the Sport Trac model in 2010, focusing on other truc
     2.42s  user  발화 끝
     8.70s  user  발화 시작: 다른 차종은 아직 안 봐봤어.
     8.70s  agent 발화 끝
    10.72s  <ret> 발화 (turn3 첫 프레임)
    11.12s  agent 발화 시작: <ret> 혹시 어떤 종류의 차를 찾고 계신지 말씀해 주시면 추천해 드릴 수 있어요.
    11.12s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.80s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
    11.12s  user  발화 끝
    16.92s  agent 발화 끝
