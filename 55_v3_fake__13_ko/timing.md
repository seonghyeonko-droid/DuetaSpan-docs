# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "준완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 하우 아이 멧 유어 마더에 나오는 루시 역을 누가 맡았지?
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.88s  agent 발화 시작: <ret> 하우 아이 멧 유어 마더에서 루시 Whelan 역은 Byrnes 씨가 맡았답니다. 재밌는 드라마죠
     4.88s  user  발화 끝
     5.37s  ⚡SPAN 주입 [d'=1.03s / d_lead=6.35s]: Byrnes played Lucy Whelan in the sitcom How I Met Your Mother.
    11.19s  <ret> 발화 (turn2 첫 프레임)
    11.23s  agent 발화 시작: <ret> 날씨 얘기를 잠깐 하자면, 레이캬비크 칠월 평균 최고 기온은 십삼 점 일도 정도래요.
    11.23s  agent 발화 끝
    12.69s  ⚡SPAN 주입(IRRELEVANT) [d'=1.50s / d_lead=6.35s]: The average high temperature in Reykjavik, Iceland in July is 13.1°C.
    17.58s  user  발화 시작: 그치.
    17.58s  agent 발화 끝
    18.07s  user  발화 시작: 아, 레이캬비크는 너무 추울 것 같아. 혹시 서울 날씨는 어때?
    18.07s  user  발화 끝
    22.95s  agent 발화 시작: 음.
    22.95s  user  발화 끝
    23.17s  <ret> 발화 (turn6 첫 프레임)
    23.44s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 이킬로미터 정도예요. 훨
    23.44s  agent 발화 끝
    24.48s  ⚡SPAN 주입 [d'=1.31s / d_lead=6.84s]: (tool result) Current weather in Seoul: 28.0°C, humidity 65%, wind 3.2
    30.27s  user  발화 시작: 훨씬 나아. 서울에서 시원한 빙수 맛집 좀 알려줘.
    30.27s  agent 발화 끝
    34.18s  agent 발화 시작: 서울에서 빙수 맛집을 찾으시는군요. 어떤 동네를 선호하시나요?
    34.18s  user  발화 끝
    37.60s  agent 발화 끝
