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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 저기요, 혹시 쓰레기 버리는 거 잊지 않으셨죠? | S3 죄송합니다. 그럼 반 헤일런은 그냥… 하겠다고 동의한 건가요? | S4 정말 대단하네요! 잭슨이 직접 *그에게* 갔다고요? 전혀 몰랐

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금해서요. 계속 신경 쓰였거든요.
     6.93s  <ret> 발화 (turn1 첫 프레임)
     6.99s  user  발화 끝
     7.25s  agent 발화 시작: <ret> 네, 좋은 질문이에요. 아주 유명한 솔로죠. 에디 반 헤일런이 마이클 잭슨의 “Beat It” 기
     8.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.43s  user  발화 시작: 예.
    10.79s  user  발화 끝
    15.32s  user  발화 시작: 와, 진짜요? 다른 사람이라고 생각했는데. 정말 놀랍네요—
    15.36s  agent 발화 끝
    19.42s  user  발화 시작: 저기요, 혹시 쓰레기 버리는 거 잊지 않으셨죠?
    19.48s  user  발화 끝
    22.52s  user  발화 시작: 죄송합니다. 그럼 반 헤일런은 그냥… 하겠다고 동의한 건가요?
    22.57s  user  발화 끝
    26.53s  <ret> 발화 (turn6 첫 프레임)
    26.92s  agent 발화 시작: <ret> 사실 아주 흥미로운 이야기입니다. 처음에는 자신의 스타일과 맞지 않아서 망설였다고 해요.
    27.09s  user  발화 끝
    27.81s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.35s]: [source: Rolling Stone] Van Halen initially refused to play on “Beat I
    33.26s  agent 발화 시작: 마이클 잭슨이 직접 에디 반 헤일런을 찾아가서 솔로를 녹음하도록 설득했습니다.
    33.26s  agent 발화 끝
    38.16s  user  발화 시작: 정말 대단하네요! 잭슨이 직접 *그에게* 갔다고요? 전혀 몰랐어요.
    38.21s  agent 발화 끝
    43.26s  agent 발화 시작: 정말 잭슨이 그 노래에 원하는 사운드를 얻기 위해 얼마나 헌신했는지 보여주는 것 같아요. 때로는 약간의 끈기
    43.34s  user  발화 끝
    52.63s  agent 발화 끝
