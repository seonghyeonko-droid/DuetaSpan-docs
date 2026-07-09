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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 와, 진짜요? 저는 항상 다른 사람이라고 생각했었는데. 정말  | S3 저기, 혹시 쓰레기 버리셨어요? | S4 죄송해요. 그 노래를 위해 특별히 섭외한 건가요, 아니면 그냥

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했거든요. 정말 명곡이잖아요.
     6.29s  <ret> 발화 (turn1 첫 프레임)
     6.29s  user  발화 끝
     6.61s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 아주 유명한 솔로죠. 에디 반 헤일런이 그 상징적인 기타 솔로를 연주한 것
     8.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.67s  user  발화 시작: 예.
     9.98s  user  발화 끝
    14.33s  user  발화 시작: 와, 진짜요? 저는 항상 다른 사람이라고 생각했었는데. 정말 대단하네요.
    14.40s  agent 발화 끝
    19.02s  agent 발화 시작: 정말 놀라운 연주 실력이고, 당시로서는 꽤 뜻밖의 협업이었답니다.
    19.14s  user  발화 끝
    23.56s  agent 발화 끝
    23.82s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    25.91s  user  발화 시작: 죄송해요. 그 노래를 위해 특별히 섭외한 건가요, 아니면 그냥 우연히 된 건가요?
    26.12s  user  발화 끝
    30.20s  <ret> 발화 (turn7 첫 프레임)
    30.60s  agent 발화 시작: <ret> 마이클 잭슨이 직접 그를 찾았어요. 잭슨이 반 헤일런에게 그 곡에 참여해 달라고 개인적으로 요청했
    30.77s  user  발화 끝
    31.64s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.84s]: Michael Jackson personally requested Eddie Van Halen to play on “Beat 
    37.23s  agent 발화 끝
