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

# EXAMINER(FDB-v2) 단계: S1 음… 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였더라? | S2 잠깐만, 김치냉장고 온도 좀 봐줄래? | S3 아, 죄송해요. 다시 질문할게요. 그… | S4 …날 누가 투수였는지 알 수 있을까요?

     0.00s  user  발화 시작: 음… 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였더라?
     3.91s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 이천십팔년 사월 이십일일에 있었답니다.
     4.35s  user  발화 끝
     5.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.56s]: [source: Wikipedia] The last no-hitter against the Oakland Athletics o
     6.42s  user  발화 시작: 아.
     7.06s  user  발화 끝
     7.70s  agent 발화 끝
     9.45s  user  발화 시작: 잠깐만, 김치냉장고 온도 좀 봐줄래?
    12.40s  user  발화 시작: 아, 죄송해요. 다시 질문할게요. 그…
    12.64s  user  발화 끝
    15.08s  user  발화 끝
    16.20s  user  발화 시작: …날 누가 투수였는지 알 수 있을까요?
    18.40s  <ret> 발화 (turn6 첫 프레임)
    18.64s  agent 발화 시작: <ret> 이천십팔년 사월 이십일일 경기에서 마이크 피어스가 노히트 경기를 펼쳤습니다.
    18.92s  user  발화 끝
    19.92s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.86s]: (tool result) Mike Fiers pitched a no-hitter against the Athletics on 
    23.50s  agent 발화 끝
