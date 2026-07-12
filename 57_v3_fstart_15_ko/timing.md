# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "우우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 베를린 브란덴부르크 문 좌표 좀 알려줄 수 있을까요? 음 | S2 아, 그렇군요. 이번 주 토요일에 아이들과 갈 만한 곳이 있을 | S3 독일 기술 박물관이요? 거기 주소 좀 알려주시겠어요? | S4 감사합니다.

     0.00s  user  발화 시작: 혹시 베를린 브란덴부르크 문 좌표 좀 알려줄 수 있을까요? 음… 아니, 됐어요. 그냥 지금 날씨가 어때요?
     7.57s  <ret> 발화 (turn1 첫 프레임)
     7.65s  agent 발화 시작: <ret> 베를린의 현재 날씨는 기온 이십삼도, 습도 칠십사퍼센트, 바람은 시속 오 점 오킬로미터입니다. 날
     7.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.17s]: {"city": "Berlin", "temperature": "23.0°C", "humidity": "74%", "wind":
     7.65s  user  발화 끝
    14.82s  user  발화 시작: 예.
    14.82s  agent 발화 끝
    15.29s  user  발화 시작: 아, 그렇군요. 이번 주 토요일에 아이들과 갈 만한 곳이 있을까요?
    15.29s  user  발화 끝
    19.67s  <ret> 발화 (turn4 첫 프레임)
    20.07s  agent 발화 시작: <ret> 베를린에는 가족과 함께 가기 좋은 곳이 많아요. 베를린 동물원, 레고랜드 디스커버리 센터 베를린,
    20.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.60s]: (tool result) Berlin has many attractions for families, including the 
    20.07s  user  발화 끝
    28.68s  user  발화 시작: 독일 기술 박물관이요? 거기 주소 좀 알려주시겠어요?
    28.68s  agent 발화 끝
    31.70s  <ret> 발화 (turn6 첫 프레임)
    32.02s  agent 발화 시작: <ret> 독일 기술 박물관 주소는 독일 베를린 트레비너 거리 구번지, 우편번호는 일 공 구 육 삼입니다. 
    32.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.08s]: The Deutsches Technikmuseum Berlin is located at Trebbiner Straße 9, 1
    32.02s  user  발화 끝
    41.10s  user  발화 시작: 어머.
    41.10s  agent 발화 끝
    41.58s  user  발화 시작: 감사합니다.
    41.58s  user  발화 끝
    42.06s  agent 발화 시작: 천만에요.
    42.06s  user  발화 끝
    42.54s  agent 발화 끝
