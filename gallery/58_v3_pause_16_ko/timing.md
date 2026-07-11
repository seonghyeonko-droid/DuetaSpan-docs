# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "세슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 마하바라타에 나오는 치트라세나랑 브리슈세나 아버지가 누구 | S2 …아, 맞다… | S3 …카르나였지. 그 사람 되게 용감했던가 봐. | S4 요즘 날씨 어때? 서울은?

     0.00s  user  발화 시작: 음… 마하바라타에 나오는 치트라세나랑 브리슈세나 아버지가 누구였더라…
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.12s  agent 발화 시작: <ret> 마하바라타에 따르면, 치트라세나와 브리슈세나의 아버지는 카르나였답니다.
     0.12s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: Karna was the father of Chitrasena and Vrishsena, as mentioned in the 
     0.12s  user  발화 끝
     0.23s  user  발화 시작: 그치.
     0.23s  agent 발화 끝
     0.25s  user  발화 시작: …아, 맞다…
     0.25s  user  발화 끝
     0.29s  user  발화 시작: …카르나였지. 그 사람 되게 용감했던가 봐.
     0.29s  user  발화 끝
     0.39s  agent 발화 시작: 카르나의 용맹함은 여러 이야기에서 묘사되고 있어요. 어려운 환경 속에서도 굴하지 않았죠.
     0.39s  user  발화 끝
     0.50s  <ret> 발화 (turn7 첫 프레임)
     0.59s  user  발화 시작: 요즘 날씨 어때? 서울은?
     0.59s  agent 발화 끝
     0.66s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔 점 삼도이고, 습도는 육십팔퍼센트, 바람은 시속 사 점 일킬로미터로 불고
     0.66s  ⚡SPAN 주입 [d'=0.34s / d_lead=0.34s]: (tool result) Current weather in Seoul is 28.3°C, humidity 68%, wind 4
     0.66s  user  발화 끝
     1.00s  agent 발화 끝
