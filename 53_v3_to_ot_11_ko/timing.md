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

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트를 당한 게 언제였는지 아세요 | S2 아, 죄송해요. 다시 질문할게요. 그 날짜가 정확한가요? | S3 음… 그 이후로 노히트 게임이 없었나요? | S4 …애슬레틱스 경기를 보면서 잠들기 전에 뭘 하면 좋을까요?

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트를 당한 게 언제였는지 아세요?
     3.96s  <ret> 발화 (turn1 첫 프레임)
     4.12s  user  발화 끝
     4.20s  agent 발화 시작: <ret> 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 건, 이천십팔년 사월 이십일이었습니다.
     5.56s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.83s]: The Oakland Athletics were last no-hit on April 21, 2018.
     9.98s  user  발화 시작: 잠깐만, 아까 그 얘기는…
    10.03s  agent 발화 끝
    12.05s  user  발화 끝
    13.89s  user  발화 시작: 아, 죄송해요. 다시 질문할게요. 그 날짜가 정확한가요?
    18.77s  <ret> 발화 (turn4 첫 프레임)
    18.88s  user  발화 끝
    19.09s  agent 발화 시작: <ret> 네, 정확합니다. 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 날짜는 이천십팔년 사월 이십일입니
    20.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: The Oakland Athletics were last no-hit on April 21, 2018.
    26.67s  user  발화 시작: 맞아요.
    27.40s  user  발화 끝
    28.69s  user  발화 시작: 음… 그 이후로 노히트 게임이 없었나요?
    28.73s  agent 발화 끝
    30.94s  <ret> 발화 (turn7 첫 프레임)
    31.10s  agent 발화 시작: <ret> 아니요, 이천십팔년 사월 이십일 이후로는 아직 노히트 게임이 없었습니다. 충분한 휴식을 취하시는 
    31.28s  user  발화 끝
    32.46s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.27s]: The Oakland Athletics have not been no-hit since April 21, 2018.
    33.44s  user  발화 시작: 그렇죠.
    34.26s  user  발화 끝
    38.38s  agent 발화 끝
    40.73s  user  발화 시작: 그렇군요. 그럼…
    42.38s  user  발화 끝
    43.34s  user  발화 시작: …애슬레틱스 경기를 보면서 잠들기 전에 뭘 하면 좋을까요?
    47.03s  agent 발화 시작: 잠들기 전에 따뜻한 우유 한 잔을 마시거나, 가벼운 스트레칭을 해 보세요. 편안한 마음으로 경기를 즐기시는 
    47.13s  user  발화 끝
    54.72s  agent 발화 끝
