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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 "Beat It" 기타 솔로를 누가 | S2 와, 잭슨의 단골 밴드 멤버 중 한 명이 연주했을 거라고 생각 | S3 저기요, 냉동고에서 닭고기 꺼낸 거 기억하세요? | S4 아, 죄송해요. 제가 무슨 말을 하려 했었죠? 아, 맞다—반 

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했는지 궁금했거든요. 정말 유명한 사운드잖
     7.94s  <ret> 발화 (turn1 첫 프레임)
     8.02s  user  발화 끝
     8.26s  agent 발화 시작: <ret> 네, 좋은 질문이에요. 그 멋진 기타 솔로는 에디 반 헤일런이 연주한 것으로 알려져 있습니다.
     9.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.80s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    12.94s  user  발화 시작: 예.
    13.43s  user  발화 끝
    14.51s  user  발화 시작: 와, 잭슨의 단골 밴드 멤버 중 한 명이 연주했을 거라고 생각했었는데.
    14.56s  agent 발화 끝
    18.97s  agent 발화 시작: 사실 흔히 오해하시는 부분이에요. 그는 그 노래에 뭔가 다른 느낌을 원했고, 에디가 그걸 정말 잘 해냈어요.
    19.09s  user  발화 끝
    26.25s  agent 발화 끝
    26.49s  user  발화 시작: 저기요, 냉동고에서 닭고기 꺼낸 거 기억하세요?
    30.12s  user  발화 시작: 아, 죄송해요. 제가 무슨 말을 하려 했었죠? 아, 맞다—반 헤일런은 "Beat It" 전에 유명한 뮤지션이
    30.33s  user  발화 끝
    35.89s  <ret> 발화 (turn7 첫 프레임)
    36.21s  agent 발화 시작: <ret> 네, 물론이었어요. 에디 반 헤일런은 천구백칠십이 년에 밴드 반 헤일런을 결성하고 빠르게 명성을 
    36.42s  user  발화 끝
    37.49s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.71s]: Eddie Van Halen gained prominence as the guitarist and founder of the 
    43.81s  agent 발화 끝
