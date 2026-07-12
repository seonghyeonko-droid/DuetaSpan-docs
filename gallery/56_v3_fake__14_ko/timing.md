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
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.00s  agent 발화 시작: <ret> 뭄바이의 이름이 공식적으로 바뀐 건 천구백구십오년이에요. 마하라슈트라 주 정부에서 그렇게 변경했답
     4.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: In 1995, the city of Bombay was officially renamed Mumbai by the Mahar
     4.02s  user  발화 끝
     7.76s  user  발화 시작: 정말요?
     8.44s  user  발화 끝
    11.18s  agent 발화 끝
    12.59s  user  발화 시작: 아, 그럼 그 전 이름은 정확히 뭐였죠?
    15.11s  <ret> 발화 (turn4 첫 프레임)
    15.22s  user  발화 끝
    15.26s  agent 발화 시작: <ret> 그 전 이름은 뭄바이—
    15.27s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=1.94s]: The average high temperature in Reykjavik, Iceland in January is -1.9°
    16.54s  user  발화 시작: … 근데 그 이름 바꾼 이유가 있었나요?
    17.19s  agent 발화 끝
    18.61s  user  발화 끝
    18.89s  agent 발화 시작: 이름 바꾼 이유는… 뭄바이는 포르투갈식 이름이었고, 뭄바이는 마라티어에 더 가깝기 때문이라고 해요.
    26.04s  agent 발화 시작: 뭄바이라는 이름이 현지 문화와 언어를 반영하는 것이 중요하다고 생각했답니다.
    26.16s  agent 발화 끝
    28.09s  user  발화 시작: 맞아요.
    28.73s  user  발화 끝
    31.15s  user  발화 시작: 아하, 그렇군요. 뭔가 의미가 있었네요.
    31.35s  agent 발화 끝
    33.88s  user  발화 끝
