# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "유재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 뉴욕 리얼 하우스위프들 예전 출연진 누가 있었는지 궁금해요. | S2 잠깐만요… | S3 꽤 덥네요. 저는 요즘 좀 힘든 시간을 보내고 있어요. | S4 마음 챙김이요? 그게 뭔데요?

     0.00s  user  발화 시작: 뉴욕 리얼 하우스위프들 예전 출연진 누가 있었는지 궁금해요.
     4.26s  <ret> 발화 (turn1 첫 프레임)
     4.41s  agent 발화 시작: <ret> 뉴욕 리얼 하우스위프들 초기 멤버 중에는 베서니 프랭클이 있었어요. 정말 인상 깊은 분이셨죠.
     4.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Bethenny Frankel was one of the original cast members of The Real Hous
     4.44s  user  발화 끝
    10.82s  user  발화 시작: 아, 맞아요. 그분 좀 까칠한 면도 있었지만 재밌었어요.
    10.90s  agent 발화 끝
    14.32s  <ret> 발화 (turn3 첫 프레임)
    14.43s  user  발화 끝
    14.47s  agent 발화 시작: <ret> 맞아요. 때로는 날카로운 면도 있었지만, 보는 사람들을 즐겁게 해주는 매력이 있었죠.
    14.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: The capital of France is Paris, a global center for art, fashion, gast
    20.65s  agent 발화 시작: 프랑스의 수도는 파리인데, 예술과 패션, 미식, 그리고 문화의 중심지라고 할 수 있어요.
    20.77s  agent 발화 끝
    23.47s  user  발화 시작: 맞아요.
    24.10s  user  발화 끝
    27.50s  agent 발화 시작: 파리는 오랜 역사와 아름다운 건축물로도 유명하고요. —
    27.69s  agent 발화 끝
    31.63s  user  발화 시작: 잠깐만요…
    32.26s  agent 발화 끝
    32.54s  user  발화 끝
    32.83s  agent 발화 시작: …많은 사람들의 로망이 되는 도시이기도 해요.
    35.10s  user  발화 시작: 그렇죠.
    35.60s  user  발화 끝
    36.07s  user  발화 시작: 파리는 가본 적 없어요. 혹시 지금 서울 날씨는 어때요?
    36.16s  agent 발화 끝
    39.45s  user  발화 끝
    39.60s  <ret> 발화 (turn11 첫 프레임)
    39.67s  agent 발화 시작: <ret> 지금 서울의 날씨는 섭씨 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있
    39.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    45.01s  user  발화 시작: 음.
    45.41s  user  발화 끝
    49.12s  user  발화 시작: 꽤 덥네요. 저는 요즘 좀 힘든 시간을 보내고 있어요.
    49.17s  agent 발화 끝
    52.49s  user  발화 끝
    52.58s  agent 발화 시작: 힘든 시간을 보내고 계시다니 마음이 아프네요. 어떤 어려움이 있으신가요?
    58.09s  agent 발화 끝
    58.41s  user  발화 시작: 그냥… 모든 게 다 잘 안 풀리는 것 같아요.
    61.55s  <ret> 발화 (turn16 첫 프레임)
    61.62s  agent 발화 시작: <ret> 모든 게 잘 풀리지 않는다고 느끼시는군요. 그런 감정은 누구에게나 찾아올 수 있어요.
    61.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Mindfulness is the basic human capacity to fully attend to the present
    61.64s  user  발화 끝
    67.08s  agent 발화 시작: 현재에 집중하는 마음 챙김은 인간의 기본적인 능력이에요. 지금 이 순간에 온전히 집중하는 거죠.
    67.27s  agent 발화 끝
    74.51s  user  발화 시작: 마음 챙김이요? 그게 뭔데요?
    74.68s  agent 발화 끝
    76.44s  user  발화 끝
    76.74s  agent 발화 시작: 마음 챙김은 현재의 경험을 판단 없이 있는 그대로 받아들이는 연습이에요.
    82.00s  user  발화 시작: 아… 그런 거군요. 혹시 지금 제 마음 상태에 대해 얘기해도 될까요?
    82.16s  agent 발화 끝
    86.02s  user  발화 끝
    86.44s  agent 발화 시작: 언제든 편하게 말씀해주세요. 제가 곁에서 들어드릴게요.
    90.50s  agent 발화 끝
