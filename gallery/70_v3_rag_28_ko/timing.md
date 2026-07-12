# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "혜훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 남북전쟁이 시작됐을 때 대통령이 누구였는지 알아요? | S2 음, 링컨이 맞긴 한데, 좀 더 자세히 설명해 줄 수 있어요? | S3 아, 그 전쟁이 지금의 미국에 큰 영향을 줬죠? | S4 어… 혹시 지금 서울 날씨 알려줄 수 있어요?

     0.00s  user  발화 시작: 혹시 남북전쟁이 시작됐을 때 대통령이 누구였는지 알아요?
     3.04s  <ret> 발화 (turn1 첫 프레임)
     3.36s  agent 발화 시작: <ret> 남북전쟁이 시작된 건 천팔백육십일년 사월 십이일인데, 그 때 미국 대통령은 에이브러햄 링컨이었어요
     3.36s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.60s]: Abraham Lincoln was the president of the United States when the Civil 
     3.36s  user  발화 끝
    12.97s  user  발화 시작: 음, 링컨이 맞긴 한데, 좀 더 자세히 설명해 줄 수 있어요? 그 전쟁이 왜 시작됐는지도 궁금하고.
    12.97s  agent 발화 끝
    20.33s  <ret> 발화 (turn3 첫 프레임)
    20.65s  agent 발화 시작: <ret> 전환기에는 궁금한 점이 많을 수밖에 없죠. 전쟁의 배경을 설명해 드릴게요.
    20.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.80s]: The American Civil War began as a result of a long-standing dispute ov
    20.65s  user  발화 끝
    25.45s  agent 발화 시작: 아메리카 남북전쟁은 노예 제도와 주 권리 문제로 오랫동안 빚어진 갈등 때문에 시작됐어요.
    25.45s  agent 발화 끝
    31.21s  user  발화 시작: 응.
    31.21s  agent 발화 끝
    31.69s  user  발화 시작: 아, 그 전쟁이 지금의 미국에 큰 영향을 줬죠?
    31.69s  user  발화 끝
    35.29s  <ret> 발화 (turn7 첫 프레임)
    35.53s  agent 발화 시작: <ret> 네, 전쟁은 미국 역사에 큰 족적을 남겼어요.
    35.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.36s]: The Civil War resulted in the abolition of slavery, the preservation o
    35.53s  user  발화 끝
    38.90s  agent 발화 시작: 남북전쟁은 노예 제도를 폐지하고, 미국을 하나의 국가로 유지하며, 연방 정부를 강화하는 결과를 가져왔어요.
    38.90s  agent 발화 끝
    45.14s  user  발화 시작: 맞아.
    45.14s  agent 발화 끝
    45.62s  user  발화 시작: 어… 혹시 지금 서울 날씨 알려줄 수 있어요?
    45.62s  user  발화 끝
    49.30s  <ret> 발화 (turn11 첫 프레임)
    49.46s  agent 발화 시작: <ret> 지금 서울의 날씨는 섭씨 이십팔도, 습도는 육십오퍼센트, 풍속은 시속 삼 점 이킬로미터예요. 앞으
    49.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: (tool result) Current conditions in Seoul are 28.0°C, humidity 65%, wi
    49.46s  user  발화 끝
    58.58s  agent 발화 끝
