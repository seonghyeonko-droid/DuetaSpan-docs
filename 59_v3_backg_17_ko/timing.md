# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보민",
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
#       "date": "2025-11-28",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 세이빙 벨에 나오는 제시라는 캐릭터 연기한 사람이 누구였지? | S2 잠깐만, 그 '쇼걸' 영화 — | S3 … 그 영화가 엄청 논란이 많았다면서? | S4 …역할 말고 다른 유명한 역할은?

     0.00s  user  발화 시작: 세이빙 벨에 나오는 제시라는 캐릭터 연기한 사람이 누구였지?
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.27s  agent 발화 시작: <ret> 제시라는 캐릭터를 연기한 사람은 엘리자베스 버클리 로렌이었어요. 좋은 드라마죠.
     3.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.20s]: Elizabeth Berkley Lauren.
     3.51s  user  발화 끝
     9.48s  agent 발화 끝
    10.85s  user  발화 시작: 음, 그 배우 다른 작품도 많이 했어?
    12.85s  <ret> 발화 (turn3 첫 프레임)
    13.09s  agent 발화 시작: <ret> 엘리자베스 버클리 로렌은 영화 '퍼스트 와이브스 클럽'이나 '쇼걸' 같은 작품에서도 활약했어요.
    13.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: Elizabeth Berkley Lauren is an American actress, known for her roles i
    13.30s  user  발화 끝
    15.14s  user  발화 시작: 그래.
    15.73s  user  발화 끝
    18.92s  agent 발화 끝
    18.96s  agent 발화 시작: 연기 경력이 꽤나 다양하네요. 텔레비전에도 꾸준히 출연했고요.
    23.49s  agent 발화 끝
    23.79s  user  발화 시작: 잠깐만, 그 '쇼걸' 영화 —
    25.75s  user  발화 시작: … 그 영화가 엄청 논란이 많았다면서?
    25.90s  user  발화 끝
    27.92s  <ret> 발화 (turn8 첫 프레임)
    28.08s  agent 발화 시작: <ret> '쇼걸'은 폴 버호벤 감독의 천구백구십오년 에로틱 드라마 영화로, 엘리자베스 버클리와 카일 맥라클
    28.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: Showgirls is a 1995 American erotic drama film directed by Paul Verhoe
    28.19s  user  발화 끝
    36.88s  agent 발화 시작: 많은 논란이 있었던 작품이죠.
    36.99s  agent 발화 끝
    38.68s  user  발화 시작: 아, 그렇구나. 그럼 제시…
    38.73s  agent 발화 끝
    40.47s  user  발화 끝
    42.60s  user  발화 시작: …역할 말고 다른 유명한 역할은?
    44.40s  <ret> 발화 (turn12 첫 프레임)
    44.72s  agent 발화 시작: <ret> 엘리자베스 버클리 로렌은 로빈 윌리엄스와 함께 출연한 천구백구십삼년 영화 '미세스 다웃파이어'에서
    44.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: Elizabeth Berkley Lauren also played Nanny in the 1993 film Mrs. Doubt
    44.95s  user  발화 끝
    54.41s  agent 발화 끝
