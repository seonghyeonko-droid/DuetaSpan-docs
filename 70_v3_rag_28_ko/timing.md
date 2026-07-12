# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '프린세스 브라이드'에 나온 엄마 역할을 누가 맡았는지  | S2 오, 에미상까지 받았군요. — | S3 'Stand by Me'도 재밌게 봤는데. 혹시 지금 한국 날 | S4 박물관은 괜찮겠네요. 아이들이 좋아할 만한 곳 추천해 주실 수

     0.00s  user  발화 시작: 혹시 '프린세스 브라이드'에 나온 엄마 역할을 누가 맡았는지 아세요?
     4.23s  <ret> 발화 (turn1 첫 프레임)
     4.55s  agent 발화 시작: <ret> 천구백팔십칠년에 개봉한 '프린세스 브라이드'에서 엄마 역할을 맡은 배우는 베티 브랜틀리예요. 기억
     4.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.57s]: Betsy Brantley played the role of the mother in the 1987 American fant
     4.55s  user  발화 끝
    11.13s  user  발화 시작: 와.
    11.13s  agent 발화 끝
    11.63s  user  발화 시작: 베티 브랜틀리… 이름이 낯설긴 하네요. 다른 작품에도 나왔어요?
    11.63s  user  발화 끝
    15.60s  <ret> 발화 (turn4 첫 프레임)
    15.68s  agent 발화 시작: <ret> 죄송해요, 다른 작품에 대한 정보는 찾을 수 없었어요.
    15.68s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.05s]: (no information found)
    15.68s  user  발화 끝
    19.72s  user  발화 시작: 아, 그렇군요. 그럼 '프린세스 브라이드'는 혹시 상을 받았어요?
    19.72s  agent 발화 끝
    23.69s  <ret> 발화 (turn6 첫 프레임)
    23.77s  agent 발화 시작: <ret> '프린세스 브라이드'는 프라임타임 에미상을 한 번 받았고, 로빈 라이트가 골든 글로브상 후보에 오
    23.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.61s]: (tool result) The Princess Bride won one Primetime Emmy Award and was 
    23.77s  user  발화 끝
    33.38s  user  발화 시작: 어.
    33.38s  agent 발화 끝
    33.88s  user  발화 시작: 오, 에미상까지 받았군요. —
    33.88s  user  발화 끝
    35.91s  user  발화 시작: 혹시 그 영화 감독은 누구였어요?
    35.91s  user  발화 끝
    38.12s  <ret> 발화 (turn10 첫 프레임)
    38.44s  agent 발화 시작: <ret> '프린세스 브라이드'의 감독은 롭 라이너예요. 천구백칠십삼년에 윌리엄 골드먼의 소설을 바탕으로 만
    38.44s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.56s]: Rob Reiner directed the 1987 American fantasy adventure film The Princ
    38.44s  user  발화 끝
    44.00s  user  발화 시작: 롭 라이너요? 그분 다른 영화도 많이 만들었죠?
    44.00s  agent 발화 끝
    47.38s  <ret> 발화 (turn12 첫 프레임)
    47.54s  agent 발화 시작: <ret> 롭 라이너는 'This Is Spinal Tap', 'Stand by Me', 'When Harr
    47.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.10s]: (tool result) Rob Reiner is an American director, producer, and actor,
    47.54s  user  발화 끝
    56.64s  user  발화 시작: 'Stand by Me'도 재밌게 봤는데. 혹시 지금 한국 날씨는 어때요?
    56.64s  agent 발화 끝
    61.54s  <ret> 발화 (turn14 첫 프레임)
    61.70s  agent 발화 시작: <ret> 지금 서울의 날씨는 기온이 이십칠 점 삼도이고, 습도는 칠십팔퍼센트, 바람은 시속 사 점 일킬로미
    61.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.09s]: (tool result) Current conditions in Seoul are 27.3°C, humidity 78%, wi
    61.70s  user  발화 끝
    69.79s  user  발화 시작: 응.
    69.79s  agent 발화 끝
    70.30s  user  발화 시작: 꽤 덥네요. 아이들 데리고…
    70.30s  user  발화 끝
    72.32s  user  발화 시작: …어디 놀러 가면 좋을까요?
    72.32s  user  발화 끝
    74.34s  agent 발화 시작: 아이들과 함께라면 시원한 곳을 찾는 게 좋겠네요. 실내 놀이터나 박물관은 어떠세요?
    74.34s  user  발화 끝
    79.91s  user  발화 시작: 어.
    79.91s  agent 발화 끝
    80.41s  user  발화 시작: 박물관은 괜찮겠네요. 아이들이 좋아할 만한 곳 추천해 주실 수 있어요?
    80.41s  user  발화 끝
    85.47s  agent 발화 시작: 아이들의 연령대에 따라 추천이 달라질 수 있어요. 어떤 나이의 아이들이신가요?
    85.47s  user  발화 끝
    90.53s  user  발화 시작: 음.
    90.53s  agent 발화 끝
    91.03s  user  발화 시작: 일곱 살, 다섯 살이요.
    91.03s  user  발화 끝
    93.06s  agent 발화 시작: 일곱 살, 다섯 살이라면 국립어린이과학관이나 국립중앙박물관의 어린이박물관이 좋을 것 같아요.
    93.06s  user  발화 끝
    98.11s  agent 발화 끝
