# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "태온",
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
#       "date": "2026-06-07",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-31",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 커피… 커피는 언제부터 유럽에 들어왔지? | S2 스트레스 해소? 요즘도 커피 마시면서 힐링하잖아. | S3 서울 날씨는 괜찮네요. 그럼… 이번 주 토요일에 서울 근처로… | S4 …곳 추천해 줄 수 있어?

     0.00s  user  발화 시작: 커피… 커피는 언제부터 유럽에 들어왔지?
     2.37s  <ret> 발화 (turn1 첫 프레임)
     2.72s  agent 발화 시작: <ret> 유럽에 커피하우스가 처음 생긴 건 천육백사십오년 베네치아였어요.
     2.72s  user  발화 끝
     3.34s  ⚡SPAN 주입 [d'=0.97s / d_lead=3.80s]: The first European coffee houses opened in Venice in 1645.
     6.52s  user  발화 시작: 베네치아… 음, 천육백사십오년이라…
     6.52s  agent 발화 끝
     8.15s  agent 발화 시작: 십칠세기 초에는 커피가 유럽 귀족들 사이에서 꽤 인기 있었답니다. 스트레스 해소에 도움이 된다고 여겼거든요.
     8.15s  user  발화 끝
    15.76s  user  발화 시작: 스트레스 해소? 요즘도 커피 마시면서 힐링하잖아.
    15.76s  agent 발화 끝
    19.02s  agent 발화 시작: 맞아요. 커피는 여전히 많은 사람들에게 위로가 되죠. 혹시 지금 스트레스 받는 일 있으세요?
    19.02s  user  발화 끝
    26.08s  user  발화 시작: 아, 요즘 회사 일이 좀 많아서…
    26.08s  agent 발화 끝
    29.26s  <ret> 발화 (turn7 첫 프레임)
    29.34s  agent 발화 시작: <ret> 현재 기온은 섭씨 이십삼도, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터입니다.
    29.34s  user  발화 끝
    29.56s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.98s]: Weather in Seoul: 23.0°C, humidity 74%, wind 5.5 km/h.
    35.32s  user  발화 시작: 서울 날씨는 괜찮네요. 그럼… 이번 주 토요일에 서울 근처로…
    35.32s  agent 발화 끝
    40.21s  user  발화 시작: …당일치기 여행 갈 만한…
    40.21s  user  발화 끝
    42.38s  user  발화 시작: …곳 추천해 줄 수 있어?
    42.38s  user  발화 끝
    44.73s  <ret> 발화 (turn11 첫 프레임)
    45.10s  agent 발화 시작: <ret> 서울의 경복궁은 매년 수백만 명의 방문객이 찾는 주요 명소예요. 한국의 역사와 건축을 엿볼 수 있
    45.10s  user  발화 끝
    45.72s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.15s]: (tool result) Gyeongbokgung Palace is a major landmark in Seoul, attra
    53.25s  user  발화 시작: 경복궁… 가본 적 있는데, 좋았어.
    53.25s  agent 발화 끝
    55.96s  agent 발화 시작: 경복궁은 아름다운 곳이죠. 잠시 쉬면서 마음을 차분하게 가라앉히기에 좋은 장소예요.
    55.96s  user  발화 끝
    61.40s  agent 발화 끝
