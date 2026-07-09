# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 오클랜드 에이스가 노히트 게임을 당한 게 언제였더라? 기억이 잘 안 나네.
     5.63s  <ret> 발화 (turn1 첫 프레임)
     5.87s  agent 발화 시작: <ret> 에이스 팬이시군요. 두 번 다시 없을 줄 알았는데, 오클랜드 에이스가 노히트 게임을 당한 건 이천
     5.93s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.05s]: April 21, 2018.
     8.54s  user  발화 시작: 네.
     9.04s  user  발화 끝
    14.77s  agent 발화 끝
    15.24s  user  발화 시작: 잠깐만, 엄마, 저녁 뭐 먹을까?
    17.88s  user  발화 시작: 아, 죄송해요. 다시 말씀해 주시겠어요?
    18.05s  user  발화 끝
    20.19s  user  발화 끝
    20.25s  agent 발화 시작: 네, 에이스가 노히트 게임을 당한 날짜를 다시 알려드릴게요. 이천십팔년 사월 이십일일이었답니다.
    24.40s  user  발화 시작: 그러니까요.
    25.21s  user  발화 끝
    26.76s  agent 발화 시작: 혹시 그 날짜에 관련된 다른 정보가 더 궁금하신가요?
    26.78s  agent 발화 끝
    30.18s  agent 발화 끝
