# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "연준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "home",
#       "text": "User's home address is 945 Elm Street."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케 멤버가 태어난 해가 궁금해요. | S2 …어떤 스타일의 음악을 하셨어요? | S3 앰비언트 음악이라… 그게 어떤 느낌이에요? | S4 …그 음악을 다른 팀하고 비교하자면 어떤 팀과 비슷할까요?

     0.00s  user  발화 시작: 럭스 아우룬케 멤버가 태어난 해가 궁금해요.
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 럭스 아우룬케 멤버 중 한 분이 태어난 해는… 천구백칠십년입니다… 천구백구십오년입니다.
     3.56s  user  발화 끝
     5.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: 럭스 아우룬케는 1995년 12월 22일에 태어났습니다.
     7.06s  user  발화 시작: 예.
     7.70s  user  발화 끝
     9.78s  user  발화 시작: 아, 그렇군요. 그분들은 주로…
    10.17s  agent 발화 끝
    12.55s  user  발화 끝
    14.01s  user  발화 시작: …어떤 스타일의 음악을 하셨어요?
    16.23s  user  발화 끝
    16.55s  agent 발화 시작: 럭스 아우룬케는 실험적인 전자 음악을 선보였는데, 특히 앰비언트와 산업 음악에서 두각을 나타냈습니다.
    20.27s  user  발화 시작: 음.
    20.72s  user  발화 끝
    22.95s  agent 발화 끝
    22.97s  user  발화 시작: 앰비언트 음악이라… 그게 어떤 느낌이에요?
    26.16s  agent 발화 시작: 앰비언트 음악은 분위기를 조성하는 데 중점을 두는—
    26.34s  user  발화 끝
    27.98s  user  발화 시작: …그 음악을 다른 팀하고 비교하자면 어떤 팀과 비슷할까요?
    28.74s  agent 발화 끝
    32.56s  user  발화 끝
    32.97s  agent 발화 시작: 앰비언트 음악을 다른 팀과 비교하자면, 브라이언 이노나 아포칼립틱 셀레스트와 비슷한 느낌을 받으실 수 있을 
    39.17s  agent 발화 시작: 럭스 아우룬케의 음악은 그들만의 독특한 색깔을 지니고 있지만, 그런 팀들의 영향을 받았다고 볼 수 있습니다.
    39.42s  agent 발화 끝
    45.47s  agent 발화 끝
