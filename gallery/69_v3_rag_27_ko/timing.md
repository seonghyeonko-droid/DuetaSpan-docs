# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "준영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨가 어때요? | S2 아, 맞다. 그 영화. | S3 아니요, 괜찮아요. 그냥 생각나서 물어봤어요. | S4 …만한 영화 추천해 줄 수 있어요?

     0.00s  user  발화 시작: 오늘 날씨가 어때요?
     1.37s  <ret> 발화 (turn1 첫 프레임)
     1.45s  agent 발화 시작: <ret> 서울 날씨는 현재 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터입니다. 오늘 
     1.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) The weather in Seoul is 23.0°C, humidity 74%, wind 5.5 k
     1.45s  user  발화 끝
     8.67s  user  발화 시작: 아, 네. 고마워요.
     8.67s  agent 발화 끝
    10.12s  agent 발화 시작: 작은 일에도 감사하는 마음은 삶을 더 풍요롭게 만들죠.
    10.12s  user  발화 끝
    13.97s  user  발화 시작: 음… 천구백팔십이년에 개봉했는데 천구백팔십삼년에 방영된 영화 중에 시청률이 높았던 거… 뭐였지?
    13.97s  agent 발화 끝
    19.11s  <ret> 발화 (turn5 첫 프레임)
    19.27s  agent 발화 시작: <ret> 천구백팔십삼년에 방영된 비스포츠 프로그램 중 시청률 칠위를 기록한 영화는 바로 ‘애프터 더 데이’
    19.27s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.26s]: The Day After — aired in 1983 — was the seventh highest rated non-spor
    19.27s  user  발화 끝
    25.54s  user  발화 시작: 아, 맞다. 그 영화.
    25.54s  agent 발화 끝
    27.47s  agent 발화 시작: 기억을 떠올리는 건 참 좋은 일이죠. 혹시 그 영화에 대해 더 알고 싶으신가요?
    27.47s  user  발화 끝
    33.73s  user  발화 시작: 네네.
    33.73s  agent 발화 끝
    34.21s  user  발화 시작: 그 영화랑 캔자스 주 고속도로 케이 일 공번이랑 무슨 관계가 있어요?
    34.21s  user  발화 끝
    39.11s  <ret> 발화 (turn10 첫 프레임)
    39.51s  agent 발화 시작: <ret> ‘애프터 더 데이’에는 캔자스 주 고속도로 케이 일 공번이 등장합니다. 영화 속 중요한 배경으로 
    39.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: The Day After featured Kansas state highway K-10.
    39.51s  user  발화 끝
    46.74s  user  발화 시작: 네.
    46.74s  agent 발화 끝
    47.22s  agent 발화 시작: 영화 속 배경이 주는 현실감은 메시지를 더 강력하게 전달하는 힘이 있죠. 혹시 다른 영화에 대해서도 궁금하신
    47.22s  user  발화 끝
    54.93s  user  발화 시작: 아니요, 괜찮아요. 그냥 생각나서 물어봤어요.
    54.93s  agent 발화 끝
    57.34s  agent 발화 시작: 가끔은 과거의 기억을 떠올리는 것만으로도 마음이 편안해지곤 하죠.
    57.34s  user  발화 끝
    61.19s  user  발화 시작: 요즘 좀 힘들어서… 기분 전환할…
    61.19s  agent 발화 끝
    63.60s  user  발화 시작: …만한 영화 추천해 줄 수 있어요?
    63.60s  user  발화 끝
    66.49s  agent 발화 시작: 네.
    66.49s  user  발화 끝
    66.66s  <ret> 발화 (turn18 첫 프레임)
    66.98s  agent 발화 시작: <ret> 기분 전환에는 따뜻한 영화가 좋죠. ‘패딩턴 이’라는 코미디 영화를 추천해 드립니다. 이천십칠년에
    66.98s  ⚡SPAN 주입 [d'=0.88s / d_lead=7.71s]: (tool result) 'Paddington 2' (2017) - Comedy, Family, PG.
    66.98s  agent 발화 끝
    74.69s  user  발화 시작: 패딩턴 이… 한번 찾아봐야겠네요.
    74.69s  agent 발화 끝
    76.61s  agent 발화 시작: 긍정적인 에너지를 주는 영화는 삶에 활력을 불어넣어 줄 거예요.
    76.61s  user  발화 끝
    80.95s  agent 발화 끝
