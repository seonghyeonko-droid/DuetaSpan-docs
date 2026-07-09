# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 오클랜드 에이스가 노히트 게임을 당한 게 언제였더라? 기 | S2 와, 벌써 그렇게 오래됐어요? 시간이 정말 빠르네요. | S3 잠깐만, 지금 엄마한테 전화 좀 해야 돼. | S4 아, 죄송해요. 다시 말씀드리자면, 에이스 팀의 홈구장은 어디

     0.00s  user  발화 시작: 음… 오클랜드 에이스가 노히트 게임을 당한 게 언제였더라? 기억이 잘 안 나네.
     4.72s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> 에이스 팀 관련해서는 제가 한번 찾아볼게요. 두천십팔년 사월 이십일이 마지막으로 노히트 게임을 당
     5.00s  user  발화 끝
     5.84s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.20s]: April 21, 2018.
    12.21s  user  발화 시작: 와, 벌써 그렇게 오래됐어요? 시간이 정말 빠르네요.
    12.42s  agent 발화 끝
    16.18s  user  발화 끝
    16.26s  agent 발화 시작: 그렇죠. 야구 시즌은 늘 빠르게 지나가는 것 같아요. 혹시 다른 궁금한 점이 있으세요?
    21.25s  user  발화 시작: 잠깐만, 지금 엄마한테 전화 좀 해야 돼.
    21.72s  agent 발화 끝
    23.75s  user  발화 시작: 아, 죄송해요. 다시 말씀드리자면, 에이스 팀의 홈구장은 어디예요?
    23.88s  user  발화 끝
    28.93s  user  발화 끝
