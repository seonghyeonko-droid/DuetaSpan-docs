# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "서훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-05-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 로온 씨, 오늘 저녁에 건강한 식단으로 뭘 먹을까요? | S2 오늘 날씨가 어때요? 운동하기 좋은 날인지 알고 싶어서요. | S3 이번 주 토요일에 영화 보러 갈 건데, 어떤 영화가 좋을까요? | S4 아, '미션 임파서블' 보고 싶네요. 예매해 줄 수 있어요?

     0.00s  user  발화 시작: 로온 씨, 오늘 저녁에 건강한 식단으로 뭘 먹을까요?
     3.87s  agent 발화 시작: 균형 잡힌 식단은 건강 유지에 정말 중요하죠. 단백질, 탄수화물, 지방을 골고루 섭취하는 게 좋은데요, 혹시
     3.87s  user  발화 끝
    13.08s  user  발화 시작: 음… 닭가슴살은 괜찮은데, 맨날 먹으면 좀 질릴 것 같기도 하고.
    13.08s  agent 발화 끝
    17.92s  agent 발화 시작: 닭가슴살도 좋지만, 다양하게 먹는 게 중요해요. 연어, 두부, 콩류도 좋은 단백질 공급원이 될 수 있어요.
    17.92s  user  발화 끝
    25.19s  user  발화 시작: 아, 연어! 연어는 진짜 좋아해요.
    25.19s  agent 발화 끝
    27.61s  agent 발화 시작: 연어는 오메가-삼 지방산도 풍부해서 건강에 아주 좋죠. 구이로 드시면 담백하고 맛있을 거예요.
    27.61s  user  발화 끝
    33.42s  user  발화 시작: 오늘 날씨가 어때요? 운동하기 좋은 날인지 알고 싶어서요.
    33.42s  agent 발화 끝
    36.79s  <ret> 발화 (turn7 첫 프레임)
    37.30s  agent 발화 시작: <ret> 부산 날씨는 현재 이십육 점 삼도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터로 불고
    37.30s  user  발화 끝
    37.58s  ⚡SPAN 주입 [d'=0.79s / d_lead=9.20s]: (tool result) The weather in Busan is 26.3°C, humidity 68%, wind 3.2 k
    46.50s  user  발화 시작: 네.
    46.50s  agent 발화 끝
    46.98s  agent 발화 시작: 가볍게 산책이나 조깅을 하시면 활력을 되찾으실 수 있을 거예요.
    46.98s  user  발화 끝
    51.34s  user  발화 시작: 이번 주 토요일에 영화 보러 갈 건데, 어떤 영화가 좋을까요?
    51.34s  agent 발화 끝
    56.19s  agent 발화 시작: 예.
    56.19s  user  발화 끝
    56.67s  agent 발화 시작: 이번 주 토요일에 영화를 보신다니, 정말 즐거운 계획이네요. 어떤 장르를 좋아하시나요?
    56.67s  agent 발화 끝
    62.00s  user  발화 시작: 네.
    62.00s  agent 발화 끝
    62.48s  user  발화 시작: 음… 액션 영화를 좋아하는데, 너무 폭력적이지 않은 걸로 보고 싶어요.
    62.48s  user  발화 끝
    67.33s  agent 발화 시작: 네.
    67.33s  user  발화 끝
    67.81s  agent 발화 시작: 액션 영화 좋아하시는군요. 최근 개봉한 '스파이더맨: 노 웨이 홈'은 액션도 흥미롭고, 감동적인 스토리도 있
    67.81s  agent 발화 끝
    75.08s  user  발화 시작: …혹시 서울에서 상영하는 극장은 어디가 좋을까요?
    75.08s  agent 발화 끝
    77.96s  <ret> 발화 (turn18 첫 프레임)
    77.98s  agent 발화 시작: <ret> 서울에서 상영 중인 액션 영화는 '더 이퀄라이저 삼'와 '미션 임파서블: 데드 레코닝 PART O
    77.98s  user  발화 끝
    78.85s  ⚡SPAN 주입 [d'=0.89s / d_lead=11.14s]: (tool result) Action movies currently playing in Seoul: "The Equalizer
    89.12s  user  발화 시작: 아, '미션 임파서블' 보고 싶네요. 예매해 줄 수 있어요?
    89.12s  agent 발화 끝
    93.16s  <ret> 발화 (turn20 첫 프레임)
    93.48s  agent 발화 시작: <ret> '미션 임파서블: 데드 레코닝 PART ONE'의 씨 지 브이 강남 토요일 일곱시 영화 티켓 두장
    93.48s  user  발화 끝
    93.63s  ⚡SPAN 주입 [d'=0.47s / d_lead=11.14s]: (tool result) Two tickets for "Mission: Impossible - Dead Reckoning Pa
   104.62s  user  발화 시작: 네.
   104.62s  agent 발화 끝
   105.11s  user  발화 시작: 감사합니다, 로온 씨.
   105.11s  user  발화 끝
   106.56s  agent 발화 시작: 천만에요. 즐거운 영화 관람 되세요!
   106.56s  user  발화 끝
   108.98s  agent 발화 끝
