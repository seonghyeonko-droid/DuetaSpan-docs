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

# EXAMINER(FDB-v2) 단계: S1 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했 | S2 그렇군요… 아, 혹시 마이클 잭슨이랑 다른 작업도 하셨나요? | S3 저기, 제 열쇠 보셨어요? | S4 그럼, 딱 그 한 곡이었던 거군요?

     0.00s  user  발화 시작: 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요?
     3.68s  <ret> 발화 (turn1 첫 프레임)
     3.93s  user  발화 끝
     4.00s  agent 발화 시작: <ret> 음, 에디 반 헤일런 님이 연주하셨는데, 정말 혁신적인 기타리스트셨어요. “Beat It”에서의 
     4.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: Eddie Van Halen, known for his innovative guitar work with the band Va
     7.00s  user  발화 시작: 네.
     7.55s  user  발화 끝
    11.79s  agent 발화 끝
    11.95s  user  발화 시작: 그렇군요… 아, 혹시 마이클 잭슨이랑 다른 작업도 하셨나요?
    15.99s  <ret> 발화 (turn4 첫 프레임)
    16.35s  user  발화 끝
    16.38s  agent 발화 시작: <ret> 아니요, 그 솔로는 그분들과의 유일한 녹음 협업이었어요. 에디 반 헤일런 님은 마이클 잭슨 님과 
    16.39s  ⚡SPAN 주입 [d'=1.68s / d_lead=10.80s]: Eddie Van Halen and Michael Jackson never collaborated on any other re
    26.98s  user  발화 시작: 저기, 제 열쇠 보셨어요?
    27.18s  agent 발화 끝
    29.12s  user  발화 시작: 그럼, 딱 그 한 곡이었던 거군요?
    29.24s  user  발화 끝
    31.84s  user  발화 끝
    31.86s  agent 발화 시작: 네, 딱 그 한 곡이에요. 단 한 번의 참여가 이렇게 기억에 남을 수 있다니, 정말 멋진 일이죠?
    37.32s  agent 발화 끝
