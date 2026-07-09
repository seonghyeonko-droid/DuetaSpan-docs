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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨 “Beat It” 기타 솔로를 누가  | S2 저기요, 혹시 냉동실에서 닭고기 꺼내 놓으셨어요? | S3 죄송해요. 그럼, 반 헤일런은 그냥… 하기로 동의한 건가요?  | S4 정말 멋지네요. 퀸시 존스는 분명 뭘 하고 싶은지 알고 있었던

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨 “Beat It” 기타 솔로를 누가 연주했는지 궁금했는데, 다른 곡들하고는 좀 다른
     7.43s  <ret> 발화 (turn1 첫 프레임)
     7.46s  user  발화 끝
     7.75s  agent 발화 시작: <ret> 네, 정말 유명한 사운드에 대한 좋은 질문이세요. “Beat It” 기타 솔로는 에디 반 헤일런이
     9.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.37s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.61s  user  발화 시작: 예.
    10.92s  user  발화 끝
    14.98s  user  발화 시작: 와, 에디 반 헤일런이요? 좀… 뜻밖인데요. 잭슨 밴드에 있는 사람이 연주했을 거라고 생각했어요.
    15.03s  agent 발화 끝
    22.04s  user  발화 시작: 저기요, 혹시 냉동실에서 닭고기 꺼내 놓으셨어요?
    22.11s  user  발화 끝
    25.90s  user  발화 시작: 죄송해요. 그럼, 반 헤일런은 그냥… 하기로 동의한 건가요? 마이클과 친구였나요?
    25.97s  user  발화 끝
    31.73s  <ret> 발화 (turn6 첫 프레임)
    32.13s  agent 발화 시작: <ret> 음, 퀸시 존스의 비전에 의한 협업이었던 것 같아요. 그는 반 헤일런의 연주를 존경했고 그 에너지
    32.24s  user  발화 끝
    33.41s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.74s]: Quincy Jones requested Eddie Van Halen play on “Beat It” despite recor
    39.86s  agent 발화 시작: 퀸시 존스가 에디 반 헤일런에게 “Beat It”에 참여해 달라고 요청했는데, 레코드 회사는 약간 망설였다고
    39.86s  agent 발화 끝
    46.85s  user  발화 시작: 정말 멋지네요. 퀸시 존스는 분명 뭘 하고 싶은지 알고 있었던 것 같아요. 감사합니다, 잘.
    46.94s  agent 발화 끝
    52.69s  user  발화 끝
