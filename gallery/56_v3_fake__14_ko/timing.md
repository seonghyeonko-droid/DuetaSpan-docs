# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "가원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-02",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 키스 어반의 '커밍 홈' 노래는 누가 불렀어요? | S2 노을캠핑장, 가보고 싶네요. 예약은 어떻게 해야 하나요? | S3 그렇죠? 저도 그래요. 이번 주말은 정말 기대돼요. | S4 음… 오늘은 매콤한 닭갈비가 당기네요.

     0.00s  user  발화 시작: 키스 어반의 '커밍 홈' 노래는 누가 불렀어요?
     3.55s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> 그 노래는 미국의 가수 줄리아 마이클스가 불렀습니다. 요즘 음악 많이 들으시나요?
     3.69s  user  발화 끝
     4.60s  ⚡SPAN 주입 [d'=1.05s / d_lead=5.80s]: American singer Julia Michaels.
     9.49s  user  발화 시작: 네, 요즘 계속 듣고 있어요. 줄리아 마이클스, 다른 노래도 있나요?
     9.49s  agent 발화 끝
    14.76s  agent 발화 시작: 줄리아 마이클스는 '인사이더', '앤솔로지' 같은 곡도 있어요. 노래 스타일이 정말 독특하죠.
    14.76s  user  발화 끝
    20.56s  user  발화 시작: 아, '인사이더'도 좋네요. 혹시 이번 주말에 서울에서 콘서트하는 가수 있나요?
    20.56s  agent 발화 끝
    25.83s  agent 발화 시작: 네.
    25.83s  user  발화 끝
    25.90s  <ret> 발화 (turn6 첫 프레임)
    26.36s  agent 발화 시작: <ret> 이번 주말, 칠월 십이일에 블랙핑크 콘서트가 올림픽체조경기장에서 일곱시 삼십분에 열립니다.
    26.36s  agent 발화 끝
    26.90s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.27s]: (tool result) Event: BLACKPINK concert, Olympic Gymnastics Arena, July
    31.63s  user  발화 시작: 네.
    31.63s  agent 발화 끝
    32.16s  user  발화 시작: 블랙핑크! 아이들이 좋아하겠어요. 이번 주 토요일 날씨는 어때요?
    32.16s  user  발화 끝
    36.37s  agent 발화 시작: 네.
    36.37s  user  발화 끝
    36.83s  <ret> 발화 (turn10 첫 프레임)
    36.90s  agent 발화 시작: <ret> 토요일 날씨는 이십팔 점 오도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 이킬로미터로 약간 흐
    36.90s  agent 발화 끝
    37.26s  ⚡SPAN 주입 [d'=0.43s / d_lead=7.91s]: (tool result) Weather: 28.5°C, humidity 65%, wind 3.2 km/h, partly clo
    44.81s  user  발화 시작: 예.
    44.81s  agent 발화 끝
    45.34s  user  발화 시작: 꽤 덥겠네요. 혹시 서울 근처에 좋은 캠핑장 아세요?
    45.34s  user  발화 끝
    49.55s  agent 발화 시작: 서울 근교에는 노을캠핑장, 두리랜드캠핑장 같은 곳이 있어요. 자연 속에서 힐링하기 좋죠.
    49.55s  user  발화 끝
    55.35s  user  발화 시작: 노을캠핑장, 가보고 싶네요. 예약은 어떻게 해야 하나요?
    55.35s  agent 발화 끝
    59.04s  agent 발화 시작: 노을캠핑장은 홈페이지에서 예약할 수 있습니다. 경쟁이 치열하니 미리 예약하시는 게 좋습니다.
    59.04s  user  발화 끝
    64.84s  user  발화 시작: 네.
    64.84s  agent 발화 끝
    65.37s  user  발화 시작: 알겠습니다. 그럼, 이번 주 일요일에 친구랑 같이 영화 보려고 하는데, 뭐 볼까요?
    65.37s  user  발화 끝
    71.39s  <ret> 발화 (turn18 첫 프레임)
    71.69s  agent 발화 시작: <ret> 일요일에 씨 지 브이 강남에서 '인페르노' 영화를 두시나 네시 삼십분에 볼 수 있습니다.
    71.69s  user  발화 끝
    72.24s  ⚡SPAN 주입 [d'=0.85s / d_lead=6.85s]: (tool result) Movie: 'Inferno', CGV Gangnam, July 12, 2026, 2:00 PM, 4
    78.55s  user  발화 시작: '인페르노'… 제목이 좀 무섭네요. 다른 영화는 없나요?
    78.55s  agent 발화 끝
    81.65s  <ret> 발화 (turn20 첫 프레임)
    82.11s  ⚡SPAN 주입 [d'=0.46s / d_lead=4.74s]: (tool result) Movie: 'Happy Summer', Lotte Cinema Seoul, July 12, 2026
    82.24s  agent 발화 시작: <ret> '해피 섬머'라는 영화도 있어요. 롯데시네마 서울에서 한시나 여섯시에 상영합니다.
    82.24s  user  발화 끝
    86.98s  user  발화 시작: 정말요?
    86.98s  agent 발화 끝
    87.51s  user  발화 시작: 아, 코미디네요. 그거 괜찮겠어요. 이번 주 금요일에 예약해 놓을게요.
    87.51s  user  발화 끝
    92.25s  agent 발화 시작: 그렇죠.
    92.25s  user  발화 끝
    92.53s  <ret> 발화 (turn24 첫 프레임)
    92.78s  agent 발화 시작: <ret> 네, 금요일에 영화 예약하시면 즐거운 시간 보내실 수 있을 거예요.
    92.78s  agent 발화 끝
    93.17s  ⚡SPAN 주입(IRRELEVANT) [d'=0.65s / d_lead=5.27s]: The population of Tokyo is 13.96 million as of 2021.
    98.05s  agent 발화 시작: 영화 보실 생각에 벌써부터 설레네요.
    98.05s  agent 발화 끝
   100.69s  user  발화 시작: 그렇죠? 저도 그래요. 이번 주말은 정말 기대돼요.
   100.69s  agent 발화 끝
   104.38s  agent 발화 시작: 주말 계획 세우는 건 정말 즐거운 일이죠. 삶의 활력이 샘솟는 것 같아요.
   104.38s  user  발화 끝
   110.70s  user  발화 시작: 맞아요. 트해온 씨는 주말에 뭐 하세요?
   110.70s  agent 발화 끝
   113.87s  agent 발화 시작: 저는 주로 책을 읽거나, 조용한 곳에서 명상을 합니다. 마음의 평화를 찾는 시간이에요.
   113.87s  user  발화 끝
   120.19s  user  발화 시작: 네.
   120.19s  agent 발화 끝
   120.72s  user  발화 시작: 와, 정말 여유로운 삶이네요. 저도 그렇게 살고 싶어요.
   120.72s  user  발화 끝
   124.94s  agent 발화 시작: 노력하면 충분히 가능해요. 작은 것부터 시작하는 것이 중요합니다.
   124.94s  user  발화 끝
   129.15s  user  발화 시작: 네, 알겠습니다. 그럼, 오늘 저녁은 뭐 먹을까요?
   129.15s  agent 발화 끝
   132.84s  agent 발화 시작: 저녁 메뉴는 뭘 좋아하세요? 한식, 양식, 중식… 다양한 선택지가 있잖아요.
   132.84s  user  발화 끝
   138.11s  user  발화 시작: 네.
   138.11s  agent 발화 끝
   138.64s  user  발화 시작: 음… 오늘은 매콤한 닭갈비가 당기네요.
   138.64s  user  발화 끝
   141.07s  <ret> 발화 (turn37 첫 프레임)
   141.28s  agent 발화 시작: <ret> 강남에 '닭갈비 하우스'라는 곳이 평점 사 점 오점입니다. 맛있어 보이네요.
   141.28s  user  발화 끝
   141.37s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.27s]: (tool result) Restaurant: 'Dakgalbi House', Gangnam, Seoul, rating 4.5
   146.55s  user  발화 시작: 오, 평점이 높네요. 거기 예약해 줄 수 있어요?
   146.55s  agent 발화 끝
   150.77s  agent 발화 시작: 네.
   150.77s  user  발화 끝
   150.90s  <ret> 발화 (turn40 첫 프레임)
   151.29s  agent 발화 시작: <ret> 네, '닭갈비 하우스'에 오늘 저녁 일곱시에 예약 완료되었습니다. 확인 번호는 팔 이 구 삼 칠 
   151.29s  agent 발화 끝
   151.89s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.96s]: (tool result) Reservation confirmed: Dakgalbi House, Seoul, July 10, 2
   160.26s  user  발화 시작: 정말요?
   160.26s  agent 발화 끝
   160.78s  user  발화 시작: 와, 감사합니다. 트해온 씨…
   160.78s  user  발화 끝
   162.89s  user  발화 시작: …덕분에 완벽한 주말 계획이 세워졌어요.
   162.89s  user  발화 끝
   165.53s  agent 발화 시작: 도움이 되었다니 기쁩니다. 즐거운 시간 보내세요.
   165.53s  user  발화 끝
   168.69s  agent 발화 끝
