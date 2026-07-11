# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "주온",
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
#       "date": "2026-05-13",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 뭄바이 이름이 공식적으로 바뀐 게 언제였죠? | S2 아, 그럼 그 전 이름은 정확히 뭐였죠? | S3 … 근데 그 이름 바꾼 이유가 있었나요? | S4 아하, 그렇군요. 뭔가 의미가 있었네요.

     0.00s  user  발화 시작: 음… 뭄바이 이름이 공식적으로 바뀐 게 언제였죠?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  agent 발화 시작: <ret> 뭄바이의 이름이 공식적으로 바뀐 건 천구백구십오년이에요. 마하라슈트라 주 정부에서 그렇게 변경했답
     0.11s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: In 1995, the city of Bombay was officially renamed Mumbai by the Mahar
     0.11s  user  발화 끝
     0.17s  <ret> 발화 (turn4 첫 프레임)
     0.28s  user  발화 시작: 정말요?
     0.28s  agent 발화 끝
     0.30s  user  발화 시작: 아, 그럼 그 전 이름은 정확히 뭐였죠?
     0.30s  user  발화 끝
     0.41s  agent 발화 시작: <ret> 그 전 이름은 뭄바이—
     0.41s  ⚡SPAN 주입(IRRELEVANT) [d'=0.06s / d_lead=0.06s]: The average high temperature in Reykjavik, Iceland in January is -1.9°
     0.41s  user  발화 끝
     0.47s  user  발화 시작: … 근데 그 이름 바꾼 이유가 있었나요?
     0.47s  agent 발화 끝
     0.58s  agent 발화 시작: 이름 바꾼 이유는… 뭄바이는 포르투갈식 이름이었고, 뭄바이는 마라티어에 더 가깝기 때문이라고 해요.
     0.58s  user  발화 끝
     0.77s  agent 발화 시작: 뭄바이라는 이름이 현지 문화와 언어를 반영하는 것이 중요하다고 생각했답니다.
     0.77s  agent 발화 끝
     0.91s  user  발화 시작: 맞아요.
     0.91s  agent 발화 끝
     0.92s  user  발화 시작: 아하, 그렇군요. 뭔가 의미가 있었네요.
     0.92s  user  발화 끝
     1.00s  user  발화 끝
