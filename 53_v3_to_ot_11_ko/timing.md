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

# EXAMINER(FDB-v2) 단계: S1 음… 오클랜드 애슬레틱스가 마지막으로… | S2 …노히트 게임을 당한 게 언제였더라? | S3 잠깐만, 지금 그거 알아봤어? | S4 아, 그렇군요. 그럼 그 경기에서 투수는 누구였는데요?

     0.00s  user  발화 시작: 음… 오클랜드 애슬레틱스가 마지막으로…
     3.05s  user  발화 끝
     4.44s  user  발화 시작: …노히트 게임을 당한 게 언제였더라?
     6.11s  <ret> 발화 (turn2 첫 프레임)
     6.35s  agent 발화 시작: <ret> 애슬레틱스가 마지막으로 노히트 게임을 당한 건… 이천십팔년 사월 이십일일이었어요.
     6.51s  user  발화 끝
     7.71s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.30s]: "The last time the Oakland A's were no-hit was April 21, 2018, by Féli
    12.65s  agent 발화 끝
    13.01s  user  발화 시작: 잠깐만, 지금 그거 알아봤어?
    15.15s  user  발화 시작: 아, 그렇군요. 그럼 그 경기에서 투수는 누구였는데요?
    15.22s  user  발화 끝
    18.00s  <ret> 발화 (turn5 첫 프레임)
    18.32s  agent 발화 시작: <ret> 그 경기는 시애틀 매리너스의 펠릭스 에르난데스 선수가 완봉 노히트를 기록했어요.
    18.39s  user  발화 끝
    20.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: "(tool result) Félix Hernández pitched a complete-game no-hitter for t
    23.05s  user  발화 시작: 맞아요.
    23.68s  user  발화 끝
    24.39s  agent 발화 끝
    24.47s  agent 발화 시작: 펠릭스 에르난데스 선수는 정말 뛰어난 투수였죠.
    27.42s  agent 발화 끝
