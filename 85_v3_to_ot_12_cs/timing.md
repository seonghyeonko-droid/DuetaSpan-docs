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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 | S2 …계속 말씀해 주세요, 잘. 듣고 있어요. | S3 와, 정말 안됐네요. 그 솔로에 대해 돈을 못 받았어요? | S4 맞아요. 고마워요, 잘. 이제 이야기를 알게 되니 조금 마음이

     0.00s  user  발화 시작: 안녕하세요. 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요? 늘 궁금했거든요.
     7.20s  <ret> 발화 (turn1 첫 프레임)
     7.37s  user  발화 끝
     7.52s  agent 발화 시작: <ret> 네, “Beat It” 기타 솔로는… 에디 반 헤일런이 연주했습니다.
     9.03s  user  발화 시작: 네.
     9.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: Eddie Van Halen played the guitar solo on Michael Jackson's "Beat It".
     9.62s  user  발화 끝
    11.60s  agent 발화 끝
    11.66s  user  발화 시작: 아, 나중에 우유 사 오라는 거 잊지 마세요.
    14.46s  user  발화 시작: …계속 말씀해 주세요, 잘. 듣고 있어요.
    14.57s  user  발화 끝
    16.81s  <ret> 발화 (turn5 첫 프레임)
    17.21s  agent 발화 시작: <ret> 에디 반 헤일런이 그 솔로를 연주했는데, 작곡가 크레딧이나 로열티를 받지 못했대요. 꽤 흥미로운 
    17.27s  user  발화 끝
    18.49s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.69s]: [Eddie Van Halen performed the iconic guitar solo on Michael Jackson's
    24.41s  user  발화 시작: 와, 정말 안됐네요. 그 솔로에 대해 돈을 못 받았어요?
    24.90s  agent 발화 끝
    27.97s  user  발화 끝
    28.11s  agent 발화 시작: 안타깝게도 그런 상황에 놓이는 아티스트들이 많아요, 심지어 아주 유명한 작품에서도요. 스스로를 위해 목소리를
    39.05s  agent 발화 끝
    40.19s  user  발화 시작: 맞아요. 고마워요, 잘. 이제 이야기를 알게 되니 조금 마음이 편안해지네요.
    45.56s  agent 발화 시작: 도움이 됐다니 다행이에요. 때로는 배경을 이해하는 것만으로도 질문에 대한 긴장감을 조금 풀 수 있거든요.
    45.61s  user  발화 끝
    52.64s  agent 발화 끝
