# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
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
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 저 오늘 너무 피곤하네요. 어제 잠을 하나도 못 잤어요. | S2 벨기에 국기도요? 신기하네요. 혹시 그 두 나라 국기 디자인에 | S3 오, 그렇군요. 그럼 독일 국기가 처음 만들어진 건 언제인가요 | S4 아, 네, 감사합니다. 도움이 많이 됐어요.

     0.00s  user  발화 시작: 아, 저 오늘 너무 피곤하네요. 어제 잠을 하나도 못 잤어요. 근데 있잖아요, 혹시 독일 국기는 어떻게 생겼
     8.88s  <ret> 발화 (turn1 첫 프레임)
     8.95s  agent 발화 시작: <ret> 독일 국기는 검은색과 빨간색, 그리고 노란색으로 이루어져 있어요… 가로 줄무늬로 이루어져 있습니다
     9.04s  user  발화 끝
    10.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: 독일 국기는 검은색, 빨간색, 노란색의 가로 줄무늬로 이루어져 있습니다.
    16.08s  agent 발화 끝
    16.10s  user  발화 시작: 아, 검빨노! 맞아요, 맞아요. 그럼 그 비슷한 색깔을 가진 다른 나라 국기는 뭐가 있을까요?
    23.79s  <ret> 발화 (turn3 첫 프레임)
    23.94s  agent 발화 시작: <ret> 벨기에 국기도 검은색, 노란색, 빨간색을 사용하고 있어요… 가로 줄무늬로 이루어져 있습니다.
    24.07s  user  발화 끝
    25.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.17s]: 독일 국기는 검은색과 빨간색, 그리고 노란색으로 이루어져 있어요… 가로 줄무늬로 이루어져 있습니다.
    26.75s  user  발화 시작: 응응.
    27.57s  user  발화 끝
    30.08s  user  발화 시작: 벨기에 국기도요? 신기하네요. 혹시 그 두 나라 국기 디자인에 특별한 의미가 있나요?
    30.10s  agent 발화 끝
    36.28s  <ret> 발화 (turn6 첫 프레임)
    36.52s  agent 발화 시작: <ret> 독일 국기는 삼원색을 상징하고, 벨기에 국기는 자유와 독립을 나타낸다고 하네요… 자유와 독립을 나
    36.70s  user  발화 끝
    38.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: 독일 국기는 검은색과 빨간색, 그리고 노란색으로 이루어져 있어요… 가로 줄무늬로 이루어져 있습니다.
    43.80s  agent 발화 끝
    44.26s  user  발화 시작: 오, 그렇군요. 그럼 독일 국기가 처음 만들어진 건 언제인가요?
    48.82s  <ret> 발화 (turn8 첫 프레임)
    49.06s  agent 발화 시작: <ret> 독일 국기가 처음 만들어진 시기는… 정보를 찾을 수 없습니다.
    49.26s  user  발화 끝
    49.78s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.02s]: 독일 국기는 삼원색을 상징합니다.
    52.85s  user  발화 시작: 아, 네, 감사합니다. 도움이 많이 됐어요.
    53.08s  agent 발화 끝
    56.82s  agent 발화 시작: 도움이 되었다니 기쁘네요. 혹시 공부에 지칠 때 저에게 다시 찾아와 주세요.
    56.87s  user  발화 끝
    61.03s  agent 발화 끝
