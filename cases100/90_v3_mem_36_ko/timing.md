# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "은형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Peruvian."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bibimbap."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "sibling",
#       "text": "User has a younger sibling named Sofia."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 바우스님. 잘 지냈어요. 그런데 전에 이야기했던  | S2 음, 바르셀로나는 가보고 싶었는데, 마드리드도 좋겠네요. | S3 이야, 갈 곳이 너무 많네요. | S4 파에야는 꼭 먹어봐야겠네요.

     0.00s  agent 발화 시작: 안녕하세요, 은형님. 저는 바우스입니다. 오늘 하루 어떻게 지내셨어요?
     5.92s  agent 발화 끝
     5.96s  user  발화 시작: 안녕하세요, 바우스님. 잘 지냈어요. 그런데 전에 이야기했던 스페인 여행 계획 좀 다시 여쭤봐도 될까요?
    12.83s  <ret> 발화 (turn2 첫 프레임)
    13.05s  agent 발화 시작: <ret> 스페인 여행에 대해 물어보셨었군요. 투자 관련해서 오십만 원씩 시작한다고 말씀하셨던 기억이 나네요
    13.19s  user  발화 끝
    14.22s  ⚡SPAN 주입 [d'=1.39s / d_lead=7.69s]: [2026-03-26] Past chat — Learning to invest: asked about index funds v
    18.23s  user  발화 시작: 그렇죠.
    18.82s  user  발화 끝
    20.74s  agent 발화 끝
    20.75s  user  발화 시작: 아, 맞아요. 투자 이야기도 했었죠. 스페인 여행은 언제쯤 가는 게 좋을까요?
    26.49s  agent 발화 시작: 스페인 여행 시기를 고민하시는군요. 여행 계획을 세우는 데 도움을 드릴 수 있어요.
    26.51s  user  발화 끝
    29.53s  user  발화 시작: 아.
    30.16s  user  발화 끝
    32.68s  agent 발화 끝
    33.43s  user  발화 시작: 네, 부탁드려요.
    35.00s  agent 발화 시작: 보통 스페인 여행은 봄이나 가을이 가장 좋다고 해요. 여름은 너무 덥고, 겨울은 추울 수 있거든요.
    35.05s  user  발화 끝
    41.06s  user  발화 시작: 맞아요.
    41.83s  user  발화 끝
    42.77s  agent 발화 시작: 스페인 여행에서 가장 인기 있는 도시는 바르셀로나와 마드리드예요. 바르셀로나는 가우디 건축물로 유명하고, 마
    42.77s  agent 발화 끝
    46.09s  user  발화 시작: 어머.
    46.77s  user  발화 끝
    53.38s  agent 발화 끝
    53.48s  user  발화 시작: 음, 바르셀로나는 가보고 싶었는데, 마드리드도 좋겠네요.
    58.17s  agent 발화 시작: 마드리드도 매력적인 도시예요. 프라도 미술관은 꼭 방문해 보시길 추천해요.
    58.25s  user  발화 끝
    63.59s  agent 발화 끝
    63.66s  user  발화 시작: 프라도 미술관, 메모해 둬야겠어요.
    66.25s  user  발화 끝
    66.75s  agent 발화 시작: 바르셀로나와 마드리드 외에도 세비야, 발렌시아 같은 도시들도 좋아요. 세비야는 플라멩코의 본고장이고, 발렌시
    70.95s  user  발화 시작: 음.
    71.39s  user  발화 끝
    77.69s  agent 발화 끝
    78.75s  user  발화 시작: 이야, 갈 곳이 너무 많네요.
    80.84s  agent 발화 시작: 여행 계획을 세우는 건 즐거운 일이죠. 혹시 특별히 관심 있는 분야가 있으세요? 예를 들어, 미술, 건축, 
    80.86s  user  발화 끝
    91.21s  agent 발화 끝
    91.52s  user  발화 시작: 음식에 관심이 많아요. 스페인 음식도 맛있잖아요.
    94.53s  <ret> 발화 (turn20 첫 프레임)
    94.70s  user  발화 끝
    94.90s  agent 발화 시작: <ret> 음식에 관심이 많으시군요. 페루 음식을 좋아하신다고 말씀하셨던 것도 기억나요. 스페인 음식은 페루
    95.35s  ⚡SPAN 주입 [d'=0.82s / d_lead=10.39s]: [2026-05-29] User's favorite cuisine is Peruvian.
   105.18s  user  발화 시작: 정말요? 페루 음식과 비슷한 점이 있다니, 더 기대되네요.
   105.28s  agent 발화 끝
   109.17s  user  발화 끝
   109.64s  agent 발화 시작: 네, 예를 들어 해산물 요리가 발달했다는 점이 비슷해요. 스페인에는 파에야, 마리스코스 같은 해산물 요리가 
   118.35s  agent 발화 끝
   118.40s  user  발화 시작: 파에야는 꼭 먹어봐야겠네요.
   120.70s  user  발화 끝
   120.77s  agent 발화 시작: 파에야는 스페인 대표 음식 중 하나죠. 바르셀로나에서 맛있는 파에야를 드실 수 있을 거예요.
   126.74s  user  발화 시작: 바르셀로나에서 파에야, 알겠습니다!
   126.79s  agent 발화 끝
   129.51s  user  발화 끝
   129.81s  agent 발화 시작: [happy] 여행 계획을 세우는 데 조금이나마 도움이 되었으면 좋겠네요. 언제든지 궁금한 점이 있으면 저에
   137.87s  agent 발화 끝
