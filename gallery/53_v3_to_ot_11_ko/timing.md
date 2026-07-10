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

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 마지막 날짜가  | S2 잠깐만, 김치냉장고 온도 맞춰야 하는데… | S3 아, 죄송합니다. 다시 말씀드리자면… | S4 …그 날짜가 정확한가요? 기억이 잘 안 나서요.

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 마지막 날짜가 언제였는지 알 수 있을까요?
     5.28s  user  발화 끝
     5.38s  <ret> 발화 (turn1 첫 프레임)
     5.62s  agent 발화 시작: <ret> 오클랜드 애슬레틱스가 마지막으로 노히트 게임을 당한 건 이천십팔년 사월 이십일일이었어요. 혹시 야
     7.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: The last time the Oakland A's were no hit was April 21, 2018.
    12.90s  user  발화 시작: 잠깐만, 김치냉장고 온도 맞춰야 하는데…
    12.94s  agent 발화 끝
    15.87s  user  발화 끝
    17.71s  user  발화 시작: 아, 죄송합니다. 다시 말씀드리자면…
    19.83s  user  발화 끝
    21.13s  user  발화 시작: …그 날짜가 정확한가요? 기억이 잘 안 나서요.
    23.40s  <ret> 발화 (turn5 첫 프레임)
    23.71s  user  발화 끝
    23.72s  agent 발화 시작: <ret> 네, 정확합니다. 이천십팔년 사월 이십일일이 맞습니다.
    25.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: The last time the Oakland A's were no hit was April 21, 2018.
    26.51s  user  발화 시작: 맞아요.
    27.15s  user  발화 끝
    27.36s  agent 발화 시작: 혹시 잠자리에 드시기 전에 야구 이야기를 나누는 걸 좋아하시나요? 잠들기 전에 즐거운 상상을 하는 것도 숙면
    27.37s  agent 발화 끝
    35.01s  agent 발화 끝
