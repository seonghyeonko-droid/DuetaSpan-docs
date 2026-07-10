# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "소준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였죠? 기억이 잘 안 나네요.
     6.10s  <ret> 발화 (turn1 첫 프레임)
     6.26s  agent 발화 시작: <ret> 애슬레틱스가 마지막으로 노히트 게임을 당한 건… 이천십팔년 사월 이십일일이었어요.
     6.29s  user  발화 끝
     7.54s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.56s]: [source: MLB.com] The last time the Athletics were no-hit was April 21
    11.81s  agent 발화 끝
    12.46s  user  발화 시작: 잠깐만, 엄마! 오늘 저녁 뭐 먹을까?
    14.60s  user  발화 시작: 아, 죄송해요. 다시 말씀드리자면, 그 날 투수는 누구였죠?
    14.76s  user  발화 끝
    19.60s  <ret> 발화 (turn4 첫 프레임)
    19.92s  agent 발화 시작: <ret> 투수에 대해 궁금하시군요.
    20.07s  user  발화 끝
    21.12s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.65s]: [source: ESPN] Mike Fiers pitched a no-hitter for the Detroit Tigers a
    23.53s  agent 발화 시작: 그 날 노히트 게임을 던진 투수는… 디트로이트 타이거스의 마이크 피어스 선수였어요.
    23.57s  agent 발화 끝
    28.44s  agent 발화 끝
