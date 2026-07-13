# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "정희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 이번 주 토요일에 갈 만한 곳 좀 찾아줄래? 서울 근처로.
     5.40s  agent 발화 시작: 서울 근처라면 어디를 생각하고 계신가요? 좀 더 구체적으로 말씀해 주시면 더 좋은 곳을 찾아드릴 수 있어요.
     5.40s  user  발화 끝
    13.24s  user  발화 시작: 응응.
    13.24s  agent 발화 끝
    13.73s  user  발화 시작: 글쎄… 조용하고 자연이 예쁜 곳이면 좋겠어.
    13.73s  user  발화 끝
    16.44s  <ret> 발화 (turn4 첫 프레임)
    16.68s  agent 발화 시작: <ret> 서울숲은 성동구에 있는 넓은 공원이에요. 면적이 무려 백육십칠만 제곱미터나 된답니다. 문화 예술 
    16.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.79s]: The Seoul Forest is a large park in Seongdong-gu, Seoul, South Korea, 
    16.68s  user  발화 끝
    27.47s  user  발화 시작: 응응.
    27.47s  agent 발화 끝
    27.96s  user  발화 시작: 서울숲 좋지. 거긴 어떻게 가?
    27.96s  user  발화 끝
    30.17s  <ret> 발화 (turn7 첫 프레임)
    30.41s  agent 발화 시작: <ret> 현재 위치에서 서울숲까지 자동차로 약 이십분이 걸린대요. 대중교통은 왕십리역에서 내려서 십분 정도
    30.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.83s]: (tool result) {"directions": "현재 위치에서 서울숲까지 자동차로 약 20분 소요됩니다. 대중교통 이용 
    30.41s  user  발화 끝
    39.24s  agent 발화 시작: 서울숲에서 편안한 시간 보내시길 바랍니다. 혹시 다른 계획도 세워볼까요?
    39.24s  agent 발화 끝
    43.65s  agent 발화 끝
