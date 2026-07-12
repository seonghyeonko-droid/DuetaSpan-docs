# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 알리. 농구 선수에 대해 궁금한 게 있어서요. | S2 선수들이 시간이 지나면서 키가 커지는 건가요, 아니면 거의 그 | S3 아, 진짜요? | S4 그러네요. 정보 감사합니다!

     0.00s  user  발화 시작: 안녕하세요, 알리. 농구 선수에 대해 궁금한 게 있어서요.
     3.84s  agent 발화 시작: 안녕! 연결되어서 반가워.
     3.84s  user  발화 끝
     5.28s  user  발화 시작: 음.
     5.28s  agent 발화 끝
     5.76s  user  발화 시작: 엔 비 에이 선수들의 평균 키가 어떻게 돼요?
     5.76s  user  발화 끝
     9.20s  <ret> 발화 (turn4 첫 프레임)
     9.60s  agent 발화 시작: <ret> 음, 엔 비 에이 선수 평균 키는 대략 육피트 칠인치 정도 돼—
     9.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: The average height of an NBA player is approximately 6 feet 7 inches, 
     9.60s  user  발화 끝
    15.36s  user  발화 시작: 선수들이 시간이 지나면서 키가 커지는 건가요, 아니면 거의 그대로 유지되는 건가요?
    15.36s  agent 발화 끝
    20.64s  agent 발화 시작: 평균 키가 조금씩 늘어난 것 같아—
    20.64s  user  발화 끝
    23.52s  user  발화 시작: 아, 진짜요?
    23.52s  agent 발화 끝
    24.48s  agent 발화 시작: 응, 수년에 걸쳐 엔 비 에이 선수들의 평균 키가 점진적으로 증가했는데, 아주 드라마틱하게 늘어난 건 아니야
    24.48s  user  발화 끝
    36.00s  user  발화 시작: 음.
    36.00s  agent 발화 끝
    36.48s  user  발화 시작: 그러네요. 정보 감사합니다!
    36.48s  user  발화 끝
    37.92s  agent 발화 시작: 천만에. 도움이 됐다니 기쁘고, 뭔가 통찰력을 제공할 수 있어서 다행이야.
    37.92s  user  발화 끝
    42.73s  agent 발화 끝
