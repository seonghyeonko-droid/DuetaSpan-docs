# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Riley",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "home",
#       "text": "User's home address is 562 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 해변에 있는 모래는 대체 어디서 오는 거야?
     4.16s  agent 발화 시작: 예.
     4.16s  user  발화 끝
     4.76s  agent 발화 시작: 해변은 정말 신기한 곳이고, 그 기원도 꽤 다양해.
     4.76s  agent 발화 끝
     9.51s  user  발화 시작: 응.
     9.51s  agent 발화 끝
    10.11s  user  발화 시작: 다양하다니, 어떻게? 그냥 다 바위가 갈려져서 만들어지는 거야?
    10.11s  user  발화 끝
    14.86s  agent 발화 시작: 그렇죠.
    14.86s  user  발화 끝
    15.21s  <ret> 발화 (turn6 첫 프레임)
    15.45s  agent 발화 시작: <ret> 해변 모래는 사실 암석, 조개껍데기, 산호초가 풍화되고 침식되면서 만들어져. 그런 다음 강, 개울
    15.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.70s]: Beach sand is created by the weathering and erosion of rocks, shells, 
    15.45s  agent 발화 끝
    26.15s  user  발화 시작: 어.
    26.15s  agent 발화 끝
    26.75s  agent 발화 시작: 마치 자연이 배달 서비스를 하는 것 같지, 그 작은 조각들을 모아서 말이야.
    26.75s  user  발화 끝
    33.88s  user  발화 시작: 산호초도 역할을 해? 몰랐어. 어떤 산호초인데?
    33.88s  agent 발화 끝
    37.13s  <ret> 발화 (turn10 첫 프레임)
    37.45s  agent 발화 시작: <ret> 특히, 석회조류—일종의 붉은 조류—가 탄산칼슘을 침전시키는데, 이게 모래로 부서져서 열대 지역 해
    37.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.92s]: Coralline algae, a type of red algae, deposits calcium carbonate which
    37.45s  user  발화 끝
    46.36s  agent 발화 시작: 정말 아름다운 과정이야, 우리 모두가 즐길 수 있는 멋진 공간을 만드는 거지.
    46.36s  agent 발화 끝
    53.50s  agent 발화 끝
