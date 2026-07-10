# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 회계팀에서 온 이메일 보셨어요? | S3 저기… 그 솔로 연주에 대해서 얼마나 받았는지 알 수 있을까요 | S4 그게… 생각보다 적은 금액이네요. 그 정도 상징적인 곡이라면 

     0.00s  user  발화 시작: 안녕하세요, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했는데, 혹시 아시나요?
     5.67s  <ret> 발화 (turn1 첫 프레임)
     5.99s  agent 발화 시작: <ret> 네, 에디 밴 헤일런 씨가 연주하셨습니다. 그 곡에 정말 독특한 에너지를 더해주셨다고 생각합니다.
     6.11s  user  발화 끝
     7.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     8.52s  user  발화 시작: 네.
     8.88s  user  발화 끝
    12.60s  user  발화 시작: 정말인가요? 평소 스타일과는 좀 다른 느낌이 들었거든요.
    12.62s  agent 발화 끝
    16.61s  user  발화 시작: 회계팀에서 온 이메일 보셨어요?
    16.72s  user  발화 끝
    18.78s  user  발화 시작: 저기… 그 솔로 연주에 대해서 얼마나 받았는지 알 수 있을까요?
    18.93s  user  발화 끝
    22.85s  <ret> 발화 (turn6 첫 프레임)
    23.25s  agent 발화 시작: <ret> 음, 이만 달러를 받으셨다고 합니다. 그에게는 비교적 짧은 세션이었다고 이해하고 있습니다.
    23.36s  user  발화 끝
    24.13s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.49s]: Eddie Van Halen was paid $20,000 for his work on “Beat It”.
    29.74s  agent 발화 끝
    29.86s  user  발화 시작: 그게… 생각보다 적은 금액이네요. 그 정도 상징적인 곡이라면 더 받을 줄 알았는데.
    36.18s  agent 발화 시작: 때로는 가장 큰 기여가 항상 돈으로 측정되지는 않는다고 생각합니다. 중요한 건 영향력이죠.
    36.20s  user  발화 끝
    43.13s  agent 발화 끝
