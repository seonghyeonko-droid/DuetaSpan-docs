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

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 독일 국기 색깔이 뭐였더라? 까먹었어. | S2 아, 맞다! 검정, 빨강, 노랑이었지. 근데 그 세 가지 색깔 | S3 벨기에? 오, 신기하다. 그럼 벨기에 국기는 독일 국기랑 색깔 | S4 아하, 그렇구나. 근데 벨기에 수도가 어디였지? 갑자기 궁금해

     0.00s  user  발화 시작: 음… 혹시 독일 국기 색깔이 뭐였더라? 까먹었어.
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.63s  agent 발화 시작: <ret> 독일 국기는 검은색과 빨간색, 그리고 노란색으로 이루어져 있어요.
     4.67s  user  발화 끝
     6.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: [source: Wikipedia] The flag of Germany is a tricolor of black, red, a
     9.20s  user  발화 시작: 아, 맞다! 검정, 빨강, 노랑이었지. 근데 그 세 가지 색깔을 가진 국기가 또 뭐가 있을까? 궁금하네.
     9.22s  agent 발화 끝
    18.03s  <ret> 발화 (turn3 첫 프레임)
    18.18s  agent 발화 시작: <ret> 다른 나라 국기 중에도 검정, 빨강, 노랑을 사용하는 경우가 있어요. 잠시 알아볼게요.
    18.23s  user  발화 끝
    20.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: [source: Britannica] The flag of Belgium consists of three vertical ba
    23.78s  agent 발화 시작: 검정, 노랑, 빨강 세 가지 색을 가진 국기는 벨기에 국기예요.
    23.92s  agent 발화 끝
    25.83s  user  발화 시작: 응응.
    26.65s  user  발화 끝
    28.37s  agent 발화 끝
    28.88s  user  발화 시작: 벨기에? 오, 신기하다. 그럼 벨기에 국기는 독일 국기랑 색깔 순서만 다른 거네?
    35.62s  <ret> 발화 (turn7 첫 프레임)
    35.76s  agent 발화 시작: <ret> 네, 맞아요. 벨기에 국기는 검정, 노랑, 빨강 순서이고, 독일 국기는 검정, 빨강, 노랑 순서입
    35.97s  user  발화 끝
    37.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: [source: Flags of the World] The German flag has horizontal bands of b
    42.90s  agent 발화 끝
    43.35s  user  발화 시작: 아하, 그렇구나. 근데 벨기에 수도가 어디였지? 갑자기 궁금해졌어.
    49.27s  <ret> 발화 (turn9 첫 프레임)
    49.51s  agent 발화 시작: <ret> 벨기에의 수도는 브뤼셀입니다.
    49.60s  user  발화 끝
    50.23s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: [source: WorldAtlas] Brussels is the capital and largest city of Belgi
    51.78s  agent 발화 끝
