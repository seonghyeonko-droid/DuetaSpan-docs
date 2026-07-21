# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "하담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "trip",
#       "text": "User is planning a trip to Slovenia in February."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "commute",
#       "text": "User takes a shuttle bus."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "work",
#       "text": "User works as a civil engineer."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-06-04",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 하담님. 저는 케리라입니다. 힘든 변화나 슬픔을 겪을 때 곁에서 함께하는 역할을 하고 있어요.
     2.26s  user  발화 시작: 그래.
     2.71s  user  발화 끝
     7.32s  agent 발화 끝
     7.59s  user  발화 시작: 안녕하세요. 요즘 좀 힘드네요.
     9.76s  user  발화 끝
     9.93s  agent 발화 시작: 힘든 시간을 보내고 계시는군요. 괜찮아요, 그런 감정은 자연스러운 거예요. 잠시 숨을 고르고, 어떤 점이 가
    15.46s  user  발화 시작: 응.
    15.91s  user  발화 끝
    19.99s  agent 발화 시작: 하담님의 하루는 보통 어떻게 보내시나요? —
    20.04s  agent 발화 끝
    21.85s  user  발화 시작: interrupting] … 혹시 제가 전에 슬로베니아 여행 계획 세운다고 말씀드렸었죠?
    22.52s  agent 발화 끝
    25.66s  agent 발화 시작: 음.
    26.29s  agent 발화 끝
    26.81s  <ret> 발화 (turn8 첫 프레임)
    27.21s  user  발화 끝
    27.32s  agent 발화 시작: <ret> 아, 맞아요. 슬로베니아 여행 계획을 세우고 계셨죠. 이천이십육년 이월에 가신다고 하셨어요.
    27.62s  ⚡SPAN 주입 [d'=0.81s / d_lead=8.07s]: [2026-05-22] User is planning a trip to Slovenia in February.
    35.38s  agent 발화 시작: 슬로베니아 여행을 이월에 계획하고 계신다고 말씀하셨던 게 기억나요. 혹시 슬로베니아 여행 준비하면서 특별히 
    35.38s  agent 발화 끝
    43.68s  agent 발화 끝
