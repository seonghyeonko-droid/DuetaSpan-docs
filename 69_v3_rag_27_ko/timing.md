# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "주우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아리온 씨, 혹시 그 주간 뉴스 패러디하는 라디오 코미디 아세 | S2 이스트 덜위치요? 처음 듣는 동네네요. | S3 …그런데 그 코미디 프로그램 이름이 뭐였죠? 갑자기 기억이 안 | S4 …Quiz'! 그거 재밌게 들었어요.

     0.00s  user  발화 시작: 아리온 씨, 혹시 그 주간 뉴스 패러디하는 라디오 코미디 아세요?
     5.11s  agent 발화 시작: 네, 어떤 걸 도와드릴까요? 그 프로그램에 대해 궁금하신 점이 있으신가요?
     5.11s  user  발화 끝
    10.21s  user  발화 시작: 음, 그 코미디언이 어디 태어났는지 궁금해요. 천구백육십구년생인데.
    10.21s  agent 발화 끝
    13.63s  <ret> 발화 (turn3 첫 프레임)
    13.79s  agent 발화 시작: <ret> 천구백육십구년 칠월 십오일에 런던의 이스트 덜위치에서 마일스 쥬프라는 영국의 코미디언이 태어났습니
    13.79s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.62s]: English comedian Miles Jupp was born in East Dulwich, London, on 15 Ju
    13.79s  user  발화 끝
    19.40s  user  발화 시작: 이스트 덜위치요? 처음 듣는 동네네요.
    19.40s  agent 발화 끝
    21.96s  agent 발화 시작: 런던의 남동쪽에 위치한 곳인데, 조용하고 아늑한 동네로 알려져 있어요. 아이들과 함께 살기에도 좋다고 하더라
    21.96s  user  발화 끝
    29.11s  user  발화 시작: 그치.
    29.11s  agent 발화 끝
    29.62s  agent 발화 시작: 마일스 쥬프는 그곳에서 유년 시절을 보내며 코미디언의 꿈을 키웠다고 합니다—
    29.62s  user  발화 끝
    34.72s  user  발화 시작: …그런데 그 코미디 프로그램 이름이 뭐였죠? 갑자기 기억이 안 나네요.
    34.72s  agent 발화 끝
    39.75s  <ret> 발화 (turn9 첫 프레임)
    39.83s  agent 발화 시작: <ret> 'The News Quiz'는 천구백구십년에 처음 비 비 씨 Radio 사에서 방송된 영국의 라디
    39.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.17s]: The News Quiz is a British radio comedy panel game, first broadcast on
    39.83s  user  발화 끝
    48.00s  user  발화 시작: 아.
    48.00s  agent 발화 끝
    48.51s  user  발화 시작: 아, 맞다! 'The News…
    48.51s  user  발화 끝
    50.55s  user  발화 시작: …Quiz'! 그거 재밌게 들었어요.
    50.55s  user  발화 끝
    52.59s  agent 발화 시작: 많은 분들이 즐겨 들으시는 프로그램이죠. 시사 풍자와 유머가 어우러져서 듣는 재미가 쏠쏠합니다.
    52.59s  user  발화 끝
    58.72s  agent 발화 끝
