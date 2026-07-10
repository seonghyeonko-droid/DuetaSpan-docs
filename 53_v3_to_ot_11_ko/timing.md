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

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트를 당한 마지막 날짜가 언제였 | S2 아, 죄송해요. 다시 말씀해… | S3 …주시겠어요? 날짜가 정확히 언제였죠? | S4 아니요, 괜찮아요. 그냥 궁금해서 물어봤어요. 감사합니다.

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트를 당한 마지막 날짜가 언제였는지 아세요?
     4.44s  <ret> 발화 (turn1 첫 프레임)
     4.63s  user  발화 끝
     4.68s  agent 발화 시작: <ret> 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 건, 이천십팔년 사월 이십일일이었어요.
     4.68s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.21s]: The Oakland Athletics were last no-hit on April 21, 2018, by Mike Fier
    10.84s  user  발화 시작: 잠깐만, 엄마한테 전화 좀 할게.
    10.88s  agent 발화 끝
    13.12s  user  발화 시작: 아, 죄송해요. 다시 말씀해…
    13.18s  user  발화 끝
    14.87s  user  발화 끝
    16.15s  user  발화 시작: …주시겠어요? 날짜가 정확히 언제였죠?
    18.78s  <ret> 발화 (turn5 첫 프레임)
    19.10s  agent 발화 시작: <ret> 이천십팔년 사월 이십일일이었어요. 디트로이트 타이거스의 마이크 피어스가 던졌죠.
    19.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: The Oakland Athletics were last no-hit on April 21, 2018, by Mike Fier
    19.11s  user  발화 끝
    23.28s  user  발화 시작: 맞아요.
    23.91s  user  발화 끝
    24.47s  agent 발화 끝
    24.48s  agent 발화 시작: 혹시 잠시 수면 환경에 대해 이야기해 볼까요? 편안한 휴식을 취하는 데 도움이 될 수 있을 거예요.
    26.38s  user  발화 시작: 그렇죠.
    27.02s  user  발화 끝
    30.55s  agent 발화 끝
    30.70s  user  발화 시작: 아니요, 괜찮아요. 그냥 궁금해서 물어봤어요. 감사합니다.
    34.45s  user  발화 끝
    34.49s  agent 발화 시작: 네, 알겠습니다.
    35.30s  agent 발화 끝
