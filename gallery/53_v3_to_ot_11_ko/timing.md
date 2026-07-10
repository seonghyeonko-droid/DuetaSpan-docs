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

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였 | S2 아, 그렇군요. 그 경기 투수는 누구였죠? | S3 잠깐만, 엄마, 오늘 저녁 뭐 먹을까? | S4 아, 죄송해요. 다시 말씀드려도 될까요? 그 투수 이름이…

     0.00s  user  발화 시작: 음… 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였더라? 기억이 잘 안 나네.
     6.10s  <ret> 발화 (turn1 첫 프레임)
     6.34s  agent 발화 시작: <ret> 이천십팔년 사월 이십일일이 마지막으로 오클랜드 애슬레틱스를 상대로 노히트 게임이 나왔습니다.
     6.43s  user  발화 끝
     7.70s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.47s]: [source: Wikipedia] The last no-hitter against the Oakland Athletics o
    11.58s  user  발화 시작: 아, 그렇군요. 그 경기 투수는 누구였죠?
    11.81s  agent 발화 끝
    14.67s  <ret> 발화 (turn3 첫 프레임)
    14.98s  agent 발화 시작: <ret> 게릿 콜 선수가 휴스턴 애스트로스 소속으로 오클랜드 애슬레틱스를 상대로 노히트 경기를 펼쳤습니다.
    15.09s  user  발화 끝
    16.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: [source: MLB.com] Gerrit Cole pitched the no-hitter for the Houston As
    21.19s  user  발화 시작: 잠깐만, 엄마, 오늘 저녁 뭐 먹을까?
    21.65s  agent 발화 끝
    24.42s  user  발화 시작: 아, 죄송해요. 다시 말씀드려도 될까요? 그 투수 이름이…
    24.57s  user  발화 끝
    27.84s  agent 발화 시작: 게릿 콜 선수였습니다. 혹시 다른 궁금한 점이 있으신가요? [curious]
    28.02s  user  발화 끝
    31.73s  agent 발화 끝
