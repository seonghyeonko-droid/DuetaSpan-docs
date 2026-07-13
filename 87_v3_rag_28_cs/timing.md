# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Clara",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "home",
#       "text": "User's home address is 900 Elm Street."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 야, 여행 계획 짜려는데 너무 복잡해. 뭘 먼저 해야 할지 모 | S2 무조건 휴식. 그냥 쉬고 싶어… | S3 …그리고 맛있는 음식도 먹고, 미술관 같은 데도 가고 싶고. | S4 그래, 맞아. 다시 집중하자. 피렌체가 예쁘고, 미술관도 좋다

     0.00s  user  발화 시작: 야, 여행 계획 짜려는데 너무 복잡해. 뭘 먼저 해야 할지 모르겠어.
     6.43s  agent 발화 시작: 계획을 세우는 게 한 번에 많아 보일 수 있지만, 나눠서 하면 더 쉬워요. 어디로 가고 싶으신지부터 시작해 
     6.43s  user  발화 끝
    18.71s  user  발화 시작: 맞아.
    18.71s  agent 발화 끝
    19.30s  user  발화 시작: 음, 이탈리아? 늘 가고 싶었는데… 뭔가 복잡해 보여.
    19.30s  user  발화 끝
    23.97s  agent 발화 시작: 네.
    23.97s  user  발화 끝
    24.56s  agent 발화 시작: 이탈리아는 정말 멋진 곳이에요! 계획하기가 부담스러울 수도 있지만, 차근차근 해나가면 돼요. 어떤 경험을 하
    24.56s  agent 발화 끝
    39.17s  user  발화 시작: 무조건 휴식. 그냥 쉬고 싶어…
    39.17s  agent 발화 끝
    42.10s  user  발화 시작: …그리고 맛있는 음식도 먹고, 미술관 같은 데도 가고 싶고.
    42.10s  user  발화 끝
    47.29s  <ret> 발화 (turn8 첫 프레임)
    47.36s  agent 발화 시작: <ret> 참 흥미로운 건, 최초의 분유가 사실은 천팔백육십칠 년에 독일 화학자 유스투스 폰 리비히가 개발했
    47.36s  user  발화 끝
    48.29s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.77s]: The first commercially available infant formula, developed by German c
    56.13s  user  발화 시작: 와, 천팔백육십칠 년? 엄청 오래됐네! 분유가 그렇게 오래전부터 있었다니 몰랐어.
    56.13s  agent 발화 끝
    61.98s  agent 발화 시작: 정말 오랜 역사를 가지고 있네요! 그 이후로 얼마나 많이 발전했는지 놀랍지 않아요? 다시 여행 계획으로 돌아
    61.98s  user  발화 끝
    75.43s  user  발화 시작: 응.
    75.43s  agent 발화 끝
    76.01s  user  발화 시작: 그래, 맞아. 다시 집중하자. 피렌체가 예쁘고, 미술관도 좋다고 들었어.
    76.01s  user  발화 끝
    81.27s  agent 발화 시작: 네.
    81.27s  user  발화 끝
    81.86s  agent 발화 시작: 피렌체는 정말 좋은 선택이에요! [happy] 진정한 예술과 문화의 보고예요. 얼마나 머물고 싶으세요?
    81.86s  agent 발화 끝
    88.87s  agent 발화 끝
