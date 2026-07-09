# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 와, 에디 반 헤일런이요? 잭슨 밴드와 더 가까운 사람이 연주 | S3 저기, 혹시 쓰레기 버리셨어요? | S4 죄송해요. 그 트랙에 그를 참여시키는 게 어려웠나요?

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했거든요. 정말 유명한 사운드라
     7.51s  <ret> 발화 (turn1 첫 프레임)
     7.59s  user  발화 끝
     7.83s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 이야기가 좀 있어요! 에디 반 헤일런이 마이클 잭슨의 “Beat It” 기
     9.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.92s  user  발화 시작: 예.
    11.41s  user  발화 끝
    15.66s  user  발화 시작: 와, 에디 반 헤일런이요? 잭슨 밴드와 더 가까운 사람이 연주했을 거라고 생각했는데.
    15.71s  agent 발화 끝
    21.73s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    21.77s  user  발화 끝
    23.99s  user  발화 시작: 죄송해요. 그 트랙에 그를 참여시키는 게 어려웠나요?
    24.03s  user  발화 끝
    27.18s  <ret> 발화 (turn6 첫 프레임)
    27.58s  agent 발화 시작: <ret> 음, 흔한 방식은 아니었고, 설득이 필요했어요.
    27.73s  user  발화 끝
    28.46s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.49s]: [source: Rolling Stone] Quincy Jones had to convince Van Halen to cont
    32.06s  agent 발화 시작: 퀸시 존스가 처음에는 망설였지만 에디 반 헤일런을 설득해서 그 곡에 참여하게 했습니다.
    32.06s  agent 발화 끝
    37.85s  agent 발화 끝
