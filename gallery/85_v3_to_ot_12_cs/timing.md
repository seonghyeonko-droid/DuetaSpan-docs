# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Clara",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "home",
#       "text": "User's home address is 560 Elm Street."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 미국에서 세 번째로 큰 주가 어디인지 알려 주실  | S2 면적, 구체적으로 말해서 평방 마일로 알려 주실 수 있나요? | S3 그럼 가장 큰 주는 어디인가요? 절대적으로 가장 큰 주가요? | S4 그렇게 큰 곳에 살면 사람들의 생각 방식이 달라질 거라고 생각

     0.00s  user  발화 시작: 안녕하세요, 미국에서 세 번째로 큰 주가 어디인지 알려 주실 수 있나요?
     4.93s  <ret> 발화 (turn1 첫 프레임)
     5.09s  user  발화 끝
     5.24s  agent 발화 시작: <ret> 흥미로운 질문인데, 캘리포니아가 면적 기준으로 세 번째로 큰 주야.
     5.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: California is the most populous state in the United States and the thi
     6.90s  user  발화 시작: 네.
     7.34s  user  발화 끝
    10.71s  agent 발화 끝
    10.80s  user  발화 시작: 정말요? 저는 텍사스가 그쪽에 있을 거라고 생각했어요.
    14.69s  user  발화 끝
    14.98s  agent 발화 시작: 텍사스도 크지, 정말—사실 두 번째로 커. 헷갈리기 쉬워.
    19.30s  user  발화 시작: 면적, 구체적으로 말해서 평방 마일로 알려 주실 수 있나요?
    19.52s  agent 발화 끝
    23.52s  <ret> 발화 (turn6 첫 프레임)
    23.83s  user  발화 끝
    23.91s  agent 발화 시작: <ret> 캘리포니아는 십육만 삼천육백구십육 평방 마일을 커버해—
    23.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: California covers an area of 163,696 square miles, according to the Un
    27.34s  user  발화 시작: 그게 호수 같은 수역 면적까지 포함된 건가요?
    28.03s  agent 발화 끝
    30.48s  <ret> 발화 (turn8 첫 프레임)
    30.71s  agent 발화 시작: <ret> 총 면적에는 십오만 오천칠백칠십구 점 이 평방 마일의 육지, 그리고 칠천구백 점 사 평방 마일의 
    30.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: The total area of California includes 155,779.2 square miles of land a
    30.90s  user  발화 끝
    37.42s  user  발화 시작: 네.
    38.05s  user  발화 끝
    39.76s  agent 발화 시작: 정말 다양한 풍경을 가지고 있어서 매력적인 것 같아.
    39.84s  agent 발화 끝
    43.51s  agent 발화 끝
    43.67s  user  발화 시작: 그럼 가장 큰 주는 어디인가요? 절대적으로 가장 큰 주가요?
    46.98s  <ret> 발화 (turn12 첫 프레임)
    47.22s  agent 발화 시작: <ret> 알래스카가 가장 큰데, 육십육만 오천삼백팔십사 평방 마일을 커버해.
    47.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Alaska is the largest state in the United States, with a total area of
    47.32s  user  발화 끝
    49.53s  user  발화 시작: 네.
    50.02s  user  발화 끝
    52.87s  user  발화 시작: 정말 엄청나네요! 알래스카에서는 모든 게 더 크다고 하잖아요.
    52.88s  agent 발화 끝
    57.47s  agent 발화 시작: 확실히 광활하다는 명성이 있고, 그럴 만한 가치가 있어. 정말 특별한 곳이야.
    57.60s  user  발화 끝
    62.66s  agent 발화 끝
    62.73s  user  발화 시작: 그렇게 큰 곳에 살면 사람들의 생각 방식이 달라질 거라고 생각하세요?
    67.68s  agent 발화 시작: 우리의 주변 환경이 우리의 관점을 형성하는 것 같아, 그렇지 않아? 우리의 규모 감각과 가능성에 영향을 미칠
    67.83s  user  발화 끝
    75.89s  agent 발화 끝
