# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "혜민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 필라델피아에서 이탈리아 식당 찾아줘. | S2 랄프스 레스토랑까지 가는 길 알려줘. | S3 지금 몇 시야? | S4 오늘 기분 전환할 만한 영화 추천해 줄래?

     0.00s  user  발화 시작: 필라델피아에서 이탈리아 식당 찾아줘.
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.72s  user  발화 끝
     2.83s  agent 발화 시작: <ret> 필라델피아에는 랄프스 이탈리안 레스토랑을 포함한 이탈리아 식당이 많이 있어요. 구번가 남쪽 칠백육
     2.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: There are many Italian restaurants in Philadelphia, including Ralph's 
    11.78s  agent 발화 끝
    12.26s  user  발화 시작: 랄프스 레스토랑까지 가는 길 알려줘.
    14.53s  <ret> 발화 (turn3 첫 프레임)
    14.84s  agent 발화 시작: <ret> 랄프스 레스토랑까지는 현재 거리에서 서쪽으로 영 점 일마일 이동한 뒤, 구번가에서 오른쪽으로 영 
    14.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) Directions to Ralph's Italian Restaurant: Start heading 
    14.85s  user  발화 끝
    20.30s  user  발화 시작: 음.
    20.66s  user  발화 끝
    23.74s  agent 발화 끝
    24.62s  user  발화 시작: 지금 몇 시야?
    25.40s  <ret> 발화 (turn6 첫 프레임)
    25.62s  user  발화 끝
    25.63s  agent 발화 시작: <ret> 지금은 미국 동부 시간으로 이천이십육년 칠월 십일 금요일 오후 두시 사십일분이에요.
    25.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) It is Friday, July 10, 2026 at 2:41 PM in America/New Yo
    32.49s  agent 발화 끝
    33.85s  user  발화 시작: 오늘 기분 전환할 만한 영화 추천해 줄래?
    36.48s  user  발화 끝
    36.66s  agent 발화 시작: 음, 영화로 기분 전환이라니 좋은 생각이에요! 혹시 특별히 좋아하는 장르가 있으세요?
    42.96s  agent 발화 끝
