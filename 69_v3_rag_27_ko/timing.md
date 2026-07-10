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
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
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

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케는 언제 태어났죠? | S2 아, 그렇군요. 그럼 그… | S3 …분의 음악 스타일은 어떤 편이에요? | S4 브라이언 이노군요. 흥미로운 조합이네요.

     0.00s  user  발화 시작: 럭스 아우룬케는 언제 태어났죠?
     2.15s  <ret> 발화 (turn1 첫 프레임)
     2.23s  agent 발화 시작: <ret> 럭스 아우룬케는 이천구백칠십년에 이탈리아 로마에서 태어났어요. 실험적인 전자 음악에 기여한 것으로
     2.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: Lux Aurunque was born in 1970 in Rome, Italy, and is known for his con
     2.45s  user  발화 끝
     6.20s  user  발화 시작: 예.
     6.66s  user  발화 끝
     9.12s  user  발화 시작: 아, 그 음악가요. 혹시 그분이 다른 프로젝트에도 참여했는지 알 수 있을까요?
     9.50s  agent 발화 끝
    14.57s  <ret> 발화 (turn4 첫 프레임)
    14.62s  user  발화 끝
    14.65s  agent 발화 시작: <ret> 다른 프로젝트에 참여했는지에 대한 정보는 찾을 수 없네요.
    14.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.05s]: (no information found)
    16.33s  user  발화 시작: 음.
    16.78s  user  발화 끝
    17.70s  agent 발화 끝
    17.95s  user  발화 시작: 아, 그렇군요. 그럼 그…
    20.39s  user  발화 끝
    21.48s  user  발화 시작: …분의 음악 스타일은 어떤 편이에요?
    24.58s  agent 발화 시작: 럭스 아우룬케의 음악 스타일은—
    24.71s  user  발화 끝
    25.61s  user  발화 시작: …혹시 그 분이 영향을 받은 음악가도 있나요?
    26.38s  agent 발화 끝
    28.09s  <ret> 발화 (turn10 첫 프레임)
    28.38s  user  발화 끝
    28.49s  agent 발화 시작: <ret> 럭스 아우룬케는 브라이언 이노와 크래프트베르크를 자신의 앰비언트 및 미니멀리즘 작곡에 큰 영향을 
    28.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: Lux Aurunque cites Brian Eno and Kraftwerk as significant influences o
    33.48s  user  발화 시작: 아.
    34.21s  user  발화 끝
    37.90s  agent 발화 끝
    39.39s  user  발화 시작: 브라이언 이노군요. 흥미로운 조합이네요.
    42.60s  user  발화 끝
